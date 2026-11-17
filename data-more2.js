/* ------------------------------------------------------------------
   Round three of options: more add-on stops for every route, plus
   extra hotel and restaurant choices where a stop only had one or two.
   Loaded after data-remote.js. Same formats as data-more.js.
------------------------------------------------------------------- */
(() => {
  const B = window.BUDGET, SEE = window.SEE;
  const add = (id, base, see, wx) => {
    B.bases[id] = Object.assign(base, { wx: { hi: wx[0], lo: wx[1], rain: wx[2], sun: wx[3], t15: wx[4], t20: wx[5], frost: wx[6], wind: wx[7], snow: wx[8], windName: wx[9] || "" } });
    SEE[id] = see;
  };

  /* ---------------- Northern Spain ---------------- */
  add("vitoria", { name: "Vitoria-Gasteiz", lat: 42.8467, lng: -2.6716, f: .85, hotels: [["Silken Ciudad de Vitoria", 160, "Modern, by the park"], ["Hotel Duque de Wellington", 120, "Old-town boutique"], ["Simple hotel", 90, "Simple"]], dine: [["Zaldiaran", 380, 1], ["Pintxo crawl on Cuchillería", 70, 0]] },
    [["Medieval old town", "town", "Vitoria-Gasteiz", "Hilltop almond-shaped old town, Europe's 'green capital'."], ["Salburua wetlands", "nature", "Salburua", "Bird marshes on the edge of town."]],
    [14, 3, .35, .35, .40, .08, .25, .15, .01]);
  add("santander", { name: "Santander", lat: 43.4623, lng: -3.8099, f: .85, hotels: [["Eurostars Hotel Real", 220, "1917 palace above the beach"], ["Hotel Bahía", 160, "On the bay"], ["Simple hotel", 100, "Simple"]], dine: [["El Serbal", 300, 1], ["Bodega La Conveniente", 70, 0]] },
    [["Magdalena Palace", "sight", "Palacio_de_la_Magdalena", "Seaside royal palace on a wooded peninsula."], ["El Sardinero beach", "nature", "Santander,_Spain", "Long belle-époque beach."]],
    [15, 8, .40, .30, .48, .10, .03, .18, 0]);
  add("ribadesella", { name: "Ribadesella · Asturian coast", lat: 43.4627, lng: -5.0602, f: .8, hotels: [["Gran Hotel del Sella", 170, "Old palace on the beach"], ["Villa Rosario", 140, "1914 indiano villa"], ["Casa rural", 90, "Simple"]], dine: [["Arbidel", 300, 1], ["Sidrería on the harbour", 60, 0]] },
    [["Tito Bustillo cave", "sight", "Tito_Bustillo_Cave", "Ice-age cave paintings (check winter opening)."], ["Asturian coast", "nature", "Ribadesella", "Cliffs, dinosaur footprints, fishing harbours."]],
    [15, 7, .40, .30, .48, .10, .04, .15, 0]);

  /* ---------------- Scotland ---------------- */
  add("arran", { name: "Isle of Arran", lat: 55.5766, lng: -5.147, f: 1.1, hotels: [["Auchrannie Resort", 220, "Spa resort"], ["Lochranza Hotel", 160, "Village inn by the castle"], ["Seaside B&B", 120, "Simple"]], dine: [["Auchrannie Eighteen69", 140, 0]] },
    [["Lochranza", "town", "Lochranza", "Ruined castle, red deer on the green."], ["Goat Fell", "nature", "Goat_Fell", "Arran's peak over the Firth of Clyde."]],
    [9, 4, .50, .22, .05, 0, .20, .30, .005]);
  add("speyside", { name: "Speyside", lat: 57.47, lng: -3.23, f: 1.1, hotels: [["The Craigellachie Hotel", 240, "Whisky bar with 1,000 bottles"], ["Knockomie Inn", 180, "Country house"], ["Distillery-village B&B", 120, "Simple"]], dine: [["Copper Dog, Craigellachie", 110, 0]] },
    [["Speyside distilleries", "sight", "Speyside_single_malt", "Glenfiddich, Macallan, Aberlour: tour and taste."], ["River Spey", "nature", "River_Spey", "Salmon river and the Speyside Way path."]],
    [8, 0, .38, .25, .03, 0, .50, .20, .03]);
  add("lochlomond", { name: "Loch Lomond", lat: 56.0, lng: -4.6, f: 1.15, hotels: [["Cameron House", 450, "Lochside resort + spa"], ["The Lodge on Loch Lomond", 200, "Rooms on the water"], ["Village inn, Luss", 140, "Simple"]], dine: [["The Cameron Grill", 220, 0]] },
    [["Loch Lomond", "nature", "Loch_Lomond", "Britain's largest loch, boat trips and wooded islands."], ["Luss", "town", "Luss", "Conservation village of slate cottages."]],
    [10, 3, .55, .20, .06, .01, .25, .25, .005]);

  /* ---------------- Provence ---------------- */
  add("uzes", { name: "Uzès", lat: 44.0125, lng: 4.4196, f: 1, hotels: [["La Maison d'Uzès", 300, "17th-c. townhouse"], ["Hôtel Entraigues", 180, "Old-town mansion with pool"], ["Mas B&B", 130, "Simple"]], dine: [["La Maison d'Uzès restaurant", 360, 1]] },
    [["Uzès", "town", "Uzès", "Honey-stone town, the Saturday market."], ["Pont du Gard", "nature", "Pont_du_Gard", "Roman aqueduct 20 min away."]],
    [16, 4, .18, .60, .58, .14, .15, .35, 0, "mistral"]);
  add("porquerolles", { name: "Porquerolles island", lat: 43.0, lng: 6.2, f: 1.1, hotels: [["Le Mas du Langoustier", 450, "Island-tip hotel (opens spring)"], ["L'Auberge des Glycines", 220, "Village inn"]], dine: [["Le Mas du Langoustier", 300, 0]] },
    [["Porquerolles beaches", "nature", "Porquerolles", "Car-free island, bike to white coves."], ["Port-Cros", "nature", "Port-Cros_National_Park", "Marine national park next door."]],
    [16, 9, .18, .62, .60, .12, .01, .30, 0, "mistral"]);

  /* ---------------- Azores ---------------- */
  add("pico", { name: "Pico & Faial", lat: 38.4626, lng: -28.2706, f: .75, hotels: [["Lava Homes", 180, "Basalt cottages facing the volcano"], ["Aldeia da Fonte", 140, "Sea-cliff cottages"]], dine: [["Ancoradouro", 80, 0]] },
    [["Mount Pico", "nature", "Mount_Pico", "Portugal's highest peak, a perfect cone."], ["Pico vineyards", "nature", "Landscape_of_the_Pico_Island_Vineyard_Culture", "UNESCO vines in black lava walls."]],
    [17, 12, .50, .25, .88, .08, 0, .30, 0]);
  add("mosteiros", { name: "West coast · Mosteiros", lat: 37.89, lng: -25.82, f: .7, hotels: [["Quinta da Atafona", 130, "Farm cottages near Sete Cidades"], ["Sea-view guesthouse", 100, "Simple"]], dine: [["Restaurant in Mosteiros", 60, 0]] },
    [["Ponta da Ferraria", "nature", "Ferraria", "Hot spring in the ocean rocks."], ["Mosteiros sea stacks", "nature", "Mosteiros_(Ponta_Delgada)", "Black-sand beach and islets at sunset."]],
    [17, 12, .52, .23, .88, .08, 0, .30, 0]);

  /* ---------------- Lisbon & Alentejo ---------------- */
  add("ericeira", { name: "Ericeira", lat: 38.9631, lng: -9.4154, f: .85, hotels: [["Immerso", 300, "Design hotel in the hills"], ["You and the Sea", 180, "Seafront"], ["Surf guesthouse", 100, "Simple"]], dine: [["Mar d'Areia", 120, 0]] },
    [["Ericeira", "town", "Ericeira", "White-and-blue surf village on the cliffs."], ["Mafra Palace", "sight", "Palace_of_Mafra", "Vast baroque palace and library."]],
    [17, 10, .28, .45, .80, .25, .02, .22, 0]);
  add("setubal", { name: "Setúbal · Arrábida", lat: 38.5244, lng: -8.8882, f: .8, hotels: [["Pousada Castelo de Palmela", 220, "Inside a hilltop castle"], ["Casa Palmela", 280, "Wine estate in Arrábida"]], dine: [["Fish grills at Setúbal market", 70, 0]] },
    [["Arrábida", "nature", "Arrábida_Natural_Park", "Green hills dropping to turquoise coves."], ["Palmela castle", "sight", "Castle_of_Palmela", "Views to Lisbon and the sea."]],
    [19, 9, .23, .52, .93, .40, .03, .15, 0]);

  /* ---------------- Andalusia ---------------- */
  add("tarifa", { name: "Tarifa · Costa de la Luz", lat: 36.0128, lng: -5.6045, f: .85, hotels: [["Hotel Arte Vida", 180, "On the beach, view to Africa"], ["Hurricane Hotel", 160, "Gardens by the dunes"]], dine: [["El Lola", 70, 0]] },
    [["Bolonia dunes", "nature", "Baelo_Claudia", "Giant dune and Roman ruins on the beach."], ["Tarifa & the Strait", "nature", "Strait_of_Gibraltar", "Europe's southern tip, kite-surf town."]],
    [19, 12, .20, .60, .95, .45, 0, .45, 0, "Levante"]);
  add("frigiliana", { name: "Nerja · Frigiliana", lat: 36.7898, lng: -3.8955, f: .85, hotels: [["Hotel Balcón de Europa", 180, "On the clifftop promenade"], ["Village casa rural", 100, "Simple"]], dine: [["Oliva, Nerja", 150, 0]] },
    [["Frigiliana", "town", "Frigiliana", "Whitewashed village above the sea."], ["Nerja caves", "nature", "Caves_of_Nerja", "Huge caverns under the hills."]],
    [20, 10, .18, .65, .97, .50, .01, .10, 0]);
  add("ubeda", { name: "Úbeda · Baeza", lat: 38.0133, lng: -3.3706, f: .75, hotels: [["Parador de Úbeda", 180, "Renaissance palace"], ["Palacio de la Rambla", 140, "Family palace"]], dine: [["Cantina La Estación", 120, 0]] },
    [["Úbeda", "town", "Úbeda", "UNESCO Renaissance towns in a sea of olives."], ["Olive groves", "nature", "Jaén,_Spain", "Sixty million olive trees to the horizon."]],
    [18, 5, .22, .58, .90, .35, .12, .08, 0]);

  /* ---------------- Lowcountry ---------------- */
  add("tybee", { name: "Tybee Island", lat: 32.0002, lng: -80.8454, f: 1, hotels: [["Tybee beach cottage", 250, "Rental on the dunes"], ["Hotel Tybee", 180, "Oceanfront"]], dine: [["The Crab Shack", 90, 0]] },
    [["Tybee lighthouse", "sight", "Tybee_Island_Light_Station", "Climb for marsh and ocean views."], ["Tybee beach", "nature", "Tybee_Island,_Georgia", "Wide beach, dolphins offshore."]],
    [21, 11, .25, .55, .85, .55, .02, .15, 0]);
  add("edisto", { name: "Edisto Island", lat: 32.5, lng: -80.3, f: .95, hotels: [["Beach-house rental", 220, "Raised house, ocean view"], ["Edisto inn", 150, "Simple"]], dine: [["Ella and Ollie's", 140, 0]] },
    [["Edisto Beach", "nature", "Edisto_Beach_State_Park", "Shell beaches and maritime forest."], ["ACE Basin", "nature", "ACE_Basin", "Huge estuary: kayaks, birds, quiet."]],
    [21, 9, .25, .55, .85, .58, .05, .10, 0]);

  /* ---------------- Southern California ---------------- */
  add("catalina", { name: "Catalina Island", lat: 33.3428, lng: -118.3278, f: 1.3, hotels: [["Mt Ada", 600, "Wrigley mansion over Avalon"], ["Hotel Atwater", 250, "Avalon, 1920s"]], dine: [["Avalon Grille", 160, 0]] },
    [["Avalon", "town", "Avalon,_California", "Car-light harbour town, 1920s casino."], ["Catalina backcountry", "nature", "Santa_Catalina_Island_(California)", "Bison, coves, Jeep tours."]],
    [19, 12, .12, .62, .92, .40, 0, .12, 0]);
  add("idyllwild", { name: "Idyllwild", lat: 33.74, lng: -116.718, f: 1.05, hotels: [["Strawberry Creek Inn", 220, "Mountain cabins"], ["Idyllwild cabin", 180, "Pines and a fireplace"]], dine: [["Gastrognome", 130, 0]] },
    [["Tahquitz Peak", "nature", "Tahquitz_Peak", "Granite peaks over the desert."], ["Idyllwild", "town", "Idyllwild–Pine_Cove,_California", "Pine-forest art village, snow some days."]],
    [14, 1, .12, .70, .45, .10, .45, .10, .03]);

  /* ---------------- legs ---------------- */
  Object.assign(B.segs, {
    "bilbao>vitoria": [["car", 0.9, 10, "AP-68 south over the hills."], ["bus", 1, 8, "Bilbobus/La Unión coach every 30 min."]],
    "vitoria>sansebastian": [["car", 1.2, 15, "A-1 and AP-1 through the Gipuzkoan hills."], ["bus", 1.3, 12, "Coach about hourly."]],
    "vitoria>rioja": [["car", 0.6, 0, "South over the Sierra de Cantabria."]],
    "sansebastian>santander": [["car", 2.2, 15, "A-8 west past Bilbao."], ["bus", 2.8, 25, "ALSA coach."]],
    "santander>asturias": [["car", 1.8, 0, "A-8 along the coast."]],
    "santander>cantabria": [["car", 0.5, 0, "Short hop west."]],
    "asturias>ribadesella": [["car", 0.4, 0, "Down the Sella valley to the sea."]],
    "ribadesella>oviedo": [["car", 1, 0, "A-8 west."]],
    "glasgow>arran": [["car", 1.8, 0, "To Ardrossan, then the CalMac ferry (55 min). Ferry fare in the add-on cost."]],
    "arran>edinburgh": [["car", 3, 0, "Ferry back to Ardrossan, then the M8."]],
    "edinburgh>arran": [["car", 3, 0, "M8 west to Ardrossan, then the ferry."]],
    "braemar>speyside": [["car", 1.5, 0, "Over the Lecht (A939) to Tomintoul and down the Spey."]],
    "speyside>standrews": [["car", 3, 0, "Via Aviemore and the A9."]],
    "speyside>inverness": [["car", 1.2, 0, "West along the A96."]],
    "edinburgh>lochlomond": [["car", 1.4, 0, "M8/M9 west."], ["train", 1.5, 20, "Train to Balloch via Glasgow."]],
    "lochlomond>gleneagles": [["car", 1.5, 0, "Through the Trossachs and Callander."]],
    "glasgow>lochlomond": [["car", 0.6, 0, "A82 north."]],
    "luberon>uzes": [["car", 1.3, 0, "West past Avignon."]],
    "uzes>cassis": [["car", 2, 15, "A9/A54/A50."]],
    "uzes>alpilles": [["car", 0.9, 0, "Via Beaucaire."]],
    "uzes>avignon": [["car", 0.7, 0, "East over the Rhône."]],
    "cassis>porquerolles": [["car", 1.3, 10, "A50 to Hyères, then the 20-min ferry from La Tour Fondue (about $25 pp return)."]],
    "luberon>porquerolles": [["car", 2, 12, "A51/A57 to Hyères, then the ferry."]],
    "furnas>pico": [["flight", 1.5, 0, "SATA via Ponta Delgada or Terceira. Fare in the add-on cost.", "incl"]],
    "pdl>mosteiros": [["car", 0.6, 0, "West along the coast road."]],
    "mosteiros>furnas": [["car", 1.4, 0, "Across the island."]],
    "pico>lisbon": [["flight", 2.5, 0, "Via Ponta Delgada or Horta to Lisbon.", "incl"]],
    "lisbon>ericeira": [["car", 0.7, 0, "A8/A21 north."], ["bus", 1, 6, "Mafrense bus from Campo Grande."]],
    "ericeira>comporta": [["car", 1.8, 5, "Round Lisbon and over the bridge."]],
    "sintra>ericeira": [["car", 0.5, 0, "Through the hills to the coast."]],
    "lisbon>setubal": [["car", 0.6, 3, "Over the 25 de Abril bridge."], ["train", 1, 4, "Fertagus train across the bridge."]],
    "setubal>comporta": [["car", 0.5, 0, "Setúbal → Tróia car ferry (about $20 per car), then 15 min."]],
    "seville>tarifa": [["car", 2.3, 0, "South via Jerez and Vejer."]],
    "tarifa>ronda": [["car", 2, 0, "Inland through the cork forests of Los Alcornocales."]],
    "jerez>tarifa": [["car", 1.4, 0, "Down the Costa de la Luz."]],
    "granada>frigiliana": [["car", 1.3, 0, "South to the coast on the A-44/A-7."]],
    "frigiliana>malaga": [["car", 0.8, 0, "Coast motorway."], ["bus", 1.1, 6, "ALSA coach."]],
    "alpujarras>frigiliana": [["car", 1.5, 0, "Down to Motril and along the coast."]],
    "granada>ubeda": [["car", 1.5, 0, "North through olive country."], ["bus", 2, 15, "ALSA coach."]],
    "seville>ubeda": [["car", 3, 0, "East via Córdoba."]],
    "cordoba>ubeda": [["car", 1.6, 0, "East along the Guadalquivir."]],
    "ubeda>ronda": [["car", 3.3, 0, "Long cross-country drive via Granada."]],
    "savannah>tybee": [["car", 0.4, 0, "US-80 out over the marshes."]],
    "tybee>jekyll": [["car", 1.6, 0, "Back through Savannah, then I-95."]],
    "tybee>amelia": [["car", 2.3, 0, "I-95 south."]],
    "charleston>edisto": [["car", 1, 0, "SC-174 through the live-oak tunnels."]],
    "edisto>lowcountry": [["car", 1.3, 0, "US-17 south."]],
    "santabarbara>catalina": [["car", 2.5, 0, "Drive to Long Beach, then the Catalina Express ferry (1 h, about $90 pp return, in the add-on cost)."]],
    "catalina>losangeles": [["car", 1.5, 0, "Ferry back to Long Beach."]],
    "palmsprings>idyllwild": [["car", 1, 0, "Up the Palms to Pines Highway (CA-74/243)."]],
    "idyllwild>joshuatree": [["car", 1.8, 0, "Back down to the desert and up Highway 62."]],
    "idyllwild>anzaborrego": [["car", 1.5, 0, "South over the mountains."]],
    "laguna>idyllwild": [["car", 2, 0, "Inland via Hemet."]],
    "santander>bilbao": [["car", 1.2, 0, "A-8 east along the coast."], ["bus", 1.3, 12, "ALSA coach about hourly."]],
    "santander>sjdl": [["car", 2.8, 20, "A-8 east past Bilbao and over the border."]],
    "uzes>sansebastian": [["flight", 5, 0, "Nîmes or Marseille → Bilbao via Paris (Air France), then the coach to San Sebastián.", "incl"]],
    "lochlomond>sansebastian": [["flight", 4.5, 0, "Glasgow or Edinburgh → Bilbao via Amsterdam (KLM), then 1 h 15 to San Sebastián.", "incl"]],
    "lochlomond>aix": [["flight", 4.5, 0, "Glasgow or Edinburgh → Marseille via Paris or Amsterdam, then 35 min to Aix.", "incl"]]
  });

  /* ---------------- add-ons ---------------- */
  const X = {
    vitoria: ["vitoria", 1, "after:bilbao", 1, 0, "The Basque capital: medieval old town, pintxos without the crowds."],
    santander: ["santander", 1, "after:sansebastian", 1, 0, "Belle-époque beaches, the Magdalena palace, El Serbal (1★)."],
    ribadesella: ["ribadesella", 1, "after:asturias", 1, 0, "Asturian fishing harbour, cliffs, Arbidel (1★)."],
    arran: ["arran", 2, "start", 2, 20, "'Scotland in miniature': castles, a mountain, seals. Includes the ferry."],
    speyside: ["speyside", 1, "after:braemar", 1, 0, "Whisky country: Macallan, Glenfiddich, the Craigellachie bar."],
    lochlomond: ["lochlomond", 1, "after:edinburgh", 1, 0, "A lochside night with a spa at Cameron House."],
    uzes: ["uzes", 1, "after:luberon", 1, 0, "Honey-stone town, Saturday market, the Pont du Gard."],
    porquerolles: ["porquerolles", 2, "end", 1, 25, "Car-free island: bikes, coves, pine forest. Includes the ferry."],
    pico: ["pico", 2, "after:furnas", 1, 140, "Portugal's highest volcano and lava-wall vineyards. Includes the hop."],
    mosteiros: ["mosteiros", 1, "after:pdl", 0, 0, "The wild west coast: an ocean hot spring and sunset sea stacks."],
    ericeira: ["ericeira", 1, "after:lisbon", 1, 0, "White-and-blue surf village and the Mafra palace."],
    setubal: ["setubal", 1, "after:lisbon", 1, 0, "Arrábida's green cliffs and a castle pousada."],
    tarifa: ["tarifa", 2, "after:seville", 2, 0, "Europe's southern tip: dunes, Roman ruins, a view of Africa."],
    frigiliana: ["frigiliana", 1, "after:granada", 1, 0, "White village above the sea and the Nerja caves."],
    ubeda: ["ubeda", 1, "after:granada", 1, 0, "Renaissance towns in endless olive groves."],
    tybee: ["tybee", 1, "after:savannah", 0, 0, "Beach night, lighthouse, The Crab Shack."],
    edisto: ["edisto", 1, "after:charleston", 1, 0, "Quiet sea island down a live-oak road."],
    catalina: ["catalina", 2, "end", 0, 90, "An island off LA: Avalon harbour, bison, coves. Includes the ferry."],
    idyllwild: ["idyllwild", 1, "after:palmsprings", 1, 0, "Pine-forest mountain village above the desert, maybe snow."]
  };
  const E = {
    spain: ["vitoria", "santander", "ribadesella"], scotland: ["arran", "speyside", "lochlomond"], provence: ["uzes", "porquerolles"],
    azores: ["mosteiros", "pico"], lisbon: ["ericeira", "setubal"], andalusia: ["tarifa", "frigiliana", "ubeda"],
    lowcountry: ["edisto", "tybee"], socal: ["idyllwild", "catalina"],
    "loire-basque": ["vitoria", "santander"], "basque-bordeaux": ["vitoria", "santander"], "lyon-provence": ["uzes", "porquerolles"],
    "provence-basque": ["uzes", "vitoria"], "edinburgh-basque": ["lochlomond", "vitoria", "santander"], "edinburgh-provence": ["lochlomond", "uzes", "porquerolles"]
  };
  B.itineraries.forEach(it => (E[it.id] || []).forEach(k => it.extras.push(X[k])));

  /* ---------------- more hotel and restaurant choices ---------------- */
  const H = {
    gleneagles: [["Ballathie House", 260, "Country house on the Tay"]],
    braemar: [["The Invercauld Arms", 160, "Village inn"]],
    standrews: [["Old Course Hotel", 650, "Spa over the 17th hole"]],
    cantabria: [["Rural posada near Comillas", 110, "Simple"]],
    cordoba: [["Balcón de Córdoba", 220, "Rooftop over the Mezquita"]],
    granada: [["Palacio de Santa Paula", 260, "16th-c. convent"]],
    ronda: [["Hotel Montelirio", 160, "On the gorge"]],
    alentejo: [["Torre de Palma Wine Hotel", 300, "Wine estate"]],
    deathvalley: [["Stovepipe Wells Village", 160, "Simple, by the dunes"]],
    anzaborrego: [["The Palms at Indian Head", 180, "Mid-century, desert views"]],
    pdl: [["Azor Hotel", 170, "Modern, harbour view"]],
    furnas: [["Furnas Boutique Hotel", 230, "Thermal pools, design rooms"]],
    lowcountry: [["Inn at Palmetto Bluff cottages", 700, "Cottages on the river"]],
    jekyll: [["Jekyll Ocean Club", 300, "Oceanfront suites"]],
    joshuatree: [["Joshua Tree Inn", 150, "Classic motel"]],
    pitlochry: [["Craigatin House", 150, "Small and stylish"]],
    islay: [["The Machrie", 300, "Links hotel + spa"]],
    terceira: [["Quinta dos Figos", 160, "Garden manor"]],
    ventoux: [["Simple village inn", 120, "Simple"]],
    verdon: [["Les Restanques de Moustiers", 180, "Pool, views to the village"]]
  };
  Object.entries(H).forEach(([id, hs]) => { const b = B.bases[id]; if (!b) return; if (b.def === undefined) b.def = b.hotels.length >= 3 ? 1 : 0; b.hotels.push(...hs); }); // keep each stop's original default hotel
  const R = {
    gleneagles: [["The Strathearn", 200, 0]], braemar: [["The Flying Stag", 80, 0]], standrews: [["The Adamson", 160, 0]],
    pdl: [["Mané Cigano", 60, 0]], furnas: [["Terra Nostra Garden restaurant", 150, 0]], granada: [["Damasqueros", 180, 0]],
    alentejo: [["Fialho, Évora", 160, 0]], comporta: [["Museu do Arroz", 140, 0]], cordoba: [["El Choco", 300, 1]],
    joshuatree: [["Kitchen in the Desert", 140, 0]], ojai: [["Ojai Valley Inn's Vine", 220, 0]], savannah: [["Common Thread", 260, 0]],
    charleston: [["Leon's Oyster Shop", 90, 0]], aix: [["Le Mille Feuille", 160, 0]], luberon: [["Auberge La Fenière", 380, 1]],
    edinburgh: [["Dishoom (breakfast)", 60, 0]], bilbao: [["Gure-Toki pintxos", 60, 0]], asturias: [["Sidrería El Polesu", 70, 0]]
  };
  Object.entries(R).forEach(([id, ds]) => { if (B.bases[id]) B.bases[id].dine.push(...ds); });
})();
