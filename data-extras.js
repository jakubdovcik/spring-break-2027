/* ------------------------------------------------------------------
   Add-on stops, Southern California, and the Delta / Air France / KLM
   preference. Loaded after data-budget.js and data-see.js.

   Add-on tuple: [base, default nights, where it goes, extra car days,
                  extra transfer per person, why]
   where: "start" | "end" | "after:<base>"
------------------------------------------------------------------- */
(() => {
  const B = window.BUDGET, SEE = window.SEE;

  Object.assign(B.bases, {
    /* Scotland */
    glasgow: { name: "Glasgow", lat: 55.8642, lng: -4.2518, f: 1.1, hotels: [["Kimpton Blythswood Square", 300, "Georgian townhouse + spa"], ["Hotel du Vin, One Devonshire Gardens", 330, "West End townhouses"], ["Simple city hotel", 150, "Simple"]], dine: [["Cail Bruich", 420, 1], ["Ox and Finch", 180, 0]] },
    glencoe: { name: "Glencoe · Fort William", lat: 56.6826, lng: -5.1023, f: 1.1, hotels: [["Inverlochy Castle", 900, "Victorian castle"], ["Kingshouse Hotel", 260, "Remote inn under the mountains"], ["Glencoe Inn", 180, "Lochside"]], dine: [["Inverlochy Castle dining room", 450, 0], ["Clachaig Inn", 90, 0]] },
    skye: { name: "Isle of Skye", lat: 57.27, lng: -6.21, f: 1.15, hotels: [["Kinloch Lodge", 450, "Lodge on the loch"], ["Skeabost House", 280, "Country house"], ["Simple B&B", 150, "Simple"]], dine: [["The Three Chimneys", 480, 0], ["Kinloch Lodge dining room", 400, 0]] },
    inverness: { name: "Inverness · Loch Ness", lat: 57.4778, lng: -4.2247, f: 1.1, hotels: [["Ness Walk", 380, "Riverside"], ["Rocpool Reserve", 320, "Boutique"], ["Simple guesthouse", 140, "Simple"]], dine: [["Rocpool restaurant", 200, 0]] },
    /* Spain */
    rioja: { name: "Rioja Alavesa", lat: 42.5156, lng: -2.6178, f: .85, hotels: [["Hotel Marqués de Riscal", 470, "Frank Gehry winery hotel"], ["Hotel Viura", 220, "Design hotel among vines"], ["Wine-village casa rural", 120, "Simple"]], dine: [["Marqués de Riscal restaurant", 420, 1], ["Venta Moncalvillo", 400, 2]] },
    cantabria: { name: "Santillana · Cantabria", lat: 43.3896, lng: -4.1072, f: .85, hotels: [["Parador de Santillana Gil Blas", 180, "On the medieval square"], ["Casa del Marqués", 150, "15th-c. house"]], dine: [["Cenador de Amós", 720, 3], ["El Serbal, Santander", 300, 1]] },
    /* France */
    avignon: { name: "Avignon", lat: 43.9493, lng: 4.8055, f: 1, hotels: [["La Mirande", 520, "18th-c. mansion by the palace"], ["Hôtel d'Europe", 280, "Classic"], ["Simple hotel", 140, "Simple"]], dine: [["La Mirande", 450, 1], ["Christian Etienne", 300, 0]] },
    alpilles: { name: "Saint-Rémy · Les Baux", lat: 43.789, lng: 4.8317, f: 1.05, hotels: [["Baumanière, Les Baux", 600, "3★ with rooms"], ["Hôtel de Tourrel", 380, "Townhouse in Saint-Rémy"], ["Mas B&B", 160, "Simple"]], dine: [["L'Oustau de Baumanière", 900, 3], ["Le Bistrot du Paradou", 140, 0]] },
    camargue: { name: "Arles · Camargue", lat: 43.6766, lng: 4.6278, f: 1, hotels: [["Mas de Peint", 350, "Bull farm in the marshes"], ["L'Arlatan", 300, "Colourful art hotel"], ["Simple hotel", 130, "Simple"]], dine: [["La Chassagnette", 380, 1], ["Le Gibolin", 120, 0]] },
    riviera: { name: "Nice · Côte d'Azur", lat: 43.7102, lng: 7.262, f: 1.15, hotels: [["Hotel Belles Rives", 600, "1920s, on the water"], ["Hôtel La Pérouse", 350, "Over the Baie des Anges"], ["Simple Nice hotel", 170, "Simple"]], dine: [["Mirazur, Menton", 1200, 3], ["La Merenda", 120, 0]] },
    /* Portugal */
    sintra: { name: "Sintra", lat: 38.7979, lng: -9.3906, f: .85, hotels: [["Tivoli Palácio de Seteais", 380, "18th-c. palace"], ["Penha Longa", 320, "Resort + spa"], ["Quinta guesthouse", 150, "Simple"]], dine: [["LAB by Sergi Arola", 400, 1], ["Tascantiga", 80, 0]] },
    douro: { name: "Porto · Douro Valley", lat: 41.16, lng: -7.79, f: .85, hotels: [["Six Senses Douro Valley", 650, "Spa above the vines"], ["Quinta Nova", 250, "Wine estate"], ["Porto city hotel", 160, "Simple"]], dine: [["The Yeatman, Porto", 600, 2], ["DOC", 300, 0]] },
    /* Andalusia */
    cordoba: { name: "Córdoba", lat: 37.8882, lng: -4.7794, f: .8, hotels: [["Hospes Palacio del Bailío", 300, "Palace over Roman ruins"], ["Patio guesthouse", 110, "Simple"]], dine: [["Noor", 450, 3], ["Bodegas Campos", 120, 0]] },
    jerez: { name: "Jerez · Cádiz", lat: 36.6866, lng: -6.1361, f: .8, hotels: [["Casa Palacio María Luisa", 350, "Palace hotel"], ["Hotel Bodega Tío Pepe", 250, "Inside a sherry bodega"], ["Cádiz guesthouse", 120, "Simple"]], dine: [["Aponiente, El Puerto", 900, 3], ["LÚ Cocina y Alma", 500, 1]] },
    /* Georgia coast */
    jekyll: { name: "Jekyll · Cumberland Island", lat: 31.0605, lng: -81.4211, f: 1, hotels: [["Greyfield Inn, Cumberland Island", 900, "Island mansion, meals included"], ["Jekyll Island Club Resort", 320, "1888 millionaires' club"], ["The King and Prince, St Simons", 250, "Beach hotel"]], dine: [["Grand Dining Room, Jekyll Island Club", 220, 0]] },
    /* Southern California */
    palmsprings: { name: "Palm Springs", lat: 33.8303, lng: -116.5453, f: 1.15, hotels: [["Parker Palm Springs", 500, "Jonathan Adler retreat"], ["Two Bunch Palms", 450, "Hot-spring spa resort"], ["Korakia Pensione", 380, "Moroccan villa"], ["Mid-century motel", 200, "Simple, with a pool"]], dine: [["Mr. Lyons", 250, 0], ["Workshop Kitchen + Bar", 220, 0], ["Cheeky's (brunch)", 70, 0]] },
    joshuatree: { name: "Joshua Tree", lat: 34.1347, lng: -116.3131, f: 1.05, hotels: [["Design cabin with hot tub", 280, "Stargazing deck"], ["Sacred Sands", 260, "Two suites, desert views"], ["Simple motel", 130, "Simple"]], dine: [["La Copine", 160, 0], ["Pappy & Harriet's", 100, 0]] },
    ojai: { name: "Ojai", lat: 34.448, lng: -119.2429, f: 1.2, hotels: [["Ojai Valley Inn", 650, "Spa resort in the valley"], ["Caravan Outpost", 250, "Airstreams"], ["Simple inn", 200, "Simple"]], dine: [["Olivella", 350, 0], ["Ojai Rôtie", 80, 0]] },
    santabarbara: { name: "Santa Barbara", lat: 34.4208, lng: -119.6982, f: 1.25, hotels: [["San Ysidro Ranch", 1300, "Cottages with fireplaces"], ["Hotel Californian", 500, "Spanish revival, by the beach"], ["Rosewood Miramar Beach", 1100, "Montecito beachfront"], ["Simple motel", 220, "Simple"]], dine: [["Caruso's (Rosewood Miramar)", 600, 1], ["Loquita", 180, 0], ["Bettina", 90, 0]] },
    deathvalley: { name: "Death Valley", lat: 36.5054, lng: -117.0794, f: 1.1, hotels: [["The Inn at Death Valley", 450, "1927 oasis inn, spring-fed pool"], ["The Ranch at Death Valley", 250, "Simple"]], dine: [["Inn at Death Valley dining room", 220, 0]] },
    anzaborrego: { name: "Anza-Borrego", lat: 33.256, lng: -116.3755, f: 1, hotels: [["La Casa del Zorro", 300, "Desert resort"], ["Borrego Valley Inn", 200, "Small, adults only"]], dine: [["Carlee's", 80, 0]] },
    sandiego: { name: "San Diego · La Jolla", lat: 32.8328, lng: -117.2713, f: 1.15, hotels: [["Hotel del Coronado", 550, "1888 beach palace"], ["La Valencia", 500, "Pink cliff hotel, La Jolla"], ["Simple hotel", 200, "Simple"]], dine: [["Addison", 900, 3], ["Jeune et Jolie", 300, 1]] },
    bigsur: { name: "Big Sur", lat: 36.2704, lng: -121.8081, f: 1.4, hotels: [["Post Ranch Inn", 1800, "Cliff-edge treehouses"], ["Ventana Big Sur", 1200, "Redwoods and hot baths"], ["Big Sur River Inn", 280, "Simple"]], dine: [["Sierra Mar (Post Ranch)", 500, 0], ["Nepenthe", 140, 0]] },
    losangeles: { name: "Santa Monica · LA", lat: 34.0195, lng: -118.4912, f: 1.35, hotels: [["Shutters on the Beach", 900, "Santa Monica beachfront"], ["Hotel Figueroa", 350, "Spanish revival, downtown"], ["Simple hotel", 230, "Simple"]], dine: [["Gjelina", 160, 0], ["Providence", 800, 2]] }
  });

  Object.assign(SEE, {
    glasgow: [["Kelvingrove", "sight", "Kelvingrove_Art_Gallery_and_Museum", "Free museum: Dalí, Mackintosh, a pipe organ."], ["Loch Lomond", "nature", "Loch_Lomond", "Forty minutes north. Lochside walks and boats."], ["West End", "town", "University_of_Glasgow", "Gothic university, Ashton Lane bars."]],
    glencoe: [["Glen Coe", "nature", "Buachaille_Etive_Mòr", "Steep, bare mountains on both sides of the road. No hiking needed."], ["Glenfinnan Viaduct", "sight", "Glenfinnan_Viaduct", "The curved viaduct above Loch Shiel."], ["Ben Nevis", "nature", "Ben_Nevis", "Britain's highest peak, snow-capped in March."]],
    skye: [["Old Man of Storr", "nature", "Old_Man_of_Storr", "Rock pinnacle, about an hour's walk up."], ["Quiraing", "nature", "Quiraing", "Landslip landscape, views from the road."], ["Fairy Pools", "nature", "Fairy_Pools", "Clear blue pools under the Cuillin."]],
    inverness: [["Loch Ness", "nature", "Loch_Ness", "Boat out to Urquhart Castle."], ["Culloden", "sight", "Culloden_Battlefield", "The 1746 battlefield."], ["Cawdor Castle", "sight", "Cawdor_Castle", "Macbeth's castle, by name at least."]],
    rioja: [["Laguardia", "town", "Laguardia,_Álava", "Walled hill town with wine cellars underneath."], ["Rioja vineyards", "nature", "Rioja_(wine)", "Vines below the Cantabrian mountains."], ["Haro wineries", "sight", "Haro,_La_Rioja", "The old bodega district by the station."]],
    cantabria: [["Santillana del Mar", "town", "Santillana_del_Mar", "Medieval stone village."], ["El Capricho, Comillas", "sight", "El_Capricho", "A young Gaudí's summer villa."], ["Altamira caves", "sight", "Cave_of_Altamira", "Replica of the Ice Age cave paintings."]],
    avignon: [["Palais des Papes", "sight", "Palais_des_Papes", "The popes' Gothic palace."], ["Pont du Gard", "nature", "Pont_du_Gard", "Roman aqueduct over a green river."], ["Châteauneuf-du-Pape", "town", "Châteauneuf-du-Pape", "Wine village, tasting rooms everywhere."]],
    alpilles: [["Les Baux-de-Provence", "town", "Les_Baux-de-Provence", "Village on a rock spur."], ["Saint-Rémy-de-Provence", "town", "Saint-Rémy-de-Provence", "Van Gogh's town: markets, plane trees, the asylum garden."], ["Alpilles olive groves", "nature", "Alpilles", "Limestone hills and olive mills."]],
    camargue: [["Camargue flamingos", "nature", "Camargue_horse", "Flamingos, white horses, salt marsh."], ["Arles amphitheatre", "sight", "Arles_Amphitheatre", "Roman arena in town."], ["Saintes-Maries-de-la-Mer", "town", "Saintes-Maries-de-la-Mer", "Whitewashed town by the sea."]],
    riviera: [["Èze", "town", "Èze", "Perched village and cactus garden."], ["Villefranche-sur-Mer", "town", "Villefranche-sur-Mer", "Pastel harbour, deep blue bay."], ["Saint-Paul-de-Vence", "town", "Saint-Paul-de-Vence", "Walled village and the Fondation Maeght."]],
    sintra: [["Pena Palace", "sight", "Pena_Palace", "Painted palace on a forested peak."], ["Quinta da Regaleira", "sight", "Quinta_da_Regaleira", "Gardens, grottoes, the initiation well."], ["Cabo da Roca", "nature", "Cabo_da_Roca", "Europe's westernmost cliff."]],
    douro: [["Douro Valley", "nature", "Douro_Valley", "Terraced vineyards along the river."], ["Porto Ribeira", "town", "Ribeira_Square", "Riverfront houses stacked up the hill."], ["Port lodges", "sight", "Vila_Nova_de_Gaia", "Tastings across the bridge."]],
    cordoba: [["Mezquita", "sight", "Mosque–Cathedral_of_Córdoba", "The forest of striped arches."], ["Medina Azahara", "sight", "Medina_Azahara", "Ruined caliphate city."], ["Flower patios", "town", "Córdoba,_Spain", "Courtyards just coming into bloom."]],
    jerez: [["Cádiz", "town", "Cádiz", "Old port on the Atlantic."], ["Sherry bodegas", "sight", "Jerez_de_la_Frontera", "Tastings in cathedral-like cellars."], ["Vejer de la Frontera", "town", "Vejer_de_la_Frontera", "White hill town over the coast."]],
    jekyll: [["Driftwood Beach", "nature", "Jekyll_Island", "Bleached trees on the sand."], ["Cumberland Island", "nature", "Cumberland_Island", "Wild horses, empty beach, ruins."], ["St Simons lighthouse", "sight", "St._Simons,_Georgia", "Village and pier."]],
    palmsprings: [["Tahquitz & Indian Canyons", "nature", "Tahquitz_Canyon", "Palm oases in rocky canyons, easy trails."], ["Aerial Tramway", "nature", "Palm_Springs_Aerial_Tramway", "Rotating cable car up to snow and pines."], ["Mid-century houses", "town", "Palm_Springs,_California", "Architecture tours, pools, date shakes."]],
    joshuatree: [["Joshua Tree National Park", "nature", "Joshua_Tree_National_Park", "Boulders, the strange trees, a huge night sky."], ["Cholla Cactus Garden", "nature", "Cylindropuntia_bigelovii", "Glowing cactus field at golden hour."], ["Pioneertown", "town", "Pioneertown,_California", "Old film-set street and Pappy & Harriet's."]],
    ojai: [["The Pink Moment", "nature", "Ojai,_California", "Sunset turns the Topatopa bluffs pink."], ["Meditation Mount", "nature", "Ventura_County,_California", "Quiet garden lookout over the valley."]],
    santabarbara: [["Channel Islands National Park", "nature", "Channel_Islands_National_Park", "Boat to Santa Cruz Island: sea caves, foxes, maybe whales."], ["Old Mission", "sight", "Mission_Santa_Barbara", "The 'Queen of the Missions'."], ["Santa Ynez wine country", "nature", "Santa_Ynez_Valley", "Rolling vineyards, 45 min inland."]],
    deathvalley: [["Badwater Basin", "nature", "Badwater_Basin", "Salt flats at 282 ft below sea level."], ["Dante's View", "nature", "Dante's_View", "Lookout over the salt flats at sunrise."], ["Mesquite Flat dunes", "nature", "Mesquite_Flat_Sand_Dunes", "Sand dunes for sunset."]],
    anzaborrego: [["Anza-Borrego wildflowers", "nature", "Anza-Borrego_Desert_State_Park", "March is wildflower season."], ["Borrego Springs", "town", "Borrego_Springs,_California", "Dark-sky town, metal sculptures in the desert."]],
    sandiego: [["Torrey Pines", "nature", "Torrey_Pines_State_Natural_Reserve", "Clifftop pines over the Pacific."], ["La Jolla Cove", "nature", "La_Jolla_Cove", "Sea lions and tide pools."], ["Balboa Park", "sight", "Balboa_Park_(San_Diego)", "Gardens and Spanish-style museums."]],
    bigsur: [["McWay Falls", "nature", "McWay_Falls", "Waterfall onto a beach cove."], ["Bixby Bridge", "sight", "Bixby_Creek_Bridge", "The famous Highway 1 arch."], ["Pfeiffer Big Sur redwoods", "nature", "Pfeiffer_Big_Sur_State_Park", "Redwood walks by the river."]],
    losangeles: [["Griffith Observatory", "sight", "Griffith_Observatory", "Hollywood sign and city views."], ["Getty Center", "sight", "Getty_Center", "Hilltop gardens and art."], ["Malibu", "nature", "Malibu,_California", "Coast drive and beaches."]]
  });

  /* Southern California trip */
  const i = B.itineraries.findIndex(x => x.id === "lowcountry");
  B.itineraries.splice(i + 1, 0, { id: "socal", kind: "single", name: "Southern California", color: "#C2803A", domestic: true, nightsTarget: 9,
    legs: [["palmsprings", 3], ["joshuatree", 1], ["ojai", 2], ["santabarbara", 3]], car: 9, transfers: [], flight: { BOS: 450, BWI: 400 }, hubs: [],
    how: "Fly into Palm Springs or LAX on Friday, drive the desert first, then west to the coast. Fly home from LAX or Santa Barbara." });

  /* Add-ons per route */
  const X = {
    glasgow: ["glasgow", 1, "start", 0, 0, "A city night first: museums and West End pubs. Train to Edinburgh takes 50 min."],
    glencoe: ["glencoe", 2, "after:gleneagles", 2, 0, "Mountains, lochs and the Glenfinnan viaduct. The biggest scenery on this route."],
    skye: ["skye", 2, "after:gleneagles", 2, 0, "Island landscapes and seafood. Long drives (about 5 h from Edinburgh)."],
    inverness: ["inverness", 1, "after:braemar", 1, 0, "Loch Ness and Culloden, on the way round the Cairngorms."],
    rioja: ["rioja", 1, "after:bilbao", 1, 0, "Wine-country night at Marqués de Riscal, 1 h 30 from Bilbao."],
    cantabria: ["cantabria", 1, "after:sansebastian", 1, 0, "Medieval Santillana and Cenador de Amós (3★) on the coast drive."],
    sjdl: ["sjdl", 1, "after:sansebastian", 1, 0, "Cross into the French Basque Country: Biarritz and Saint-Jean-de-Luz."],
    avignon: ["avignon", 1, "after:luberon", 0, 0, "Palace of the Popes and the Pont du Gard."],
    alpilles: ["alpilles", 1, "after:luberon", 1, 0, "Les Baux, olive mills, Baumanière (3★)."],
    camargue: ["camargue", 1, "after:aix", 1, 0, "Flamingos, white horses, Roman Arles."],
    riviera: ["riviera", 2, "end", 0, 50, "Two nights on the Côte d'Azur; fly home from Nice."],
    lisbonX: ["lisbon", 2, "end", 0, 100, "A Lisbon stopover on the way home (TAP or Azores Airlines)."],
    sintra: ["sintra", 1, "after:lisbon", 0, 0, "A night among Sintra's palaces and forest."],
    douro: ["douro", 2, "end", 0, 40, "Train to Porto, then two nights in the Douro vineyards. Fly home from Porto."],
    cordoba: ["cordoba", 1, "after:seville", 0, 25, "The Mezquita, 45 min by AVE."],
    jerez: ["jerez", 2, "after:seville", 2, 0, "Sherry country, Cádiz, Aponiente (3★)."],
    jekyll: ["jekyll", 2, "end", 2, 0, "Georgia's barrier islands: Driftwood Beach, wild horses on Cumberland."],
    deathvalley: ["deathvalley", 2, "after:joshuatree", 2, 0, "Salt flats, dunes, the 1927 oasis inn. About 4 h north of Joshua Tree."],
    anzaborrego: ["anzaborrego", 1, "after:palmsprings", 1, 0, "Wildflower desert, best in March."],
    sandiego: ["sandiego", 2, "start", 2, 0, "Start by the sea: La Jolla, Torrey Pines, Addison (3★)."],
    bigsur: ["bigsur", 2, "end", 2, 0, "Highway 1 cliffs and redwoods. Check for road closures."],
    losangeles: ["losangeles", 1, "end", 0, 0, "A last night in Santa Monica, close to LAX."]
  };
  const E = {
    spain: ["rioja", "cantabria", "sjdl"],
    scotland: ["glasgow", "glencoe", "skye", "inverness"],
    provence: ["camargue", "avignon", "alpilles", "riviera"],
    azores: ["lisbonX"],
    lisbon: ["sintra", "douro"],
    andalusia: ["cordoba", "jerez"],
    lowcountry: ["jekyll"],
    socal: ["sandiego", "anzaborrego", "deathvalley", "bigsur", "losangeles"],
    "loire-basque": ["rioja", "sjdl"],
    "basque-bordeaux": ["rioja", "cantabria"],
    "lyon-provence": ["avignon", "alpilles", "riviera"],
    "provence-basque": ["alpilles", "rioja"],
    "edinburgh-basque": ["glasgow", "rioja"],
    "edinburgh-provence": ["glasgow", "avignon"]
  };
  B.itineraries.forEach(it => { it.extras = (E[it.id] || []).map(k => X[k]); });

  /* Delta / Air France / KLM (SkyTeam) routings */
  const SKY = {
    spain: "Delta / KLM BOS → Amsterdam → Bilbao on KLM. Home: Asturias → Madrid on Air Europa (SkyTeam), then Delta or Air Europa to the US. Or Transavia to Paris on some days, then Air France.",
    scotland: "Delta / KLM BOS → Amsterdam → Edinburgh on KLM (1 h 30). Or Air France via Paris CDG.",
    provence: "Air France / Delta BOS → Paris CDG, then the TGV from the airport station. Home: Air France Marseille → CDG → BOS.",
    azores: "No Delta, Air France or KLM service in March. Azores Airlines direct is far simpler.",
    lisbon: "Air France via Paris or KLM via Amsterdam to Lisbon. (TAP direct is Star Alliance.)",
    andalusia: "Air France / KLM via Paris or Amsterdam → Seville (Air France, Transavia). Home: Málaga → Amsterdam (KLM, Transavia).",
    lowcountry: "Delta via Atlanta is easy. JetBlue and Southwest fly direct.",
    socal: "Delta flies BOS → LAX direct. From BWI, Delta via Atlanta or Detroit.",
    "loire-basque": "Air France / Delta BOS → Paris CDG, TGV to Tours. Home: Bilbao → Amsterdam (KLM) or Paris (Air France).",
    "basque-bordeaux": "KLM via Amsterdam → Bilbao. Home: Bordeaux → Amsterdam or Paris (KLM / Air France), or TGV to Paris.",
    "lyon-provence": "Air France / Delta BOS → CDG, TGV to Lyon. Home: Marseille → CDG or Amsterdam.",
    "provence-basque": "Air France / Delta BOS → CDG + TGV. Mid-trip: Marseille → Bilbao via Paris or Amsterdam (Air France / KLM). Home: Bilbao → Amsterdam.",
    "edinburgh-basque": "KLM via Amsterdam → Edinburgh. Mid-trip: Edinburgh → Amsterdam → Bilbao (KLM). Home: Bilbao → Amsterdam.",
    "edinburgh-provence": "KLM via Amsterdam → Edinburgh. Mid-trip: Edinburgh → Paris or Amsterdam → Marseille. Home: Marseille → CDG."
  };
  B.itineraries.forEach(it => { it.sky = SKY[it.id] || ""; });

  B.hubFrom = {
    BOS: { paris: "Air France / Delta to CDG", amsterdam: "KLM / Delta to AMS", london: "Virgin Atlantic / Delta to LHR (or BA)" },
    BWI: { paris: "Delta via JFK or ATL, or Air France from IAD", amsterdam: "Delta via JFK or DTW, or KLM from IAD", london: "BA direct, or Virgin / Delta via JFK" }
  };
  /* Low-cost legs flown by Air France, KLM, Transavia (their low-cost arm) or Air Europa */
  B.skyLcc = {
    BIO: { paris: ["Air France", 130, "CDG"], amsterdam: ["KLM", 140, "AMS"] },
    OVD: { paris: ["Transavia (some days), else Air Europa via Madrid", 150, "ORY"], amsterdam: ["Air Europa via Madrid", 170, "AMS"] },
    EDI: { paris: ["Air France", 120, "CDG"], amsterdam: ["KLM", 110, "AMS"] },
    MRS: { paris: ["TGV from Gare de Lyon, 3 h 10 (or Air France)", 80, "Paris"], amsterdam: ["KLM, Transavia", 120, "AMS"] },
    BOD: { paris: ["TGV from Montparnasse, 2 h 05", 70, "Paris"], amsterdam: ["KLM, Transavia", 120, "AMS"] },
    SVQ: { paris: ["Transavia, Air France", 110, "ORY / CDG"], amsterdam: ["Transavia, KLM", 120, "AMS"] },
    AGP: { paris: ["Transavia, Air France", 100, "ORY / CDG"], amsterdam: ["Transavia, KLM", 110, "AMS"] },
    LIS: { paris: ["Air France, Transavia", 110, "CDG / ORY"], amsterdam: ["KLM, Transavia", 110, "AMS"] },
    rail: { paris: ["Already there", 0, "Paris"], amsterdam: ["Eurostar to Paris, 3 h 20", 100, "Centraal"] }
  };
})();
