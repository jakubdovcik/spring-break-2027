/* ------------------------------------------------------------------
   Budget data. Every price is a rough March 2027 ballpark in USD.
   Hotels: room per night for two, taxes included.
   Dinners: per couple, tasting menu with a modest wine pairing.
   Flights: economy round trip per person, including any short
   European connection on the same ticket.
------------------------------------------------------------------- */
window.BUDGET = {
  nightsTarget: 8,
  cabins: { eco: ["Economy", 1], prem: ["Premium economy", 1.9], biz: ["Business", 4.5] },
  daily: { lean: ["Lean", 85], mid: ["Comfortable", 150], treat: ["Treat ourselves", 240] }, // per person per day: meals (not the splurge dinners), coffee, museums, small things
  carPerDay: 85,        // compact automatic + basic insurance + fuel/tolls/parking
  airportTaxis: 140,    // a few airport/station transfers, for two
  spa: 380,             // a couples' treatment or two
  insurancePct: 0.05,
  bufferPct: 0.10,

  /* Fly to a hub on a round trip, then a separate low-cost flight (or train) each way */
  hubFare: { BOS: { london: 650, paris: 700, amsterdam: 700 }, BWI: { london: 720, paris: 780, amsterdam: 780 } },
  hubFrom: { BOS: { london: "BA, Virgin, Delta, JetBlue to LHR", paris: "Air France, Delta to CDG", amsterdam: "KLM, Delta to AMS" }, BWI: { london: "BA direct to LHR", paris: "via IAD (United, Air France)", amsterdam: "via IAD (KLM)" } },
  hubChange: { london: 35, paris: 35, amsterdam: 0 }, // pp each way: getting from LHR to Gatwick/Stansted, or CDG to Orly
  lccBag: 45,                                         // per checked bag, per low-cost flight
  lccAirports: { BIO: "Bilbao", OVD: "Asturias", EDI: "Edinburgh", MRS: "Marseille", BOD: "Bordeaux", SVQ: "Seville", AGP: "Málaga", LIS: "Lisbon", rail: "Paris, for the TGV" },
  lcc: {
    BIO: { london: ["easyJet, Vueling, BA", 110, "LGW / LHR"], paris: ["Vueling, Air France", 110, "ORY / CDG"], amsterdam: ["Vueling, KLM", 130, "AMS"] },
    OVD: { london: ["easyJet, Vueling (some days)", 120, "LGW"], paris: ["Volotea, Vueling (some days)", 120, "ORY"], amsterdam: ["via Madrid (Iberia, KLM)", 170, "AMS"] },
    EDI: { london: ["easyJet, BA", 70, "LGW / LHR"], paris: ["easyJet, Air France", 100, "CDG"], amsterdam: ["easyJet, KLM", 100, "AMS"] },
    MRS: { london: ["easyJet, BA, Ryanair", 100, "LGW / STN"], paris: ["TGV from Gare de Lyon, 3 h 10", 80, "Paris"], amsterdam: ["Transavia, KLM", 110, "AMS"] },
    BOD: { london: ["easyJet, Ryanair", 90, "LGW / STN"], paris: ["TGV from Montparnasse, 2 h 05", 70, "Paris"], amsterdam: ["Transavia, KLM", 110, "AMS"] },
    SVQ: { london: ["Ryanair, easyJet, BA", 100, "STN / LGW"], paris: ["Transavia, Vueling", 100, "ORY"], amsterdam: ["Transavia, Vueling", 110, "AMS"] },
    AGP: { london: ["easyJet, Ryanair, BA", 90, "LGW / STN"], paris: ["Transavia, easyJet", 90, "ORY"], amsterdam: ["Transavia, easyJet", 100, "AMS"] },
    LIS: { london: ["easyJet, TAP, BA", 90, "LGW / LHR"], paris: ["Transavia, easyJet, TAP", 90, "ORY"], amsterdam: ["Transavia, TAP", 100, "AMS"] },
    rail: { london: ["Eurostar to Paris, 2 h 20", 120, "St Pancras"], paris: ["Already there", 0, "Paris"], amsterdam: ["Eurostar to Paris, 3 h 20", 100, "Centraal"] }
  },

  bases: {
    /* ---- Spain ---- */
    bilbao: { name: "Bilbao", lat: 43.263, lng: -2.935, f: .9, hotels: [["Gran Hotel Domine", 240, "Faces the Guggenheim"], ["Hotel Carlton", 180, "Classic grand hotel"], ["Hotel Tayko", 120, "Small, in the old town"]], dine: [["Azurmendi", 780, 3], ["Nerua", 460, 1]] },
    sansebastian: { name: "San Sebastián", lat: 43.3183, lng: -1.9812, f: .95, hotels: [["Akelarre Hotel", 620, "Cliff-top, spa"], ["Hotel María Cristina", 460, "Belle Époque"], ["Hotel Arima", 290, "Forest spa"], ["Hotel de Londres y de Inglaterra", 240, "On La Concha"], ["Pensión in the Parte Vieja", 140, "Simple, central"]], dine: [["Arzak", 820, 3], ["Akelarre", 860, 3], ["Martín Berasategui", 860, 3], ["Mugaritz", 920, 2], ["Asador Etxebarri (day trip)", 900, 1], ["Elkano, Getaria", 360, 1]] },
    asturias: { name: "Asturias · Picos", lat: 43.351, lng: -5.129, f: .8, hotels: [["Palacio de Luces", 230, "Palace by the sea"], ["Parador de Cangas de Onís", 160, "Riverside monastery"], ["Casona rural", 100, "Stone farmhouse B&B"]], dine: [["Casa Marcial", 460, 2], ["Cenador de Amós (en route)", 720, 3], ["Casa Gerardo", 260, 1]] },
    /* ---- France ---- */
    sjdl: { name: "Saint-Jean-de-Luz · Biarritz", lat: 43.388, lng: -1.663, f: 1, hotels: [["Hôtel du Palais, Biarritz", 720, "Napoleon III palace"], ["Grand Hôtel Saint-Jean-de-Luz", 290, "Thalasso spa on the beach"], ["Hôtel La Devinière", 160, "Antique-filled, cozy"]], dine: [["L'Impertinent, Biarritz", 380, 1], ["Ostalamer, Saint-Jean-de-Luz", 300, 0]] },
    bordeaux: { name: "Bordeaux wine country", lat: 44.84, lng: -0.58, f: 1, hotels: [["Hostellerie de Plaisance, Saint-Émilion", 480, "Above the village"], ["Les Sources de Caudalie", 390, "Vinotherapy spa in the vines"], ["Hôtel in central Bordeaux", 160, "Simple and walkable"]], dine: [["Le Pressoir d'Argent", 720, 2], ["La Grand'Vigne (Caudalie)", 650, 2], ["Logis de la Cadène, Saint-Émilion", 400, 1]] },
    loire: { name: "Loire Valley", lat: 47.4133, lng: .9826, f: .95, hotels: [["Domaine des Hauts de Loire", 360, "Hunting lodge, park"], ["Les Hautes Roches", 270, "Rooms carved into the cliff"], ["Le Choiseul, Amboise", 200, "Riverside"], ["Château B&B", 140, "Chambres d'hôtes in a château"]], dine: [["Fleur de Loire, Blois", 620, 2], ["Domaine des Hauts de Loire", 520, 1]] },
    lyon: { name: "Lyon", lat: 45.764, lng: 4.8357, f: 1, hotels: [["Villa Florentine", 320, "Hilltop, city views"], ["Cour des Loges", 290, "Renaissance courtyards"], ["Hôtel in the Presqu'île", 170, "Central"]], dine: [["La Mère Brazier", 720, 2], ["Paul Bocuse", 760, 2], ["A bouchon (Daniel et Denise)", 150, 0]] },
    aix: { name: "Aix-en-Provence", lat: 43.5297, lng: 5.4474, f: 1, hotels: [["Villa Gallici", 460, "Villa among cypresses"], ["Hôtel Le Pigonnet", 310, "Cézanne's garden"], ["Hôtel Cézanne", 170, "Central boutique"]], dine: [["Le Saint-Estève", 560, 2], ["Pierre Reboul", 360, 1]] },
    luberon: { name: "Luberon", lat: 43.7638, lng: 5.3626, f: 1, hotels: [["La Bastide de Gordes", 560, "Cliffside palace"], ["Coquillade Provence", 500, "Hamlet + big spa"], ["Domaine de Fontenille", 420, "Winery + spa"], ["Mas / B&B", 150, "Stone farmhouse"]], dine: [["Le Champ des Lunes", 360, 1], ["La Closerie, Ansouis", 260, 1]] },
    cassis: { name: "Cassis · Marseille", lat: 43.2148, lng: 5.5375, f: 1, hotels: [["Hôtel Le Petit Nice", 720, "3★ with rooms"], ["Les Roches Blanches", 460, "Cliff-edge pool"], ["Hôtel Le Liautaud", 160, "On the harbour"]], dine: [["Le Petit Nice – Passedat", 1000, 3], ["AM par Alexandre Mazzia", 900, 3], ["La Villa Madie", 600, 2], ["Chez Fonfon bouillabaisse", 220, 0]] },
    /* ---- Scotland ---- */
    edinburgh: { name: "Edinburgh", lat: 55.9533, lng: -3.1883, f: 1.15, hotels: [["The Witchery suites", 660, "Gothic, candlelit"], ["The Balmoral", 520, "Grand, with spa"], ["Prestonfield House", 400, "Baroque country house"], ["Market Street Hotel", 230, "Modern, central"], ["Simple guesthouse", 160, "New Town B&B"]], dine: [["The Kitchin", 460, 1], ["Timberyard", 420, 1], ["Condita", 420, 1], ["Heron", 360, 1]] },
    gleneagles: { name: "Gleneagles", lat: 56.284, lng: -3.747, f: 1.2, hotels: [["Gleneagles", 660, "Estate + spa"], ["Cromlix (nearby)", 420, "Country house"]], dine: [["Restaurant Andrew Fairlie", 760, 2]] },
    braemar: { name: "Braemar · Cairngorms", lat: 57.006, lng: -3.399, f: 1.15, hotels: [["The Fife Arms", 760, "Art-filled lodge"], ["Braemar Lodge", 160, "Simple and warm"]], dine: [["Clunie Dining Room (Fife Arms)", 320, 0]] },
    standrews: { name: "St Andrews", lat: 56.3398, lng: -2.7967, f: 1.15, hotels: [["Rusacks", 420, "Over the Old Course"], ["Townhouse B&B", 160, "Simple"]], dine: [["The Seafood Ristorante", 260, 0]] },
    /* ---- Portugal & islands ---- */
    lisbon: { name: "Lisbon", lat: 38.7223, lng: -9.1393, f: .8, hotels: [["Bairro Alto Hotel", 420, "Rooftop terrace"], ["Memmo Alfama", 300, "Pool over Alfama"], ["Guesthouse", 140, "Simple, central"]], dine: [["Belcanto", 700, 2], ["Cervejaria Ramiro", 140, 0]] },
    comporta: { name: "Comporta", lat: 38.38, lng: -8.786, f: .85, hotels: [["Sublime Comporta", 520, "Pine-forest cabins"], ["Casas na Areia", 360, "Sand-floor cabins"], ["Rural guesthouse", 150, "Simple"]], dine: [["Sal (on the beach)", 200, 0]] },
    alentejo: { name: "Alentejo", lat: 38.5714, lng: -7.9135, f: .75, hotels: [["São Lourenço do Barrocal", 450, "Farm-estate retreat"], ["Évora guesthouse", 130, "Simple"]], dine: [["Herdade do Esporão", 260, 0]] },
    pdl: { name: "Ponta Delgada", lat: 37.7412, lng: -25.6756, f: .7, hotels: [["Senhora da Rosa", 210, "Garden hotel"], ["Simple harbour hotel", 120, "Simple"]], dine: [["A Tasca", 110, 0]] },
    furnas: { name: "Furnas", lat: 37.7726, lng: -25.3122, f: .7, hotels: [["Octant Furnas", 260, "Thermal pool"], ["Terra Nostra Garden Hotel", 210, "In the gardens"], ["Guesthouse", 110, "Simple"]], dine: [["Cozido at Tony's", 90, 0]] },
    /* ---- Andalusia ---- */
    seville: { name: "Seville", lat: 37.3891, lng: -5.9845, f: .85, hotels: [["Hotel Alfonso XIII", 520, "Mudéjar palace"], ["Corral del Rey", 380, "17th-c. townhouse"], ["Patio guesthouse", 140, "Simple"]], dine: [["Cañabota", 420, 1], ["Abantal", 360, 1]] },
    ronda: { name: "Ronda", lat: 36.7423, lng: -5.1666, f: .8, hotels: [["Parador de Ronda", 210, "On the gorge"], ["Simple hotel", 110, "Simple"]], dine: [["Bardal", 420, 2]] },
    granada: { name: "Granada", lat: 37.1773, lng: -3.5986, f: .8, hotels: [["Parador de Granada (in the Alhambra)", 460, "Inside the Alhambra"], ["Carmen in the Albaicín", 180, "Garden house"]], dine: [["Arriaga", 300, 0]] },
    /* ---- Lowcountry ---- */
    charleston: { name: "Charleston", lat: 32.7765, lng: -79.9311, f: 1.1, hotels: [["Hotel Bennett", 650, "Grand, on Marion Square"], ["Zero George", 480, "Restored 1800s houses"], ["Wentworth Mansion", 520, "Gilded Age mansion"], ["Planters Inn", 380, "Historic, central"], ["Simple downtown hotel", 230, "Simple"]], dine: [["FIG", 320, 0], ["The Ordinary", 280, 0], ["Husk", 240, 0]] },
    lowcountry: { name: "Palmetto Bluff · Kiawah", lat: 32.18, lng: -80.87, f: 1.15, hotels: [["The Sanctuary, Kiawah Island", 780, "Oceanfront resort + spa"], ["Montage Palmetto Bluff", 950, "Riverside resort + spa"], ["Beaufort inn", 240, "Small-town B&B"]], dine: [["Resort dinner on the water", 320, 0]] },
    savannah: { name: "Savannah", lat: 32.0809, lng: -81.0912, f: 1, hotels: [["Perry Lane Hotel", 460, "Stylish, rooftop bar"], ["The Gastonian", 330, "Fireplace in every room"], ["Hamilton-Turner Inn", 350, "Victorian on Lafayette Square"], ["Simple historic-district hotel", 200, "Simple"]], dine: [["The Grey", 280, 0], ["Elizabeth on 37th", 300, 0], ["Mrs. Wilkes' Dining Room (lunch)", 60, 0]] },
    /* ---- Bookend cities ---- */
    paris: { name: "Paris", lat: 48.8566, lng: 2.3522, f: 1.3, city: true, hotels: [["Le Pavillon de la Reine", 620, "Place des Vosges"], ["Hôtel Bachaumont", 340, "Stylish, central"], ["Simple Marais hotel", 220, "Simple"]], dine: [["Septime", 380, 1], ["Le Bon Georges (bistro)", 220, 0]] },
    london: { name: "London", lat: 51.5074, lng: -.1278, f: 1.4, city: true, hotels: [["Claridge's", 950, "Art-deco icon"], ["Ham Yard Hotel", 560, "Soho, cozy"], ["The Hoxton Holborn", 290, "Simple, fun"]], dine: [["Brat", 320, 1], ["Dishoom (breakfast)", 70, 0]] },
    amsterdam: { name: "Amsterdam", lat: 52.3676, lng: 4.9041, f: 1.25, city: true, hotels: [["Pulitzer", 460, "Canal houses"], ["The Hoxton Amsterdam", 280, "Simple"]], dine: [["Rijks", 380, 1]] },
    dublin: { name: "Dublin", lat: 53.3498, lng: -6.2603, f: 1.2, city: true, hotels: [["The Merrion", 520, "Georgian townhouses"], ["The Dean", 230, "Simple"]], dine: [["Chapter One", 560, 2]] }
  },

  bookendCities: ["paris", "london", "amsterdam", "dublin"],

  itineraries: [
    /* ------------ single region (matches the Explore tab) ------------ */
    { id: "spain", kind: "single", name: "Northern Spain", color: "#1F6F5C", legs: [["bilbao", 2], ["sansebastian", 3], ["asturias", 3]], car: 6, transfers: [], flight: { BOS: 900, BWI: 960 }, hubs: ["london", "paris", "amsterdam"], how: "Fly into Bilbao via a hub, out of Asturias. Car for the coast." },
    { id: "scotland", kind: "single", name: "Scotland", color: "#3B4A6B", legs: [["edinburgh", 3], ["gleneagles", 2], ["braemar", 2], ["standrews", 1]], car: 5, transfers: [], flight: { BOS: 820, BWI: 900 }, hubs: ["dublin", "london"], how: "Fly into Edinburgh via Dublin or London. Car from Gleneagles onward." },
    { id: "provence", kind: "single", name: "South of France", color: "#B5651D", legs: [["aix", 3], ["luberon", 3], ["cassis", 2]], car: 4, transfers: [["TGV, CDG airport → Aix", 75]], flight: { BOS: 860, BWI: 920 }, hubs: ["paris", "london", "amsterdam"], how: "Fly into Paris CDG and take the TGV south. Fly home from Marseille via a hub." },
    { id: "azores", kind: "single", name: "Azores", color: "#3E7CB1", legs: [["pdl", 3], ["furnas", 5]], car: 6, transfers: [], flight: { BOS: 600, BWI: 760 }, hubs: [], how: "Direct BOS → PDL. From BWI, connect in Boston or Lisbon." },
    { id: "lisbon", kind: "single", name: "Lisbon & Alentejo", color: "#8E4E7E", legs: [["lisbon", 3], ["comporta", 3], ["alentejo", 2]], car: 5, transfers: [], flight: { BOS: 720, BWI: 780 }, hubs: [], how: "Direct TAP from BOS and IAD. Car after Lisbon." },
    { id: "andalusia", kind: "single", name: "Andalusia", color: "#C0392B", legs: [["seville", 4], ["ronda", 2], ["granada", 2]], car: 3, transfers: [["AVE, Madrid → Seville", 70]], flight: { BOS: 860, BWI: 900 }, hubs: [], how: "Direct to Madrid, then the AVE. Fly home from Málaga or Granada via Madrid." },

    /* ------------ mix & match ------------ */
    { id: "loire-basque", kind: "combo", name: "Loire Valley → San Sebastián", color: "#6B4E9B", legs: [["loire", 3], ["sansebastian", 4], ["bilbao", 1]], car: 3, transfers: [["TGV, Paris → Tours (1 h)", 55], ["TGV, Tours → Hendaye (~4 h 30)", 95]], flight: { BOS: 920, BWI: 960 }, hubs: ["paris"], how: "Half central France, half Basque. Fly into Paris, TGV to the châteaux, then a long, scenic train south to the border. Fly home from Bilbao.", why: "Châteaux, river walks and a slow pace, then pintxos and the beach." },
    { id: "basque-bordeaux", kind: "combo", name: "Basque coast → Bordeaux vineyards", color: "#7A2E3B", legs: [["bilbao", 1], ["sansebastian", 3], ["sjdl", 1], ["bordeaux", 3]], car: 4, transfers: [["Train, Hendaye → Bordeaux (2 h 20)", 50]], flight: { BOS: 950, BWI: 990 }, hubs: ["paris", "london", "amsterdam"], how: "Into Bilbao, out of Bordeaux, or TGV to Paris (2 h) and fly from CDG. Spanish and French Basque, then the vinotherapy spa.", why: "Probably the best mix of food and relaxing on this list." },
    { id: "lyon-provence", kind: "combo", name: "Lyon → Provence", color: "#A0522D", legs: [["lyon", 3], ["aix", 2], ["luberon", 3]], car: 3, transfers: [["TGV, CDG → Lyon (2 h)", 70], ["TGV, Lyon → Aix (1 h 15)", 50]], flight: { BOS: 880, BWI: 930 }, hubs: ["paris"], how: "Train only until the Luberon. Fly home from Marseille.", why: "France's food capital, then Elizabeth's Aix and the hill villages." },
    { id: "provence-basque", kind: "combo", name: "Provence → San Sebastián", color: "#C26A3A", legs: [["aix", 2], ["luberon", 2], ["sansebastian", 3], ["bilbao", 1]], car: 3, transfers: [["TGV, CDG → Aix", 75], ["Flight, Marseille → Bilbao via Paris or Barcelona", 170]], flight: { BOS: 940, BWI: 980 }, hubs: ["paris"], how: "Both first picks, Kubs's and Elizabeth's, at the cost of one long travel day in the middle (~5 h door to door by air, ~7 h by train via Bordeaux).", why: "Elizabeth's Aix and Kubs's pintxos in one trip." },
    { id: "edinburgh-basque", kind: "combo", name: "Edinburgh → San Sebastián", color: "#2F5F7A", legs: [["edinburgh", 3], ["sansebastian", 4], ["bilbao", 1]], car: 1, transfers: [["Flight, Edinburgh → Bilbao via London", 180]], flight: { BOS: 950, BWI: 990 }, hubs: ["london", "dublin"], how: "Into Edinburgh via Dublin or London, one intra-Europe hop, home from Bilbao.", why: "Cozy and cold first, then a mild coast and the best food." },
    { id: "edinburgh-provence", kind: "combo", name: "Edinburgh → Provence", color: "#5A5A8A", legs: [["edinburgh", 3], ["aix", 2], ["luberon", 3]], car: 3, transfers: [["Flight, Edinburgh → Marseille (easyJet, direct some days)", 150]], flight: { BOS: 900, BWI: 950 }, hubs: ["london", "dublin", "paris"], how: "Both of Elizabeth's picks. Fly home from Marseille.", why: "If Elizabeth is choosing." }
  ]
};

/* Lowcountry trip, which airports the low-cost option uses, and which
   transfers a low-cost flight replaces. */
(() => {
  const B = window.BUDGET;
  const i = B.itineraries.findIndex(x => x.id === "andalusia");
  B.itineraries.splice(i + 1, 0, { id: "lowcountry", kind: "single", name: "Charleston & Savannah", color: "#5B7F5A", domestic: true, nightsTarget: 9, legs: [["charleston", 4], ["lowcountry", 2], ["savannah", 3]], car: 6, transfers: [], flight: { BOS: 340, BWI: 280 }, hubs: [], how: "Daytime direct flight into Charleston, a car down the coast, direct home from Savannah. No jet lag, and you can leave on Friday for a 9th night." });
  const LCC = { spain: ["BIO", "OVD"], scotland: ["EDI", "EDI"], provence: ["MRS", "MRS"], lisbon: ["LIS", "LIS"], andalusia: ["SVQ", "AGP"], "loire-basque": ["rail", "BIO"], "basque-bordeaux": ["BIO", "BOD"], "lyon-provence": ["rail", "MRS"], "provence-basque": ["MRS", "BIO"], "edinburgh-basque": ["EDI", "BIO"], "edinburgh-provence": ["EDI", "MRS"] };
  const ARRIVAL = { provence: 0, andalusia: 0, "provence-basque": 0 };
  B.itineraries.forEach(it => {
    if (LCC[it.id]) it.lcc = { in: LCC[it.id][0], out: LCC[it.id][1] };
    if (it.id in ARRIVAL) it.transfers[ARRIVAL[it.id]][2] = "arrival";
  });
})();
