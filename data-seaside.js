/* ------------------------------------------------------------------
   Seaside hotels in Scotland: two new coastal add-on stops, extra
   sea-view hotels at existing stops, and a "by the sea" label on the
   ones already listed. Loaded after data-more2.js.
------------------------------------------------------------------- */
(() => {
  const B = window.BUDGET, SEE = window.SEE, T = window.TRIP;
  const SEA = " · by the sea";
  const add = (id, base, see, wx) => { B.bases[id] = Object.assign(base, { wx: { hi: wx[0], lo: wx[1], rain: wx[2], sun: wx[3], t15: wx[4], t20: wx[5], frost: wx[6], wind: wx[7], snow: wx[8], windName: "" } }); SEE[id] = see; };

  add("eastlothian", { name: "East Lothian coast · North Berwick", lat: 56.045, lng: -2.78, f: 1.1,
    hotels: [["Greywalls, Gullane", 380, "Lutyens house beside Muirfield, garden to the dunes" + SEA], ["The Marine, North Berwick", 230, "Victorian hotel on the links above the beach" + SEA], ["Seaside B&B, North Berwick", 140, "Simple" + SEA]],
    dine: [["Greywalls dining room", 220, 0]] },
    [["Bass Rock", "nature", "Bass_Rock", "An island white with gannets, seen from the beach or by boat."], ["Tantallon Castle", "sight", "Tantallon_Castle", "Red cliff-top ruin facing the Bass Rock."], ["North Berwick", "town", "North_Berwick", "Two sandy bays and a harbour, 35 minutes from Edinburgh by train."]],
    [9, 3, .40, .27, .05, .01, .25, .30, .005]);

  add("argyll", { name: "Argyll coast · Port Appin", lat: 56.555, lng: -5.41, f: 1.1,
    hotels: [["Isle of Eriska", 550, "Private island with a spa and pool, reached by a bridge" + SEA], ["Airds Hotel, Port Appin", 380, "Small hotel on Loch Linnhe" + SEA], ["The Pierhouse, Port Appin", 220, "Seafood inn on the pier" + SEA]],
    dine: [["The Pierhouse seafood", 140, 0]] },
    [["Castle Stalker", "sight", "Castle_Stalker", "Tower house on a tidal islet in Loch Linnhe."], ["Oban", "town", "Oban", "Harbour town: seafood stalls, distillery, ferries to Mull."], ["Lismore", "nature", "Lismore,_Scotland", "Flat green island, a short foot ferry from Port Appin."]],
    [9, 3, .58, .17, .04, 0, .25, .33, .01]);

  Object.assign(B.segs, {
    "edinburgh>eastlothian": [["train", 0.6, 10, "ScotRail Waverley → North Berwick, hourly, 35 min."], ["car", 0.7, 0, "A1 east, about 40 min."]],
    "eastlothian>gleneagles": [["car", 1.6, 0, "Round Edinburgh on the bypass, over the Queensferry Crossing, then the M90."]],
    "eastlothian>standrews": [["car", 2, 0, "Over the Forth and up through Fife."]],
    "gleneagles>argyll": [["car", 2.5, 0, "West through Crianlarich and Tyndrum, then down to Loch Linnhe."]],
    "argyll>braemar": [["car", 4, 0, "Back east via Crianlarich and Perth, then over Glenshee."]],
    "argyll>glencoe": [["car", 0.6, 0, "Up the shore of Loch Linnhe, 30 min."]],
    "argyll>mull": [["car", 1.2, 0, "To Oban, then the CalMac ferry (45 min)."]]
  });

  /* sea-view hotels at existing stops */
  const more = {
    edinburgh: [["Malmaison Leith", 170, "Old seamen's mission on the Leith shore" + SEA]],
    standrews: [["Fairmont St Andrews", 300, "Cliff-top, spa, sea views" + SEA]],
    skye: [["The Three Chimneys & House Over-By", 480, "On Loch Dunvegan, known for its restaurant" + SEA]],
    mull: [["Tiroran House", 300, "On the shore of Loch Scridain" + SEA]],
    arran: [["Kildonan Hotel", 180, "On the beach, seals offshore" + SEA]]
  };
  Object.entries(more).forEach(([id, hs]) => { const b = B.bases[id]; if (b) b.hotels.push(...hs); });

  /* label the sea-view hotels already listed */
  const already = ["Rusacks", "Old Course Hotel", "The Ship Inn, Elie", "Tobermory Hotel", "Glengorm Castle", "Doune Knoydart", "Applecross Inn rooms", "Borve Lodge", "Port Charlotte Hotel", "The Machrie", "The Torridon", "Kinloch Lodge", "The Foveran"];
  Object.values(B.bases).forEach(b => b.hotels.forEach(h => { if (already.includes(h[0]) && !h[2].includes("by the sea")) h[2] += SEA; }));

  /* new add-ons on the Scotland route */
  const it = B.itineraries.find(i => i.id === "scotland");
  it.extras.push(
    ["eastlothian", 2, "after:edinburgh", 0, 0, "Seaside near Edinburgh: Greywalls or The Marine, Tantallon Castle and the Bass Rock gannets. 35 min by train."],
    ["argyll", 2, "after:gleneagles", 2, 0, "West-coast sea lochs: Isle of Eriska or Port Appin, Castle Stalker, seafood in Oban."]
  );

  /* Explore page: seaside stays */
  const d = T.destinations.find(x => x.id === "scotland");
  d.stays.forEach(s => { if (s.name === "Rusacks") s.sea = true; });
  const g = q => "https://www.google.com/search?q=" + encodeURIComponent(q);
  d.stays.push(
    { name: "Greywalls", tag: "Country house by the dunes", place: "Gullane, East Lothian", why: "Arts and Crafts house with a walled garden that runs down to the beach. 40 minutes from Edinburgh.", price: "££££", url: g("Greywalls hotel Gullane"), highlight: true, sea: true },
    { name: "Isle of Eriska", tag: "Hotel on its own island", place: "near Oban, Argyll", why: "A Victorian house on a private island, with a spa, a pool and badgers on the lawn at dusk.", price: "£££££", url: g("Isle of Eriska hotel"), highlight: true, sea: true },
    { name: "The Three Chimneys", tag: "Restaurant with rooms on a sea loch", place: "Colbost, Isle of Skye", why: "Rooms looking over Loch Dunvegan, and one of Scotland's best-known restaurants next door.", price: "££££", url: g("The Three Chimneys Skye"), sea: true },
    { name: "Fairmont St Andrews", tag: "Cliff-top resort", place: "St Andrews", why: "Sea views from most rooms, a big spa, and a 5-minute drive into town.", price: "£££", url: g("Fairmont St Andrews"), sea: true },
    { name: "The Marine", tag: "Victorian seaside hotel", place: "North Berwick", why: "On the links above the beach, looking out to the Bass Rock. 35 minutes from Edinburgh by train.", price: "£££", url: g("The Marine North Berwick"), sea: true },
    { name: "Borve Lodge", tag: "Turf-roofed houses over a beach", place: "Isle of Harris", why: "Modern stone-and-turf houses above a long white beach in the Outer Hebrides.", price: "££££", url: g("Borve Lodge Harris"), sea: true }
  );
})();
