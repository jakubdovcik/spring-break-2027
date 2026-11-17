(() => {
  const B = window.BUDGET, IT = Object.fromEntries(B.itineraries.map(i => [i.id, i]));
  const $ = (s, el = document) => el.querySelector(s);
  const esc = s => window.APP.esc(s);
  const usd = n => "$" + Math.round(n).toLocaleString("en-US");
  const k = n => n >= 1000 ? "$" + (Math.round(n / 100) / 10).toLocaleString("en-US") + "k" : usd(n);
  const CATS = [["flights", "Flights", "#141414"], ["hotels", "Hotels", "#1F6F5C"], ["dining", "Big dinners", "#B5651D"], ["daily", "Day-to-day", "#8E8A7E"], ["transport", "Car & trains", "#3B4A6B"], ["extras", "Spa, insurance, buffer", "#C9C4B8"]];

  function st() {
    const S = window.APP.S;
    S.budget = Object.assign({ it: "spain", origin: "BOS", cabin: "eco", level: "mid", nights: {}, hotel: {}, dine: {}, start: { c: "", n: 1 }, end: { c: "", n: 1 }, spa: true, ins: true, buffer: true }, S.budget || {});
    return S.budget;
  }
  const save = () => window.APP.save();
  const hotelIdx = id => { const b = st(), h = B.bases[id].hotels; return b.hotel[id] ?? (h.length >= 3 ? 1 : 0); };

  /* nights per leg, after the bookends borrow nights from the first/last base */
  function legs(it) {
    const b = st();
    const base = (b.nights[it.id] || it.legs.map(l => l[1])).map((n, i) => ({ id: it.legs[i][0], n, main: true, i }));
    const out = base.map(x => ({ ...x }));
    const borrow = (n, fromEnd) => {
      for (let step = 0; step < n; step++) {
        const order = fromEnd ? [...out].reverse() : out;
        const leg = order.find(l => l.n > 1); if (!leg) return; leg.n--;
      }
    };
    const pre = [], post = [];
    if (b.start.c) { borrow(b.start.n, false); pre.push({ id: b.start.c, n: b.start.n, bookend: "start" }); }
    if (b.end.c) { borrow(b.end.n, true); post.push({ id: b.end.c, n: b.end.n, bookend: "end" }); }
    return [...pre, ...out, ...post];
  }

  function compute(it) {
    const b = st(), L = legs(it), lvl = B.daily[b.level][1];
    const nights = L.reduce((a, l) => a + l.n, 0);
    const flights = it.flight[b.origin] * B.cabins[b.cabin][1] * 2;
    let hotels = 0, daily = 0, dining = 0;
    const dinners = [];
    L.forEach(l => {
      const base = B.bases[l.id];
      hotels += l.n * base.hotels[hotelIdx(l.id)][1];
      daily += l.n * lvl * base.f * 2;
      base.dine.forEach((d, i) => { if (b.dine[l.id + "|" + i]) { dining += d[1]; dinners.push(d[0]); } });
    });
    daily += lvl * 2 * B.bases[L[L.length - 1].id].f * .6; // departure morning
    const bookendHops = [b.start.c, b.end.c].filter(c => c && !it.hubs.includes(c)).length;
    const transport = it.car * B.carPerDay + it.transfers.reduce((a, t) => a + t[1] * 2, 0) + B.airportTaxis + bookendHops * 150 * 2 + (b.start.c || b.end.c ? 60 : 0);
    let extras = (b.spa ? B.spa : 0) + (b.ins ? (flights + hotels) * B.insurancePct : 0);
    const sub = flights + hotels + dining + daily + transport + extras;
    if (b.buffer) extras += sub * B.bufferPct;
    const parts = { flights, hotels, dining, daily, transport, extras };
    const total = Object.values(parts).reduce((a, x) => a + x, 0);
    return { L, nights, parts, total, low: total * .85, high: total * 1.2, dinners, bookendHops };
  }

  /* ---------------- render ---------------- */
  let bmap, blayer;
  function shell() {
    const v = $("#view-budget");
    if (v.dataset.ready) return;
    v.dataset.ready = 1;
    v.innerHTML = `<div class="wrap">
      <div class="section-h"><h2>Budget builder</h2><p>Rough ballpark for two, in USD. Pick a route, then hotels, dinners and extras.</p></div>
      <div id="b-its"></div>
      <div class="bgrid"><div id="b-build"></div><aside class="bsum"><div id="b-sum"></div><div id="bmap"></div></aside></div>
    </div>`;
    bmap = L.map("bmap", { zoomControl: false, scrollWheelZoom: false, attributionControl: false });
    const esri = "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/";
    L.tileLayer(esri + "World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}", { maxZoom: 16 }).addTo(bmap);
    L.tileLayer(esri + "World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}", { maxZoom: 16 }).addTo(bmap);
    blayer = L.layerGroup().addTo(bmap);
    bmap.setView([46, 0], 4);
    new ResizeObserver(() => { if (bmap.getContainer().offsetWidth) { bmap.invalidateSize(); drawMap(); } }).observe($("#bmap"));
  }

  function drawMap() {
    if (!bmap || !$("#bmap").offsetWidth) return;
    const it = IT[st().it], Lg = legs(it);
    blayer.clearLayers();
    const ll = Lg.map(l => [B.bases[l.id].lat, B.bases[l.id].lng]);
    L.polyline(ll, { color: it.color, weight: 3, opacity: .8, dashArray: "6 6" }).addTo(blayer);
    Lg.forEach((l, i) => L.marker(ll[i], { icon: L.divIcon({ className: "", html: `<div class="pin" style="background:${l.bookend ? "#141414" : it.color}">${i + 1}</div>`, iconSize: [26, 26], iconAnchor: [13, 13] }) }).bindTooltip(`${B.bases[l.id].name} · ${l.n}n`).addTo(blayer));
    bmap.fitBounds(ll, { padding: [30, 30], maxZoom: 8 });
  }

  function seg(key, opts, cur) {
    return `<div class="bseg">${opts.map(([v, l]) => `<button data-set="${key}" data-val="${v}" class="${cur === v ? "on" : ""}">${l}</button>`).join("")}</div>`;
  }

  function renderIts() {
    const b = st();
    const card = it => {
      const c = compute(it);
      return `<button class="itc ${b.it === it.id ? "on" : ""}" data-it="${it.id}">
        <span class="itc-bar" style="background:${it.color}"></span>
        <b>${esc(it.name)}</b>
        <small>${it.legs.map(l => B.bases[l[0]].name.split(" ·")[0] + " " + l[1]).join(" · ")}</small>
        <span class="itc-p">≈ ${k(c.total)}</span></button>`;
    };
    $("#b-its").innerHTML = `<h4 class="bh">Single region</h4><div class="its">${B.itineraries.filter(i => i.kind === "single").map(card).join("")}</div>
      <h4 class="bh">Mix &amp; match</h4><div class="its">${B.itineraries.filter(i => i.kind === "combo").map(card).join("")}</div>`;
  }

  function renderBuild() {
    const b = st(), it = IT[b.it], c = compute(it);
    const legRow = (l, idx) => {
      const base = B.bases[l.id], hi = hotelIdx(l.id);
      return `<div class="leg">
        <div class="leg-h"><span class="n" style="background:${l.bookend ? "#141414" : it.color}">${idx + 1}</span>
          <div class="leg-t"><b>${esc(base.name)}</b>${l.bookend ? `<small>${l.bookend === "start" ? "City stop at the start" : "City stop at the end"}</small>` : ""}</div>
          ${l.main ? `<div class="step"><button data-n="${l.i}|-1" aria-label="fewer nights">−</button><span>${l.n} night${l.n > 1 ? "s" : ""}</span><button data-n="${l.i}|1" aria-label="more nights">+</button></div>` : `<div class="step"><span>${l.n} night${l.n > 1 ? "s" : ""}</span></div>`}
        </div>
        <select class="hsel" data-hotel="${l.id}">${base.hotels.map((h, i) => `<option value="${i}" ${i === hi ? "selected" : ""}>${esc(h[0])} · ${usd(h[1])}/night · ${esc(h[2])}</option>`).join("")}</select>
        <div class="leg-sub">${usd(l.n * base.hotels[hi][1])} for ${l.n} night${l.n > 1 ? "s" : ""}</div>
        ${base.dine.length ? `<div class="dines">${base.dine.map((d, i) => `<button class="dn ${b.dine[l.id + "|" + i] ? "on" : ""}" data-dine="${l.id}|${i}">${d[2] ? `<i>${"✿".repeat(d[2])}</i>` : ""}${esc(d[0])} <em>${usd(d[1])}</em></button>`).join("")}</div>` : ""}
      </div>`;
    };
    const cityOpts = cur => `<option value="">None</option>` + B.bookendCities.map(cid => `<option value="${cid}" ${cur === cid ? "selected" : ""}>${B.bases[cid].name}${it.hubs.includes(cid) ? " (on your way)" : " (+ extra hop)"}</option>`).join("");
    $("#b-build").innerHTML = `
      <div class="bblk"><h3>${esc(it.name)}</h3><p class="bnote">${esc(it.how)}${it.why ? " " + esc(it.why) : ""}</p>
        ${c.L.map(legRow).join("")}
        ${it.transfers.length ? `<div class="trans">${it.transfers.map(t => `<span>${esc(t[0])} <em>${usd(t[1])} pp</em></span>`).join("")}${it.car ? `<span>Car hire, ${it.car} days <em>${usd(it.car * B.carPerDay)}</em></span>` : ""}</div>` : (it.car ? `<div class="trans"><span>Car hire, ${it.car} days <em>${usd(it.car * B.carPerDay)}</em></span></div>` : "")}
      </div>
      <div class="bblk"><h3>A day in a big city?</h3><p class="bnote">These nights come out of your first or last base, so the trip stays at 8 nights. Paris, London, Amsterdam or Dublin works well if you're connecting there anyway.</p>
        <div class="bk"><label>Start in<select data-bk="start">${cityOpts(b.start.c)}</select></label>${b.start.c ? seg("startn", [[1, "1 night"], [2, "2 nights"]], b.start.n) : ""}</div>
        <div class="bk"><label>End in<select data-bk="end">${cityOpts(b.end.c)}</select></label>${b.end.c ? seg("endn", [[1, "1 night"], [2, "2 nights"]], b.end.n) : ""}</div>
      </div>
      <div class="bblk"><h3>Flights</h3>
        <div class="brow"><span>From</span>${seg("origin", [["BOS", "Boston"], ["BWI", "Baltimore"]], b.origin)}</div>
        <div class="brow"><span>Cabin</span>${seg("cabin", Object.entries(B.cabins).map(([v, x]) => [v, x[0]]), b.cabin)}</div>
        <p class="bnote">About ${usd(it.flight[b.origin])} pp round trip in economy, including the European connection. March fares; book 2–4 months out.</p>
      </div>
      <div class="bblk"><h3>Day-to-day</h3>
        <div class="brow"><span>Spending</span>${seg("level", Object.entries(B.daily).map(([v, x]) => [v, x[0]]), b.level)}</div>
        <p class="bnote">${usd(B.daily[b.level][1])} per person per day before local price levels: lunches, casual dinners, coffee, museums, taxis.</p>
        <div class="tg">
          <label><input type="checkbox" data-tog="spa" ${b.spa ? "checked" : ""}> Spa treatments (${usd(B.spa)})</label>
          <label><input type="checkbox" data-tog="ins" ${b.ins ? "checked" : ""}> Travel insurance (~5%)</label>
          <label><input type="checkbox" data-tog="buffer" ${b.buffer ? "checked" : ""}> 10% buffer</label>
        </div>
      </div>`;
  }

  function renderSum() {
    const b = st(), it = IT[b.it], c = compute(it);
    const ok = c.nights === B.nightsTarget;
    $("#b-sum").innerHTML = `
      <div class="tot"><small>Estimated total for two</small><b>${usd(c.total)}</b><span>Likely range ${k(c.low)} – ${k(c.high)} · ${usd(c.total / 2)} per person</span></div>
      <div class="stack">${CATS.map(([key, , col]) => `<i style="width:${c.parts[key] / c.total * 100}%;background:${col}"></i>`).join("")}</div>
      <table class="brk">${CATS.map(([key, l, col]) => `<tr><td><i style="background:${col}"></i>${l}</td><td>${usd(c.parts[key])}</td></tr>`).join("")}</table>
      <div class="nchk ${ok ? "" : "warn"}">${ok ? `✓ ${c.nights} nights, Sat 13 → Sun 21` : `${c.nights} nights. The dates fit ${B.nightsTarget}, so adjust with − / +`}</div>
      ${c.dinners.length ? `<p class="bnote">Big dinners: ${c.dinners.map(esc).join(", ")}</p>` : `<p class="bnote">Tap a restaurant under any stop to add it.</p>`}
      ${c.bookendHops ? `<p class="bnote">Includes ~$300 for each city stop that isn't on your flight path.</p>` : ""}`;
  }

  function render(id) {
    shell();
    const b = st();
    if (id && IT[id]) { b.it = id; save(); }
    renderIts(); renderBuild(); renderSum(); drawMap();
  }
  const rerender = () => { save(); renderIts(); renderBuild(); renderSum(); drawMap(); };

  /* ---------------- events ---------------- */
  document.addEventListener("click", e => {
    if (!e.target.closest("#view-budget")) return;
    const b = st(), it = IT[b.it];
    const x = e.target.closest("[data-it],[data-n],[data-dine],[data-set]");
    if (!x) return;
    if (x.dataset.it) { b.it = x.dataset.it; history.replaceState(null, "", "#/budget/" + b.it); }
    else if (x.dataset.n) {
      const [i, d] = x.dataset.n.split("|").map(Number);
      const arr = b.nights[it.id] || it.legs.map(l => l[1]);
      arr[i] = Math.max(1, Math.min(8, arr[i] + d)); b.nights[it.id] = arr;
    }
    else if (x.dataset.dine) { b.dine[x.dataset.dine] = !b.dine[x.dataset.dine]; }
    else if (x.dataset.set) {
      const key = x.dataset.set, val = x.dataset.val;
      if (key === "startn") b.start.n = +val; else if (key === "endn") b.end.n = +val; else b[key] = val;
    }
    rerender();
  });
  document.addEventListener("change", e => {
    if (!e.target.closest("#view-budget")) return;
    const b = st();
    if (e.target.dataset.hotel) b.hotel[e.target.dataset.hotel] = +e.target.value;
    else if (e.target.dataset.bk) b[e.target.dataset.bk].c = e.target.value;
    else if (e.target.dataset.tog) b[e.target.dataset.tog] = e.target.checked;
    else return;
    rerender();
  });

  window.renderBudget = render;
  window.budgetQuick = id => IT[id] ? compute(IT[id]).total : null;
})();
