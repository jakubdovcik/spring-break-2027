/* ------------------------------------------------------------------
   More add-on stops for every route, plus mid-March weather for every
   stop. Loaded after data-transport.js.

   Weather per stop: [high °C, low °C, rain, sun, t15, t20, frost, wind, snow]
     rain..wind = chance on any given day (see data-weather.js)
     snow       = chance on any given day that snow disrupts a drive or visit
   Climate estimates from long-term March averages, not a forecast.
------------------------------------------------------------------- */
(() => {
  const B = window.BUDGET, SEE = window.SEE;

  Object.assign(B.bases, {
    urdaibai: { name: "Mundaka · Urdaibai coast", lat: 43.407, lng: -2.698, f: .85, hotels: [["Hotel Atalaya, Mundaka", 160, "Belle Époque villa by the surf"], ["Farmhouse agroturismo", 120, "Simple, sea views"]], dine: [["Eneperi, by Gaztelugatxe", 160, 0]] },
    potes: { name: "Potes · Fuente Dé", lat: 43.154, lng: -4.623, f: .8, hotels: [["Parador de Fuente Dé", 170, "At the foot of the cliffs"], ["Posada in Potes", 110, "Stone village inn"]], dine: [["El Bodegón, Potes", 90, 0]] },
    oviedo: { name: "Oviedo · Gijón", lat: 43.3614, lng: -5.8494, f: .8, hotels: [["Castillo del Bosque la Zoreda", 180, "Manor in the woods"], ["Hotel de la Reconquista", 200, "18th-c. hospice"], ["Simple hotel", 100, "Simple"]], dine: [["Gloria (Nacho Manzano)", 180, 0], ["Cider house on Calle Gascona", 80, 0]] },
    pitlochry: { name: "Pitlochry", lat: 56.7037, lng: -3.7346, f: 1.1, hotels: [["Fonab Castle", 300, "Lochside castle + spa"], ["Atholl Palace", 200, "Victorian spa hotel"]], dine: [["Sandemans at Fonab", 300, 0]] },
    eastneuk: { name: "East Neuk of Fife", lat: 56.2223, lng: -2.7008, f: 1.1, hotels: [["The Peat Inn rooms", 300, "1★ restaurant with suites"], ["The Ship Inn, Elie", 180, "Beach pub with rooms"]], dine: [["The Peat Inn", 350, 1], ["Anstruther Fish Bar", 40, 0]] },
    islay: { name: "Isle of Islay", lat: 55.75, lng: -6.2, f: 1.15, hotels: [["Islay House", 320, "Country house"], ["Port Charlotte Hotel", 220, "Lochside inn, peat fires"]], dine: [["Port Charlotte Hotel dining room", 160, 0]] },
    ventoux: { name: "Mont Ventoux · Vaison", lat: 44.2409, lng: 5.0742, f: 1, hotels: [["Crillon le Brave", 550, "Village-hotel facing Ventoux"], ["Hostellerie Le Beffroi", 180, "Medieval upper town"]], dine: [["Le Moulin à Huile, Vaison", 250, 0]] },
    verdon: { name: "Verdon · Moustiers", lat: 43.8446, lng: 6.2216, f: 1, hotels: [["La Bastide de Moustiers", 420, "Ducasse's country inn (check March opening)"], ["Village inn", 130, "Simple"]], dine: [["La Bastide de Moustiers", 280, 0]] },
    marseille: { name: "Marseille", lat: 43.2965, lng: 5.3698, f: 1.05, hotels: [["InterContinental Hotel Dieu", 350, "Over the Vieux-Port"], ["Les Bords de Mer", 280, "Rooftop pool on the sea"], ["Simple hotel", 140, "Simple"]], dine: [["AM par Alexandre Mazzia", 900, 3], ["Chez Fonfon", 220, 0]] },
    terceira: { name: "Terceira", lat: 38.6551, lng: -27.2215, f: .7, hotels: [["Terceira Mar", 150, "Ocean hotel"], ["Manor B&B", 120, "Simple"]], dine: [["Beira Mar, São Mateus", 80, 0]] },
    cascais: { name: "Cascais", lat: 38.6979, lng: -9.4215, f: .9, hotels: [["Hotel Albatroz", 380, "Clifftop villa"], ["Farol Hotel", 260, "Lighthouse design hotel"]], dine: [["Fortaleza do Guincho", 450, 1]] },
    obidos: { name: "Óbidos", lat: 39.3606, lng: -9.1571, f: .85, hotels: [["Pousada Castelo de Óbidos", 250, "Inside the castle"], ["The Literary Man", 150, "Book-lined hotel"]], dine: [["Petrarum Domus", 80, 0]] },
    algarve: { name: "Western Algarve", lat: 37.1028, lng: -8.6731, f: .9, hotels: [["Vila Vita Parc", 600, "Clifftop resort + spa"], ["Casa Mãe, Lagos", 220, "Design hotel"]], dine: [["Ocean (Vila Vita)", 900, 2]] },
    malaga: { name: "Málaga", lat: 36.7213, lng: -4.4214, f: .85, hotels: [["Gran Hotel Miramar", 350, "Seafront palace"], ["Room Mate Valeria", 160, "Simple"]], dine: [["José Carlos García", 450, 1], ["El Pimpi", 80, 0]] },
    alpujarras: { name: "Las Alpujarras", lat: 36.9406, lng: -3.3611, f: .75, hotels: [["Casa rural in Capileira", 90, "Mountain village"], ["Hotel Alcadima, Lanjarón", 110, "Spa town"]], dine: [["Village taberna", 60, 0]] },
    beaufort: { name: "Beaufort", lat: 32.4316, lng: -80.6698, f: 1, hotels: [["Anchorage 1770", 300, "Waterfront mansion"], ["Beaufort Inn", 200, "Historic inn"]], dine: [["Saltus River Grill", 180, 0]] },
    amelia: { name: "Amelia Island", lat: 30.6697, lng: -81.4626, f: 1.05, hotels: [["Omni Amelia Island", 350, "Oceanfront resort + spa"], ["Fairbanks House", 250, "Victorian inn"]], dine: [["Salt (Ritz-Carlton)", 300, 0]] },
    laguna: { name: "Laguna Beach", lat: 33.5427, lng: -117.7854, f: 1.3, hotels: [["The Ranch at Laguna Beach", 500, "Canyon retreat"], ["Montage Laguna Beach", 1100, "Clifftop resort"], ["Simple inn", 250, "Simple"]], dine: [["Studio (Montage)", 400, 0]] },
    santaynez: { name: "Santa Ynez Valley", lat: 34.6, lng: -120.14, f: 1.2, hotels: [["The Inn at Mattei's Tavern", 450, "Historic stagecoach inn"], ["Alisal Ranch", 700, "Ranch resort"], ["Simple inn", 200, "Simple"]], dine: [["Bell's, Los Alamos", 250, 1]] }
  });

  Object.assign(SEE, {
    urdaibai: [["Mundaka", "town", "Mundaka", "Surf village on the estuary mouth."], ["Urdaibai estuary", "nature", "Urdaibai_estuary", "Marshes, birds, quiet beaches."]],
    potes: [["Fuente Dé cable car", "nature", "Fuente_Dé", "Cable car up a 750 m cliff into the snow."], ["Liébana valley", "nature", "Liébana", "Walled in by the Picos, reached through the narrow La Hermida gorge."]],
    oviedo: [["Oviedo old town", "town", "Oviedo", "Cathedral, cider street, arcaded squares."], ["Santa María del Naranco", "sight", "Santa_María_del_Naranco", "9th-c. palace on a hill."]],
    pitlochry: [["Queen's View", "nature", "Loch_Tummel", "Loch Tummel from the famous viewpoint."], ["Blair Castle", "sight", "Blair_Castle", "White castle of the Atholl estate."]],
    eastneuk: [["Fife Coastal Path", "nature", "Fife_Coastal_Path", "Cliff and beach walks between fishing villages."], ["Crail", "town", "Crail", "Tiny harbour, lobster shack."]],
    islay: [["Islay distilleries", "sight", "Islay_whisky", "Laphroaig, Ardbeg, Lagavulin: peat and fires."], ["Islay's beaches", "nature", "Islay", "Wild Atlantic sand at Machir Bay."]],
    ventoux: [["Mont Ventoux", "nature", "Mont_Ventoux", "The giant of Provence, snow-capped in March."], ["Dentelles de Montmirail", "nature", "Dentelles_de_Montmirail", "Limestone spires above wine villages."]],
    verdon: [["Verdon Gorge", "nature", "Verdon_Gorge", "Europe's grandest canyon, turquoise river."], ["Moustiers-Sainte-Marie", "town", "Moustiers-Sainte-Marie", "Village with a star hung over the gorge."]],
    marseille: [["Vieux-Port", "town", "Old_Port_of_Marseille", "The old harbour, fish market at 8 am."], ["Le Panier", "town", "Le_Panier", "Oldest quarter, street art, soap shops."]],
    terceira: [["Angra do Heroísmo", "town", "Angra_do_Heroísmo", "UNESCO pastel town."], ["Algar do Carvão", "nature", "Algar_do_Carvão", "Walk down inside a volcano."]],
    cascais: [["Boca do Inferno", "nature", "Boca_do_Inferno", "Sea arch and wave-cut cliffs."], ["Guincho beach", "nature", "Guincho_Beach", "Wild dune beach under Sintra's hills."]],
    obidos: [["Óbidos", "town", "Óbidos,_Portugal", "Walled white village, ginja in chocolate cups."], ["Nazaré", "nature", "Nazaré,_Portugal", "Giant Atlantic waves off the headland."]],
    algarve: [["Benagil sea cave", "nature", "Benagil", "Cathedral-like cave by boat."], ["Ponta da Piedade", "nature", "Ponta_da_Piedade", "Golden sea stacks near Lagos."]],
    malaga: [["Alcazaba", "sight", "Alcazaba_of_Málaga", "Moorish fortress gardens over the port."], ["Caminito del Rey", "nature", "Caminito_del_Rey", "Cliff walkway in a gorge (book ahead)."]],
    alpujarras: [["Las Alpujarras", "nature", "Alpujarras", "White villages on the Sierra Nevada's south face."], ["Trevélez", "town", "Trevélez", "One of Spain's highest villages, famous hams."]],
    beaufort: [["Beaufort waterfront", "town", "Beaufort,_South_Carolina", "Antebellum houses under the oaks."], ["Hunting Island", "nature", "Hunting_Island_State_Park", "Boneyard beach and lighthouse."]],
    amelia: [["Fernandina Beach", "town", "Fernandina_Beach,_Florida", "Victorian shrimping town."], ["Fort Clinch", "nature", "Fort_Clinch_State_Park", "Beach, dunes and a brick fort."]],
    laguna: [["Crystal Cove", "nature", "Crystal_Cove_State_Park", "Tide pools and 1930s beach cottages."], ["Laguna Beach coves", "town", "Laguna_Beach,_California", "Art town with small coves."]],
    santaynez: [["Solvang", "town", "Solvang,_California", "Danish-style village."], ["Los Olivos wineries", "nature", "Los_Olivos,_California", "Tasting rooms among oaks and vines."]]
  });

  Object.assign(B.segs, {
    "bilbao>urdaibai": [["car", 0.6, 0, "Via Gernika into the biosphere reserve."], ["bus", 1, 5, "Bizkaibus to Bermeo and Mundaka."]],
    "urdaibai>sansebastian": [["car", 1.3, 10, "The coast road through Lekeitio and Ondarroa, then the AP-8."]],
    "rioja>urdaibai": [["car", 1.8, 10, "North via Vitoria and Gernika."]],
    "urdaibai>sjdl": [["car", 1.8, 15, "AP-8 east over the border."]],
    "cantabria>potes": [["car", 1.3, 0, "Through the narrow La Hermida gorge."]],
    "potes>asturias": [["car", 1.6, 0, "Over the mountains via Panes."]],
    "sansebastian>potes": [["car", 3.3, 15, "A-8, then the La Hermida gorge."]],
    "asturias>oviedo": [["car", 1, 0, "A-64 to Oviedo. Handy for flights out of OVD."], ["bus", 1.3, 8, "ALSA from Cangas."]],
    "gleneagles>pitlochry": [["car", 0.8, 0, "A9 north."], ["train", 0.9, 20, "Highland Main Line via Perth."]],
    "pitlochry>glencoe": [["car", 2, 0, "West along Loch Tummel and Loch Rannoch, then the A82."]],
    "pitlochry>braemar": [["car", 1.5, 0, "Over Glenshee."]],
    "pitlochry>skye": [["car", 3.5, 0, "Via the A9 and the A87."]],
    "standrews>eastneuk": [["car", 0.3, 0, "Coast road south."], ["bus", 0.5, 5, "Stagecoach 95."]],
    "edinburgh>islay": [["car", 4.5, 0, "Via Loch Lomond to Kennacraig, then the CalMac ferry (2 h). Ferry fare is in the add-on cost.", "incl"]],
    "islay>gleneagles": [["car", 5, 0, "Ferry back to Kennacraig, then through Inveraray and Crianlarich.", "incl"]],
    "luberon>ventoux": [["car", 1, 0, "Past Gordes and over to Bédoin and Vaison."]],
    "ventoux>cassis": [["car", 2, 12, "A7/A50 south."]],
    "ventoux>avignon": [["car", 0.8, 0, "Down through Carpentras."]],
    "ventoux>alpilles": [["car", 1.1, 0, "Via Cavaillon."]],
    "luberon>verdon": [["car", 1.8, 0, "East through Manosque and the lavender plateau of Valensole."]],
    "verdon>cassis": [["car", 2.3, 10, "A8/A52 past Aix."]],
    "verdon>riviera": [["car", 2.5, 10, "Through Castellane and down to the coast."]],
    "ventoux>verdon": [["car", 2.5, 0, "Across the Plateau d'Albion."]],
    "potes>sjdl": [["car", 3.5, 15, "Back along the A-8 and over the border."]],
    "luberon>marseille": [["car", 1.2, 8, "South on the A51 past Aix."]],
    "ventoux>sansebastian": [["flight", 5, 0, "Marseille or Avignon → Bilbao via Paris or Amsterdam, then the coach to San Sebastián.", "incl"]],
    "cassis>marseille": [["car", 0.5, 0, "Over the Col de la Gineste."], ["train", 0.4, 7, "TER to Marseille Saint-Charles."]],
    "furnas>terceira": [["flight", 0.7, 0, "SATA inter-island hop from Ponta Delgada. Fare is in the add-on cost.", "incl"]],
    "terceira>lisbon": [["flight", 2.3, 0, "Azores Airlines / TAP to Lisbon.", "incl"]],
    "lisbon>cascais": [["train", 0.6, 3, "Coast train from Cais do Sodré along the river."], ["car", 0.5, 0, "Marginal coast road."]],
    "cascais>comporta": [["car", 1.5, 5, "Round Lisbon and over the Vasco da Gama bridge."]],
    "sintra>cascais": [["car", 0.4, 0, "Down through the Sintra hills to the sea."]],
    "lisbon>obidos": [["car", 1, 5, "A8 north."], ["bus", 1.2, 9, "Rodoviária bus from Campo Grande."]],
    "obidos>comporta": [["car", 2, 10, "Back south past Lisbon."]],
    "cascais>obidos": [["car", 1.2, 5, "A16/A8 north."]],
    "sintra>obidos": [["car", 1, 5, "A16/A8 north."]],
    "alentejo>algarve": [["car", 2.5, 15, "South through cork forests and over the hills."]],
    "comporta>algarve": [["car", 2.5, 15, "A2 south. Or the quiet coast road through the Costa Vicentina (3 h 30)."]],
    "granada>alpujarras": [["car", 1.2, 0, "South over the Suspiro del Moro pass, then winding mountain roads."]],
    "alpujarras>malaga": [["car", 1.7, 0, "Down to the coast at Motril and along the A-7."]],
    "granada>malaga": [["car", 1.5, 0, "A-92/A-45."], ["bus", 1.8, 15, "ALSA coach."]],
    "lowcountry>beaufort": [["car", 0.5, 0, "Short hop across the marshes."]],
    "beaufort>savannah": [["car", 1, 0, "US-21/US-17."]],
    "savannah>amelia": [["car", 2, 0, "I-95 south into Florida."]],
    "jekyll>amelia": [["car", 1, 0, "I-95 across the state line."]],
    "laguna>palmsprings": [["car", 2, 0, "Through the hills on CA-74 or via the I-10."]],
    "sandiego>laguna": [["car", 1, 0, "I-5 north along the coast."], ["train", 1.2, 25, "Amtrak Pacific Surfliner to San Juan Capistrano."]],
    "santabarbara>santaynez": [["car", 0.7, 0, "Over the San Marcos Pass (CA-154)."]],
    "santaynez>bigsur": [["car", 3, 0, "US-101 north, then Highway 1."]],
    "santaynez>losangeles": [["car", 2.5, 0, "US-101 south."]]
  });

  /* new add-ons, appended to each route's existing list */
  const X = {
    urdaibai: ["urdaibai", 1, "after:bilbao", 1, 0, "Surf village, the Gaztelugatxe island chapel, a quiet estuary."],
    potes: ["potes", 1, "after:sansebastian", 1, 0, "Up into the Picos: the Fuente Dé cable car above the snowline."],
    oviedo: ["oviedo", 1, "end", 0, 0, "A city night of cider houses before flying out of Asturias."],
    pitlochry: ["pitlochry", 1, "after:gleneagles", 1, 0, "Victorian spa town: Queen's View, Blair Castle, Fonab Castle spa."],
    eastneuk: ["eastneuk", 1, "after:standrews", 0, 0, "Fishing villages, cliff walks, The Peat Inn (1★)."],
    islay: ["islay", 2, "after:edinburgh", 2, 40, "The whisky island: peat fires, distilleries, wild beaches. Includes the ferry."],
    ventoux: ["ventoux", 1, "after:luberon", 1, 0, "Mont Ventoux, wine villages, Crillon le Brave."],
    verdon: ["verdon", 2, "after:luberon", 2, 0, "Verdon Gorge and Moustiers. Some places only reopen in April."],
    marseille: ["marseille", 1, "end", 0, 0, "A last night in Marseille: Vieux-Port, Le Panier, AM (3★)."],
    terceira: ["terceira", 2, "after:furnas", 1, 120, "A second island: pastel Angra and a walk inside a volcano. Includes the hop."],
    cascais: ["cascais", 1, "after:lisbon", 0, 0, "Seaside town, Guincho beach, Fortaleza do Guincho (1★)."],
    obidos: ["obidos", 1, "after:lisbon", 1, 0, "Walled village in a castle, and the Nazaré waves."],
    algarve: ["algarve", 2, "end", 2, 0, "Golden cliffs and sea caves. Fly home from Faro or drive back to Lisbon."],
    malaga: ["malaga", 1, "end", 0, 0, "Seaside last night, Picasso museum, fly home from Málaga."],
    alpujarras: ["alpujarras", 1, "after:granada", 1, 0, "White mountain villages on the Sierra Nevada."],
    beaufort: ["beaufort", 1, "after:lowcountry", 0, 0, "Antebellum waterfront town and Hunting Island's beach."],
    amelia: ["amelia", 2, "end", 1, 0, "Florida's quiet northern island: Victorian town and a beach resort."],
    laguna: ["laguna", 1, "start", 1, 0, "Start on the coast: tide pools at Crystal Cove."],
    santaynez: ["santaynez", 1, "after:santabarbara", 1, 0, "Wine-country night in Los Olivos and Bell's (1★)."]
  };
  const E = {
    spain: ["urdaibai", "potes", "oviedo"], scotland: ["pitlochry", "eastneuk", "islay"], provence: ["ventoux", "verdon", "marseille"],
    azores: ["terceira"], lisbon: ["cascais", "obidos", "algarve"], andalusia: ["alpujarras", "malaga"], lowcountry: ["beaufort", "amelia"],
    socal: ["laguna", "santaynez"], "loire-basque": ["urdaibai"], "basque-bordeaux": ["urdaibai", "potes"], "lyon-provence": ["ventoux", "verdon", "marseille"],
    "provence-basque": ["ventoux", "urdaibai"], "edinburgh-basque": ["urdaibai"], "edinburgh-provence": ["ventoux"]
  };
  B.itineraries.forEach(it => { (E[it.id] || []).forEach(k => it.extras.push(X[k])); });

  /* weather per stop */
  const W = {
    bilbao: [16, 8, .40, .30, .55, .15, .03, .15, 0], sansebastian: [15, 8, .42, .28, .50, .12, .03, .15, 0], asturias: [15, 5, .40, .30, .45, .10, .12, .12, .02],
    urdaibai: [15, 8, .40, .30, .50, .12, .03, .18, 0], rioja: [15, 3, .20, .45, .50, .10, .25, .15, .01], cantabria: [15, 7, .40, .30, .48, .10, .05, .15, 0],
    potes: [14, 3, .35, .30, .40, .08, .25, .10, .06], oviedo: [15, 6, .40, .28, .45, .10, .08, .12, 0], sjdl: [16, 7, .38, .32, .58, .15, .05, .15, 0],
    bordeaux: [16, 5, .30, .40, .60, .15, .10, .12, 0], loire: [14, 3, .30, .35, .45, .08, .20, .12, .005], lyon: [14, 3, .28, .40, .45, .10, .20, .12, .005],
    paris: [13, 5, .33, .30, .35, .05, .10, .12, 0], london: [13, 5, .35, .30, .35, .05, .10, .15, 0], amsterdam: [11, 3, .40, .25, .15, .02, .15, .20, 0], dublin: [11, 4, .45, .25, .08, .01, .15, .25, 0],
    edinburgh: [9, 3, .43, .25, .05, .01, .30, .25, .005], glasgow: [10, 3, .50, .20, .06, .01, .25, .25, .005], gleneagles: [9, 1, .42, .25, .04, .01, .45, .20, .02],
    pitlochry: [9, 0, .42, .25, .04, 0, .50, .20, .03], braemar: [7, -2, .40, .25, .02, 0, .65, .25, .08], glencoe: [9, 2, .60, .15, .04, 0, .40, .30, .05],
    skye: [9, 3, .60, .15, .04, 0, .30, .35, .03], inverness: [9, 2, .38, .25, .04, 0, .40, .22, .02], standrews: [9, 3, .38, .28, .04, 0, .30, .25, .005],
    eastneuk: [9, 3, .38, .28, .04, 0, .30, .25, .005], islay: [9, 4, .55, .20, .04, 0, .20, .35, .01],
    aix: [16, 4, .17, .60, .60, .15, .15, .30, 0], luberon: [15, 2, .18, .60, .55, .12, .25, .35, .005], cassis: [16, 7, .17, .62, .65, .15, .03, .30, 0],
    marseille: [16, 6, .17, .62, .65, .15, .03, .30, 0], avignon: [16, 4, .18, .60, .60, .15, .15, .40, 0], alpilles: [16, 4, .18, .60, .60, .15, .15, .38, 0],
    camargue: [16, 5, .18, .60, .60, .15, .10, .35, 0], ventoux: [15, 3, .20, .55, .50, .10, .25, .35, .02], verdon: [13, 1, .20, .55, .35, .05, .40, .20, .03], riviera: [16, 8, .20, .60, .65, .15, .02, .10, 0],
    pdl: [17, 12, .50, .25, .90, .10, 0, .25, 0], furnas: [16, 11, .55, .20, .80, .05, 0, .20, 0], terceira: [17, 12, .50, .25, .90, .08, 0, .28, 0],
    lisbon: [19, 10, .25, .50, .95, .40, .01, .15, 0], sintra: [16, 9, .35, .35, .75, .20, .03, .20, 0], cascais: [18, 11, .25, .50, .90, .30, .01, .25, 0],
    obidos: [18, 8, .28, .45, .85, .25, .05, .18, 0], comporta: [20, 8, .22, .55, .95, .45, .05, .15, 0], alentejo: [20, 7, .20, .55, .95, .50, .08, .10, 0],
    douro: [17, 5, .35, .40, .75, .25, .12, .10, 0], algarve: [20, 11, .18, .62, .98, .50, .01, .12, 0],
    seville: [23, 10, .18, .65, .99, .80, .02, .08, 0], cordoba: [22, 7, .18, .65, .98, .75, .05, .08, 0], jerez: [21, 9, .20, .62, .98, .65, .03, .15, 0],
    ronda: [17, 6, .22, .55, .85, .30, .08, .12, .005], granada: [19, 4, .20, .60, .90, .45, .18, .08, .005], alpujarras: [16, 4, .22, .55, .75, .20, .20, .10, .02], malaga: [20, 10, .18, .65, .98, .50, .01, .10, 0],
    charleston: [21, 9, .25, .55, .85, .60, .05, .10, 0], lowcountry: [21, 8, .25, .55, .85, .60, .07, .10, 0], beaufort: [21, 8, .25, .55, .85, .60, .07, .10, 0],
    savannah: [22, 8, .25, .55, .88, .65, .07, .08, 0], jekyll: [21, 10, .25, .55, .85, .60, .03, .12, 0], amelia: [22, 11, .25, .55, .90, .65, .03, .12, 0],
    palmsprings: [28, 13, .03, .88, .99, .95, 0, .15, 0], joshuatree: [20, 4, .04, .85, .90, .50, .20, .20, .005], anzaborrego: [27, 11, .03, .88, .99, .90, .01, .12, 0],
    deathvalley: [27, 13, .02, .90, .99, .90, .01, .20, 0], ojai: [22, 7, .12, .70, .95, .70, .08, .08, 0], santabarbara: [19, 8, .13, .65, .92, .45, .02, .10, 0],
    santaynez: [21, 4, .13, .65, .92, .55, .15, .10, 0], sandiego: [19, 11, .13, .60, .95, .45, 0, .10, 0], laguna: [19, 10, .13, .62, .95, .45, 0, .08, 0],
    bigsur: [16, 8, .20, .55, .80, .15, .03, .15, .005], losangeles: [20, 10, .13, .62, .95, .55, 0, .08, 0]
  };
  const MISTRAL = ["aix", "luberon", "cassis", "marseille", "avignon", "alpilles", "camargue", "ventoux"];
  Object.entries(W).forEach(([id, a]) => {
    if (!B.bases[id]) return;
    B.bases[id].wx = { hi: a[0], lo: a[1], rain: a[2], sun: a[3], t15: a[4], t20: a[5], frost: a[6], wind: a[7], snow: a[8], windName: MISTRAL.includes(id) ? "mistral" : "" };
  });
})();
