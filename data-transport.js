/* ------------------------------------------------------------------
   Getting between stops. Key "a>b" works in both directions.
   Option: [mode, hours, cost, description, flag]
     car    → cost = tolls / parking per car (fuel is in the daily car rate)
     train / bus / ferry → cost = per person, one way
     flag "incl" → already priced in the route's transfers
   Pairs not listed get an estimate from straight-line distance.
------------------------------------------------------------------- */
window.BUDGET.segs = {
  /* ---------- Basque Country, Cantabria, Asturias ---------- */
  "bilbao>sansebastian": [
    ["car", 1.2, 15, "AP-8 motorway along the coast. For views, take the slower coast road via Lekeitio and Getaria (about 2 h 30)."],
    ["bus", 1.3, 9, "Bizkaibus/PESA coach about every 30–60 min, Termibus to the Easo station. The easy choice if you hire the car later."],
    ["train", 2.7, 8, "Euskotren local line through small Basque towns. Slow but scenic, and cheap."]
  ],
  "sansebastian>asturias": [
    ["car", 3.5, 15, "A-8 along the coast. Tolls stop after Bilbao. Break the drive in Santillana del Mar or Llanes."],
    ["bus", 5, 35, "ALSA coach to Oviedo or Llanes, a few a day. Works, but you'll want a car in the Picos."]
  ],
  "bilbao>rioja": [
    ["car", 1.5, 10, "South on the AP-68, then over the Sierra de Cantabria pass with a huge view down onto the vineyards."],
    ["bus", 2, 15, "Bus to Vitoria, then the infrequent Laguardia line. Realistically you want a car here."]
  ],
  "rioja>sansebastian": [["car", 1.8, 15, "Via Vitoria on the A-1/AP-1. Easy motorway driving."]],
  "sansebastian>cantabria": [["car", 2.5, 15, "A-8 west past Bilbao. Comillas is a short detour."]],
  "cantabria>asturias": [["car", 1.3, 0, "Toll-free A-8 along the coast, the Picos on your left."]],
  "sansebastian>sjdl": [
    ["car", 0.5, 0, "Cross the border at Hendaye: Saint-Jean-de-Luz is 30 min, Biarritz 40."],
    ["train", 0.7, 6, "Euskotren 'Topo' to Hendaye, then a short French regional train."]
  ],
  "sjdl>cantabria": [["car", 3, 20, "Back across the border and west on the A-8."]],
  "sjdl>asturias": [["car", 4.2, 20, "A long coast day. Stop in Bilbao or Santillana."]],
  "sjdl>bordeaux": [
    ["train", 2, 40, "TER/TGV from Biarritz or Saint-Jean-de-Luz to Bordeaux Saint-Jean."],
    ["car", 2.2, 25, "A63 through the Landes pine forest. Fast and flat."]
  ],
  "loire>sansebastian": [["train", 4.5, 0, "TGV Saint-Pierre-des-Corps → Bordeaux → Hendaye, then the Topo train 30 min into San Sebastián. Book a 1st-class seat for the long run.", "incl"]],
  "bilbao>asturias": [["car", 3, 10, "A-8 west along the coast."]],

  /* ---------- Scotland ---------- */
  "edinburgh>gleneagles": [
    ["train", 1, 25, "ScotRail from Waverley to Gleneagles station (about hourly). The hotel will collect you, so pick up a car later."],
    ["car", 1, 0, "M90 over the Queensferry Crossing, then the A9."]
  ],
  "gleneagles>braemar": [["car", 1.8, 0, "A93 over the Cairnwell pass, the highest main road in Britain. Snow is possible in March, so check Traffic Scotland the morning you go."]],
  "braemar>standrews": [["car", 2, 0, "Back over Glenshee to Perth, then into Fife. The coast route via Aberdeen takes about 3 h."]],
  "glasgow>edinburgh": [["train", 0.9, 20, "ScotRail Queen Street → Waverley every 15 min."], ["car", 1.2, 0, "M8. Not worth it unless you collect the car here."]],
  "gleneagles>glencoe": [
    ["car", 2, 0, "A85/A82 through Crianlarich and across Rannoch Moor into Glen Coe. Stunning."],
    ["train", 3.8, 40, "West Highland Line from Glasgow to Fort William, one of the world's great rail journeys (via Glasgow from Gleneagles)."]
  ],
  "glencoe>skye": [["car", 2.5, 0, "The Road to the Isles past Eilean Donan Castle and over the Skye Bridge."]],
  "skye>braemar": [["car", 5, 0, "Long day via Inverness and the A939 Lecht road. Plan stops."]],
  "glencoe>braemar": [["car", 3.5, 0, "Via the A86 and Laggan, or back round through Perth."]],
  "braemar>inverness": [["car", 2.3, 0, "A939 over the Lecht. Snow gates sometimes close it in March; the A9 is the fallback."]],
  "inverness>standrews": [["car", 3, 0, "A9 south through the Cairngorms."], ["train", 3, 55, "Inverness → Perth → Leuchars, then a 10-min taxi."]],
  "edinburgh>sansebastian": [["flight", 4, 0, "Edinburgh → Bilbao via Amsterdam (KLM) or London, then 1 h 15 by coach or car to San Sebastián.", "incl"]],
  "edinburgh>aix": [["flight", 4, 0, "Edinburgh → Marseille via Paris or Amsterdam (Air France / KLM), then 35 min to Aix.", "incl"]],

  /* ---------- Provence & the south of France ---------- */
  "aix>luberon": [
    ["car", 1, 0, "D543 and D556 north through vineyards to Lourmarin."],
    ["bus", 1.2, 5, "Zou! regional bus to Pertuis and Lourmarin, only a few a day."]
  ],
  "luberon>cassis": [["car", 1.3, 10, "A51/A50 south. Arrive over the Route des Crêtes from La Ciotat for the cliff views."]],
  "aix>camargue": [["car", 1.2, 8, "A8/A54 to Arles."], ["train", 1.2, 20, "TER via Marseille or Miramas."]],
  "camargue>luberon": [["car", 1.5, 5, "Via Saint-Rémy and Cavaillon."]],
  "luberon>avignon": [["car", 1, 0, "Via Cavaillon."], ["bus", 1.3, 3, "Regional bus from Cavaillon."]],
  "avignon>alpilles": [["car", 0.4, 0, "Quick hop south to Saint-Rémy."]],
  "luberon>alpilles": [["car", 1, 0, "Via Cavaillon into the Alpilles."]],
  "alpilles>cassis": [["car", 1.3, 10, "A7/A50 past Marseille."]],
  "avignon>cassis": [["car", 1.4, 12, "A7/A50."], ["train", 1.3, 35, "TGV Avignon → Marseille, then the TER to Cassis."]],
  "cassis>riviera": [["train", 2.8, 45, "TER or TGV along the coast, Marseille → Nice."], ["car", 2.3, 25, "A8 motorway. Drop the car in Nice."]],
  "lyon>aix": [["train", 1.3, 0, "TGV Lyon Part-Dieu → Aix-en-Provence TGV.", "incl"]],
  "luberon>sansebastian": [["flight", 5, 0, "Marseille → Bilbao via Paris or Barcelona, then the coach. Or a 7 h train via Bordeaux.", "incl"]],
  "luberon>riviera": [["car", 2.5, 25, "A8 east past Aix. Stop in Saint-Paul-de-Vence on the way in."], ["train", 3.5, 50, "Bus to Aix TGV, then the TGV/TER to Nice."]],
  "alpilles>riviera": [["car", 2.8, 30, "A7/A8 east. Drop the car in Nice and fly home from there."]],
  "alpilles>sansebastian": [["flight", 5, 0, "Marseille → Bilbao via Paris or Amsterdam (Air France / KLM), then the coach to San Sebastián.", "incl"]],
  "sjdl>bilbao": [["car", 1.6, 15, "Back over the border and along the AP-8 to Bilbao for your flight."], ["bus", 2, 15, "Coach from Hendaye/Irun via San Sebastián."]],
  "gleneagles>skye": [["car", 4, 0, "A9 north, then west through Glen Garry and over the Skye Bridge. Long but beautiful."]],
  "loire>lyon": [["train", 3, 70, "TGV via Paris or the direct Intercités."]],

  /* ---------- Azores & Portugal ---------- */
  "pdl>furnas": [["car", 0.9, 0, "East along the north coast. Stop at the Gorreana tea plantation."], ["bus", 1.5, 8, "Varela bus, a few a day."]],
  "furnas>lisbon": [["flight", 2.5, 0, "Azores Airlines / TAP Ponta Delgada → Lisbon.", "incl"]],
  "lisbon>comporta": [["car", 1.3, 5, "Over the 25 de Abril bridge. Or the Setúbal → Tróia car ferry (+30 min, about $20 per car), much prettier."]],
  "comporta>alentejo": [["car", 1.5, 0, "Quiet roads across cork-oak country."]],
  "lisbon>sintra": [["train", 0.7, 3, "From Rossio station every 20 min. No car needed, and parking in Sintra is awful."], ["car", 0.6, 0, "IC19. Leave the car at the hotel."]],
  "sintra>comporta": [["car", 1.6, 5, "Around Lisbon and over the Vasco da Gama bridge."]],
  "alentejo>douro": [["train", 4.5, 45, "Évora → Lisbon → Porto on the Alfa Pendular, then the riverside Douro line to Pinhão."], ["car", 4, 40, "A6/A1/A24 motorways."]],
  "comporta>douro": [["train", 4.5, 45, "Back to Lisbon, then the Alfa Pendular to Porto."], ["car", 4, 40, "A2/A1 motorways."]],

  /* ---------- Andalusia ---------- */
  "seville>ronda": [["car", 1.7, 0, "A-375 past the white villages of Olvera and Setenil."], ["bus", 2, 15, "Damas coach, a few a day."]],
  "ronda>granada": [["car", 2.2, 0, "A-92 inland."], ["bus", 2.8, 20, "ALSA coach."]],
  "seville>cordoba": [["train", 0.75, 0, "AVE high-speed, 45 min.", "incl"], ["car", 1.5, 0, "A-4 motorway."]],
  "cordoba>jerez": [["train", 2, 35, "Via Seville."], ["car", 2.3, 0, "A-4."]],
  "jerez>ronda": [["car", 1.7, 0, "Through the Sierra de Grazalema, the prettiest road in the region."]],
  "cordoba>ronda": [["car", 2, 0, "Via Antequera."]],
  "seville>jerez": [["train", 1.1, 15, "Regional train to Jerez or Cádiz."], ["car", 1, 0, "AP-4."]],

  /* ---------- Lowcountry ---------- */
  "charleston>lowcountry": [["car", 1.7, 0, "US-17 to Palmetto Bluff. Kiawah is only 40 min."]],
  "lowcountry>savannah": [["car", 0.7, 0, "Across the Savannah River into Georgia."]],
  "savannah>jekyll": [["car", 1.3, 0, "I-95 to Brunswick. Cumberland Island needs the ferry from St Marys (about $40 per person return, book ahead)."]],

  /* ---------- Southern California ---------- */
  "palmsprings>joshuatree": [["car", 1, 0, "Up Highway 62 past the wind farms. Park entry is $35 per car (7 days)."]],
  "joshuatree>ojai": [["car", 3.5, 0, "I-10 and CA-118 across the LA basin. Leave by 9 am to miss traffic."]],
  "ojai>santabarbara": [["car", 0.75, 0, "Highway 150 past Lake Casitas, or the 101 by the sea."]],
  "sandiego>palmsprings": [["car", 2.5, 0, "Via I-15 and the Temecula wine country."]],
  "palmsprings>anzaborrego": [["car", 1.5, 0, "Highway 74, the 'Palms to Pines' scenic byway."]],
  "anzaborrego>joshuatree": [["car", 2.3, 0, "Past the Salton Sea."]],
  "joshuatree>deathvalley": [["car", 4, 0, "Highways 247 and 127 via Baker. Fill up the tank, since services are sparse. Park entry $35 per car."]],
  "deathvalley>ojai": [["car", 5, 0, "A long day via Lone Pine and Mojave. Mt Whitney views on the way."]],
  "santabarbara>bigsur": [["car", 3.5, 0, "US-101, then Highway 1 north from Cambria. Check Caltrans for closures."]],
  "santabarbara>losangeles": [["car", 1.8, 0, "PCH through Malibu."], ["train", 2.5, 35, "Amtrak Pacific Surfliner, right along the beach."]],
  "bigsur>losangeles": [["car", 6, 0, "Long. It's often better to fly home from Monterey or San José."]]
};
