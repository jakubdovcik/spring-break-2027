/* ------------------------------------------------------------------
   Spring break 2027 — trip data.
   Edit this file to iterate: add a stop, swap a hotel, change a score.
   Michelin stars reflect the guide as of 2025–26; re-check before booking.
   Flight info = typical schedules, not live fares. Verify on Google Flights.
------------------------------------------------------------------- */

window.TRIP = {
  window: { start: "2027-03-12", end: "2027-03-21", label: "Fri 12 – Sun 21 Mar 2027" },
  origins: ["BOS", "BWI"],
  notes: [
    "US clocks spring forward on Sun 14 Mar, Europe on Sun 28 Mar, so for most of the trip the East Coast is only 4 h behind the UK (5 h behind France and Spain).",
    "Leave Fri 12 Mar on an overnight flight, land Sat 13 morning, so 8 nights on the ground. Fly back Sun 21 Mar on a late-morning departure and you're home around 2–4 pm.",
    "Coming home via Dublin? Aer Lingus passengers clear US customs in Dublin, so you land in Boston as a domestic arrival.",
    "Easter 2027 is 28 Mar. Holy Week begins Sun 21 Mar, so Spain gets busier and pricier as you leave.",
    "Inside the window: St Patrick's Day (Wed 17, Ireland) and Las Fallas in Valencia (15–19, loud fireworks, not restful). The last Six Nations rugby weekend is usually mid-March, and a Scotland home game fills Edinburgh hotels, so check the fixtures.",
    "Star restaurants in San Sebastián and Marseille open bookings 2–3 months out. Set reminders for mid-December."
  ],

  destinations: [
    /* ============================== SPAIN ============================== */
    {
      id: "spain",
      name: "Northern Spain",
      region: "Basque Country · Cantabria · Asturias",
      proposedBy: "Him",
      color: "#1F6F5C",
      tagline: "Pintxo-bar evenings, a lot of Michelin stars, a green Atlantic coast, cider houses.",
      hero: "San_Sebastián",
      unsplash: "san-sebastian",
      weather: { hi: 16, lo: 8, rainDays: 12, daylight: "11h 50m", sea: 13, summary: "Mild and green. Expect some showers and bring a light rain jacket." },
      scores: { relax: 4, food: 5, cozy: 4, weather: 3, ease: 3 },
      budget: "€€€",
      pros: ["Probably the best food region in Europe per square km", "Calm, uncrowded shoulder season", "Ocean, mountains and cities all close together"],
      cons: ["Rainiest of the three", "The road trip needs a car (or Alsa buses)", "No direct US flight, so 1 connection each way"],
      stops: [
        { name: "Bilbao", lat: 43.2630, lng: -2.9350, nights: 2, wiki: "Bilbao", desc: "Guggenheim, Casco Viejo pintxos, the river walk." },
        { name: "Asador Etxebarri (lunch)", lat: 43.1153, lng: -2.5967, nights: 0, wiki: "Asador_Etxebarri", desc: "Grill-only cooking in a mountain village. A lunch stop on the way." },
        { name: "San Sebastián", lat: 43.3183, lng: -1.9812, nights: 3, wiki: "San_Sebastián", desc: "La Concha beach, Parte Vieja pintxos, Monte Igueldo." },
        { name: "Getaria", lat: 43.3036, lng: -2.2047, nights: 0, wiki: "Getaria,_Gipuzkoa", desc: "Fishing village, txakoli vineyards, turbot at Elkano." },
        { name: "Santillana del Mar", lat: 43.3896, lng: -4.1072, nights: 0, wiki: "Santillana_del_Mar", desc: "Medieval stone village, a coffee stop on the drive west." },
        { name: "Llanes", lat: 43.4199, lng: -4.7550, nights: 0, wiki: "Llanes", desc: "Cliff walks, Gulpiyuri inland beach." },
        { name: "Cangas de Onís / Picos", lat: 43.3510, lng: -5.1290, nights: 3, wiki: "Picos_de_Europa", desc: "Roman bridge, Covadonga lakes, cider houses." },
        { name: "Oviedo (fly/train out)", lat: 43.3614, lng: -5.8494, nights: 0, wiki: "Oviedo", desc: "Old town. Fly OVD→MAD/LHR, or take the AVE to Madrid in 3 h 15." }
      ],
      days: [
        { d: "Fri 12", t: "Overnight flight: BOS/BWI → London, Paris, Amsterdam or Frankfurt." },
        { d: "Sat 13", t: "Connect to Bilbao (BIO). Check in facing the Guggenheim, nap, then an easy pintxo crawl in the Casco Viejo." },
        { d: "Sun 14", t: "Slow morning. Guggenheim, a walk along the ría, and a long lunch. Option: Azurmendi (3★) in the hills." },
        { d: "Mon 15", t: "Pick up the car. Lunch at Asador Etxebarri in Axpe, then on to San Sebastián (1 h 15)." },
        { d: "Tue 16", t: "Beach walk on La Concha, funicular up Monte Igueldo, spa afternoon, pintxos in the Parte Vieja." },
        { d: "Wed 17", t: "Day out: Getaria for turbot at Elkano and txakoli tasting. Or nothing at all, just the spa." },
        { d: "Thu 18", t: "Drive west along the coast (3 h with stops): Santillana del Mar, Llanes cliffs. Sleep in Asturias." },
        { d: "Fri 19", t: "Lakes of Covadonga (easy viewpoints), lunch at Casa Marcial (2★), then a cider house in the evening." },
        { d: "Sat 20", t: "Beach and cliff time, Gulpiyuri. Late afternoon in Oviedo or Gijón. Optional evening AVE to Madrid." },
        { d: "Sun 21", t: "Fly out early OVD→MAD or LHR, connect to BOS/IAD, land in the early afternoon." }
      ],
      stays: [
        { name: "Hotel María Cristina", place: "San Sebastián", price: "€€€€", tag: "Belle Époque grande dame", why: "Grand 1912 hotel on the river, five minutes' walk from the beach and the pintxo bars.", url: "https://www.google.com/search?q=Hotel+Maria+Cristina+San+Sebastian", highlight: true },
        { name: "Akelarre Hotel", place: "San Sebastián (Igueldo)", price: "€€€€€", tag: "Cliff-top, 3★ restaurant downstairs", why: "Twenty-two glass-fronted rooms above the Bay of Biscay, with a spa. The calmest option on this list.", url: "https://www.google.com/search?q=Akelarre+hotel+San+Sebastian", highlight: true },
        { name: "Hotel Arima", place: "San Sebastián", price: "€€€", tag: "Forest spa", why: "A modern Basque wood building with a big spa, a little out of the centre.", url: "https://www.google.com/search?q=Hotel+Arima+San+Sebastian" },
        { name: "Gran Hotel Domine", place: "Bilbao", price: "€€€", tag: "Faces the Guggenheim", why: "Design hotel with a rooftop terrace that looks straight onto Gehry's titanium.", url: "https://www.google.com/search?q=Gran+Hotel+Domine+Bilbao" },
        { name: "Palacio de Luces", place: "Colunga, Asturias", price: "€€€", tag: "16th-c. palace, sea views", why: "Relais & Châteaux palace between the mountains and the sea. Good for doing nothing.", url: "https://www.google.com/search?q=Palacio+de+Luces+Asturias", highlight: true },
        { name: "Parador de Cangas de Onís", place: "Picos de Europa", price: "€€", tag: "Monastery by the river", why: "A Benedictine monastery turned state-run hotel at the edge of the Picos.", url: "https://www.google.com/search?q=Parador+Cangas+de+Onis" },
        { name: "Hotel Marqués de Riscal", place: "Elciego, Rioja (detour)", price: "€€€€", tag: "Frank Gehry winery hotel", why: "Optional extra night 1 h 30 south of Bilbao: vineyards, a wine spa, ribbons of titanium.", url: "https://www.google.com/search?q=Hotel+Marques+de+Riscal+Elciego" }
      ],
      eat: [
        { name: "Arzak", place: "San Sebastián", stars: 3, note: "Juan Mari & Elena Arzak, the founding family of New Basque cooking." },
        { name: "Akelarre", place: "San Sebastián", stars: 3, note: "Pedro Subijana, with sea views from every table." },
        { name: "Martín Berasategui", place: "Lasarte-Oria", stars: 3, note: "Classic, technical, generous." },
        { name: "Azurmendi", place: "Larrabetzu (Bilbao)", stars: 3, note: "Eneko Atxa. Starts with a garden picnic, also has a Green Star." },
        { name: "Cenador de Amós", place: "Villaverde de Pontones, Cantabria", stars: 3, note: "On the drive west, in a 17th-c. manor house." },
        { name: "Mugaritz", place: "Errenteria", stars: 2, note: "Experimental and theatrical. Love it or hate it." },
        { name: "Casa Marcial", place: "Arriondas, Asturias", stars: 2, note: "Nacho Manzano's family farmhouse near the Picos." },
        { name: "Asador Etxebarri", place: "Axpe", stars: 1, note: "Bittor Arguinzoniz, usually top 3 on the World's 50 Best. Book the moment slots open." },
        { name: "Elkano", place: "Getaria", stars: 1, note: "Whole turbot grilled outdoors. Simple and perfect." },
        { name: "Nerua", place: "Bilbao (Guggenheim)", stars: 1, note: "Inside the museum." },
        { name: "Casa Gerardo", place: "Prendes, Asturias", stars: 1, note: "The definitive fabada asturiana." },
        { name: "La Cuchara de San Telmo · Bar Nestor · Gandarias · Borda Berri", place: "San Sebastián", stars: 0, note: "Pintxo-crawl staples. Nestor makes a limited tortilla each day, so put your name down." },
        { name: "Sidrería Tierra Astur", place: "Oviedo / Gijón", stars: 0, note: "Cider poured from overhead, cachopo, a loud and cozy room." }
      ],
      do: [
        { t: "Spa afternoon at Akelarre or Arima", relax: true },
        { t: "La Concha promenade at sunset", relax: true },
        { t: "Guggenheim Bilbao", relax: true },
        { t: "Txakoli tasting in Getaria", relax: true },
        { t: "Covadonga lakes viewpoints (drive up, short strolls)", relax: true },
        { t: "Cider-house evening in Oviedo", relax: true },
        { t: "Flysch cliffs boat trip, Zumaia", relax: false },
        { t: "Day trip to Biarritz (40 min) for French pastries", relax: false },
        { t: "Ruta del Cares gorge hike (half day)", relax: false }
      ],
      photos: ["San_Sebastián", "Guggenheim_Museum_Bilbao", "Getaria,_Gipuzkoa", "Picos_de_Europa", "Lakes_of_Covadonga", "Playa_de_Gulpiyuri", "Zumaia"],
      flights: {
        summary: "No direct US–Bilbao flights. Connect once via LHR, CDG, AMS, FRA or MAD.",
        legs: [
          { from: "BOS", to: "LHR", by: "BA / Virgin / Delta / JetBlue", direct: true },
          { from: "BOS", to: "MAD", by: "Iberia", direct: true },
          { from: "BOS", to: "CDG / AMS", by: "Air France / KLM / Delta", direct: true },
          { from: "BWI", to: "LHR", by: "British Airways", direct: true },
          { from: "IAD", to: "MAD", by: "Iberia / United (Dulles, ~1 h from Baltimore)", direct: true },
          { from: "LHR / AMS / CDG / FRA", to: "BIO", by: "BA, KLM, AF, Lufthansa (~2 h)", direct: true },
          { from: "OVD", to: "MAD / LHR", by: "Iberia / Vueling / easyJet", direct: true }
        ],
        searchIn: "BIO", searchOut: "OVD"
      }
    },

    /* ============================== SCOTLAND ============================== */
    {
      id: "scotland",
      name: "Scotland",
      region: "Edinburgh · Perthshire · Cairngorms",
      proposedBy: "Her",
      color: "#3B4A6B",
      tagline: "Fireplaces, whisky, Old Town closes, country houses in the hills. Cozy from start to finish.",
      hero: "Edinburgh",
      unsplash: "edinburgh",
      weather: { hi: 9, lo: 3, rainDays: 13, daylight: "11h 50m", sea: 7, summary: "Cold, changeable and atmospheric. Snow on the high ground, perfect fireplace weather." },
      scores: { relax: 4, food: 3, cozy: 5, weather: 2, ease: 4 },
      budget: "£££",
      pros: ["The coziest option by far", "English-speaking and easy logistics", "Short hop from London or Dublin, with a train option"],
      cons: ["Coldest and darkest", "Thinnest Michelin scene", "March in the Highlands can bring snow on the roads"],
      stops: [
        { name: "Edinburgh", lat: 55.9533, lng: -3.1883, nights: 3, wiki: "Edinburgh", desc: "Old Town, Dean Village, Stockbridge, afternoon tea." },
        { name: "Gleneagles", lat: 56.2840, lng: -3.7470, nights: 2, wiki: "Gleneagles_Hotel", desc: "Estate hotel with a spa and Restaurant Andrew Fairlie (2★)." },
        { name: "Braemar · Cairngorms", lat: 57.0060, lng: -3.3990, nights: 2, wiki: "Braemar", desc: "The Fife Arms, red deer, Highland quiet." },
        { name: "St Andrews", lat: 56.3398, lng: -2.7967, nights: 1, wiki: "St_Andrews", desc: "Sea air, castle ruins, West Sands beach." }
      ],
      days: [
        { d: "Fri 12", t: "Overnight flight: BOS → Dublin (Aer Lingus) or BOS/BWI → London Heathrow." },
        { d: "Sat 13", t: "Short hop to Edinburgh (EDI), or the LNER train from London (4 h 20, scenic). Check in, then a pub with a fireplace." },
        { d: "Sun 14", t: "Lazy Old Town day: Royal Mile, Victoria Street, afternoon tea, an evening dram at a whisky bar." },
        { d: "Mon 15", t: "Dean Village and the Water of Leith walk to Stockbridge, then the Royal Botanic Garden glasshouses." },
        { d: "Tue 16", t: "Drive or take the train to Gleneagles (1 h). Spa, falconry if you like, dinner at Andrew Fairlie (2★)." },
        { d: "Wed 17", t: "Do nothing at Gleneagles: pool, spa, walks, a long lunch." },
        { d: "Thu 18", t: "Through Pitlochry to Braemar (1 h 45). The Fife Arms: art, open fires, the Flying Stag bar." },
        { d: "Fri 19", t: "Gentle Cairngorms day: Linn of Dee, Balmoral estate grounds (check opening), red deer at dusk." },
        { d: "Sat 20", t: "Drive to St Andrews (2 h): West Sands, the cathedral ruins, seafood. Or go back to Edinburgh." },
        { d: "Sun 21", t: "EDI → DUB (with US preclearance) → BOS, or EDI → LHR → BOS/BWI. Home mid-afternoon." }
      ],
      stays: [
        { name: "The Fife Arms", place: "Braemar", price: "£££££", tag: "Art-filled Highland lodge", why: "A Victorian hunting lodge restored by Hauser & Wirth: Picasso in the drawing room, a fire in every corner. Possibly the coziest hotel in Britain.", url: "https://www.google.com/search?q=The+Fife+Arms+Braemar", highlight: true },
        { name: "Gleneagles", place: "Auchterarder", price: "££££", tag: "Glen-side estate + spa", why: "A full estate: spa, pool, a 2★ restaurant, a whisky bar, walks straight out the door.", url: "https://www.google.com/search?q=Gleneagles+hotel", highlight: true },
        { name: "The Witchery by the Castle", place: "Edinburgh", price: "££££", tag: "Gothic suites", why: "Nine theatrical candlelit suites at the castle gates. Very romantic.", url: "https://www.google.com/search?q=The+Witchery+by+the+Castle+suites", highlight: true },
        { name: "The Balmoral", place: "Edinburgh", price: "££££", tag: "Clock-tower landmark", why: "Classic grand hotel with whisky in the Scotch bar and a spa.", url: "https://www.google.com/search?q=The+Balmoral+Edinburgh" },
        { name: "Prestonfield House", place: "Edinburgh", price: "£££", tag: "Baroque country house in town", why: "Peacocks, Highland cattle, deep-red rooms below Arthur's Seat.", url: "https://www.google.com/search?q=Prestonfield+House+Edinburgh" },
        { name: "Rusacks", place: "St Andrews", price: "£££", tag: "Overlooks the Old Course", why: "Rooftop views over the West Sands.", url: "https://www.google.com/search?q=Rusacks+St+Andrews" }
      ],
      eat: [
        { name: "Restaurant Andrew Fairlie", place: "Gleneagles", stars: 2, note: "Scotland's only two-star restaurant. Book early." },
        { name: "The Kitchin", place: "Leith, Edinburgh", stars: 1, note: "Tom Kitchin, 'from nature to plate'. Scottish produce." },
        { name: "Timberyard", place: "Edinburgh", stars: 1, note: "Warehouse dining room, open fire, Green Star." },
        { name: "Condita", place: "Edinburgh", stars: 1, note: "Small surprise menu, very intimate." },
        { name: "Heron", place: "Leith, Edinburgh", stars: 1, note: "Waterfront, young and modern Scottish." },
        { name: "The Clachaig Inn · Sheep Heid Inn", place: "Glencoe · Duddingston", stars: 0, note: "Proper old pubs with fires. The Sheep Heid is one of Scotland's oldest." },
        { name: "Dishoom Edinburgh", place: "Edinburgh", stars: 0, note: "Book for the bacon naan at breakfast, a cozy ritual." }
      ],
      do: [
        { t: "Afternoon tea (Palm Court at The Balmoral)", relax: true },
        { t: "Whisky tasting at The Scotch Malt Whisky Society", relax: true },
        { t: "Gleneagles spa day", relax: true },
        { t: "Royal Botanic Garden glasshouses", relax: true },
        { t: "Fireside reading at the Fife Arms", relax: true },
        { t: "Portobello beach walk with coffee", relax: true },
        { t: "Arthur's Seat climb at sunrise (45 min)", relax: false },
        { t: "Falconry at Gleneagles", relax: false },
        { t: "Optional: Glencoe & Skye extension (long drives)", relax: false }
      ],
      photos: ["Edinburgh", "Dean_Village", "Royal_Mile", "Cairngorms_National_Park", "Gleneagles_Hotel", "St_Andrews", "Braemar_Castle"],
      flights: {
        summary: "No direct US–Edinburgh flights in March (summer only). Easiest: Aer Lingus via Dublin, or via London.",
        legs: [
          { from: "BOS", to: "DUB", by: "Aer Lingus / Delta (US preclearance on return)", direct: true },
          { from: "BOS", to: "LHR", by: "BA / Virgin / Delta / JetBlue", direct: true },
          { from: "BWI", to: "LHR", by: "British Airways", direct: true },
          { from: "IAD", to: "DUB", by: "Aer Lingus (Dulles)", direct: true },
          { from: "BOS / BWI", to: "KEF", by: "Icelandair (cheap, with a stopover option)", direct: true },
          { from: "DUB / LHR", to: "EDI", by: "Aer Lingus, BA, Ryanair (~1 h 15)", direct: true },
          { from: "London King's Cross", to: "Edinburgh", by: "LNER train, 4 h 20, coast views", direct: true }
        ],
        searchIn: "EDI", searchOut: "EDI"
      }
    },

    /* ============================== PROVENCE ============================== */
    {
      id: "provence",
      name: "South of France",
      region: "Aix-en-Provence · Luberon · Cassis",
      proposedBy: "Her",
      color: "#B5651D",
      tagline: "Elizabeth's old Aix: market mornings, plane-tree squares, then hill villages and the calanques.",
      hero: "Aix-en-Provence",
      unsplash: "provence",
      weather: { hi: 16, lo: 5, rainDays: 5, daylight: "11h 55m", sea: 13, summary: "Sunny and bright, almond blossom out. Cool mornings, and the mistral wind can bite." },
      scores: { relax: 5, food: 4, cozy: 4, weather: 4, ease: 4 },
      budget: "€€€",
      pros: ["Sunniest and driest option", "Familiar to Elizabeth, so she can show Kubs her Aix", "TGV straight from the Paris airport, no extra flight"],
      cons: ["Some Luberon hotels and restaurants only reopen in late March", "The mistral can be cold", "Markets are quieter than in summer"],
      stops: [
        { name: "Aix-en-Provence", lat: 43.5297, lng: 5.4474, nights: 3, wiki: "Aix-en-Provence", desc: "Cours Mirabeau, the markets, Cézanne's studio." },
        { name: "Gordes", lat: 43.9116, lng: 5.2003, nights: 0, wiki: "Gordes", desc: "Hilltop village, Sénanque Abbey." },
        { name: "Roussillon", lat: 43.9027, lng: 5.2928, nights: 0, wiki: "Roussillon,_Vaucluse", desc: "Ochre cliffs and red houses." },
        { name: "Lourmarin · Luberon", lat: 43.7638, lng: 5.3626, nights: 3, wiki: "Lourmarin", desc: "Friday market, château, Camus's village." },
        { name: "Cassis", lat: 43.2148, lng: 5.5375, nights: 2, wiki: "Cassis", desc: "Harbour, calanques boat, white wine." },
        { name: "Marseille (fly out)", lat: 43.2965, lng: 5.3698, nights: 0, wiki: "Marseille", desc: "Vieux-Port, MuCEM, bouillabaisse." }
      ],
      days: [
        { d: "Fri 12", t: "Overnight flight: BOS → Paris CDG (Air France / Delta)." },
        { d: "Sat 13", t: "TGV from the CDG airport station straight to Aix TGV (~3 h 20). Market on Place Richelme, a nap, aperitif on Cours Mirabeau." },
        { d: "Sun 14", t: "Elizabeth gives the tour: her old streets, Les Deux Garçons, calissons, the Mazarin quarter." },
        { d: "Mon 15", t: "Atelier Cézanne and the Terrain des Peintres viewpoint over Sainte-Victoire. Lunch at Le Saint-Estève." },
        { d: "Tue 16", t: "Pick up the car. Lourmarin, Bonnieux, check in to a Luberon bastide. Pool (heated) or fire." },
        { d: "Wed 17", t: "Gordes and Sénanque Abbey in the morning, Roussillon ochre path in the afternoon. Back for a long dinner." },
        { d: "Thu 18", t: "Nothing day: wine tasting at a nearby domaine, a book, the spa." },
        { d: "Fri 19", t: "Lourmarin Friday market, then drive to Cassis (1 h 15). Sunset on the harbour." },
        { d: "Sat 20", t: "Calanques boat trip, lunch in the port. Evening: Le Petit Nice (3★) or AM (3★) in Marseille." },
        { d: "Sun 21", t: "MRS → CDG, AMS or LHR → BOS/BWI. Or TGV to CDG first thing. Home in the afternoon." }
      ],
      stays: [
        { name: "Villa Gallici", place: "Aix-en-Provence", price: "€€€€", tag: "18th-c. Provençal villa", why: "Relais & Châteaux among cypresses, a short walk above the old town.", url: "https://www.google.com/search?q=Villa+Gallici+Aix", highlight: true },
        { name: "Hôtel Le Pigonnet", place: "Aix-en-Provence", price: "€€€", tag: "Cézanne painted from its garden", why: "A bastide with a pool, 10 minutes' walk to the Cours Mirabeau.", url: "https://www.google.com/search?q=Hotel+Le+Pigonnet+Aix" },
        { name: "Domaine de Fontenille", place: "Lauris, Luberon", price: "€€€€", tag: "Winery + 1★ restaurant", why: "A 17th-c. wine estate with a spa and Le Champ des Lunes. Confirm March opening.", url: "https://www.google.com/search?q=Domaine+de+Fontenille+Lauris", highlight: true },
        { name: "Coquillade Provence", place: "Gargas, Luberon", price: "€€€€", tag: "A hamlet among the vines", why: "A whole hilltop hamlet turned resort, with a big spa and Ventoux views. Usually reopens around late March, so check.", url: "https://www.google.com/search?q=Coquillade+Provence" },
        { name: "Les Roches Blanches", place: "Cassis", price: "€€€€", tag: "Cliff-edge pool", why: "1930s villa on the rocks facing Cap Canaille. The pool looks like it drops into the sea.", url: "https://www.google.com/search?q=Les+Roches+Blanches+Cassis", highlight: true },
        { name: "Hôtel Le Petit Nice", place: "Marseille", price: "€€€€€", tag: "3★ with rooms", why: "Gérald Passedat's seaside villa. Sleep upstairs after dinner.", url: "https://www.google.com/search?q=Le+Petit+Nice+Passedat+hotel" }
      ],
      eat: [
        { name: "Le Petit Nice – Passedat", place: "Marseille", stars: 3, note: "Fish-only, the Mediterranean in tasting-menu form." },
        { name: "AM par Alexandre Mazzia", place: "Marseille", stars: 3, note: "Wild, spicy, smoky. One of France's most original chefs." },
        { name: "La Villa Madie", place: "Cassis", stars: 2, note: "On the bay, terrace lunches." },
        { name: "Le Saint-Estève", place: "Le Tholonet (Aix)", stars: 2, note: "By the river, facing Sainte-Victoire." },
        { name: "Pierre Reboul", place: "Aix-en-Provence", stars: 1, note: "Playful modern cooking in the Château de la Pioline." },
        { name: "Le Champ des Lunes", place: "Domaine de Fontenille", stars: 1, note: "Garden-led Luberon cooking." },
        { name: "La Closerie", place: "Ansouis", stars: 1, note: "Warm and family-run, in a pretty village." },
        { name: "Chez Fonfon", place: "Marseille (Vallon des Auffes)", stars: 0, note: "Classic bouillabaisse in a tiny fishermen's cove." },
        { name: "Les Deux Garçons", place: "Aix", stars: 0, note: "Café institution since 1792. Go for the room, not the food." }
      ],
      do: [
        { t: "Aix morning market (Tue/Thu/Sat)", relax: true },
        { t: "Café terraces on the Cours Mirabeau", relax: true },
        { t: "Atelier Cézanne", relax: true },
        { t: "Luberon wine tasting (Château La Canorgue)", relax: true },
        { t: "Calanques boat from Cassis (45–90 min)", relax: true },
        { t: "Spa at Coquillade or Fontenille", relax: true },
        { t: "Sentier des Ocres, Roussillon (easy 30–60 min)", relax: false },
        { t: "Hike to the Calanque d'En-Vau", relax: false },
        { t: "Day trip to Avignon / the Pont du Gard", relax: false }
      ],
      photos: ["Aix-en-Provence", "Cours_Mirabeau", "Gordes", "Sénanque_Abbey", "Roussillon,_Vaucluse", "Calanques_National_Park", "Cassis"],
      flights: {
        summary: "Fly direct to Paris, then take the TGV from the airport. Or connect to Marseille (MRS).",
        legs: [
          { from: "BOS", to: "CDG", by: "Air France / Delta", direct: true },
          { from: "BWI", to: "LHR", by: "British Airways, then BA/easyJet to MRS", direct: true },
          { from: "IAD", to: "CDG", by: "Air France / United (Dulles)", direct: true },
          { from: "CDG (airport station)", to: "Aix-en-Provence TGV", by: "SNCF TGV, ~3 h 20", direct: true },
          { from: "LHR / AMS / CDG", to: "MRS", by: "BA, KLM, Air France (~1 h 30–2 h)", direct: true }
        ],
        searchIn: "MRS", searchOut: "MRS"
      }
    },

    /* ============================== WILDCARDS ============================== */
    {
      id: "azores",
      name: "Azores",
      region: "São Miguel",
      proposedBy: "Wildcard",
      color: "#3E7CB1",
      wildcard: true,
      tagline: "The most restful choice: thermal pools in fern forests, crater lakes, and a direct flight from Boston.",
      hero: "São_Miguel_Island",
      unsplash: "azores",
      weather: { hi: 17, lo: 12, rainDays: 14, daylight: "11h 55m", sea: 16, summary: "Mild, misty, and changeable many times a day. Warm hot springs." },
      scores: { relax: 5, food: 3, cozy: 4, weather: 3, ease: 5 },
      budget: "€€",
      pros: ["Direct BOS → PDL, about 4 h 30", "No connections, so no jet-lag stress", "Hot springs every day"],
      cons: ["Few fine-dining options", "Weather is a coin flip", "Doesn't overlap with either of your wish lists"],
      stops: [
        { name: "Ponta Delgada", lat: 37.7412, lng: -25.6756, nights: 3, wiki: "Ponta_Delgada", desc: "Harbour town, pineapple greenhouses." },
        { name: "Sete Cidades", lat: 37.8635, lng: -25.7900, nights: 0, wiki: "Sete_Cidades_Massif", desc: "Blue and green twin crater lakes." },
        { name: "Furnas", lat: 37.7726, lng: -25.3122, nights: 5, wiki: "Furnas", desc: "Terra Nostra thermal pool, cozido stew cooked in the ground." }
      ],
      days: [
        { d: "Fri 12", t: "Evening Azores Airlines BOS → PDL direct." },
        { d: "Sat 13–Sun 21", t: "Three nights in Ponta Delgada, five in Furnas. Thermal pools daily, crater-lake drives, tea plantations, whale watching (season starts in spring). Direct flight home." }
      ],
      stays: [
        { name: "Octant Furnas", place: "Furnas", price: "€€€", tag: "Thermal pool on site", why: "Next to the Terra Nostra gardens, with a spa.", url: "https://www.google.com/search?q=Octant+Furnas", highlight: true },
        { name: "Santa Bárbara Eco-Beach Resort", place: "Ribeira Grande", price: "€€€", tag: "Surf-beach villas", why: "Black-sand beach, wooden villas.", url: "https://www.google.com/search?q=Santa+Barbara+Eco-Beach+Resort" }
      ],
      eat: [
        { name: "Tony's (cozido das Furnas)", place: "Furnas", stars: 0, note: "Volcanic-steam stew." },
        { name: "A Tasca", place: "Ponta Delgada", stars: 0, note: "Local favourite. Book ahead." }
      ],
      do: [
        { t: "Terra Nostra & Poça da Dona Beija hot springs", relax: true },
        { t: "Gorreana tea plantation", relax: true },
        { t: "Whale watching", relax: false }
      ],
      photos: ["São_Miguel_Island", "Sete_Cidades_Massif", "Furnas", "Lagoa_do_Fogo"],
      flights: { summary: "Direct: BOS → PDL (Azores Airlines, ~4 h 30, year-round).", legs: [{ from: "BOS", to: "PDL", by: "Azores Airlines", direct: true }], searchIn: "PDL", searchOut: "PDL" }
    },
    {
      id: "lisbon",
      name: "Lisbon & Alentejo",
      region: "Lisbon · Comporta · Évora",
      proposedBy: "Wildcard",
      color: "#8E4E7E",
      wildcard: true,
      tagline: "City lights, then dune beaches and cork-oak estates. A middle ground between 'food' and 'relax'.",
      hero: "Comporta",
      unsplash: "comporta",
      weather: { hi: 19, lo: 10, rainDays: 8, daylight: "11h 55m", sea: 15, summary: "Spring-like and often sunny. The warmest of the realistic options." },
      scores: { relax: 4, food: 4, cozy: 3, weather: 4, ease: 5 },
      budget: "€€",
      pros: ["Direct from BOS and IAD (TAP)", "Warm and good value", "Wine, beaches and a city in one trip"],
      cons: ["Neither of your original picks", "Beaches too cold to swim"],
      stops: [
        { name: "Lisbon", lat: 38.7223, lng: -9.1393, nights: 3, wiki: "Lisbon", desc: "Alfama, pastéis, miradouros." },
        { name: "Comporta", lat: 38.3800, lng: -8.7860, nights: 3, wiki: "Comporta", desc: "Rice fields, stilt-house restaurants, long empty beaches." },
        { name: "Évora / Alentejo", lat: 38.5714, lng: -7.9135, nights: 2, wiki: "Évora", desc: "Roman temple, wine estates." }
      ],
      days: [
        { d: "Fri 12", t: "TAP BOS or IAD → LIS direct overnight." },
        { d: "Sat 13–Sun 21", t: "Lisbon 3 nights, then Comporta 3 nights of dunes and long lunches, then an Alentejo wine estate for 2. Drive back to LIS (1 h 30) for the direct flight home." }
      ],
      stays: [
        { name: "São Lourenço do Barrocal", place: "Alentejo", price: "€€€€", tag: "Farm-village estate", why: "A 200-year-old farm estate turned into a quiet retreat.", url: "https://www.google.com/search?q=Sao+Lourenco+do+Barrocal", highlight: true },
        { name: "Sublime Comporta", place: "Comporta", price: "€€€€", tag: "Pine-forest cabins", why: "Dunes, pine forest, a spa.", url: "https://www.google.com/search?q=Sublime+Comporta" },
        { name: "Memmo Alfama", place: "Lisbon", price: "€€€", tag: "Rooftop pool over Alfama", why: "Small and central, with river views.", url: "https://www.google.com/search?q=Memmo+Alfama" }
      ],
      eat: [
        { name: "Belcanto", place: "Lisbon", stars: 2, note: "José Avillez's flagship. Check the latest star count." },
        { name: "Cervejaria Ramiro", place: "Lisbon", stars: 0, note: "Seafood hall, then a steak sandwich for dessert." },
        { name: "Sal", place: "Comporta (Pego beach)", stars: 0, note: "Grilled fish right on the sand." }
      ],
      do: [
        { t: "Sunset at the Lisbon miradouros", relax: true },
        { t: "Beach and dune walks in Comporta", relax: true },
        { t: "Alentejo wine tasting", relax: true }
      ],
      photos: ["Lisbon", "Alfama", "Comporta", "Évora"],
      flights: { summary: "Direct: BOS → LIS and IAD → LIS (TAP).", legs: [{ from: "BOS", to: "LIS", by: "TAP", direct: true }, { from: "IAD", to: "LIS", by: "TAP / United", direct: true }], searchIn: "LIS", searchOut: "LIS" }
    },
    {
      id: "andalusia",
      name: "Andalusia",
      region: "Seville · Ronda · Granada",
      proposedBy: "Wildcard",
      color: "#C0392B",
      wildcard: true,
      tagline: "Orange-blossom season, patios and tapas. Still Spain, but sunnier, and you leave just before Holy Week.",
      hero: "Seville",
      unsplash: "seville",
      weather: { hi: 22, lo: 10, rainDays: 6, daylight: "11h 55m", sea: 16, summary: "Warm and sunny. Azahar (orange blossom) scents the whole city." },
      scores: { relax: 4, food: 4, cozy: 3, weather: 5, ease: 3 },
      budget: "€€€",
      pros: ["Best weather in Europe on this list", "Spanish food for Kubs, slow patios for Elizabeth", "AVE high-speed trains link everything"],
      cons: ["Connect via Madrid", "Seville gets busy as Holy Week (from 21 Mar) approaches"],
      stops: [
        { name: "Seville", lat: 37.3891, lng: -5.9845, nights: 4, wiki: "Seville", desc: "Alcázar, Santa Cruz, tapas." },
        { name: "Ronda", lat: 36.7423, lng: -5.1666, nights: 2, wiki: "Ronda", desc: "Gorge-top town, sherry country nearby." },
        { name: "Granada", lat: 37.1773, lng: -3.5986, nights: 2, wiki: "Alhambra", desc: "The Alhambra, Albaicín sunsets." }
      ],
      days: [
        { d: "Fri 12", t: "BOS or IAD → MAD direct overnight." },
        { d: "Sat 13–Sun 21", t: "AVE to Seville (2 h 30) for 4 nights, then Ronda 2 and Granada 2. AVE or a short flight back to Madrid for the direct home." }
      ],
      stays: [
        { name: "Hotel Alfonso XIII", place: "Seville", price: "€€€€", tag: "Mudéjar palace hotel", why: "Tiles, courtyards and grandeur.", url: "https://www.google.com/search?q=Hotel+Alfonso+XIII+Seville", highlight: true },
        { name: "Corral del Rey", place: "Seville", price: "€€€", tag: "17th-c. townhouse", why: "Intimate, with a plunge-pool roof terrace.", url: "https://www.google.com/search?q=Corral+del+Rey+Seville" },
        { name: "Hacienda de San Rafael", place: "Near Seville", price: "€€€", tag: "Olive-grove hacienda", why: "Total quiet in the countryside.", url: "https://www.google.com/search?q=Hacienda+de+San+Rafael" }
      ],
      eat: [
        { name: "Cañabota", place: "Seville", stars: 1, note: "A fish counter turned starred restaurant." },
        { name: "Abantal", place: "Seville", stars: 1, note: "Modern Andalusian." },
        { name: "El Rinconcillo", place: "Seville", stars: 0, note: "Tapas bar since 1670." }
      ],
      do: [
        { t: "Real Alcázar gardens", relax: true },
        { t: "Hammam at Aire de Sevilla", relax: true },
        { t: "Alhambra (book weeks ahead)", relax: false }
      ],
      photos: ["Seville", "Plaza_de_España_(Seville)", "Ronda", "Alhambra"],
      flights: { summary: "Direct BOS → MAD or IAD → MAD, then the AVE train south.", legs: [{ from: "BOS / IAD", to: "MAD", by: "Iberia / United", direct: true }, { from: "Madrid Atocha", to: "Seville", by: "AVE, 2 h 30", direct: true }], searchIn: "SVQ", searchOut: "AGP" }
    },
    {
      id: "lowcountry",
      name: "Charleston & Savannah",
      region: "South Carolina · Georgia Lowcountry",
      proposedBy: "Wildcard",
      color: "#5B7F5A",
      wildcard: true,
      domestic: true,
      tagline: "No jet lag, azaleas in bloom, live oaks, porches and Southern cooking. The easiest trip on the list.",
      hero: "Charleston,_South_Carolina",
      unsplash: "charleston-south-carolina",
      weather: { hi: 21, lo: 8, rainDays: 8, daylight: "12h 05m", sea: 16, summary: "Spring days around 70°F with azaleas and wisteria out. Cool evenings and the odd thunderstorm." },
      scores: { relax: 5, food: 4, cozy: 4, weather: 4, ease: 5 },
      budget: "$$$",
      pros: ["2 h 30 direct flight, no jet lag, no passports", "Peak azalea and garden season", "Slow, walkable towns, and you can leave Friday for a 9th night"],
      cons: ["Not Europe", "Spring is high season, so hotels are pricey", "Beaches are pretty, but too cold to swim"],
      stops: [
        { name: "Charleston", lat: 32.7765, lng: -79.9311, nights: 4, wiki: "Charleston,_South_Carolina", desc: "Rainbow Row, the Battery, King Street, oysters." },
        { name: "Middleton Place", lat: 32.8998, lng: -80.1376, nights: 0, wiki: "Middleton_Place", desc: "America's oldest landscaped gardens, azaleas in March." },
        { name: "Palmetto Bluff / Kiawah", lat: 32.18, lng: -80.87, nights: 2, wiki: "Kiawah_Island,_South_Carolina", desc: "Resort and spa days among live oaks and marsh." },
        { name: "Savannah", lat: 32.0809, lng: -81.0912, nights: 3, wiki: "Savannah,_Georgia", desc: "Twenty-two squares, Spanish moss, Forsyth Park." },
        { name: "Wormsloe", lat: 31.98, lng: -81.07, nights: 0, wiki: "Wormsloe_Historic_Site", desc: "A mile-long avenue of live oaks." },
        { name: "Tybee Island", lat: 32.0002, lng: -80.8454, nights: 0, wiki: "Tybee_Island,_Georgia", desc: "Beach walk and lighthouse." }
      ],
      days: [
        { d: "Fri 12", t: "Daytime direct flight BOS/BWI → Charleston (~2 h 30). Dinner on King Street. That's an extra night compared with Europe." },
        { d: "Sat 13", t: "Rainbow Row, the Battery, the harbour walk, oysters at Leon's." },
        { d: "Sun 14", t: "Middleton Place gardens with the azaleas at peak. Angel Oak on the way back." },
        { d: "Mon 15", t: "Slow day: Folly Beach walk, sunset sail in the harbour." },
        { d: "Tue 16", t: "Drive to Palmetto Bluff (1 h 30) or Kiawah (40 min). Spa, bikes, river." },
        { d: "Wed 17", t: "Do nothing. Canoe on the May River or a long beach walk." },
        { d: "Thu 18", t: "On to Savannah (40 min from the Bluff). Walk the squares to Forsyth Park." },
        { d: "Fri 19", t: "Wormsloe's oak avenue, Bonaventure Cemetery, dinner at The Grey." },
        { d: "Sat 20", t: "Tybee Island beach and lighthouse, or a lazy morning and Leopold's ice cream." },
        { d: "Sun 21", t: "Direct SAV → BOS/BWI. Home by early afternoon." }
      ],
      stays: [
        { name: "Zero George", place: "Charleston", price: "$$$$", tag: "Five restored 1800s houses", why: "Courtyard, cooking school and quiet rooms on a residential street. Very cozy.", url: "https://www.google.com/search?q=Zero+George+Charleston", highlight: true },
        { name: "Wentworth Mansion", place: "Charleston", price: "$$$$", tag: "Gilded Age mansion", why: "Fireplaces, a cupola with a view over the rooftops, and Circa 1886 downstairs.", url: "https://www.google.com/search?q=Wentworth+Mansion+Charleston" },
        { name: "Hotel Bennett", place: "Charleston", price: "$$$$$", tag: "Grand, on Marion Square", why: "Rooftop pool and a French patisserie.", url: "https://www.google.com/search?q=Hotel+Bennett+Charleston" },
        { name: "Montage Palmetto Bluff", place: "Bluffton, SC", price: "$$$$$", tag: "Riverside resort + spa", why: "20,000 acres of live oaks and marsh, with bikes, canoes and a big spa. The most passive stop on any route.", url: "https://www.google.com/search?q=Montage+Palmetto+Bluff", highlight: true },
        { name: "The Sanctuary, Kiawah Island", place: "Kiawah Island, SC", price: "$$$$$", tag: "Oceanfront resort", why: "Ten miles of beach, a spa, close to Charleston.", url: "https://www.google.com/search?q=The+Sanctuary+Kiawah" },
        { name: "The Gastonian", place: "Savannah", price: "$$$", tag: "Fireplace in every room", why: "Two 1868 mansions joined by a garden.", url: "https://www.google.com/search?q=The+Gastonian+Savannah", highlight: true },
        { name: "Perry Lane Hotel", place: "Savannah", price: "$$$$", tag: "Stylish, rooftop bar", why: "Design hotel in the historic district.", url: "https://www.google.com/search?q=Perry+Lane+Hotel+Savannah" }
      ],
      eat: [
        { name: "FIG", place: "Charleston", stars: 0, note: "A Charleston landmark since 2003. The new Michelin American South guide covers the city, so check for stars." },
        { name: "The Ordinary", place: "Charleston", stars: 0, note: "Oyster hall in an old bank." },
        { name: "Husk", place: "Charleston", stars: 0, note: "Southern ingredients only." },
        { name: "Leon's Oyster Shop · Rodney Scott's BBQ", place: "Charleston", stars: 0, note: "Fried chicken and oysters; whole-hog barbecue." },
        { name: "The Grey", place: "Savannah", stars: 0, note: "Mashama Bailey's restaurant in a 1938 Greyhound station." },
        { name: "Elizabeth on 37th", place: "Savannah", stars: 0, note: "Southern fine dining in a mansion." },
        { name: "Mrs. Wilkes' Dining Room", place: "Savannah", stars: 0, note: "Shared tables, a dozen dishes, lunch only. Queue early." }
      ],
      do: [
        { t: "Middleton Place azaleas", relax: true },
        { t: "Sunset harbour sail", relax: true },
        { t: "Spa day at Montage or the Sanctuary", relax: true },
        { t: "Squares and Forsyth Park", relax: true },
        { t: "Wormsloe oak avenue", relax: true },
        { t: "Folly Beach or Tybee walk", relax: true },
        { t: "Bike the Palmetto Bluff trails", relax: false },
        { t: "Kayak the salt marsh", relax: false },
        { t: "Day trip to Beaufort", relax: false }
      ],
      photos: ["Charleston,_South_Carolina", "The_Battery_(Charleston)", "Middleton_Place", "Forsyth_Park", "Wormsloe_Historic_Site", "Angel_Oak", "Tybee_Island,_Georgia"],
      flights: { summary: "Direct domestic flights, about 2 h 30. Into Charleston, home from Savannah.", legs: [{ from: "BOS", to: "CHS", by: "JetBlue / Delta / American (check)", direct: true }, { from: "BWI", to: "CHS", by: "Southwest", direct: true }, { from: "SAV", to: "BOS", by: "JetBlue / Delta (check)", direct: true }, { from: "SAV", to: "BWI", by: "Southwest", direct: true }], searchIn: "CHS", searchOut: "SAV" }
    },
    {
      id: "socal",
      name: "Southern California",
      region: "Palm Springs · Joshua Tree · Ojai · Santa Barbara",
      proposedBy: "Wildcard",
      color: "#C2803A",
      wildcard: true,
      domestic: true,
      tagline: "Desert spa days and national parks, then a slow drive to the coast. Warm and sunny, with wildflowers in March.",
      hero: "Joshua_Tree_National_Park",
      unsplash: "joshua-tree",
      weather: { hi: 24, lo: 9, rainDays: 4, daylight: "12h 00m", sea: 15, summary: "Desert days near 80°F and coast days in the mid-60s. Cool, starry nights. Wildflowers in the desert." },
      scores: { relax: 5, food: 4, cozy: 3, weather: 5, ease: 4 },
      budget: "$$$$",
      pros: ["Most reliable sunshine on the list", "National parks plus spa resorts", "Leave Friday for a 9th night, no jet lag (3 h time change)"],
      cons: ["6 h flight for a domestic trip", "Lots of driving between stops", "Coast hotels are expensive"],
      stops: [
        { name: "Palm Springs", lat: 33.8303, lng: -116.5453, nights: 3, wiki: "Palm_Springs,_California", desc: "Pools, mid-century houses, palm canyons, the aerial tram." },
        { name: "Joshua Tree National Park", lat: 33.8734, lng: -115.901, nights: 0, wiki: "Joshua_Tree_National_Park", desc: "Boulders, the trees, a huge night sky." },
        { name: "Joshua Tree town", lat: 34.1347, lng: -116.3131, nights: 1, wiki: "Joshua_Tree,_California", desc: "Desert cabin with a hot tub and stargazing." },
        { name: "Ojai", lat: 34.448, lng: -119.2429, nights: 2, wiki: "Ojai,_California", desc: "Spa valley, orange groves, the pink-moment sunset." },
        { name: "Santa Barbara", lat: 34.4208, lng: -119.6982, nights: 3, wiki: "Santa_Barbara,_California", desc: "Red-roofed town by the beach, wine country inland." },
        { name: "Channel Islands National Park", lat: 34.0069, lng: -119.7785, nights: 0, wiki: "Channel_Islands_National_Park", desc: "Boat from Ventura: sea caves, island foxes, whales." }
      ],
      days: [
        { d: "Fri 12", t: "Fly BOS → LAX or Palm Springs (about 6 h). Drive to Palm Springs and catch the pool at sunset." },
        { d: "Sat 13", t: "Pool and spa day. Evening ride up the aerial tram into the snow and pines." },
        { d: "Sun 14", t: "Joshua Tree National Park: Hidden Valley loop, Cholla Cactus Garden, Keys View." },
        { d: "Mon 15", t: "Morning palm oases at Indian Canyons, then to a Joshua Tree cabin for stargazing." },
        { d: "Tue 16", t: "Sunrise in the park, then drive to Ojai (3 h)." },
        { d: "Wed 17", t: "Spa at the Ojai Valley Inn. Watch the pink-moment sunset." },
        { d: "Thu 18", t: "To Santa Barbara (40 min). Beach walk, Funk Zone wine tasting." },
        { d: "Fri 19", t: "Channel Islands National Park: boat to Santa Cruz Island for sea caves and maybe whales." },
        { d: "Sat 20", t: "Santa Ynez wine country, or a lazy Montecito morning." },
        { d: "Sun 21", t: "Fly from Santa Barbara or LAX. Leave by late morning to be home that evening." }
      ],
      stays: [
        { name: "Two Bunch Palms", place: "Desert Hot Springs", price: "$$$$", tag: "Hot-spring spa resort", why: "Mineral pools under palms, adults only. The most passive place on the list.", url: "https://www.google.com/search?q=Two+Bunch+Palms", highlight: true },
        { name: "Parker Palm Springs", place: "Palm Springs", price: "$$$$", tag: "Jonathan Adler retreat", why: "Playful mid-century gardens, a spa and croquet.", url: "https://www.google.com/search?q=Parker+Palm+Springs" },
        { name: "Korakia Pensione", place: "Palm Springs", price: "$$$", tag: "Moroccan villa", why: "Candlelit courtyards, no TVs.", url: "https://www.google.com/search?q=Korakia+Pensione" },
        { name: "Ojai Valley Inn", place: "Ojai", price: "$$$$$", tag: "Spa resort", why: "A big Spanish-style spa among oaks and orange groves.", url: "https://www.google.com/search?q=Ojai+Valley+Inn", highlight: true },
        { name: "San Ysidro Ranch", place: "Montecito", price: "$$$$$", tag: "Cottages with fireplaces", why: "Hillside cottages with private hot tubs. The cozy one.", url: "https://www.google.com/search?q=San+Ysidro+Ranch", highlight: true },
        { name: "Hotel Californian", place: "Santa Barbara", price: "$$$$", tag: "By the beach", why: "Moorish-Spanish style next to the Funk Zone.", url: "https://www.google.com/search?q=Hotel+Californian+Santa+Barbara" },
        { name: "The Inn at Death Valley", place: "Death Valley (add-on)", price: "$$$$", tag: "1927 oasis inn", why: "Spring-fed pool and palm gardens in the desert.", url: "https://www.google.com/search?q=Inn+at+Death+Valley" }
      ],
      eat: [
        { name: "Caruso's", place: "Montecito (Rosewood Miramar)", stars: 1, note: "Coastal Italian on the beach. Check the latest California guide." },
        { name: "Addison", place: "San Diego (add-on)", stars: 3, note: "Southern California's three-star restaurant." },
        { name: "Olivella", place: "Ojai Valley Inn", stars: 0, note: "Italian, with vegetables from the valley." },
        { name: "Loquita · Bettina", place: "Santa Barbara", stars: 0, note: "Spanish tapas and wood-fired pizza." },
        { name: "Mr. Lyons · Workshop Kitchen", place: "Palm Springs", stars: 0, note: "Old-school steakhouse and a modern dining room." },
        { name: "La Copine · Pappy & Harriet's", place: "Joshua Tree area", stars: 0, note: "Desert bistro and a honky-tonk with live music." }
      ],
      do: [
        { t: "Mineral pools and spa days", relax: true },
        { t: "Joshua Tree scenic drive and short walks", relax: true },
        { t: "Stargazing from the cabin", relax: true },
        { t: "Pink-moment sunset in Ojai", relax: true },
        { t: "Wine tasting in Santa Ynez", relax: true },
        { t: "Channel Islands boat day", relax: false },
        { t: "Indian Canyons palm-oasis hike", relax: false },
        { t: "Ryan Mountain summit (3 mi)", relax: false }
      ],
      photos: ["Joshua_Tree_National_Park", "Palm_Springs,_California", "Channel_Islands_National_Park", "Ojai,_California", "Santa_Barbara,_California", "Mission_Santa_Barbara", "Death_Valley_National_Park"],
      flights: { summary: "Domestic: about 6 h out, 5 h 30 back. Into Palm Springs or LAX, out of Santa Barbara or LAX.", legs: [{ from: "BOS", to: "LAX", by: "Delta, JetBlue, American, United (direct)", direct: true }, { from: "BOS", to: "PSP", by: "Seasonal direct some years, otherwise 1 stop", direct: false }, { from: "BWI", to: "LAX", by: "Southwest direct, or Delta via ATL", direct: true }, { from: "SBA", to: "BOS / BWI", by: "1 stop (Delta via SLC, United via SFO/DEN)", direct: false }], searchIn: "PSP", searchOut: "LAX" }
    }
  ]
};
