/* ------------------------------------------------------------------
   Seaside hotels for every option (Scotland's are in data-seaside.js),
   and more routes to choose from in the budget.
   Loaded after data-seaside.js.
------------------------------------------------------------------- */
(() => {
  const B = window.BUDGET, T = window.TRIP;
  const SEA = " · by the sea";

  /* new sea-view hotels at existing stops */
  const more = {
    sansebastian: [["Hotel Niza", 200, "On the La Concha promenade" + SEA]],
    cassis: [["Hôtel de la Plage Mahogany", 230, "On Bestouan beach" + SEA]],
    pdl: [["Hotel Marina Atlântico", 180, "On the marina" + SEA]],
    jerez: [["Parador de Cádiz", 200, "On the Atlantic, rooftop pool" + SEA]],
    charleston: [["Wild Dunes Resort, Isle of Palms", 450, "Oceanfront, 25 min from downtown" + SEA]],
    losangeles: [["Hotel Erwin, Venice Beach", 320, "On the Venice boardwalk" + SEA]],
    laguna: [["Pacific Edge Hotel", 350, "On the beach" + SEA]]
  };
  Object.entries(more).forEach(([id, hs]) => { const b = B.bases[id]; if (b) b.hotels.push(...hs); });

  /* label the sea-view hotels already listed */
  const already = [
    "Akelarre Hotel", "Hotel de Londres y de Inglaterra", "Palacio de Luces", "Hôtel du Palais, Biarritz", "Grand Hôtel Saint-Jean-de-Luz",
    "Eurostars Hotel Real", "Hotel Bahía", "Gran Hotel del Sella", "Hotel Atalaya, Mundaka", "Farmhouse agroturismo",
    "Hôtel Le Petit Nice", "Les Roches Blanches", "Hôtel Le Liautaud", "Les Bords de Mer", "Hotel Belles Rives", "Hôtel La Pérouse", "Le Mas du Langoustier",
    "Azor Hotel", "Simple harbour hotel", "Terceira Mar", "Aldeia da Fonte", "Sea-view guesthouse",
    "Hotel Albatroz", "Farol Hotel", "You and the Sea", "Vila Vita Parc",
    "Gran Hotel Miramar", "Hotel Arte Vida", "Hurricane Hotel", "Hotel Balcón de Europa",
    "The Sanctuary, Kiawah Island", "The King and Prince, St Simons", "Jekyll Ocean Club", "Tybee beach cottage", "Hotel Tybee", "Beach-house rental", "Omni Amelia Island",
    "Rosewood Miramar Beach", "Hotel Californian", "Shutters on the Beach", "Montage Laguna Beach", "Hotel del Coronado", "La Valencia", "Post Ranch Inn", "Mt Ada"
  ];
  Object.values(B.bases).forEach(b => b.hotels.forEach(h => { if (already.includes(h[0]) && !h[2].includes("by the sea")) h[2] += SEA; }));

  /* Explore pages: seaside stays, and a label on the ones already there */
  const g = q => "https://www.google.com/search?q=" + encodeURIComponent(q);
  const seaNames = ["Akelarre Hotel", "Palacio de Luces", "Les Roches Blanches", "Hôtel Le Petit Nice", "Santa Bárbara Eco-Beach Resort", "The Sanctuary, Kiawah Island"];
  const STAYS = {
    spain: [
      { name: "Hotel de Londres y de Inglaterra", tag: "Grand hotel on the bay", place: "San Sebastián", why: "1865 hotel right on La Concha beach. Ask for a bay-view room.", price: "€€€" },
      { name: "Hotel Niza", tag: "Simple, on the beach", place: "San Sebastián", why: "Small family hotel on the promenade, with rooms looking over La Concha.", price: "€€" },
      { name: "Grand Hôtel Saint-Jean-de-Luz", tag: "Thalasso spa on the beach", place: "Saint-Jean-de-Luz (add-on)", why: "Belle Époque hotel on the bay, with a seawater spa. 20 minutes over the French border.", price: "€€€" },
      { name: "Gran Hotel del Sella", tag: "Old palace on the beach", place: "Ribadesella, Asturias (add-on)", why: "On Santa Marina beach, a short walk to the cave paintings of Tito Bustillo.", price: "€€" }
    ],
    provence: [
      { name: "Hôtel de la Plage Mahogany", tag: "On a small beach", place: "Cassis", why: "Rooms with balconies over Bestouan beach, a 10-minute walk from the harbour.", price: "€€" },
      { name: "Les Bords de Mer", tag: "Rooftop pool on the sea", place: "Marseille (add-on)", why: "Modern hotel on the Corniche above the Catalans beach, with sea-view rooms.", price: "€€€" },
      { name: "Hotel Belles Rives", tag: "1920s, on the water", place: "Juan-les-Pins (Riviera add-on)", why: "F. Scott Fitzgerald's villa, now a hotel with its own jetty.", price: "€€€€" }
    ],
    azores: [
      { name: "Hotel Marina Atlântico", tag: "On the marina", place: "Ponta Delgada", why: "Sea-view rooms on the harbour front, walking distance to the old town.", price: "€€" },
      { name: "Terceira Mar", tag: "Ocean hotel", place: "Angra, Terceira (add-on)", why: "Above the sea with a saltwater pool, a short walk to Angra's old town.", price: "€" }
    ],
    lisbon: [
      { name: "Hotel Albatroz", tag: "Clifftop villa", place: "Cascais (add-on)", why: "A 19th-century royal villa on the rocks above the sea, 40 minutes from Lisbon.", price: "€€€" },
      { name: "Farol Hotel", tag: "Design hotel by a lighthouse", place: "Cascais (add-on)", why: "On the rocks at the edge of town, with a pool over the water.", price: "€€" },
      { name: "Vila Vita Parc", tag: "Clifftop resort and spa", place: "Western Algarve (add-on)", why: "Gardens down to a private beach, a big spa, and a 2-star restaurant.", price: "€€€€" }
    ],
    andalusia: [
      { name: "Gran Hotel Miramar", tag: "Seafront palace", place: "Málaga (add-on)", why: "1920s palace hotel facing the beach, 10 minutes' walk from the old town.", price: "€€€" },
      { name: "Parador de Cádiz", tag: "On the Atlantic", place: "Cádiz (Jerez add-on)", why: "Modern parador on the sea wall of the old town, with a rooftop pool.", price: "€€" },
      { name: "Hotel Arte Vida", tag: "On the beach, view to Africa", place: "Tarifa (add-on)", why: "Small hotel on Los Lances beach; on a clear day you see Morocco.", price: "€€" }
    ],
    lowcountry: [
      { name: "Wild Dunes Resort", tag: "Oceanfront", place: "Isle of Palms, SC", why: "Beach resort 25 minutes from downtown Charleston.", price: "$$$" },
      { name: "The King and Prince", tag: "Beach hotel", place: "St Simons Island, GA (add-on)", why: "1930s beach club turned hotel, on the sand.", price: "$$" },
      { name: "Hotel Tybee", tag: "Oceanfront", place: "Tybee Island, GA (add-on)", why: "Simple hotel on Savannah's beach, 30 minutes from the squares.", price: "$$" }
    ],
    socal: [
      { name: "Rosewood Miramar Beach", tag: "Montecito beachfront", place: "Santa Barbara", why: "Right on the sand, with a train line running quietly past. Splurge.", price: "$$$$$" },
      { name: "Shutters on the Beach", tag: "Santa Monica beachfront", place: "Los Angeles", why: "Shingled hotel on the sand, next to the Santa Monica pier and bike path.", price: "$$$$" },
      { name: "Hotel Erwin", tag: "On the boardwalk", place: "Venice Beach, Los Angeles", why: "Rooftop bar over Venice Beach. Lively rather than quiet.", price: "$$$" },
      { name: "Hotel del Coronado", tag: "1888 beach palace", place: "San Diego (add-on)", why: "Wooden Victorian resort on a wide beach.", price: "$$$$" }
    ]
  };
  T.destinations.forEach(d => {
    if (d.id === "scotland") return;
    d.stays.forEach(s => { if (seaNames.includes(s.name)) s.sea = true; });
    (STAYS[d.id] || []).forEach(s => { if (!d.stays.some(x => x.name === s.name)) d.stays.push(Object.assign({ url: g(s.name + " " + s.place.split(" (")[0]), sea: true }, s)); });
  });

  /* ---------------- more routes ---------------- */
  const R = [
    { id: "scotland-sea", kind: "single", name: "Scotland by the sea", color: "#3B4A6B", legs: [["edinburgh", 2], ["eastlothian", 2], ["standrews", 2], ["eastneuk", 2]], car: 3, transfers: [], flight: { BOS: 1050, BWI: 1100 }, hubs: ["dublin", "london"],
      how: "Into Edinburgh via Dublin or London. Train to North Berwick, then a car for Fife.", why: "Short moves along the coast, sea-view hotels, and never more than 2 hours from the airport.",
      extras: [["glasgow", 1, "start", 0, 0, "Start with a night in Glasgow."], ["gleneagles", 1, "after:eastlothian", 1, 0, "A night of spa and golf inland."], ["islay", 2, "after:edinburgh", 2, 40, "The whisky island. Includes the ferry."]] },
    { id: "spain-coast", kind: "single", name: "Basque & Asturian coast", color: "#1F6F5C", legs: [["sansebastian", 4], ["santander", 1], ["ribadesella", 3]], car: 4, transfers: [], flight: { BOS: 1150, BWI: 1200 }, hubs: ["london", "paris", "amsterdam"],
      how: "Fly into Bilbao or San Sebastián, out of Asturias. Car from the second half.", why: "A slower version of northern Spain: four nights in one place, then the coast west.",
      extras: [["urdaibai", 1, "start", 1, 0, "Start in Mundaka by the surf."], ["potes", 1, "after:santander", 1, 0, "Up into the Picos."], ["oviedo", 1, "end", 0, 0, "Cider houses before flying home."]] },
    { id: "lisbon-azores", kind: "combo", name: "Lisbon → Azores", color: "#2A6F80", legs: [["lisbon", 3], ["pdl", 2], ["furnas", 3]], car: 4, transfers: [["Flight, Lisbon → Ponta Delgada (2 h)", 120]], flight: { BOS: 950, BWI: 1000 }, hubs: [],
      how: "TAP into Lisbon, hop to São Miguel, fly home direct from Ponta Delgada to Boston.", why: "City and food first, then hot springs to finish.",
      extras: [["sintra", 1, "after:lisbon", 0, 0, "Palaces in the forest."], ["cascais", 1, "after:lisbon", 0, 0, "Seaside town and Guincho beach."], ["mosteiros", 1, "after:pdl", 1, 0, "The wild west coast of São Miguel."]] },
    { id: "andalusia-lisbon", kind: "combo", name: "Seville → Algarve → Lisbon", color: "#A8352A", legs: [["seville", 3], ["algarve", 2], ["lisbon", 3]], car: 3, transfers: [["AVE, Madrid → Seville", 70]], flight: { BOS: 1100, BWI: 1150 }, hubs: [],
      how: "Into Madrid, AVE to Seville, drive west along the coast, fly home from Lisbon.", why: "Orange blossom, then cliffs and beaches, then a city. Leaves Seville before Holy Week.",
      extras: [["jerez", 1, "after:seville", 1, 0, "Sherry bodegas and Cádiz."], ["comporta", 2, "after:algarve", 1, 0, "Dune beaches south of Lisbon."], ["sintra", 1, "end", 0, 0, "A last night in the Sintra hills."]] },
    { id: "provence-riviera", kind: "combo", name: "Provence → Riviera", color: "#9C5518", legs: [["aix", 3], ["luberon", 2], ["riviera", 3]], car: 3, transfers: [["TGV, CDG → Aix", 75]], flight: { BOS: 1100, BWI: 1150 }, hubs: ["paris"],
      how: "Paris CDG, TGV to Aix, drive east, fly home from Nice via Paris.", why: "Villages and markets first, then the sea at the end.",
      extras: [["cassis", 1, "after:luberon", 1, 0, "A night in Cassis on the way east."], ["verdon", 1, "after:luberon", 1, 0, "Verdon Gorge on the way to the coast."]] },
    { id: "socal-coast", kind: "single", name: "Southern California coast", color: "#A8622A", domestic: true, nightsTarget: 9, legs: [["laguna", 3], ["losangeles", 3], ["santabarbara", 3]], car: 7, transfers: [], flight: { BOS: 620, BWI: 580 }, hubs: [],
      how: "Fly into Orange County or LA, drive up the coast, fly home from LA or Santa Barbara.", why: "No desert driving: beaches, Elizabeth's friends in LA, and Santa Barbara.",
      extras: [["sandiego", 2, "start", 1, 0, "Start in San Diego."], ["catalina", 1, "after:laguna", 0, 40, "Island night off the coast. Includes the ferry."], ["ojai", 2, "after:losangeles", 1, 0, "Valley night in Ojai."], ["santaynez", 1, "end", 1, 0, "Wine country to finish."]] }
  ];
  R.forEach(r => { if (!B.itineraries.some(i => i.id === r.id)) B.itineraries.push(r); });
  const lcc = { "scotland-sea": ["EDI", "EDI"], "spain-coast": ["BIO", "OVD"], "lisbon-azores": ["LIS", "LIS"], "provence-riviera": ["MRS", "MRS"] };
  B.itineraries.forEach(it => { if (lcc[it.id]) it.lcc = { in: lcc[it.id][0], out: lcc[it.id][1] }; });
  const at = B.itineraries.find(i => i.id === "provence-riviera"); at.transfers[0][2] = "arrival";

  /* look and entry rules for the new routes */
  Object.assign(window.THEME_FOR || (window.THEME_FOR = {}), { "scotland-sea": "scotland", "spain-coast": "spain", "lisbon-azores": "azores", "andalusia-lisbon": "andalusia", "provence-riviera": "provence", "socal-coast": "socal" });

  /* legs between stops these routes add */
  Object.assign(B.segs, {
    "eastlothian>standrews": [["car", 2, 0, "Over the Forth and up through Fife."]],
    "standrews>eastneuk": B.segs["standrews>eastneuk"] || [["car", 0.3, 0, "Coast road south."]],
    "sansebastian>santander": [["car", 1.6, 10, "A-8 along the coast."], ["bus", 2.5, 20, "ALSA coach."]],
    "santander>ribadesella": [["car", 1.4, 0, "A-8 west into Asturias."]],
    "lisbon>pdl": [["flight", 2, 0, "TAP or SATA, Lisbon → Ponta Delgada, several a day.", "incl"]],
    "pdl>furnas": B.segs["pdl>furnas"] || [["car", 0.9, 0, "Across the island."]],
    "seville>algarve": [["car", 2.5, 0, "A-49 west over the Guadiana into Portugal."]],
    "algarve>lisbon": [["car", 2.8, 25, "A2 north over the 25 de Abril bridge."], ["train", 3.5, 30, "Train from Tunes or Faro to Lisbon."]],
    "luberon>riviera": [["car", 2.5, 25, "A8 east past Aix and Fréjus."]],
    "laguna>losangeles": [["car", 1.5, 0, "Pacific Coast Highway north, or the 405 (traffic)."]],
    "losangeles>santabarbara": [["car", 2, 0, "101 north along the coast past Malibu."], ["train", 2.7, 35, "Amtrak Pacific Surfliner from Union Station, along the sea."]]
  });
})();
