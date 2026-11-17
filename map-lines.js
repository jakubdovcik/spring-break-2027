/* ------------------------------------------------------------------
   Draw a journey between two points the way it's actually travelled:
   the road shape from data-geo.js for car, bus, train and ferry legs,
   a curved arc for flights, and a straight dashed line when no shape
   is stored.
------------------------------------------------------------------- */
(() => {
  const r3 = x => Math.round(x * 1000) / 1000;
  const k = (a, b) => `${r3(a[0])},${r3(a[1])}|${r3(b[0])},${r3(b[1])}`;
  function decode(str) {
    const pts = []; let i = 0, lat = 0, lng = 0;
    while (i < str.length) {
      for (const which of [0, 1]) {
        let b, shift = 0, res = 0;
        do { b = str.charCodeAt(i++) - 63; res |= (b & 31) << shift; shift += 5; } while (b >= 32);
        const d = res & 1 ? ~(res >> 1) : res >> 1;
        if (which === 0) lat += d; else lng += d;
      }
      pts.push([lat / 1e5, lng / 1e5]);
    }
    return pts;
  }
  const cache = {};
  function shape(a, b) {
    const G = window.GEO || {};
    const f = k(a, b), r = k(b, a);
    if (cache[f]) return cache[f];
    if (G[f]) return (cache[f] = decode(G[f]));
    if (G[r]) return (cache[f] = decode(G[r]).reverse());
    return null;
  }
  const km = (p, q) => { const R = 6371, rr = Math.PI / 180, dl = (q[0] - p[0]) * rr, dg = (q[1] - p[1]) * rr; const x = Math.sin(dl / 2) ** 2 + Math.cos(p[0] * rr) * Math.cos(q[0] * rr) * Math.sin(dg / 2) ** 2; return 2 * R * Math.asin(Math.sqrt(x)); };
  function arc(a, b) {
    const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = b[0] - a[0], dy = b[1] - a[1];
    const c = [mx - dy * .18, my + dx * .18], pts = [];
    for (let t = 0; t <= 1.0001; t += .05) pts.push([(1 - t) ** 2 * a[0] + 2 * (1 - t) * t * c[0] + t * t * b[0], (1 - t) ** 2 * a[1] + 2 * (1 - t) * t * c[1] + t * t * b[1]]);
    return pts;
  }
  /* mode: car | bus | train | ferry | flight | undefined (unknown: road if we have it) */
  window.routeLine = (layer, a, b, mode, o = {}) => {
    const color = o.color || "#141414", w = o.weight || 3, op = o.opacity ?? .85;
    if (mode === "flight" || km(a, b) > 650) return L.polyline(arc(a, b), { color, weight: Math.max(1.5, w - 1), opacity: op * .8, dashArray: "1 7", lineCap: "round" }).addTo(layer);
    const s = shape(a, b);
    if (!s) return L.polyline([a, b], { color, weight: w - 1, opacity: op * .7, dashArray: "4 6" }).addTo(layer);
    const dash = mode === "train" ? "8 6" : mode === "ferry" ? "2 6" : mode === "bus" ? "12 4" : null;
    return L.polyline(s, { color, weight: w, opacity: op, dashArray: dash, lineCap: "round", lineJoin: "round" }).addTo(layer);
  };
  window.routeShape = (a, b) => shape(a, b);
})();
