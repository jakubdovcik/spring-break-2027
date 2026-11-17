/* ------------------------------------------------------------------
   Discover: what is actually special about each option.
   special: the 3–5 things that make the place itself
   items:   [name, category, base, effort, time, wikipedia title, why it's cool, tip]
     category: nature | culture | food | town | people
     effort:   passive (sit back) | easy (easy walk) | active
------------------------------------------------------------------- */
window.DISCOVER = {
  spain: {
    special: [
      ["Eating is the culture", "In the Basque Country, the evening walk from bar to bar is how people socialise. Each bar has one thing it's known for, and you order a pintxo and a small glass, then move on. Few places anywhere have more Michelin stars per head."],
      ["Mountains thirty minutes from the surf", "The Cantabrian range falls straight into the Atlantic. You can have breakfast by a beach and lunch under snow-capped peaks the same day."],
      ["A people older than Europe", "Euskara, the Basque language, isn't related to any other living language. You'll see it on every sign, alongside stone-lifting, pelota and cider-house traditions."],
      ["Green Spain", "This isn't the Spain of sun and sangria: it's emerald hills, stone villages, fog over the cliffs and apple orchards for cider."]
    ],
    items: [
      ["Guggenheim Bilbao", "culture", "bilbao", "passive", "2–3 h", "Guggenheim_Museum_Bilbao", "Frank Gehry's titanium ship turned a rusting port into a city people travel for. The building is the show: walk all the way round it at dusk, past Jeff Koons's flower-covered Puppy and Louise Bourgeois's giant spider.", "Timed tickets online. Nerua (1★) is inside if you want lunch."],
      ["Gaztelugatxe", "nature", "bilbao", "easy", "2 h", "Gaztelugatxe", "A tiny hermitage on a rock island, joined to the coast by a stone causeway and 241 zig-zag steps. Waves crash on both sides. Ring the bell at the top three times and make a wish.", "Free booking needed at busy times. Go early or late for the light."],
      ["La Concha and Monte Igueldo", "nature", "sansebastian", "passive", "2 h", "San_Sebastián", "One of Europe's most perfect town beaches, a shell-shaped bay with an island in the middle. Ride the 1912 wooden funicular up Monte Igueldo for the postcard view and a faded old amusement park.", "Walk the promenade at sunset, then go straight into the old town."],
      ["The pintxo crawl", "food", "sansebastian", "passive", "an evening", "Basilica_of_Saint_Mary_of_the_Chorus", "The Parte Vieja's narrow streets hold dozens of bars, each with its own speciality: the tortilla at Nestor, the risotto at Borda Berri, the mushrooms at Ganbara. One bite and a small txakoli per bar, then move on.", "Go from about 8 pm. Order the hot pintxos from the chalkboard, not just what's on the counter."],
      ["Peine del Viento", "culture", "sansebastian", "passive", "45 min", "The_Comb_of_the_Wind", "Eduardo Chillida's iron sculptures grip the rocks at the end of the bay. On rough days the sea blasts up through blowholes in the paving beside them, the whole thing sounding like a living instrument.", "Best at high tide in a swell."],
      ["Getaria and txakoli", "food", "sansebastian", "passive", "half a day", "Getaria,_Gipuzkoa", "A fishing village where grills smoke on the street and whole turbot cook in cages over charcoal. The hills above are planted with txakoli, a spritzy white poured from a height to make it sparkle.", "Lunch at Elkano (1★) or any grill on the harbour. Visit a txakoli winery like Txomin Etxaniz."],
      ["Zumaia flysch cliffs", "nature", "sansebastian", "easy", "2 h", "Zumaia", "Sixty million years of rock layers stacked like the pages of a tilted book, exposed at low tide. One of the world's best records of the dinosaurs' extinction, and Dragonstone in Game of Thrones.", "Check the tide table: the wave-cut platform appears at low water. Boat trips run from the harbour."],
      ["Lakes of Covadonga", "nature", "asturias", "easy", "half a day", "Lakes_of_Covadonga", "Two glacial lakes on a high plateau under the snowy Picos. Cows with bells, wild horses and views that change every minute. You drive up a dramatic mountain road and stroll a flat loop at the top.", "In March there's often snow up there: check the road and the park bus schedule."],
      ["Covadonga shrine", "culture", "asturias", "passive", "1 h", "Covadonga", "A chapel built into a cave above a waterfall pool, where Spain's story of the Reconquista began in 722. Below it is a pink-stone basilica in the forest. Moving even if you're not religious.", "Pair it with the lakes on the same day."],
      ["A cider house evening", "food", "asturias", "passive", "an evening", "Asturias", "Asturian cider is poured from high above the head into a tilted glass, to wake it up, and drunk in one go. Long wooden tables, fabada stew, cachopo and blue Cabrales cheese from caves in the Picos.", "Let the waiter pour. Leave a splash in the glass and toss it on the floor: that's tradition."],
      ["Gulpiyuri", "nature", "asturias", "easy", "1 h", "Playa_de_Gulpiyuri", "A tiny beach in the middle of a meadow, 100 m from the coast, filled by the sea through underground tunnels. Waves arrive with nowhere obvious to come from.", "Best at high tide. Combine with the cliff walk at Llanes."],
      ["The Cares gorge", "nature", "asturias", "active", "half a day", "Ruta_del_Cares", "A path cut into the side of a sheer limestone gorge, high above a turquoise river. You don't have to do the full 12 km: walk an hour in and back from Poncebos.", "Wear proper shoes. There's no railing in places."]
    ]
  },
  scotland: {
    special: [
      ["Two cities in one", "Edinburgh's medieval Old Town runs down a volcanic ridge, and across a valley sits the perfectly planned Georgian New Town. Together they're a UNESCO site, and you can walk between centuries in five minutes."],
      ["Fireside culture", "Whisky bars with peat fires, ceilidh music in pubs, tweed armchairs and long dinners. In March this is the point, not the consolation prize."],
      ["Real wilderness, close by", "Two hours from the capital, the Cairngorms are Britain's highest, wildest plateau, with red deer, golden eagles and Arctic weather on the tops."],
      ["Stories everywhere", "Castles, ghosts, Burns and Scott, battlefields and closes with names like Fleshmarket. Every street comes with a story."]
    ],
    items: [
      ["Edinburgh Castle and the Royal Mile", "culture", "edinburgh", "easy", "3 h", "Edinburgh_Castle", "A fortress on an extinct volcano, holding Scotland's crown jewels and the Stone of Destiny. The Royal Mile runs downhill from it, lined with closes and courtyards to duck into.", "Go at opening time. The one o'clock gun fires daily except Sunday."],
      ["Arthur's Seat", "nature", "edinburgh", "active", "1 h 30", "Arthur's_Seat", "A wild hill and extinct volcano in the middle of the city. Climb for a 360° view over the spires, the sea and the hills of Fife. It feels like the Highlands, but it's ten minutes from the hotel.", "Windy on top. Go at sunrise or late afternoon."],
      ["Dean Village and the Water of Leith", "town", "edinburgh", "easy", "1 h 30", "Dean_Village", "An old mill village hidden in a gorge below the New Town. Follow the riverside path to Stockbridge for cafés and the Sunday market.", "Continue to the Scottish National Gallery of Modern Art."],
      ["A whisky evening", "food", "edinburgh", "passive", "an evening", "Scotch_whisky", "Scotland has five whisky regions, from smoky Islay to soft Speyside. A good bar will build you a flight. Try the Scotch Malt Whisky Society or the Bow Bar on Victoria Street.", "Ask for a tasting flight. Add a drop of water."],
      ["National Museum of Scotland", "culture", "edinburgh", "passive", "2 h", "National_Museum_of_Scotland", "Free and huge: Dolly the sheep, Lewis chessmen and a Victorian glass hall. The roof terrace has one of the best views of the castle.", "Take the lift to the roof first."],
      ["Royal Botanic Garden", "nature", "edinburgh", "passive", "2 h", "Royal_Botanic_Garden_Edinburgh", "Victorian glasshouses full of palms, with spring bulbs and rhododendrons starting outside. The walk to the gate has a skyline view.", "The glasshouses are warm on a cold day."],
      ["Gleneagles estate", "nature", "gleneagles", "passive", "a day", "Gleneagles_Hotel", "An 850-acre Perthshire estate: falconry, gun dogs, off-road driving, a spa and a whisky bar. The ultimate do-nothing country-house stay.", "Book a falconry 'hawk walk', where a bird flies to your glove."],
      ["Stirling Castle", "culture", "gleneagles", "easy", "2 h", "Stirling_Castle", "Where Scottish kings were crowned, with a restored Renaissance palace and views to the Wallace Monument. Less crowded than Edinburgh's castle and more vivid inside.", "30 min from Gleneagles."],
      ["The Cairngorms", "nature", "braemar", "easy", "a day", "Cairngorms_National_Park", "Britain's largest national park: ancient Caledonian pine forest, frozen lochs, mountain hares turning white and herds of red deer at dusk on the Braemar road.", "Drive slowly at dusk, when the deer come down to the road."],
      ["Linn of Dee", "nature", "braemar", "easy", "1 h", "Linn_of_Dee", "The River Dee forced through a narrow rock chasm under a Victorian bridge, in pine forest just outside Braemar.", "A short loop from the car park."],
      ["Braemar Castle", "culture", "braemar", "passive", "1 h", "Braemar_Castle", "A small, turreted tower house run by the village. Cosy rooms, clan history and a famously haunted feel.", "Check winter opening days."],
      ["St Andrews", "town", "standrews", "easy", "half a day", "St_Andrews", "A medieval university town on the sea: cathedral ruins on the cliff, West Sands beach (the Chariots of Fire run) and the Old Course, the home of golf.", "Walk the Old Course on Sunday, when it's closed for play and open to everyone."]
    ]
  },
  provence: {
    special: [
      ["The light painters came for", "Cézanne painted Mont Sainte-Victoire from Aix more than 80 times. The clear, mistral-scrubbed light still makes the stone glow honey and the shadows blue."],
      ["Villages perched on rock", "The Luberon's hilltop villages (Gordes, Bonnieux, Ménerbes, Roussillon) were built for defence and kept for beauty. Each has a market day, a café and a view."],
      ["Market life", "Provençal life runs on morning markets: tapenade, goat's cheese, olives, early asparagus and almond-blossom honey."],
      ["Fjords of limestone", "Between Marseille and Cassis, white cliffs drop into turquoise inlets, the calanques: a national park right on the edge of France's oldest city."],
      ["Elizabeth's Aix", "She studied here, so the café terraces, fountains and back streets come with her own stories."]
    ],
    items: [
      ["Cours Mirabeau", "town", "aix", "passive", "1 h", "Cours_Mirabeau", "A boulevard of plane trees, mossy fountains and café terraces where Aix watches itself go by. Les Deux Garçons has served coffee since 1792.", "Sit on the sunny side in the morning."],
      ["Atelier Cézanne", "culture", "aix", "passive", "1 h", "Atelier_de_Cézanne", "Cézanne's studio, left as it was: his coat on the hook, the skulls and fruit he painted. Then walk up to the Terrain des Peintres for the view he painted.", "Book a slot. It's small."],
      ["Montagne Sainte-Victoire", "nature", "aix", "easy", "half a day", "Montagne_Sainte-Victoire", "A pale limestone ridge that turns pink at sunset. Walk the easy dam lakes at Le Tholonet, or hike to the cross on top if you feel strong.", "Lunch at Le Saint-Estève (2★) by the river."],
      ["Aix morning markets", "food", "aix", "passive", "2 h", "Aix-en-Provence", "Place Richelme every morning, and the big market on Tuesday, Thursday and Saturday. Taste calissons, the almond-and-melon sweets Aix is famous for.", "Arrive before 10."],
      ["Gordes", "town", "luberon", "passive", "2 h", "Gordes", "Stone houses stacked up a cliff around a castle. The view as you drive in is the classic Provence postcard.", "Stop at the viewpoint on the D15 as you arrive."],
      ["Sénanque Abbey", "culture", "luberon", "passive", "1 h", "Sénanque_Abbey", "A Cistercian abbey hidden in a valley, still home to monks. In summer the lavender field in front is famous. In March it's quiet, with green rows and real silence.", "Guided visits only. Respect the silence rules."],
      ["Roussillon ochre trail", "nature", "luberon", "easy", "1 h", "Roussillon,_Vaucluse", "A village painted in every shade of red and orange, above old ochre quarries. A short trail runs through a little rainbow canyon.", "Wear old shoes: the dust stains."],
      ["Lourmarin", "town", "luberon", "passive", "2 h", "Lourmarin", "A Renaissance château, a Friday market and the grave of Albert Camus, who lived here. Cafés spill into the lanes.", "Friday morning market."],
      ["Luberon wine and olive oil", "food", "luberon", "passive", "half a day", "Luberon", "Small domaines making rosé, reds and olive oil, with tastings in old stone cellars. Château La Canorgue was the setting for the film A Good Year.", "Call ahead. Many are family-run."],
      ["The calanques by boat", "nature", "cassis", "passive", "1–2 h", "Calanques_National_Park", "White cliffs and turquoise inlets you can only reach by boat or long hikes. From Cassis harbour, boats visit 3 to 9 calanques.", "Not on mistral days, when boats may not run."],
      ["Route des Crêtes", "nature", "cassis", "passive", "1 h", "Cap_Canaille", "A road along the top of France's highest sea cliffs, Cap Canaille, with views over Cassis and the sea.", "Closed in strong wind. Sunset is spectacular."],
      ["Marseille's Vieux-Port and MuCEM", "culture", "cassis", "easy", "half a day", "MuCEM", "France's oldest city: a fish market at dawn, the lace-concrete MuCEM museum linked by footbridge to a 17th-century fort, and bouillabaisse in the fishermen's cove of Vallon des Auffes.", "The MuCEM roof terrace is free to visit."]
    ]
  },
  azores: {
    special: [
      ["Living volcanoes", "São Miguel is a string of volcanoes: craters full of blue and green lakes, steaming vents and black lava coasts."],
      ["Bathing in the earth's heat", "Iron-rich hot springs in gardens and fern gullies, warm enough to sit in while it rains."],
      ["Food cooked by the volcano", "In Furnas, stew is buried in hot ground for hours and dug up for lunch."],
      ["Europe's tea garden", "The only commercial tea plantations in Europe, still worked with 19th-century machinery."]
    ],
    items: [
      ["Sete Cidades", "nature", "pdl", "passive", "half a day", "Sete_Cidades_Massif", "Twin lakes in a giant crater, one blue and one green, with a legend of lovers' tears. The Vista do Rei viewpoint is the island's icon.", "Check the webcam first: cloud can hide everything."],
      ["Lagoa do Fogo", "nature", "pdl", "easy", "2 h", "Lagoa_do_Fogo", "A wild crater lake with no buildings at all, high on the island's spine.", "Viewpoint from the road, or a steep path down."],
      ["Terra Nostra Park", "nature", "furnas", "passive", "2–3 h", "Terra_Nostra_Park", "An 18th-century botanical garden around a huge, warm, iron-orange thermal pool. Swim among camellias and tree ferns.", "Wear a dark swimsuit: the water stains."],
      ["Poça da Dona Beija", "nature", "furnas", "passive", "1–2 h", "Furnas", "Small hot pools in a fern-filled gully, open into the evening. Bliss in the rain.", "Go after dark for fewer people."],
      ["Cozido das Furnas", "food", "furnas", "passive", "lunch", "São_Miguel_Island", "Pots of meat and vegetables buried by the steaming lake shore at dawn and dug up at noon, slow-cooked by the volcano.", "Watch the pots come up around 11:30, then lunch in the village."],
      ["Gorreana tea plantation", "culture", "pdl", "passive", "1 h", "Gorreana", "Europe's oldest tea plantation, with Victorian machines still running, free tastings and rows of tea down to the sea.", "Free entry."],
      ["Ferraria ocean hot spring", "nature", "pdl", "easy", "1 h", "Ferraria", "A natural pool in the lava rocks where hot spring water meets the Atlantic. The temperature changes with the tide.", "Best near low tide. There's a rope to hold."],
      ["Ponta Delgada", "town", "pdl", "passive", "2 h", "Ponta_Delgada", "Black-and-white stone streets, baroque churches and the city gates. Nearby greenhouses grow pineapples the old way, smoked to flower.", "Visit the Arruda pineapple plantation."],
      ["Whale and dolphin watching", "nature", "pdl", "passive", "3 h", "Whale_watching", "The Azores are one of the world's best whale-watching places. Sperm whales live here all year, and spring brings blue and fin whales passing through.", "Go with an operator that has a lookout on the cliffs."]
    ]
  },
  lisbon: {
    special: [
      ["Light and tile", "Lisbon's buildings are wrapped in azulejos, glazed tiles that shine in the soft Atlantic light. The whole city is a viewpoint."],
      ["Fado", "A mournful, beautiful song form born in Alfama's taverns, sung by candlelight. It's UNESCO-listed."],
      ["Empty Atlantic beaches", "An hour south, Comporta has kilometres of dunes and rice fields with nobody on them."],
      ["Ancient Alentejo", "Cork-oak plains, a Roman temple in Évora, stone circles older than Stonehenge and wine estates."]
    ],
    items: [
      ["Alfama and fado", "culture", "lisbon", "easy", "an evening", "Alfama", "A maze of medieval lanes below the castle. At night, small taverns host fado: hush, candles, guitar.", "Try Tasca do Chico, or ask the hotel for a local casa de fado."],
      ["The miradouros", "town", "lisbon", "easy", "2 h", "Lisbon", "Lisbon's viewpoint terraces (Santa Luzia, Graça, Senhora do Monte) over red roofs to the river. Ride the old Tram 28 between them.", "Sunset at Senhora do Monte."],
      ["Belém and pastéis", "culture", "lisbon", "passive", "half a day", "Belém_Tower", "The age of discovery in stone: Belém Tower, the Jerónimos monastery and the original pastéis de nata, warm from the oven.", "Eat the pastries at Pastéis de Belém, inside, not in the take-away queue."],
      ["Sintra's palaces", "culture", "lisbon", "easy", "a day", "Pena_Palace", "A forest of fairy-tale palaces in the mist: the painted Pena Palace, Moorish castle walls and Regaleira's initiation well.", "Go early. Take the train, not a car."],
      ["Cabo da Roca", "nature", "lisbon", "passive", "1 h", "Cabo_da_Roca", "The westernmost point of mainland Europe: cliffs, a lighthouse and wind.", "Combine with Sintra and Cascais."],
      ["Comporta's beaches", "nature", "comporta", "passive", "a day", "Comporta", "Endless pale dunes, stilt-house fishermen and rice fields full of storks. Low-key and luxurious, Portugal's quiet secret.", "Lunch with your feet in the sand at Sal."],
      ["Sado estuary dolphins", "nature", "comporta", "passive", "3 h", "Sado_Estuary_Natural_Reserve", "A resident pod of bottlenose dolphins lives in the estuary near Setúbal.", "Boats from Setúbal."],
      ["Carrasqueira stilt pier", "culture", "comporta", "easy", "1 h", "Alcácer_do_Sal", "A wobbly maze of wooden fishermen's piers on stilts over the mud. Photogenic at sunset.", "Watch your step."],
      ["Évora", "culture", "alentejo", "easy", "half a day", "Évora", "A white walled town with a Roman temple and a chapel lined with human bones. Alentejo cooking is slow, rich and cheap.", "Try the black pork and the sweet eggy convent desserts."],
      ["Almendres Cromlech", "culture", "alentejo", "easy", "1 h", "Almendres_Cromlech", "Nearly 100 standing stones in a cork-oak wood, older than Stonehenge, with nobody else there.", "Dirt road at the end. Go at golden hour."],
      ["Monsaraz", "town", "alentejo", "passive", "2 h", "Monsaraz", "A tiny walled village on a hill over Europe's largest artificial lake, with dark skies for stargazing.", "Stay for sunset and stars."]
    ]
  },
  andalusia: {
    special: [
      ["Moorish Spain", "Eight centuries of Islamic rule left palaces, gardens and patios of astonishing delicacy, above all the Alhambra and the Alcázar."],
      ["Orange-blossom season", "In March, Seville's 40,000 orange trees flower. The scent, azahar, fills whole streets."],
      ["Tapas and flamenco", "Evening life is a slow drift of small plates, sherry and, if you're lucky, a flamenco set in a tiny bar."],
      ["White villages", "Pueblos blancos cling to cliffs and gorges, some built right into the rock."]
    ],
    items: [
      ["Real Alcázar", "culture", "seville", "easy", "3 h", "Alcázar_of_Seville", "A royal palace still in use, with Moorish courtyards, tiled halls and gardens with orange trees and peacocks. Dorne in Game of Thrones.", "Book the first slot of the day."],
      ["Plaza de España", "culture", "seville", "passive", "1 h", "Plaza_de_España_(Seville)", "A vast half-circle of tiled alcoves, one for each Spanish province, around a canal with little boats.", "Late afternoon light, then María Luisa Park."],
      ["Barrio Santa Cruz", "town", "seville", "easy", "2 h", "Santa_Cruz,_Seville", "The old Jewish quarter: whitewashed lanes, flower-filled patios and tiny squares under orange trees.", "Get lost on purpose."],
      ["Flamenco in Triana", "culture", "seville", "passive", "an evening", "Flamenco", "Across the river, Triana is flamenco's heartland. Small peñas and bars put on raw, close-up performances.", "Smaller is better: look for a local peña rather than a dinner show."],
      ["A tapas evening", "food", "seville", "passive", "an evening", "Tapas", "Start at El Rinconcillo (since 1670), then wander: spinach with chickpeas, jamón, fried fish and sherry from the barrel.", "Stand at the bar. They chalk your bill on the counter."],
      ["Ronda's gorge", "nature", "ronda", "easy", "2 h", "Puente_Nuevo", "A town split by a 100 m gorge and joined by an 18th-century bridge. Hemingway and Orson Welles loved it.", "Walk down to the viewpoint below the bridge."],
      ["Setenil de las Bodegas", "town", "ronda", "passive", "1 h", "Setenil_de_las_Bodegas", "A village where the houses are built under a giant overhanging rock.", "Tapas on Calle Cuevas del Sol."],
      ["Sierra de Grazalema", "nature", "ronda", "easy", "half a day", "Sierra_de_Grazalema_Natural_Park", "Green limestone mountains, rare Spanish firs and white villages, and Spain's rainiest corner, so March is lush.", "Drive the Puerto de las Palomas pass."],
      ["The Alhambra", "culture", "granada", "easy", "half a day", "Alhambra", "The Nasrid palaces: carved stucco like lace, reflecting pools and the Generalife gardens with the snowy Sierra Nevada behind.", "Book weeks ahead and note your palace entry time."],
      ["Albaicín at sunset", "town", "granada", "easy", "2 h", "Albaicín", "The old Moorish quarter on the hill opposite. Walk up to Mirador de San Nicolás for the Alhambra glowing red at sunset.", "Teterías (tea houses) on Calderería Nueva."],
      ["Sierra Nevada", "nature", "granada", "passive", "half a day", "Sierra_Nevada_(Spain)", "Mainland Spain's highest peaks, still snowy in March, 45 minutes from the city.", "The drive up gives the view."]
    ]
  },
  lowcountry: {
    special: [
      ["Gullah Geechee culture", "Descendants of enslaved West Africans kept their own language, crafts and food on these sea islands. Their sweetgrass baskets are sold on Charleston's corners."],
      ["Live oaks and Spanish moss", "Huge oaks draped in grey moss arch over roads and squares. It's the defining image of the coast."],
      ["Lowcountry cooking", "Shrimp and grits, she-crab soup, oyster roasts and whole-hog barbecue, plus some of the South's best chefs."],
      ["Garden season", "Mid-March is peak azalea and camellia time in the old plantation gardens."]
    ],
    items: [
      ["The Battery and Rainbow Row", "town", "charleston", "easy", "2 h", "The_Battery_(Charleston)", "Pastel houses facing the harbour, gas lamps and hidden gardens behind wrought-iron gates.", "Walk the South of Broad streets early in the morning."],
      ["Middleton Place", "nature", "charleston", "easy", "half a day", "Middleton_Place", "America's oldest landscaped gardens: terraces, butterfly lakes and azaleas in flower in March. The site also tells the story of the enslaved people who built it.", "Lunch at the restaurant, which serves Lowcountry classics."],
      ["Angel Oak", "nature", "charleston", "passive", "45 min", "Angel_Oak", "A live oak about 400 years old, its limbs sprawling over 17,000 sq ft. It's quiet and enormous.", "Combine with Kiawah or Folly Beach."],
      ["Gullah heritage", "culture", "charleston", "passive", "2 h", "Gullah", "Learn about Gullah culture with a guided tour or at the International African American Museum on the old wharf.", "Buy a sweetgrass basket from the makers on Highway 17."],
      ["Fort Sumter", "culture", "charleston", "passive", "2 h 30", "Fort_Sumter", "A boat across the harbour to the island fort where the Civil War began.", "Dolphins are common on the crossing."],
      ["Lowcountry food", "food", "charleston", "passive", "an evening", "Lowcountry_cuisine", "Shrimp and grits, oysters roasted over fire, Rodney Scott's whole-hog barbecue and Husk's Southern-only kitchen.", "Book FIG and The Ordinary well ahead."],
      ["Kiawah and Folly beaches", "nature", "lowcountry", "passive", "half a day", "Kiawah_Island,_South_Carolina", "Long, empty beaches. Dolphins chase fish onto the mud banks in the creeks ('strand feeding'), seen almost nowhere else.", "Low tide in the Kiawah River for strand feeding."],
      ["Beaufort", "town", "lowcountry", "easy", "2 h", "Beaufort,_South_Carolina", "A small antebellum town on the water: white columns, moss and a waterfront park.", "A carriage ride is the classic way to see it."],
      ["Savannah's squares", "town", "savannah", "easy", "half a day", "Chippewa_Square", "Twenty-two shady squares laid out in 1733, each with fountains and statues under moss-draped oaks. Built for strolling.", "Walk from River Street to Forsyth Park."],
      ["Forsyth Park", "nature", "savannah", "passive", "1 h", "Forsyth_Park", "A great white fountain, azaleas and a Saturday farmers' market.", "Coffee on a bench, then the market."],
      ["Wormsloe's oak avenue", "nature", "savannah", "easy", "1 h 30", "Wormsloe_Historic_Site", "A mile-and-a-half of live oaks arching over a sandy road to colonial ruins.", "Arrive at opening time for an empty avenue."],
      ["Bonaventure Cemetery", "culture", "savannah", "easy", "1 h 30", "Bonaventure_Cemetery", "A haunting riverside cemetery of angels and oaks, made famous by Midnight in the Garden of Good and Evil.", "Go in the late-afternoon light."]
    ]
  },
  socal: {
    special: [
      ["Desert to Pacific in one trip", "Palm canyons, boulder fields and snow-capped peaks in the morning, and the Pacific a few hours later."],
      ["Mid-century cool", "Palm Springs is a museum of 1950s modernism: butterfly roofs, kidney pools and Sinatra's old haunts."],
      ["Dark skies", "Joshua Tree's night sky is one of the darkest near a big city, so you can see the Milky Way from the cabin deck."],
      ["California produce", "Farm-to-table cooking, Santa Ynez wines and Ojai's pixie tangerines in season in March."],
      ["Friends in LA", "Elizabeth has friends in Los Angeles, so the trip can end with an evening together before flying home."]
    ],
    items: [
      ["Joshua Tree National Park", "nature", "joshuatree", "easy", "a day", "Joshua_Tree_National_Park", "Two deserts meet here: surreal Joshua trees, giant granite boulders and huge skies. Easy loops like Hidden Valley and Barker Dam suit a slow pace.", "Go early. Park entry is $35 per car."],
      ["Cholla Cactus Garden", "nature", "joshuatree", "easy", "30 min", "Cylindropuntia_bigelovii", "A field of 'teddy-bear' cholla that glows gold in low sun.", "Golden hour. Don't touch: the spines jump."],
      ["Stargazing", "nature", "joshuatree", "passive", "an evening", "Joshua_Tree,_California", "A certified dark-sky park. On a moonless night you'll see the Milky Way rising over the boulders.", "Check the moon phase. Bring a blanket and a red torch."],
      ["Tahquitz and Indian Canyons", "nature", "palmsprings", "easy", "2 h", "Tahquitz_Canyon", "Palm oases in rocky canyons on Agua Caliente Cahuilla land, with a seasonal waterfall in Tahquitz.", "Ranger-led walks share the tribe's history."],
      ["Aerial Tramway", "nature", "palmsprings", "passive", "2–3 h", "Palm_Springs_Aerial_Tramway", "The world's largest rotating tram car climbs from desert palms to snowy pine forest at 8,500 ft in ten minutes.", "Bring a jacket: it's 30°F colder at the top."],
      ["Mid-century Palm Springs", "culture", "palmsprings", "passive", "2 h", "Palm_Springs,_California", "Architecture tours past Frey and Neutra houses, the Kaufmann House and the 'Elvis honeymoon house'.", "Self-drive map from the visitor centre, itself a Frey building."],
      ["Ojai's pink moment", "nature", "ojai", "passive", "an evening", "Ojai,_California", "At sunset the Topatopa bluffs glow pink across the valley, and the town stops to watch.", "Watch from Meditation Mount."],
      ["Mission Santa Barbara", "culture", "santabarbara", "passive", "1 h", "Mission_Santa_Barbara", "The 'Queen of the Missions', twin-towered with a rose garden, part of California's Spanish colonial and Chumash history.", "Then the Funk Zone for wine tasting."],
      ["Channel Islands National Park", "nature", "santabarbara", "easy", "a day", "Channel_Islands_National_Park", "The 'Galápagos of North America': island foxes, sea caves and grey whales migrating in March, an hour by boat from Ventura.", "Book Island Packers early. The crossing can be rough."],
      ["Santa Ynez wine country", "food", "santabarbara", "passive", "a day", "Santa_Ynez_Valley", "Rolling oak hills, pinot and syrah, and Los Olivos tasting rooms. The film Sideways was shot here.", "Lunch at Bell's (1★) in Los Alamos."],
      ["Griffith Observatory", "culture", "losangeles", "easy", "2 h", "Griffith_Observatory", "Art-deco observatory with views from the Hollywood sign to the ocean.", "Sunset, then the free telescopes."],
      ["Getty Center", "culture", "losangeles", "passive", "3 h", "Getty_Center", "A hilltop travertine campus of art and gardens with sweeping LA views. Entry is free.", "Book free timed entry. Parking is paid."],
      ["Time with Elizabeth's friends", "people", "losangeles", "passive", "an evening", "Los_Angeles", "Elizabeth has friends in LA, so the last night is for them: let them pick a favourite neighbourhood spot, or watch the sunset at the Santa Monica pier together before the flight home.", "Plan the LA night for Saturday so the Sunday flight from LAX is easy."]
    ]
  }
};

/* Elizabeth's friends live in LA, so Southern California now ends there by default. */
(() => {
  const B = window.BUDGET, it = B.itineraries.find(i => i.id === "socal");
  if (!it) return;
  it.legs = [["palmsprings", 3], ["joshuatree", 1], ["ojai", 2], ["santabarbara", 2], ["losangeles", 1]];
  it.extras = it.extras.filter(x => x[0] !== "losangeles");
  it.extras.forEach(x => { if (x[0] === "bigsur" || x[0] === "catalina") x[2] = "after:santabarbara"; }); // keep LA (friends) as the last night
  it.how = "Fly into Palm Springs or LAX on Friday, desert first, then west to the coast, ending in LA with Elizabeth's friends. Fly home from LAX.";
  it.friends = "Elizabeth's friends in LA";
  const la = B.bases.losangeles;
  la.name = "Los Angeles · friends";
  la.dine.unshift(["Dinner out with Elizabeth's friends", 250, 0]);
  window.SEE.losangeles.unshift(["Evening with Elizabeth's friends", "town", "Santa_Monica,_California", "Let them pick the spot, or watch the sunset at the pier together."]);
})();
