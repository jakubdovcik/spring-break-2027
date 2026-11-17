(() => {
  const B = window.BUDGET, IT = Object.fromEntries(B.itineraries.map(i => [i.id, i]));
  const $ = (s, el = document) => el.querySelector(s);
  const esc = s => window.APP.esc(s);
  const usd = n => "$" + Math.round(n).toLocaleString("en-US");
  const k = n => n >= 1000 ? "$" + (Math.round(n / 100) / 10).toLocaleString("en-US") + "k" : usd(n);
  const CATS = [["flights", "Flights & bags", "#141414"], ["hotels", "Hotels", "#4a4a4a"], ["dining", "Dinners out", "#7a7a7a"], ["daily", "Day-to-day", "#a3a3a3"], ["transport", "Car, trains, taxis", "#c4c4c4"], ["fun", "Spa, tours, shopping", "#dcdcdc"], ["safety", "Insurance & buffer", "#ededed"]];

  const TIMING = { early: ["Book early", .88], typical: ["Typical", 1], late: ["Last minute", 1.3] };
  const CAR = { compact: ["Compact", 1], suv: ["SUV / estate", 1.35], premium: ["Premium", 1.8] };
  const TAXI = { transit: ["Trains & buses", 50], taxi: ["Taxis", 140], driver: ["Private drivers", 420] };
  const DEF = () => ({
    it: "spain", origin: "BOS", cabin: "eco", timing: "typical", fare: {}, bags: 2, ticket: "through", hub: "london",
    nights: {}, hotel: {}, hotelPrice: {}, dine: {}, nice: 3,
    start: { c: "", n: 1 }, end: { c: "", n: 1 },
    carOn: {}, carDays: {}, carCls: "compact", taxi: "taxi",
    seeKind: "all", dailyAmt: 150, spaN: 2, tours: 2, shopping: 300, fx: 0, ins: true, buffer: 10
  });

  function st() {
    const S = window.APP.S;
    S.budget = Object.assign(DEF(), S.budget || {});
    return S.budget;
  }
  const save = () => window.APP.save();
  const hotelIdx = id => { const b = st(), h = B.bases[id].hotels; return b.hotel[id] ?? (h.length >= 3 ? 1 : 0); };
  const hotelPrice = id => st().hotelPrice[id] || B.bases[id].hotels[hotelIdx(id)][1];
  const carOn = it => st().carOn[it.id] ?? it.car > 0;
  const carDays = it => st().carDays[it.id] ?? (it.car || 3);
  const baseFare = it => { const b = st(); return b.fare[it.id] || Math.round(it.flight[b.origin] * TIMING[b.timing][1]); };

  /* flights: one through ticket, or a hub round trip plus low-cost legs */
  const DOMCAB = { eco: ["Economy", 1], prem: ["Extra legroom", 1.3], biz: ["First", 2.5] };
  const cabins = it => it.domestic ? DOMCAB : B.cabins;
  const lccOk = it => !!(it.lcc && B.lcc[it.lcc.in] && B.lcc[it.lcc.out]);
  const hubMode = it => st().ticket === "hub" && lccOk(it);
  function flightPP(it, mode, hub) {
    const b = st(), cab = cabins(it)[b.cabin][1], tm = TIMING[b.timing][1];
    if (mode === "hub" && lccOk(it)) {
      const i = B.lcc[it.lcc.in][hub], o = B.lcc[it.lcc.out][hub];
      const change = it.lcc.in === "rail" ? 0 : B.hubChange[hub];
      return { pp: B.hubFare[b.origin][hub] * cab * tm + (i[1] + o[1]) * tm + change + B.hubChange[hub], inL: i, outL: o };
    }
    return { pp: baseFare(it) * cab };
  }
  const transfersFor = it => it.transfers.filter(t => !(t[2] === "arrival" && hubMode(it)));
  window.budgetFlightOptions = id => {
    const it = IT[id]; if (!it) return null;
    const o = { through: flightPP(it, "through").pp };
    if (lccOk(it)) ["london", "paris", "amsterdam"].forEach(h => o[h] = flightPP(it, "hub", h).pp);
    return o;
  };

  /* one dot per night, grouped by stop: a quiet way to show the shape of a route */
  const glyph = ns => `<span class="ng">${ns.map(n => `<span>${"<i></i>".repeat(Math.max(0, n))}</span>`).join("")}</span>`;
  window.nightsGlyph = glyph;

  function legs(it) {
    const b = st();
    const out = (b.nights[it.id] || it.legs.map(l => l[1])).map((n, i) => ({ id: it.legs[i][0], n, main: true, i }));
    const borrow = (n, fromEnd) => { for (let s = 0; s < n; s++) { const leg = (fromEnd ? [...out].reverse() : out).find(l => l.n > 1); if (!leg) return; leg.n--; } };
    const pre = [], post = [];
    if (b.start.c) { borrow(b.start.n, false); pre.push({ id: b.start.c, n: b.start.n, bookend: "start" }); }
    if (b.end.c) { borrow(b.end.n, true); post.push({ id: b.end.c, n: b.end.n, bookend: "end" }); }
    return [...pre, ...out, ...post];
  }

  function compute(it) {
    const b = st(), L = legs(it), fx = 1 + b.fx / 100;
    const nights = L.reduce((a, l) => a + l.n, 0);
    const hm = hubMode(it);
    const flights = flightPP(it, hm ? "hub" : "through", b.hub).pp * 2 + b.bags * 150 + (hm ? b.bags * B.lccBag * 2 : 0);
    let hotels = 0, daily = 0, dining = 0, fAvg = 0;
    const dinners = [];
    L.forEach(l => {
      const base = B.bases[l.id];
      hotels += l.n * hotelPrice(l.id);
      daily += l.n * b.dailyAmt * base.f * 2;
      fAvg += base.f * l.n;
      base.dine.forEach((d, i) => { if (b.dine[l.id + "|" + i]) { dining += d[1]; dinners.push(d[0]); } });
    });
    fAvg /= Math.max(1, nights);
    daily += b.dailyAmt * 2 * fAvg * .6;
    dining += b.nice * 200 * fAvg;
    const hubsNow = hm ? [b.hub] : it.hubs;
    const bookendHops = it.domestic ? 0 : [b.start.c, b.end.c].filter(c => c && !hubsNow.includes(c)).length;
    const car = carOn(it) ? carDays(it) * B.carPerDay * CAR[b.carCls][1] : 0;
    const noCarExtra = !carOn(it) && it.car ? it.car * 45 : 0;
    const transport = car + noCarExtra + transfersFor(it).reduce((a, t) => a + t[1] * 2, 0) + TAXI[b.taxi][1] + (b.start.c || b.end.c ? 60 : 0);
    const fun = b.spaN * 190 + b.tours * 140 + b.shopping;
    const parts = { flights, hotels: hotels * fx, dining: dining * fx, daily: daily * fx, transport: transport * fx + bookendHops * 300, fun: fun * fx, safety: 0 };
    const sub = Object.values(parts).reduce((a, x) => a + x, 0);
    parts.safety = (b.ins ? (flights + parts.hotels) * B.insurancePct : 0) + sub * b.buffer / 100;
    const total = sub + parts.safety;
    return { L, nights, parts, total, low: total * .85, high: total * 1.2, dinners, bookendHops };
  }

  /* ---------------- render ---------------- */
  let bmap, blayer;
  function shell() {
    const v = $("#view-budget");
    if (v.dataset.ready) return;
    v.dataset.ready = 1;
    v.innerHTML = `<div class="wrap">
      <div class="section-h"><h2>Budget builder</h2><p>Rough ballpark for two, in USD. Pick a route, then tune anything.</p></div>
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
    const Lg = legs(IT[st().it]);
    blayer.clearLayers();
    const ll = Lg.map(l => [B.bases[l.id].lat, B.bases[l.id].lng]);
    L.polyline(ll, { color: "#141414", weight: 2, opacity: .7, dashArray: "4 6" }).addTo(blayer);
    Lg.forEach((l, i) => L.marker(ll[i], { icon: L.divIcon({ className: "", html: `<div class="pin" style="background:#141414">${i + 1}</div>`, iconSize: [26, 26], iconAnchor: [13, 13] }) }).bindTooltip(`${B.bases[l.id].name} · ${l.n}n`).addTo(blayer));
    bmap.fitBounds(ll, { padding: [30, 30], maxZoom: 8 });
  }

  const seg = (key, opts, cur) => `<div class="bseg">${opts.map(([v, l]) => `<button data-set="${key}" data-val="${v}" class="${String(cur) === String(v) ? "on" : ""}">${l}</button>`).join("")}</div>`;
  const stepper = (key, val, label, unit) => `<div class="step"><button data-inc="${key}|-1" aria-label="less">−</button><span>${val}${unit ? " " + unit : ""}</span><button data-inc="${key}|1" aria-label="more">+</button></div>`;
  const slider = (key, min, max, step, val, fmt, hint) => `<div class="sl"><div class="sl-h"><span>${hint}</span><output data-out="${key}">${fmt(val)}</output></div><input type="range" min="${min}" max="${max}" step="${step}" value="${val}" data-range="${key}"></div>`;
  const FMT = {
    dailyAmt: v => usd(v) + " pp/day",
    shopping: v => usd(v),
    fx: v => (v > 0 ? "+" : "") + v + "%" + (v > 0 ? " (weaker dollar)" : v < 0 ? " (stronger dollar)" : " (today's rates)"),
    buffer: v => v + "%"
  };

  function renderIts() {
    const b = st();
    const card = it => `<button class="itc ${b.it === it.id ? "on" : ""}" data-it="${it.id}">
        <b>${esc(it.name)}</b>
        <small>${it.legs.map(l => B.bases[l[0]].name.split(" ·")[0]).join(" → ")}</small>
        ${glyph(it.legs.map(l => l[1]))}
        <span class="itc-p">≈ ${k(compute(it).total)}</span></button>`;
    $("#b-its").innerHTML = `<h4 class="bh">Single region</h4><div class="its">${B.itineraries.filter(i => i.kind === "single").map(card).join("")}</div>
      <h4 class="bh">Mix &amp; match</h4><div class="its">${B.itineraries.filter(i => i.kind === "combo").map(card).join("")}</div>`;
  }

  /* ---------------- nature & sights ---------------- */
  const KIND = { nature: "Nature", sight: "Sight", town: "Town" };
  const seeFor = id => (window.SEE[id] || []).filter(s => { const k = st().seeKind; return k === "all" || (k === "nature" ? s[1] === "nature" : s[1] !== "nature"); });
  const wiki = t => "https://en.wikipedia.org/wiki/" + encodeURIComponent(t);
  function highlights(L) {
    const tiles = [];
    for (let round = 0; round < 3 && tiles.length < 8; round++)
      L.forEach(l => { const s = seeFor(l.id)[round]; if (s && tiles.length < 8) tiles.push([s, l.id]); });
    return `<div class="hl-h"><h4 class="bh" style="margin:0">Highlights along the way</h4>${seg("seeKind", [["all", "All"], ["nature", "Nature"], ["sight", "Sights & towns"]], st().seeKind)}</div>
      <div class="hls">${tiles.map(([s, id]) => `<a class="hlt" href="${wiki(s[2])}" target="_blank" rel="noopener">
        <div class="hlt-ph"><img data-wiki="${esc(s[2])}" alt="${esc(s[0])}" loading="lazy"><span>${KIND[s[1]]}</span></div>
        <b>${esc(s[0])}</b><small>${esc(B.bases[id].name)}</small><p>${esc(s[3])}</p></a>`).join("")}</div>`;
  }

  function lccBox(it) {
    const b = st(), f = flightPP(it, "hub", b.hub), hubName = B.bases[b.hub].name, tm = TIMING[b.timing][1];
    const row = (from, to, how, p) => `<div class="lcl"><span>${from}${to ? " → " + to : ""}</span><em>${esc(how)}</em><b>${usd(p)}</b></div>`;
    const inName = B.lccAirports[it.lcc.in], outName = B.lccAirports[it.lcc.out];
    return `<div class="lcbox">
      ${row(b.origin, hubName, B.hubFrom[b.origin][b.hub] + " · round trip", B.hubFare[b.origin][b.hub] * cabins(it)[b.cabin][1] * tm)}
      ${row(hubName + (f.inL[2] ? " (" + f.inL[2] + ")" : ""), inName, f.inL[0], f.inL[1] * tm)}
      ${row(outName, hubName + (f.outL[2] ? " (" + f.outL[2] + ")" : ""), f.outL[0], f.outL[1] * tm)}
      ${B.hubChange[b.hub] ? row("Airport change", "", b.hub === "london" ? "Heathrow ↔ Gatwick/Stansted" : "CDG ↔ Orly", B.hubChange[b.hub] * (it.lcc.in === "rail" ? 1 : 2)) : ""}
      <div class="lcl tot2"><span>Per person</span><em></em><b>${usd(f.pp)}</b></div></div>`;
  }
  function compareLine(it) {
    const o = window.budgetFlightOptions(it.id);
    return `<p class="bnote">Per person, as set: one ticket ${usd(o.through)} · via London ${usd(o.london)} · via Paris ${usd(o.paris)} · via Amsterdam ${usd(o.amsterdam)}</p>`;
  }

  function renderBuild() {
    const b = st(), it = IT[b.it], c = compute(it);
    const legRow = (l, idx) => {
      const base = B.bases[l.id], hi = hotelIdx(l.id), custom = b.hotelPrice[l.id];
      return `<div class="leg">
        <div class="leg-h"><span class="n">${idx + 1}</span>
          <div class="leg-t"><b>${esc(base.name)}</b>${l.bookend ? `<small>${l.bookend === "start" ? "City stop at the start" : "City stop at the end"}</small>` : ""}</div>
          ${l.main ? `<div class="step"><button data-n="${l.i}|-1" aria-label="fewer nights">−</button><span>${l.n} night${l.n > 1 ? "s" : ""}</span><button data-n="${l.i}|1" aria-label="more nights">+</button></div>` : `<div class="step"><span>${l.n} night${l.n > 1 ? "s" : ""}</span></div>`}
        </div>
        <div class="hrow"><select class="hsel" data-hotel="${l.id}">${base.hotels.map((h, i) => `<option value="${i}" ${i === hi ? "selected" : ""}>${esc(h[0])} · ${usd(h[1])}/night · ${esc(h[2])}</option>`).join("")}</select>
          <label class="hcust">or $<input type="number" min="0" step="10" inputmode="numeric" placeholder="${base.hotels[hi][1]}" value="${custom || ""}" data-hprice="${l.id}" aria-label="Custom nightly price">/night</label></div>
        <div class="leg-sub" data-legsub="${l.id}">${usd(l.n * hotelPrice(l.id))} for ${l.n} night${l.n > 1 ? "s" : ""}${custom ? " · your own price" : ""}</div>
        ${seeFor(l.id).length ? `<div class="svs"><span class="svs-l">See</span>${seeFor(l.id).map(s => `<a class="sv ${s[1]}" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s[0] + " " + base.name.split(" ·")[0])}" target="_blank" rel="noopener" title="${esc(s[3])}">${esc(s[0])}</a>`).join("")}</div>` : ""}
        ${base.dine.length ? `<div class="dines"><span class="svs-l">Eat</span>${base.dine.map((d, i) => `<button class="dn ${b.dine[l.id + "|" + i] ? "on" : ""}" data-dine="${l.id}|${i}">${d[2] ? `<i>${"✿".repeat(d[2])}</i>` : ""}${esc(d[0])} <em>${usd(d[1])}</em></button>`).join("")}</div>` : ""}
      </div>`;
    };
    const cityOpts = cur => `<option value="">None</option>` + B.bookendCities.map(cid => `<option value="${cid}" ${cur === cid ? "selected" : ""}>${B.bases[cid].name}${it.hubs.includes(cid) ? " (on your way)" : " (+ extra hop)"}</option>`).join("");
    $("#b-build").innerHTML = `
      <div class="bblk"><h3>${esc(it.name)}</h3><p class="bnote">${esc(it.how)}${it.why ? " " + esc(it.why) : ""}</p>
        ${highlights(c.L)}
        ${c.L.map(legRow).join("")}
        ${transfersFor(it).length ? `<div class="trans">${transfersFor(it).map(t => `<span>${esc(t[0])} <em>${usd(t[1])} pp</em></span>`).join("")}</div>` : ""}
      </div>

      ${it.domestic ? "" : `<div class="bblk"><h3>A day in a big city?</h3><p class="bnote">These nights come out of your first or last stop, so the trip stays at 8 nights.</p>
        <div class="bk"><label>Start in<select data-bk="start">${cityOpts(b.start.c)}</select></label>${b.start.c ? seg("startn", [[1, "1 night"], [2, "2 nights"]], b.start.n) : ""}</div>
        <div class="bk"><label>End in<select data-bk="end">${cityOpts(b.end.c)}</select></label>${b.end.c ? seg("endn", [[1, "1 night"], [2, "2 nights"]], b.end.n) : ""}</div>
        ${hubMode(it) ? `<p class="bnote">Tip: you're connecting through ${B.bases[b.hub].name}, so a night there costs no extra travel.</p>` : ""}
      </div>`}

      <div class="bblk"><h3>Flights</h3>
        <div class="brow"><span>From</span>${seg("origin", [["BOS", "Boston"], ["BWI", "Baltimore"]], b.origin)}</div>
        ${lccOk(it) ? `<div class="brow"><span>Ticket</span>${seg("ticket", [["through", "One ticket all the way"], ["hub", "Hub + low-cost"]], b.ticket)}</div>` : ""}
        ${hubMode(it) ? `<div class="brow"><span>Hub</span>${seg("hub", [["london", "London"], ["paris", "Paris"], ["amsterdam", "Amsterdam"]], b.hub)}</div>` : ""}
        <div class="brow"><span>Cabin</span>${seg("cabin", Object.entries(cabins(it)).map(([v, x]) => [v, x[0]]), b.cabin)}</div>
        <div class="brow"><span>Booking</span>${seg("timing", Object.entries(TIMING).map(([v, x]) => [v, x[0]]), b.timing)}</div>
        ${hubMode(it) ? lccBox(it) : `<div class="brow"><span>Fare</span><label class="hcust">$<input type="number" min="0" step="10" inputmode="numeric" placeholder="${Math.round(it.flight[b.origin] * TIMING[b.timing][1])}" value="${b.fare[it.id] || ""}" data-fare="${it.id}">per person, economy round trip</label></div>`}
        <div class="brow"><span>Bags</span>${stepper("bags", b.bags, "", b.bags === 1 ? "checked bag" : "checked bags")}</div>
        <p class="bnote">${hubMode(it) ? `Separate tickets: if the transatlantic flight is late, the low-cost airline won't wait. Leave 3+ hours, or sleep a night in the hub. Low-cost bags are about $${B.lccBag} each per flight, on top of the transatlantic allowance.` : "Paste a real fare when you find one and it replaces my estimate. Bags are about $150 each, round trip."}</p>
        ${lccOk(it) ? compareLine(it) : ""}
      </div>

      <div class="bblk"><h3>Getting around</h3>
        ${it.car ? `<div class="brow"><span>Car</span>${seg("car", [["1", "Rent a car"], ["0", "No car"]], carOn(it) ? "1" : "0")}</div>` : `<div class="brow"><span>Car</span>${seg("car", [["0", "No car"], ["1", "Rent a car"]], carOn(it) ? "1" : "0")}</div>`}
        ${carOn(it) ? `<div class="brow"><span>Days</span>${stepper("carDays", carDays(it), "", "days")}</div><div class="brow"><span>Class</span>${seg("carCls", Object.entries(CAR).map(([v, x]) => [v, x[0]]), b.carCls)}</div>` : (it.car ? `<p class="bnote">Without a car, add buses, trains and the odd taxi, roughly $45 a day. Hard work in the countryside parts.</p>` : "")}
        <div class="brow"><span>Transfers</span>${seg("taxi", Object.entries(TAXI).map(([v, x]) => [v, x[0]]), b.taxi)}</div>
      </div>

      <div class="bblk"><h3>Eating & spending</h3>
        <div class="brow"><span>Style</span>${seg("preset", [[90, "Lean"], [150, "Comfortable"], [240, "Treat ourselves"]], b.dailyAmt)}</div>
        ${slider("dailyAmt", 60, 350, 10, b.dailyAmt, FMT.dailyAmt, "Everyday spend: lunches, casual dinners, coffee, museums")}
        <div class="brow"><span>Nice dinners</span>${stepper("nice", b.nice, "", "× ~$200")}</div>
        <p class="bnote">Good, non-Michelin dinners for two. The starred ones are under each stop above.</p>
      </div>

      <div class="bblk"><h3>Extras</h3>
        <div class="brow"><span>Spa</span>${stepper("spaN", b.spaN, "", "treatments × $190")}</div>
        <div class="brow"><span>Tours</span>${stepper("tours", b.tours, "", "× $140 (boat, tasting, guide)")}</div>
        ${slider("shopping", 0, 2000, 50, b.shopping, FMT.shopping, "Shopping & souvenirs")}
      </div>

      <div class="bblk" style="border:0"><h3>Assumptions</h3>
        ${slider("fx", -15, 15, 1, b.fx, FMT.fx, "Euro / pound vs. the dollar")}
        ${slider("buffer", 0, 25, 1, b.buffer, FMT.buffer, "Safety buffer")}
        <div class="tg"><label><input type="checkbox" data-tog="ins" ${b.ins ? "checked" : ""}> Travel insurance (~5% of flights + hotels)</label></div>
        <button class="btn" style="margin-top:16px" data-reset="1">Reset budget to defaults</button>
      </div>`;
  }

  function renderSum() {
    const b = st(), it = IT[b.it], c = compute(it);
    const target = it.nightsTarget || B.nightsTarget, ok = c.nights === target;
    $("#b-sum").innerHTML = `
      <div class="tot"><small>Estimated total for two</small><b>${usd(c.total)}</b><span>Likely range ${k(c.low)} – ${k(c.high)} · ${usd(c.total / 2)} per person · ${usd(c.total / Math.max(1, c.nights))} per night</span></div>
      <div class="stack">${CATS.map(([key, , col]) => `<i style="width:${c.parts[key] / c.total * 100}%;background:${col}"></i>`).join("")}</div>
      <table class="brk">${CATS.map(([key, l, col]) => `<tr><td><i style="background:${col}"></i>${l}</td><td>${usd(c.parts[key])}</td></tr>`).join("")}</table>
      <div class="nchk ${ok ? "" : "warn"}">${ok ? `✓ ${c.nights} nights, ${target === 9 ? "Fri 12" : "Sat 13"} → Sun 21` : `${c.nights} nights. The dates fit ${target}, so adjust with − / +`}</div>
      ${c.dinners.length ? `<p class="bnote">Starred dinners: ${c.dinners.map(esc).join(", ")}</p>` : `<p class="bnote">Tap a restaurant under any stop to add it.</p>`}
      ${c.bookendHops ? `<p class="bnote">Includes ~$300 for each city stop that isn't on your flight path.</p>` : ""}`;
  }

  function render(id) {
    shell();
    if (id && IT[id]) { st().it = id; save(); }
    renderIts(); renderBuild(); renderSum(); drawMap(); window.APP.hydrate($("#b-build"));
  }
  const full = () => { save(); renderIts(); renderBuild(); renderSum(); drawMap(); window.APP.hydrate($("#b-build")); };
  const light = () => { save(); renderIts(); renderSum(); };

  /* ---------------- events ---------------- */
  const LIM = { bags: [0, 6], nice: [0, 8], spaN: [0, 6], tours: [0, 8], carDays: [1, 9] };
  document.addEventListener("click", e => {
    if (!e.target.closest("#view-budget")) return;
    const b = st(), it = IT[b.it];
    const x = e.target.closest("[data-it],[data-n],[data-dine],[data-set],[data-inc],[data-reset]");
    if (!x) return;
    if (x.dataset.it) { b.it = x.dataset.it; history.replaceState(null, "", "#/budget/" + b.it); }
    else if (x.dataset.n) {
      const [i, d] = x.dataset.n.split("|").map(Number);
      const arr = b.nights[it.id] || it.legs.map(l => l[1]);
      arr[i] = Math.max(1, Math.min(8, arr[i] + d)); b.nights[it.id] = arr;
    }
    else if (x.dataset.dine) b.dine[x.dataset.dine] = !b.dine[x.dataset.dine];
    else if (x.dataset.inc) {
      const [key, d] = x.dataset.inc.split("|"), [lo, hi] = LIM[key];
      if (key === "carDays") b.carDays[it.id] = Math.max(lo, Math.min(hi, carDays(it) + +d));
      else b[key] = Math.max(lo, Math.min(hi, b[key] + +d));
    }
    else if (x.dataset.set) {
      const key = x.dataset.set, val = x.dataset.val;
      if (key === "startn") b.start.n = +val;
      else if (key === "endn") b.end.n = +val;
      else if (key === "car") b.carOn[it.id] = val === "1";
      else if (key === "preset") b.dailyAmt = +val;
      else b[key] = val;
    }
    else if (x.dataset.reset) { const keep = b.it; window.APP.S.budget = Object.assign(DEF(), { it: keep }); }
    full();
  });
  document.addEventListener("change", e => {
    if (!e.target.closest("#view-budget")) return;
    const b = st(), t = e.target;
    if (t.dataset.hotel) { b.hotel[t.dataset.hotel] = +t.value; delete b.hotelPrice[t.dataset.hotel]; }
    else if (t.dataset.bk) b[t.dataset.bk].c = t.value;
    else if (t.dataset.tog) b[t.dataset.tog] = t.checked;
    else if (t.dataset.range || t.dataset.hprice || t.dataset.fare) { full(); return; }
    else return;
    full();
  });
  // live updates while typing / dragging, without rebuilding the form
  document.addEventListener("input", e => {
    if (!e.target.closest("#view-budget")) return;
    const b = st(), t = e.target;
    if (t.dataset.range) {
      b[t.dataset.range] = +t.value;
      const o = document.querySelector(`[data-out="${t.dataset.range}"]`); if (o) o.textContent = FMT[t.dataset.range](+t.value);
      light();
    } else if (t.dataset.hprice) {
      const v = +t.value; if (v > 0) b.hotelPrice[t.dataset.hprice] = v; else delete b.hotelPrice[t.dataset.hprice];
      light();
    } else if (t.dataset.fare) {
      const v = +t.value; if (v > 0) b.fare[t.dataset.fare] = v; else delete b.fare[t.dataset.fare];
      light();
    }
  });

  window.renderBudget = render;
  window.budgetQuick = id => IT[id] ? compute(IT[id]).total : null;
})();
