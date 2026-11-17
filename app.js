(() => {
  const T = window.TRIP, D = T.destinations;
  const byId = Object.fromEntries(D.map(d => [d.id, d]));
  const $ = (s, el = document) => el.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const CRIT = [["relax", "Relaxing"], ["food", "Food"], ["cozy", "Cozy"], ["weather", "Weather"], ["ease", "Easy travel"]];

  /* ---------------- state (localStorage + share link) ---------------- */
  const KEY = "sb27-state-v1";
  const blank = () => ({ votes: {}, status: {}, weights: { relax: 3, food: 2, cozy: 2, weather: 1, ease: 1 }, notes: "", names: { a: "Him", b: "Her" } });
  let S = blank();
  try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(blank(), JSON.parse(raw)); } catch (e) {}
  const params = new URLSearchParams(location.search);
  if (params.get("s")) {
    try {
      const inc = JSON.parse(decodeURIComponent(escape(atob(params.get("s")))));
      S = Object.assign(blank(), inc);
      history.replaceState(null, "", location.pathname + location.hash);
      setTimeout(() => toast("Loaded the shared picks"), 300);
    } catch (e) {}
  }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
  const vote = (id, who) => (S.votes[id] || {})[who] || 0;
  const setVote = (id, who, v) => { S.votes[id] = S.votes[id] || {}; S.votes[id][who] = S.votes[id][who] === v ? 0 : v; save(); };
  window.APP = { get S() { return S; }, save, esc, toast: m => toast(m), hydrate: el => hydrateImgs(el) };
  const status = id => S.status[id] || (byId[id].wildcard ? "maybe" : "in");

  function toast(msg) { const t = $("#toast") || Object.assign(document.body.appendChild(document.createElement("div")), { id: "toast", className: "toast" }); t.textContent = msg; t.classList.add("on"); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("on"), 1800); }

  /* ---------------- images from Wikipedia ---------------- */
  const imgCache = {};
  function wikiImg(title) {
    if (imgCache[title]) return imgCache[title];
    let cached; try { cached = sessionStorage.getItem("wi:" + title); } catch (e) {}
    if (cached !== null && cached !== undefined) return (imgCache[title] = Promise.resolve(cached || null));
    return (imgCache[title] = fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(title))
      .then(r => r.ok ? r.json() : null)
      .then(j => {
        let u = j && (j.thumbnail ? j.thumbnail.source.replace(/\/\d+px-/, "/960px-") : j.originalimage && j.originalimage.source) || "";
        try { sessionStorage.setItem("wi:" + title, u); } catch (e) {}
        return u || null;
      }).catch(() => null));
  }
  function hydrateImgs(root) {
    root.querySelectorAll("img[data-wiki]").forEach(img => {
      wikiImg(img.dataset.wiki).then(u => {
        if (!u) { img.style.visibility = "hidden"; return; }
        img.onerror = () => { img.onerror = null; fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(img.dataset.wiki)).then(r => r.json()).then(j => { if (j.originalimage) img.src = j.originalimage.source; }); };
        img.src = u;
      });
    });
  }
  const wikiUrl = t => "https://en.wikipedia.org/wiki/" + encodeURIComponent(t);
  const gmaps = q => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
  const gflights = (from, dest) => `https://www.google.com/travel/flights?q=${encodeURIComponent(`Flights from ${from} to ${dest.flights.searchIn} on 2027-03-12 returning from ${dest.flights.searchOut} on 2027-03-21`)}`;
  const nights = d => d.stops.reduce((a, s) => a + s.nights, 0);
  const pretty = t => t.replace(/_/g, " ").replace(/\s*\(.*\)/, "");

  /* ---------------- countdown ---------------- */
  const days = Math.ceil((new Date(T.window.start + "T18:00:00") - new Date()) / 864e5);
  $("#countdown").innerHTML = days > 0 ? `<b>${days}</b> days to go` : "Bon voyage";

  /* ---------------- map ---------------- */
  const map = L.map("map", { zoomControl: false, scrollWheelZoom: false, attributionControl: true }).setView([45, -2], 4);
  map.on("click", () => map.scrollWheelZoom.enable()); map.on("mouseout", () => map.scrollWheelZoom.disable());
  L.control.zoom({ position: "bottomright" }).addTo(map);
  const esri = "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/";
  L.tileLayer(esri + "World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}", { maxZoom: 16, attribution: "Tiles &copy; Esri, HERE, Garmin, &copy; OpenStreetMap contributors" }).addTo(map);
  L.tileLayer(esri + "World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}", { maxZoom: 16 }).addTo(map);
  let layer = L.layerGroup().addTo(map);
  let lastFit = null;
  const fit = (pts, o) => { lastFit = [pts, o]; if (map.getContainer().offsetWidth) map.fitBounds(pts, o); };
  new ResizeObserver(() => { if (!map.getContainer().offsetWidth) return; map.invalidateSize(); if (lastFit) map.fitBounds(...lastFit); }).observe(document.getElementById("map"));
  const markers = {};
  function popup(s, d) {
    return `<b>${esc(s.name)}</b>${s.nights ? `<span style="color:#8a8a8a">${s.nights} night${s.nights > 1 ? "s" : ""}</span><br>` : ""}${esc(s.desc)}<br><a target="_blank" rel="noopener" href="${gmaps(s.name.replace(/\(.*\)/, "") + " " + (d.region.split("·")[0] || ""))}">Open in Google Maps ↗</a>`;
  }
  function drawAll() {
    layer.clearLayers();
    const pts = [];
    D.forEach(d => {
      if (status(d.id) === "out") return;
      const ll = d.stops.map(s => [s.lat, s.lng]);
      L.polyline(ll, { color: d.color, weight: 2, opacity: .55, dashArray: d.wildcard ? "4 6" : null }).addTo(layer);
      d.stops.forEach(s => L.marker([s.lat, s.lng], { icon: L.divIcon({ className: "", html: `<div class="pin sm" style="background:${d.color}"></div>`, iconSize: [14, 14], iconAnchor: [7, 7] }) }).bindPopup(popup(s, d)).addTo(layer));
      const c = d.stops.find(s => s.nights) || d.stops[0];
      const lbl = L.marker([c.lat, c.lng], { icon: L.divIcon({ className: "", html: `<div class="pin lbl"><b>${esc(d.name)}</b> · ${d.weather.hi}°</div>`, iconSize: null, iconAnchor: [-10, 14] }), zIndexOffset: 500 }).addTo(layer);
      lbl.on("click", () => go("#/d/" + d.id));
      if (!d.domestic) pts.push(...ll); // keep the overview on Europe
    });
    if (pts.length) fit(pts, { padding: [40, 40] });
  }
  function drawOne(d) {
    layer.clearLayers();
    for (const k in markers) delete markers[k];
    const ll = d.stops.map(s => [s.lat, s.lng]);
    L.polyline(ll, { color: d.color, weight: 3, opacity: .85, dashArray: "6 6" }).addTo(layer);
    d.stops.forEach((s, i) => {
      markers[i] = L.marker([s.lat, s.lng], { icon: L.divIcon({ className: "", html: `<div class="pin" style="background:${d.color}">${i + 1}</div>`, iconSize: [26, 26], iconAnchor: [13, 13] }) }).bindPopup(popup(s, d)).addTo(layer);
    });
    const xs = window.budgetExtras ? window.budgetExtras(d.id) : [];
    xs.forEach(x => L.marker([x.lat, x.lng], { icon: L.divIcon({ className: "", html: `<div class="pin xpin">+</div>`, iconSize: [22, 22], iconAnchor: [11, 11] }) })
      .bindPopup(`<b>${esc(x.name)}</b><span style="color:#8a8a8a">Optional add-on · ${x.nights}n</span><br>${esc(x.why)}<br><a href="#/budget/${d.id}+${x.base}">Add in the budget →</a>`).addTo(layer));
    fit(ll.concat(xs.map(x => [x.lat, x.lng])), { padding: [40, 40], maxZoom: 9 });
  }

  /* ---------------- chips ---------------- */
  function renderChips(active) {
    const main = D.filter(d => !d.wildcard), wild = D.filter(d => d.wildcard);
    const chip = d => `<button class="chip ${active === d.id ? "on" : ""}" data-go="#/d/${d.id}"><i style="background:${d.color}"></i>${esc(d.name)} <small>${d.proposedBy === "Wildcard" ? "" : esc(d.proposedBy === "Him" ? S.names.a : S.names.b)}</small></button>`;
    $("#chips").innerHTML = `<button class="chip ${!active ? "on" : ""}" data-go="#/">All options</button>` + main.map(chip).join("") + `<span class="chip-sep"></span>` + wild.map(chip).join("");
  }

  /* ---------------- rating widget ---------------- */
  function rateWidget(id) {
    const dots = who => `<div class="dots">${[1, 2, 3, 4, 5].map(v => `<button data-vote="${id}|${who}|${v}" class="${vote(id, who) >= v ? "on" : ""}" title="${v}/5">${v}</button>`).join("")}</div>`;
    return `<div class="rate">
      <div class="who">${esc(S.names.a)} ${dots("a")}</div>
      <div class="who">${esc(S.names.b)} ${dots("b")}</div>
      <select class="status" data-status="${id}">
        ${[["in", "In the running"], ["short", "★ Shortlist"], ["maybe", "Maybe"], ["out", "Ruled out"]].map(([v, l]) => `<option value="${v}" ${status(id) === v ? "selected" : ""}>${l}</option>`).join("")}
      </select></div>`;
  }

  /* ---------------- explore: list ---------------- */
  function renderList() {
    renderChips(null);
    const card = d => {
      const va = vote(d.id, "a"), vb = vote(d.id, "b");
      return `<article class="card" data-go="#/d/${d.id}">
        <div class="ph"><img data-wiki="${esc(d.hero)}" alt="${esc(d.name)}" loading="lazy">
          <span class="badge">${d.wildcard ? "Wildcard" : (d.proposedBy === "Him" ? S.names.a : S.names.b) + "'s idea"}</span>
          <div class="heart-row">${va ? `<span class="hb on">${esc(S.names.a[0])} ${va}/5</span>` : ""}${vb ? `<span class="hb on">${esc(S.names.b[0])} ${vb}/5</span>` : ""}${status(d.id) === "short" ? `<span class="hb">★</span>` : ""}</div>
        </div>
        <div class="meta"><div><h3>${esc(d.name)}</h3><div class="sub">${esc(d.region)}</div><div class="line">${nights(d)} nights · ${d.stays.length} stays · ${d.eat.filter(e => e.stars).length} starred tables</div></div>
        <div class="temp">${d.weather.hi}° / ${d.weather.lo}°</div></div>
      </article>`;
    };
    const main = D.filter(d => !d.wildcard && status(d.id) !== "out"), wild = D.filter(d => d.wildcard && status(d.id) !== "out");
    const out = D.filter(d => status(d.id) === "out");
    $("#list").innerHTML = `
      <div class="section-h"><h2>Three ideas on the table</h2><p>${T.window.label} · 8 nights</p></div>
      <div class="grid">${main.map(card).join("")}</div>
      <div class="section-h" style="margin-top:40px"><h2>Ones we hadn't considered</h2><p>Mid-March, Boston-friendly</p></div>
      <div class="grid">${wild.map(card).join("")}</div>
      <div class="section-h" style="margin-top:40px"><h2>Mix &amp; match</h2><p>Half and half, priced in the budget builder</p></div>
      <div class="combos">${window.BUDGET.itineraries.filter(i => i.kind === "combo").map(i => `<a class="combo" href="#/budget/${i.id}"><b>${esc(i.name)}</b><small>${i.legs.map(l => window.BUDGET.bases[l[0]].name.split(" ·")[0] + " " + l[1] + "n").join(" → ")}</small>${window.nightsGlyph(i.legs.map(l => l[1]))}<p>${esc(i.why || "")}</p><span class="combo-p">≈ $${Math.round(window.budgetQuick(i.id) / 100) / 10}k for two →</span></a>`).join("")}</div>
      ${out.length ? `<div class="section-h" style="margin-top:40px"><h2>Ruled out</h2><p>${out.map(d => `<a href="#/d/${d.id}">${esc(d.name)}</a>`).join(" · ")}</p></div>` : ""}`;
    hydrateImgs($("#list"));
    drawAll();
  }

  /* ---------------- shared bits for hub + low-cost ---------------- */
  const HUBS = [["paris", "Paris"], ["amsterdam", "Amsterdam"], ["london", "London"]];
  const SKYHUB = { paris: true, amsterdam: true };
  const usd0 = n => "$" + Math.round(n).toLocaleString("en-US");
  const gq = q => "https://www.google.com/travel/flights?q=" + encodeURIComponent(q);
  function highlightTiles(id) {
    const it = window.BUDGET.itineraries.find(i => i.id === id); if (!it) return "";
    const tiles = [];
    for (let r = 0; r < 3 && tiles.length < 8; r++) it.legs.forEach(([b]) => { const s = (window.SEE[b] || [])[r]; if (s && tiles.length < 8) tiles.push([s, b]); });
    const K = { nature: "Nature", sight: "Sight", town: "Town" };
    return `<div class="hls">${tiles.map(([s, b]) => `<a class="hlt" href="https://en.wikipedia.org/wiki/${encodeURIComponent(s[2])}" target="_blank" rel="noopener">
      <div class="hlt-ph"><img data-wiki="${esc(s[2])}" alt="${esc(s[0])}" loading="lazy"><span>${K[s[1]]}</span></div>
      <b>${esc(s[0])}</b><small>${esc(window.BUDGET.bases[b].name)}</small><p>${esc(s[3])}</p></a>`).join("")}</div>`;
  }
  function hubTable(id) {
    const r = window.budgetHubRows(id);
    if (!r || !r.rows.length) return "";
    return `<h3 style="font-size:16px;margin:24px 0 6px">Or fly to a hub, then a short European flight</h3>
      <p style="margin:0 0 8px;color:var(--ink2);font-size:14px">One ticket all the way is about <b>${usd0(r.through)}</b> per person. Separate tickets via a hub, Air France / KLM first:</p>
      <table class="legs"><tr><th>Hub</th><th>Onward to ${esc(r.inName)}</th><th>Back from ${esc(r.outName)}</th><th>Per person</th></tr>
      ${r.rows.map(x => `<tr><td class="code">${x.name}<br><span style="color:var(--mute);font-weight:500;font-size:12px">${x.sky ? "Delta · Air France · KLM" : "other airlines"}</span></td><td>${esc(x.inL[0])} <span style="color:var(--mute)">~${usd0(x.inL[1])}</span></td><td>${esc(x.outL[0])} <span style="color:var(--mute)">~${usd0(x.outL[1])}</span></td><td class="code">${usd0(x.pp)}</td></tr>`).join("")}</table>
      <div class="btns"><a class="btn" href="#/budget/${id}">Price it in the budget →</a><a class="btn" href="#/flights">How hub + low-cost works</a></div>`;
  }
  function skyBox(id) {
    const it = window.BUDGET.itineraries.find(i => i.id === id);
    return it && it.sky ? `<div class="skyr" style="margin:0 0 12px"><small>${it.domestic ? "Suggested" : "Preferred: Delta · Air France · KLM"}</small>${esc(it.sky)}</div>` : "";
  }
  function addonCards(id) {
    const xs = window.budgetExtras(id);
    if (!xs.length) return "";
    return `<div class="blk" id="s-add"><h2>Optional add-ons</h2>
      <p class="legend" style="margin:-8px 0 14px">Extra stops to mix in. Each one opens the budget with that stop added, where you can change nights and see the cost.</p>
      <div class="xs">${xs.map(x => `<a class="xo" href="#/budget/${id}+${x.base}"><span class="xo-h"><b>${esc(x.name)}</b><i>+ Add</i></span><small>${x.nights} night${x.nights > 1 ? "s" : ""} · about +$${Math.round(Math.max(0, x.delta) / 100) / 10}k for two</small><p>${esc(x.why)}</p></a>`).join("")}</div></div>`;
  }

  /* ---------------- explore: detail ---------------- */
  function renderDetail(d) {
    renderChips(d.id);
    const starred = d.eat.filter(e => e.stars);
    const ph = d.photos.slice(0, 5);
    $("#list").innerHTML = `
      <a class="back" href="#/">← All options</a>
      <div class="gallery">${ph.map(p => `<a href="${wikiUrl(p)}" target="_blank" rel="noopener"><img data-wiki="${esc(p)}" alt="${esc(pretty(p))}" loading="lazy"><span>${esc(pretty(p))}</span></a>`).join("")}</div>
      <a class="more-photos" href="https://unsplash.com/s/photos/${d.unsplash}" target="_blank" rel="noopener">More photos ↗</a>
      <div class="d-head"><div><h1>${esc(d.name)}</h1><div class="sub">${esc(d.region)}</div></div>${rateWidget(d.id)}</div>
      <div class="facts"><span><b>${nights(d)}</b> nights</span><span><b>${d.stops.filter(s => s.nights).length}</b> bases</span><span><b>${d.weather.hi}° / ${d.weather.lo}°C</b></span><span><b>~${d.weather.rainDays}</b> rainy days/mo</span><span><b>${starred.length}</b> Michelin-starred</span><span><b>${d.budget}</b></span></div>
      <p class="tagline">${esc(d.tagline)}</p>
      <a class="btn dark" style="margin:-4px 0 18px" href="#/budget/${d.id}">Price this trip · ≈ $${Math.round(window.budgetQuick(d.id) / 100) / 10}k for two →</a>
      <nav class="subnav"><a href="#s-see">Highlights</a><a href="#s-route">Route</a><a href="#s-add">Add-ons</a><a href="#s-stay">Where to stay</a><a href="#s-eat">Eat</a><a href="#s-do">Do</a><a href="#s-wx">Weather</a><a href="#s-fly">Getting there</a><a href="#s-pc">Pros & cons</a></nav>

      <div class="blk" id="s-see"><h2>Highlights: nature &amp; sights</h2>${highlightTiles(d.id)}</div>

      <div class="blk" id="s-route"><h2>Route sketch</h2>
        <div class="stops">${d.stops.map((s, i) => `<button class="stop" data-stop="${i}"><span class="n" style="background:${d.color}">${i + 1}</span>${esc(s.name)} <em>${s.nights ? s.nights + "n" : "stop"}</em></button>`).join("")}</div>
        <ol class="days">${d.days.map(x => `<li><span class="dd">${esc(x.d)}</span><span class="tt">${esc(x.t)}</span></li>`).join("")}</ol>
      </div>

      ${addonCards(d.id)}

      <div class="blk" id="s-stay"><h2>Where to stay</h2>
        <div class="stays">${d.stays.map(s => `<a class="stay ${s.highlight ? "hl" : ""}" href="${s.url}" target="_blank" rel="noopener">
          ${s.highlight ? `<span class="fav">Standout</span>` : ""}
          <span class="tg">${esc(s.tag)}</span><h3>${esc(s.name)}</h3><span class="pl">${esc(s.place)}</span><p>${esc(s.why)}</p>
          <div class="pr">${s.price}<span>Look up ↗</span></div></a>`).join("")}</div>
      </div>

      <div class="blk" id="s-eat"><h2>Where to eat</h2>
        <div class="eat">${d.eat.map(e => `<a class="er" href="${e.stars ? "https://guide.michelin.com/en/search?q=" + encodeURIComponent(e.name.split("·")[0].trim()) : gmaps(e.name.split("·")[0] + " " + e.place)}" target="_blank" rel="noopener">
          <span class="st ${e.stars ? "" : "z"}">${e.stars ? "✿".repeat(e.stars) : "local"}</span>
          <div><h4>${esc(e.name)}</h4><span class="pl">${esc(e.place)}${e.stars ? ` · ${e.stars} Michelin star${e.stars > 1 ? "s" : ""}` : ""}</span><p>${esc(e.note)}</p></div></a>`).join("")}</div>
      </div>

      <div class="blk" id="s-do"><h2>Things to do</h2>
        <p class="legend"><i></i>Shaded = slow and passive. Outlined = a bit more active.</p>
        <div class="do">${d.do.map(x => `<span class="${x.relax ? "rx" : ""}">${esc(x.t)}</span>`).join("")}</div>
      </div>

      <div class="blk" id="s-wx"><h2>Weather, mid-March</h2>
        <div class="wx"><div><small>High</small><b>${d.weather.hi}°C</b>${Math.round(d.weather.hi * 9 / 5 + 32)}°F</div><div><small>Low</small><b>${d.weather.lo}°C</b>${Math.round(d.weather.lo * 9 / 5 + 32)}°F</div><div><small>Rainy days</small><b>~${d.weather.rainDays}</b>per month</div><div><small>Daylight</small><b>${d.weather.daylight.split(" ")[0]}</b>${d.weather.daylight.split(" ")[1] || ""}</div><div><small>Sea</small><b>${d.weather.sea}°C</b>${d.weather.sea < 17 ? "too cold to swim" : "brisk swim"}</div></div>
        <p class="wx-s">${esc(d.weather.summary)}</p>
      </div>

      <div class="blk" id="s-fly"><h2>Getting there</h2>
        ${skyBox(d.id)}
        <p style="margin:0 0 10px;color:var(--ink2)">${esc(d.flights.summary)}</p>
        <table class="legs"><tr><th>From</th><th>To</th><th>How</th></tr>${d.flights.legs.map(l => `<tr><td class="code">${esc(l.from)}</td><td class="code">${esc(l.to)}</td><td>${esc(l.by)}</td></tr>`).join("")}</table>
        <div class="btns"><a class="btn dark" target="_blank" rel="noopener" href="${gflights("BOS", d)}">Google Flights from BOS ↗</a><a class="btn" target="_blank" rel="noopener" href="${gflights("BWI", d)}">from BWI ↗</a><a class="btn" target="_blank" rel="noopener" href="${gflights("IAD", d)}">from IAD ↗</a></div>
        ${hubTable(d.id)}
      </div>

      <div class="blk" id="s-pc" style="border:0"><h2>Pros & cons</h2>
        <div class="pc"><div class="p"><h4>For</h4><ul>${d.pros.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div><div class="c"><h4>Against</h4><ul>${d.cons.map(x => `<li>${esc(x)}</li>`).join("")}</ul></div></div>
      </div>`;
    hydrateImgs($("#list"));
    drawOne(d);
    window.scrollTo({ top: 0 });
  }

  /* ---------------- compare ---------------- */
  function score(d) {
    const w = S.weights; let num = 0, den = 0;
    CRIT.forEach(([k]) => { num += d.scores[k] * w[k]; den += 5 * w[k]; });
    const base = den ? num / den * 70 : 0;
    const va = vote(d.id, "a"), vb = vote(d.id, "b");
    const votes = ((va || 0) + (vb || 0)) / 10 * 30;
    return Math.round(base + votes + (status(d.id) === "short" ? 5 : 0));
  }
  function renderCompare() {
    const rows = D.map(d => ({ d, s: status(d.id) === "out" ? -1 : score(d) })).sort((a, b) => b.s - a.s);
    $("#view-compare").innerHTML = `<div class="wrap">
      <div class="section-h"><h2>Side by side</h2><p>Rate each option out of 5, then set what matters. The ranking updates as you go.</p></div>
      <div class="weights">${CRIT.map(([k, l]) => `<label>${l}<input type="range" min="0" max="3" step="1" value="${S.weights[k]}" data-w="${k}"><output>${S.weights[k]}</output></label>`).join("")}</div>
      <div class="cmp-scroll"><table class="cmp">
        <tr><th>#</th><th>Option</th>${CRIT.map(([, l]) => `<th>${l}</th>`).join("")}<th>Your ratings</th><th>Score</th></tr>
        ${rows.map(({ d, s }, i) => `<tr class="${status(d.id) === "out" ? "out" : ""}">
          <td class="rank">${s < 0 ? "—" : i + 1}</td>
          <td><div class="nm" data-go="#/d/${d.id}"><img data-wiki="${esc(d.hero)}" alt=""><div><b>${esc(d.name)}</b><small>${esc(d.region)}</small></div></div></td>
          ${CRIT.map(([k]) => `<td><div class="bar"><i style="width:${d.scores[k] * 12}px;background:${d.color}"></i><span>${d.scores[k]}</span></div></td>`).join("")}
          <td>${rateWidget(d.id)}</td>
          <td class="total">${s < 0 ? "–" : s}</td></tr>`).join("")}
      </table></div>
      <p style="color:var(--mute);font-size:13px;margin-top:14px">Score = 70% weighted criteria (my starting estimates, edit them in data.js) + 30% your two ratings + 5 for ★ shortlist.</p>
    </div>`;
    hydrateImgs($("#view-compare"));
  }

  /* ---------------- flights ---------------- */
  function renderFlights() {
    const hubs = [
      ["Paris (CDG) ★", "BOS: Air France, Delta · IAD: Air France", "BIO, EDI, MRS, BOD, SVQ, LIS on Air France / Transavia, plus the TGV from the airport", "Preferred. Best for Provence and the Loire, and the train leaves from inside the terminal."],
      ["Amsterdam (AMS) ★", "BOS: KLM, Delta · IAD: KLM", "BIO, EDI, MRS, BOD, AGP, LIS on KLM / Transavia", "Preferred. Everything under one roof, KLM to Bilbao and Edinburgh."],
      ["London (LHR)", "BOS: Virgin Atlantic & Delta (SkyTeam), BA · BWI: BA", "BIO, EDI, MRS, AGP, SVQ (mostly BA, easyJet, Ryanair)", "Virgin Atlantic earns Delta miles, but onward flights are mostly other airlines."],
      ["Dublin (DUB)", "BOS: Aer Lingus, Delta · IAD: Aer Lingus", "EDI, BIO (seasonal), MRS (seasonal)", "US customs preclearance on the way home."],
      ["Madrid (MAD)", "BOS: Iberia · IAD: Iberia/United", "OVD, BIO, SVQ, plus AVE trains", "Natural gateway for Spain and open-jaw routes."],
      ["Lisbon (LIS)", "BOS & IAD: TAP", "BIO, OVD (via Porto), Azores", "A Lisbon stopover is free with TAP."],
      ["Reykjavík (KEF)", "BOS & BWI: Icelandair", "Glasgow, Manchester, London, Paris, Amsterdam", "Often cheapest. Free stopover of up to 7 nights."],
      ["Ponta Delgada (PDL)", "BOS: Azores Airlines", "Lisbon, Porto", "Only ~4 h 30 from Boston."]
    ];
    $("#view-flights").innerHTML = `<div class="wrap">
      <div class="section-h"><h2>Flights &amp; connections</h2><p>Out Fri 12 Mar overnight, back Sun 21 Mar by the afternoon</p></div>
      <p class="skyr" style="max-width:80ch">★ Preferred airlines: <b>Delta, Air France, KLM</b> and their partners (Virgin Atlantic, Transavia, Air Europa). Paris and Amsterdam are their hubs, so those routes come first everywhere on this site.</p>
      <p style="color:var(--ink2);max-width:70ch;margin:0 0 20px">The simplest plan: buy one return ticket from the US to a big hub, then book a separate cheap European flight or train. Leave at least a 3 h buffer on separate tickets, and on the way home take the earliest flight out of the small airport. Baltimore has BA to London and Icelandair. Dulles (IAD) is about an hour away and has many more direct routes.</p>
      <table class="legs"><tr><th>Hub</th><th>Direct from the US</th><th>Onward to</th><th>Why</th></tr>
        ${hubs.map(h => `<tr><td class="code">${h[0]}</td><td>${h[1]}</td><td>${h[2]}</td><td style="color:var(--ink2)">${h[3]}</td></tr>`).join("")}</table>
      <div class="section-h" style="margin-top:36px"><h2>Hub + short European flights</h2><p>Round trip to Paris or Amsterdam (or London), then a separate short flight or train</p></div>
      <div class="hubfares">${HUBS.map(([h, n]) => `<div><small>${n}</small><b>~${usd0(window.BUDGET.hubFare.BOS[h])}</b><span>from BOS · ~${usd0(window.BUDGET.hubFare.BWI[h])} from BWI</span><em>${esc(window.BUDGET.hubFrom.BOS[h])}${SKYHUB[h] ? " ★" : ""}</em></div>`).join("")}</div>
      <div class="cmp-scroll"><table class="legs lccm"><tr><th>To</th>${HUBS.map(([h, n]) => `<th>From ${n}${SKYHUB[h] ? " ★ AF / KLM / Transavia" : " · other airlines"}</th>`).join("")}</tr>
        ${Object.entries(window.BUDGET.lccAirports).filter(([c]) => c !== "rail").map(([c, name]) => `<tr><td class="code">${esc(name)} <span style="color:var(--mute);font-weight:500">${c}</span></td>${HUBS.map(([h, n]) => { const x = (SKYHUB[h] ? window.BUDGET.skyLcc : window.BUDGET.lcc)[c][h];
          return `<td><a href="${gq(`Flights from ${n} to ${name} on 2027-03-13`)}" target="_blank" rel="noopener">${esc(x[0])}</a><br><span style="color:var(--mute)">~${usd0(x[1])} one way · ${esc(x[2])}</span></td>`; }).join("")}</tr>`).join("")}
      </table></div>
      <ul class="tips">
        <li><b>Separate tickets.</b> If the transatlantic flight is late, the low-cost airline won't wait or rebook you. Leave 3+ hours, or spend a night in the hub (London, Paris or Amsterdam make a nice first night).</li>
        <li><b>Airport changes.</b> London low-cost flights often use Gatwick, Stansted or Luton, about 1–1.5 h from Heathrow. Paris ones often use Orly, about 1 h from CDG. Amsterdam is all one airport.</li>
        <li><b>Bags.</b> easyJet, Ryanair, Vueling and Transavia charge for cabin bags over a small under-seat item and for checked bags (about $40–60 each per flight). Book bags with the ticket, since it's cheaper than at the airport.</li>
        <li><b>On the way home</b>, take the earliest flight out of the small airport so you have a buffer before the afternoon transatlantic.</li>
        <li><b>Trains count too.</b> From Paris, the TGV to Marseille/Aix or Bordeaux is often better than flying. From London, the Eurostar gets you to Paris for the Loire or Lyon routes.</li>
      </ul>
      <div class="section-h" style="margin-top:36px"><h2>Preferred routing per option</h2><p>Delta · Air France · KLM where they fly</p></div>
      <table class="legs"><tr><th>Option</th><th>Routing</th></tr>${window.BUDGET.itineraries.filter(i => i.sky).map(i => `<tr><td><b>${esc(i.name)}</b></td><td style="color:var(--ink2)">${esc(i.sky)}</td></tr>`).join("")}</table>
      <div class="section-h" style="margin-top:36px"><h2>Search each option</h2><p>Prefilled dates, opens Google Flights</p></div>
      <table class="legs"><tr><th>Option</th><th>Into → out of</th><th></th></tr>
        ${D.map(d => `<tr><td><b>${esc(d.name)}</b></td><td class="code">${d.flights.searchIn} → ${d.flights.searchOut}</td><td><div class="btns" style="margin:0"><a class="btn dark" target="_blank" rel="noopener" href="${gflights("BOS", d)}">BOS ↗</a><a class="btn" target="_blank" rel="noopener" href="${gflights("BWI", d)}">BWI ↗</a><a class="btn" target="_blank" rel="noopener" href="${gflights("IAD", d)}">IAD ↗</a></div></td></tr>`).join("")}</table>
      <p style="color:var(--mute);font-size:13px;margin-top:14px">Routes are typical winter/spring schedules and some are seasonal. Confirm when you search.</p>
    </div>`;
  }

  /* ---------------- notes ---------------- */
  function renderNotes() {
    $("#view-notes").innerHTML = `<div class="wrap"><div class="notes-grid">
      <div><div class="section-h"><h2>Good to know</h2></div><ul>${T.notes.map(n => `<li>${esc(n)}</li>`).join("")}</ul></div>
      <div><div class="section-h"><h2>Our notes</h2></div>
        <div class="names"><input data-name="a" value="${esc(S.names.a)}" aria-label="Name 1"><input data-name="b" value="${esc(S.names.b)}" aria-label="Name 2"></div>
        <textarea id="notes" placeholder="Must-haves, dealbreakers, budget, 'no more than 2 hotel changes'…">${esc(S.notes)}</textarea>
        <div class="btns"><button class="btn dark" id="share">Copy share link</button><button class="btn" id="reset">Reset ratings</button></div>
        <p style="color:var(--mute);font-size:13px">Ratings and notes save in this browser only. The share link carries them to the other person's browser.</p>
      </div></div></div>`;
  }

  /* ---------------- router ---------------- */
  function go(h) { if (location.hash === h) route(); else location.hash = h; }
  function route() {
    const h = location.hash.replace(/^#/, "") || "/";
    const [, a, b] = h.split("/");
    let view = "explore";
    if (["compare", "flights", "notes", "budget"].includes(a)) view = a;
    document.querySelectorAll(".view").forEach(v => v.classList.toggle("on", v.id === "view-" + view));
    document.querySelectorAll("#nav button").forEach(x => x.classList.toggle("on", x.dataset.view === view));
    $("#chips").style.display = view === "explore" ? "" : "none";
    if (view === "explore") {
      map.invalidateSize();
      if (a === "d" && byId[b]) renderDetail(byId[b]); else renderList();
      setTimeout(() => map.invalidateSize(), 50);
    } else if (view === "compare") renderCompare();
    else if (view === "flights") renderFlights();
    else if (view === "budget") window.renderBudget(b);
    else renderNotes();
    $("#sf-where").textContent = `${D.filter(d => status(d.id) !== "out").length} options`;
  }
  window.addEventListener("hashchange", route);

  /* ---------------- events ---------------- */
  document.addEventListener("click", e => {
    const v = e.target.closest("[data-vote]");
    if (v) { e.stopPropagation(); const [id, who, n] = v.dataset.vote.split("|"); setVote(id, who, +n); const wrap = v.closest(".rate"); wrap.outerHTML = rateWidget(id); if ($("#view-compare").classList.contains("on")) renderCompare(); return; }
    const nav = e.target.closest("#nav button"); if (nav) { go(nav.dataset.view === "explore" ? "#/" : "#/" + nav.dataset.view); return; }
    const st = e.target.closest("[data-stop]"); if (st && markers[st.dataset.stop]) { const m = markers[st.dataset.stop]; map.flyTo(m.getLatLng(), 12, { duration: .6 }); m.openPopup(); return; }
    if (e.target.closest("select")) return;
    const g = e.target.closest("[data-go]"); if (g) { e.preventDefault(); go(g.dataset.go === "explore" ? "#/" : g.dataset.go); return; }
    if (e.target.id === "share") {
      const url = location.origin + location.pathname + "?s=" + btoa(unescape(encodeURIComponent(JSON.stringify(S)))) + "#/compare";
      (navigator.clipboard ? navigator.clipboard.writeText(url) : Promise.reject()).then(() => toast("Link copied. Send it over"), () => prompt("Copy this link:", url));
    }
    if (e.target.id === "reset" && confirm("Clear all ratings, statuses and notes in this browser?")) { S = blank(); save(); renderNotes(); toast("Reset"); }
  });
  document.addEventListener("change", e => {
    if (e.target.dataset.w) { renderCompare(); return; }
    if (e.target.dataset.status) { S.status[e.target.dataset.status] = e.target.value; save(); if ($("#view-compare").classList.contains("on")) renderCompare(); }
  });
  document.addEventListener("input", e => {
    if (e.target.dataset.w) { S.weights[e.target.dataset.w] = +e.target.value; e.target.nextElementSibling.textContent = e.target.value; save(); }
    if (e.target.id === "notes") { S.notes = e.target.value; save(); }
    if (e.target.dataset.name) { S.names[e.target.dataset.name] = e.target.value || (e.target.dataset.name === "a" ? "Him" : "Her"); save(); }
  });

  route();
})();
