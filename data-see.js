/* ------------------------------------------------------------------
   Nature and sights per stop: [name, kind, wikipedia title, one line].
   kind: "nature" | "sight" | "town". The first two of each stop are
   the headline highlights. Photos load from the Wikipedia title.
------------------------------------------------------------------- */
window.SEE = {
  bilbao: [
    ["Guggenheim Museum", "sight", "Guggenheim_Museum_Bilbao", "Gehry's titanium ship on the river."],
    ["Gaztelugatxe", "nature", "Gaztelugatxe", "Island hermitage up 241 steps over the sea. 40 min drive."],
    ["Urdaibai estuary", "nature", "Urdaibai_estuary", "Marshes, birds and quiet beaches at Mundaka."],
    ["Casco Viejo", "town", "Plaza_Nueva,_Bilbao", "Seven old streets and Plaza Nueva pintxos."]
  ],
  sansebastian: [
    ["La Concha bay", "nature", "San_Sebastián", "The town beach in a perfect shell-shaped bay."],
    ["Monte Igueldo", "nature", "Igeldo", "1912 funicular to the best view of the bay."],
    ["Flysch cliffs, Zumaia", "nature", "Zumaia", "Rock layers like book pages, from a boat or the cliff path."],
    ["Getaria", "town", "Getaria,_Gipuzkoa", "Fishing village, txakoli vineyards above the sea."],
    ["Parte Vieja", "town", "Basilica_of_Saint_Mary_of_the_Chorus", "Old town lanes packed with pintxo bars."]
  ],
  asturias: [
    ["Lakes of Covadonga", "nature", "Lakes_of_Covadonga", "Glacial lakes under the Picos peaks. Drive up, stroll."],
    ["Picos de Europa", "nature", "Picos_de_Europa", "Limestone mountains a short drive from the sea."],
    ["Gulpiyuri beach", "nature", "Playa_de_Gulpiyuri", "A tiny beach in a meadow, fed by the sea underground."],
    ["Ruta del Cares", "nature", "Ruta_del_Cares", "Gorge path cut into the cliff. Walk as far as you like."],
    ["Covadonga shrine", "sight", "Covadonga", "Cave chapel above a waterfall pool."]
  ],
  sjdl: [
    ["Rocher de la Vierge", "nature", "Biarritz", "Footbridge out to a rock in the Biarritz surf."],
    ["La Rhune", "nature", "La_Rhune", "Rack railway to a summit over the Basque coast."],
    ["Saint-Jean-de-Luz", "town", "Saint-Jean-de-Luz", "Harbour, the bay, gâteau basque."],
    ["Espelette", "town", "Espelette", "Red-pepper village in the hills."]
  ],
  bordeaux: [
    ["Saint-Émilion", "town", "Saint-Émilion", "Medieval village, underground church, vineyards all around."],
    ["Dune du Pilat", "nature", "Dune_of_Pilat", "Europe's tallest sand dune, an hour west."],
    ["Place de la Bourse water mirror", "sight", "Miroir_d'eau", "Bordeaux's 18th-c. façades reflected at dusk."],
    ["Cité du Vin", "sight", "La_Cité_du_Vin", "Wine museum with a tasting bar at the top."]
  ],
  loire: [
    ["Château de Chenonceau", "sight", "Château_de_Chenonceau", "The château built across the river."],
    ["Château de Chambord", "sight", "Château_de_Chambord", "Huge Renaissance château in a walled forest."],
    ["Loire riverbanks", "nature", "Loire", "Sandbanks, herons and cycle paths along the river."],
    ["Amboise", "town", "Amboise", "Royal château and Leonardo's last home, Clos Lucé."],
    ["Villandry gardens", "nature", "Château_de_Villandry", "Formal kitchen gardens (early spring planting)."]
  ],
  lyon: [
    ["Vieux Lyon & traboules", "town", "Vieux_Lyon", "Renaissance quarter with hidden passageways."],
    ["Fourvière hill", "sight", "Basilica_of_Notre-Dame_de_Fourvière", "Basilica and city views."],
    ["Les Halles Paul Bocuse", "sight", "Lyon", "Food hall: oysters and wine at 11 am."],
    ["Parc de la Tête d'Or", "nature", "Parc_de_la_Tête_d'Or", "Lake, rose garden and glasshouses."]
  ],
  aix: [
    ["Montagne Sainte-Victoire", "nature", "Montagne_Sainte-Victoire", "Cézanne's mountain. Easy walks at Le Tholonet."],
    ["Cours Mirabeau", "town", "Cours_Mirabeau", "Plane trees, fountains, café terraces."],
    ["Atelier Cézanne", "sight", "Atelier_de_Cézanne", "His studio, left as it was."],
    ["Morning markets", "town", "Aix-en-Provence", "Place Richelme every day; big market Tue, Thu, Sat."]
  ],
  luberon: [
    ["Gordes", "town", "Gordes", "Stone village on a cliff."],
    ["Sénanque Abbey", "sight", "Sénanque_Abbey", "Cistercian abbey in a hidden valley."],
    ["Ochre cliffs, Roussillon", "nature", "Roussillon,_Vaucluse", "Red and orange earth trails."],
    ["Colorado Provençal", "nature", "Rustrel", "Old ochre quarries, like a small canyon."],
    ["Lourmarin", "town", "Lourmarin", "Château, Friday market, Camus's grave."]
  ],
  cassis: [
    ["Calanques", "nature", "Calanques_National_Park", "White cliffs and turquoise inlets by boat or on foot."],
    ["Cap Canaille", "nature", "Cap_Canaille", "Highest sea cliff in France, with a drive along the top."],
    ["Vieux-Port & MuCEM", "sight", "MuCEM", "Marseille's harbour and the lace-concrete museum."],
    ["Notre-Dame de la Garde", "sight", "Notre-Dame_de_la_Garde", "Hilltop basilica over Marseille."]
  ],
  edinburgh: [
    ["Arthur's Seat", "nature", "Arthur's_Seat", "Extinct volcano in the middle of town."],
    ["Edinburgh Castle", "sight", "Edinburgh_Castle", "On its rock above the Old Town."],
    ["Dean Village", "town", "Dean_Village", "Mill village on the Water of Leith."],
    ["Royal Botanic Garden", "nature", "Royal_Botanic_Garden_Edinburgh", "Victorian glasshouses and the rock garden."],
    ["Calton Hill", "nature", "Calton_Hill", "The postcard view at sunset."]
  ],
  gleneagles: [
    ["Glen Devon & the Ochils", "nature", "Ochil_Hills", "Rolling hills from the hotel's doorstep."],
    ["Stirling Castle", "sight", "Stirling_Castle", "Royal castle, 30 min away."],
    ["Drummond Castle Gardens", "nature", "Drummond_Castle", "Formal gardens (check spring opening)."]
  ],
  braemar: [
    ["Cairngorms", "nature", "Cairngorms_National_Park", "Britain's biggest national park. Red deer, snow on the tops."],
    ["Linn of Dee", "nature", "Linn_of_Dee", "Narrow gorge waterfall. Easy walk."],
    ["Balmoral", "sight", "Balmoral_Castle", "The royal estate (grounds open from April, check)."],
    ["Pitlochry", "town", "Pitlochry", "On the drive: salmon ladder, distillery."]
  ],
  standrews: [
    ["West Sands", "nature", "West_Sands", "Two miles of beach (the Chariots of Fire run)."],
    ["Cathedral ruins", "sight", "St_Andrews_Cathedral", "Medieval ruins on the cliffs."],
    ["East Neuk villages", "town", "Crail", "Crail and Anstruther harbours, fish and chips."]
  ],
  lisbon: [
    ["Sintra", "sight", "Sintra", "Palaces in a misty forest, a day trip."],
    ["Alfama", "town", "Alfama", "Tiled lanes, fado, miradouros."],
    ["Cabo da Roca", "nature", "Cabo_da_Roca", "Westernmost cliff of mainland Europe."],
    ["Belém", "sight", "Belém_Tower", "The tower, the monastery, pastéis de Belém."]
  ],
  comporta: [
    ["Comporta beaches", "nature", "Comporta", "Endless dunes and empty sand."],
    ["Sado estuary dolphins", "nature", "Sado_Estuary_Natural_Reserve", "Resident bottlenose dolphins, boat from Setúbal."],
    ["Carrasqueira stilt pier", "sight", "Alcácer_do_Sal", "Fishermen's pier on stilts over the mud."]
  ],
  alentejo: [
    ["Évora", "town", "Évora", "Roman temple, the bone chapel, white streets."],
    ["Monsaraz", "town", "Monsaraz", "Walled hilltop village over the Alqueva lake."],
    ["Cromlech of the Almendres", "nature", "Almendres_Cromlech", "A stone circle older than Stonehenge, in cork-oak woods."]
  ],
  pdl: [
    ["Sete Cidades", "nature", "Sete_Cidades_Massif", "Twin blue and green crater lakes."],
    ["Lagoa do Fogo", "nature", "Lagoa_do_Fogo", "Wild crater lake with no road down."],
    ["Gorreana tea plantation", "sight", "Gorreana", "Europe's oldest tea plantation."]
  ],
  furnas: [
    ["Terra Nostra Park", "nature", "Terra_Nostra_Park", "Warm iron-orange thermal pool in a botanical garden."],
    ["Furnas lake fumaroles", "nature", "São_Miguel_Island", "Steaming vents where the stew is cooked underground."],
    ["Poça da Dona Beija", "nature", "Furnas", "Hot springs in a fern gully, open late."]
  ],
  seville: [
    ["Real Alcázar", "sight", "Alcázar_of_Seville", "Moorish palace and orange-tree gardens."],
    ["Plaza de España", "sight", "Plaza_de_España_(Seville)", "Tiled half-circle with a canal."],
    ["Barrio Santa Cruz", "town", "Santa_Cruz,_Seville", "Jasmine and orange-blossom lanes."],
    ["Doñana", "nature", "Doñana_National_Park", "Wetlands, flamingos, an hour away."]
  ],
  ronda: [
    ["Puente Nuevo gorge", "nature", "Puente_Nuevo", "The bridge over a 100 m gorge."],
    ["Sierra de Grazalema", "nature", "Sierra_de_Grazalema_Natural_Park", "White villages and green hills."],
    ["Setenil de las Bodegas", "town", "Setenil_de_las_Bodegas", "Houses built under the rock."]
  ],
  granada: [
    ["Alhambra", "sight", "Alhambra", "Palaces and the Generalife gardens. Book weeks ahead."],
    ["Albaicín at sunset", "town", "Albaicín", "Mirador de San Nicolás over the Alhambra."],
    ["Sierra Nevada", "nature", "Sierra_Nevada_(Spain)", "Snowy peaks behind the city."]
  ],
  paris: [
    ["Jardin du Luxembourg", "nature", "Jardin_du_Luxembourg", "Chairs by the fountain, first spring sun."],
    ["Musée d'Orsay", "sight", "Gare_d'Orsay", "Impressionists in a railway station."],
    ["Le Marais", "town", "Le_Marais", "Place des Vosges, falafel, small shops."]
  ],
  london: [
    ["Kew Gardens", "nature", "Kew_Gardens", "Palm House and spring bulbs."],
    ["Borough Market & the South Bank", "town", "Borough_Market", "Lunch and a riverside walk."],
    ["National Gallery", "sight", "National_Gallery", "Free, central, world class."]
  ],
  amsterdam: [
    ["Canal ring", "town", "Canals_of_Amsterdam", "Canal walks and a boat at dusk."],
    ["Keukenhof", "nature", "Keukenhof", "Tulip gardens (open from about mid-March)."],
    ["Rijksmuseum", "sight", "Rijksmuseum", "Rembrandt and Vermeer."]
  ],
  dublin: [
    ["Howth cliff walk", "nature", "Howth", "Sea-cliff loop, 30 min by DART train."],
    ["Trinity College Library", "sight", "Library_of_Trinity_College_Dublin", "The Long Room and the Book of Kells."],
    ["Georgian squares & pubs", "town", "Merrion_Square", "Doors, squares, a pint by the fire."]
  ]
};

Object.assign(window.SEE, {
  charleston: [
    ["Middleton Place", "nature", "Middleton_Place", "Terraced gardens and azaleas at their March peak."],
    ["Rainbow Row & the Battery", "town", "The_Battery_(Charleston)", "Pastel houses and the harbour promenade."],
    ["Angel Oak", "nature", "Angel_Oak", "A live oak around 400 years old with a canopy the size of a house."],
    ["Folly Beach", "nature", "Folly_Beach,_South_Carolina", "Long beach walks and a pier at sunset."],
    ["Fort Sumter", "sight", "Fort_Sumter", "Boat across the harbour to where the Civil War began."]
  ],
  lowcountry: [
    ["Kiawah Island beaches", "nature", "Kiawah_Island,_South_Carolina", "Ten miles of empty beach, dolphins in the creeks."],
    ["Hunting Island", "nature", "Hunting_Island_State_Park", "Boneyard beach and a climbable lighthouse."],
    ["Beaufort", "town", "Beaufort,_South_Carolina", "Antebellum waterfront town under the oaks."]
  ],
  savannah: [
    ["Wormsloe oak avenue", "nature", "Wormsloe_Historic_Site", "A mile of live oaks and Spanish moss."],
    ["Forsyth Park", "nature", "Forsyth_Park", "The fountain, azaleas and Saturday market."],
    ["The historic squares", "town", "Chippewa_Square", "Twenty-two shady squares to wander between."],
    ["Bonaventure Cemetery", "sight", "Bonaventure_Cemetery", "Gothic, mossy and strangely peaceful."],
    ["Tybee Island", "nature", "Tybee_Island,_Georgia", "Beach and lighthouse, 30 min out."]
  ]
});
