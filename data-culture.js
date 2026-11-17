/* ------------------------------------------------------------------
   Culture and history per stop, added to the highlights.
   [name, kind, wikipedia title, one line]; kind: "culture" | "history".
   Loaded after data-more3.js. Anything already listed for a stop is skipped.
------------------------------------------------------------------- */
(() => {
  const SEE = window.SEE;
  const C = {
    bilbao: [
      ["Fine Arts Museum", "culture", "Bilbao_Fine_Arts_Museum", "Spanish and Basque painting from El Greco to Zuloaga, next to the Doña Casilda park."],
      ["Vizcaya Bridge", "history", "Vizcaya_Bridge", "1893 hanging bridge over the river mouth that carries a gondola across. A UNESCO site; you can walk the top."]
    ],
    sansebastian: [
      ["San Telmo Museum", "culture", "San_Telmo_Museoa", "Basque history and society in a 16th-century convent, with Sert's golden murals in the church."],
      ["Basilica of Santa María", "history", "Basilica_of_Saint_Mary_of_the_Chorus", "Baroque church at the end of the old town's main street, facing the cathedral across the city."]
    ],
    asturias: [
      ["Tito Bustillo Cave", "history", "Tito_Bustillo_Cave", "Cave paintings of horses and deer about 20,000 years old, in Ribadesella. Small groups; book ahead."],
      ["Covadonga", "history", "Covadonga", "Where the Christian reconquest of Spain is said to have begun in 722. A chapel in the cliff above a waterfall."],
      ["Pre-Romanesque Oviedo", "history", "Santa_María_del_Naranco", "9th-century royal buildings on a hill above Oviedo, older than almost anything else in western Europe."]
    ],
    edinburgh: [
      ["Edinburgh Castle", "history", "Edinburgh_Castle", "On a volcanic rock above the city: the Scottish crown jewels, the Stone of Destiny and the one o'clock gun."],
      ["Palace of Holyroodhouse", "history", "Holyrood_Palace", "The King's Scottish home at the bottom of the Royal Mile, with Mary Queen of Scots' rooms and a ruined abbey."],
      ["National Museum of Scotland", "culture", "National_Museum_of_Scotland", "Free. Everything from the Lewis chessmen to Dolly the sheep, and a roof terrace with castle views."],
      ["Scottish National Gallery", "culture", "Scottish_National_Gallery", "Free. A compact collection with Raeburn's skating minister and Scottish painting upstairs."]
    ],
    gleneagles: [
      ["Stirling Castle", "history", "Stirling_Castle", "Renaissance royal palace on a crag, 30 minutes away, looking over the battlefields of Bannockburn and Stirling Bridge."],
      ["Scone Palace", "history", "Scone_Palace", "Where Scottish kings were crowned on the Stone of Scone, near Perth."]
    ],
    braemar: [
      ["Balmoral Castle", "history", "Balmoral_Castle", "The royal family's Highland estate. The grounds usually open from April, so check; the drive past is still worth it."],
      ["Braemar Castle", "history", "Braemar_Castle", "Small 17th-century tower house run by the village, with rooms as they were lived in."]
    ],
    standrews: [
      ["St Andrews Cathedral", "history", "St_Andrews_Cathedral", "Ruins of what was Scotland's largest church, on the cliff edge. Climb St Rule's Tower for the view."],
      ["The Old Course", "culture", "Old_Course_at_St_Andrews", "The oldest golf course in the world. Closed to play on Sundays, when anyone can walk across it."],
      ["St Andrews Castle", "history", "St_Andrews_Castle", "Bishops' castle on the rocks, with a medieval siege tunnel you can crawl through."]
    ],
    aix: [
      ["Atelier Cézanne", "culture", "Atelier_de_Cézanne", "The studio where Cézanne worked in his last years, left as it was, with his coats and still-life objects."],
      ["Musée Granet", "culture", "Musée_Granet", "Aix's art museum, with Cézanne, Picasso and Giacometti in a former priory."],
      ["Cours Mirabeau", "history", "Cours_Mirabeau", "Plane-tree avenue of 17th-century mansions and mossy fountains. Café life since the 1600s."]
    ],
    luberon: [
      ["Sénanque Abbey", "history", "Sénanque_Abbey", "12th-century Cistercian abbey in a narrow valley below Gordes, still home to monks."],
      ["Château de Lourmarin", "history", "Château_de_Lourmarin", "Renaissance château in the village where Albert Camus lived and is buried."],
      ["Gordes", "history", "Gordes", "Stone village stacked on a hill, with a castle on top and the Village des Bories (dry-stone huts) nearby."]
    ],
    cassis: [
      ["Notre-Dame de la Garde", "history", "Notre-Dame_de_la_Garde", "Marseille's gold-topped basilica on the highest hill, full of sailors' thank-you paintings. The best view of the city."],
      ["MuCEM", "culture", "MuCEM", "Museum of Mediterranean civilisations in a lace-concrete cube, joined by a footbridge to a 17th-century fort."],
      ["Le Panier", "history", "Le_Panier", "Marseille's oldest quarter, steep lanes around the Vieille Charité almshouse."]
    ],
    pdl: [
      ["Old Ponta Delgada", "history", "Ponta_Delgada", "Black-and-white basalt streets, the three-arched 18th-century city gates and the harbour square."],
      ["Gruta do Carvão", "history", "Gruta_do_Carvão", "Lava tubes under the city that you can walk through with a guide."]
    ],
    furnas: [
      ["Terra Nostra Park", "history", "Terra_Nostra_Park", "Garden started in the 1770s by an American consul, with a hot iron-rich pool and old trees from around the world."]
    ],
    lisbon: [
      ["Jerónimos Monastery", "history", "Jerónimos_Monastery", "Carved stone cloister paid for by the spice trade. Vasco da Gama is buried here."],
      ["Belém Tower", "history", "Belém_Tower", "16th-century fort on the river where the explorers set sail."],
      ["São Jorge Castle", "history", "São_Jorge_Castle", "Moorish castle on Lisbon's highest hill, with peacocks and views over the red roofs."],
      ["Gulbenkian Museum", "culture", "Calouste_Gulbenkian_Museum", "One collector's art, from Egyptian pieces to Lalique jewellery, in a quiet garden."],
      ["National Tile Museum", "culture", "Museu_Nacional_do_Azulejo", "Five centuries of Portuguese tiles in a convent, including a long tile panorama of Lisbon before the 1755 earthquake."]
    ],
    alentejo: [
      ["Roman Temple of Évora", "history", "Roman_Temple_of_Évora", "Granite columns from the 1st century in the middle of Évora's walled old town."],
      ["Chapel of Bones", "history", "Capela_dos_Ossos", "A chapel lined with the bones of about 5,000 monks. Strange and not gruesome."],
      ["Almendres Cromlech", "history", "Almendres_Cromlech", "About 95 standing stones in a cork-oak field, older than Stonehenge."],
      ["Monsaraz", "history", "Monsaraz", "Walled hilltop village over the Alqueva lake, quiet in the evenings."]
    ],
    seville: [
      ["Real Alcázar", "history", "Alcázar_of_Seville", "Royal palace still in use, built by Christian kings in the Moorish style, with huge gardens."],
      ["Seville Cathedral", "history", "Seville_Cathedral", "The largest Gothic cathedral in the world, with Columbus's tomb and the Giralda tower (ramps, not stairs)."],
      ["Plaza de España", "culture", "Plaza_de_España,_Seville", "Half-circle of brick and tiles built for a 1929 fair, with a tiled bench for every province of Spain."],
      ["Flamenco", "culture", "Flamenco", "Seville is a centre of flamenco. See it in a small tablao or the Casa de la Memoria, not a dinner show."]
    ],
    ronda: [
      ["Puente Nuevo", "history", "Puente_Nuevo", "18th-century bridge across the 100 m gorge that splits the town."],
      ["Ronda bullring", "history", "Plaza_de_toros_de_Ronda", "One of Spain's oldest bullrings, now mostly a museum. Hemingway and Welles wrote about it."]
    ],
    granada: [
      ["Alhambra", "history", "Alhambra", "Nasrid palaces, fortress and gardens above the city. Book the palace slot weeks ahead."],
      ["Albaicín", "history", "Albayzín", "The old Moorish quarter of white lanes, facing the Alhambra. Go to the San Nicolás viewpoint at sunset."],
      ["Royal Chapel", "history", "Royal_Chapel_of_Granada", "Tombs of Ferdinand and Isabella, the monarchs who took Granada in 1492."]
    ],
    charleston: [
      ["Fort Sumter", "history", "Fort_Sumter", "Island fort where the Civil War began in 1861. Reached by a 30-minute boat ride."],
      ["McLeod Plantation", "history", "McLeod_Plantation", "Tells the story of the enslaved people and Gullah families who lived and worked here."],
      ["Gibbes Museum of Art", "culture", "Gibbes_Museum_of_Art", "Southern art, with a good room of miniature portraits."],
      ["Old Charleston", "history", "Charleston_Historic_District", "Church spires, gated gardens and Rainbow Row, a line of pastel 18th-century merchants' houses on the waterfront."]
    ],
    lowcountry: [
      ["Penn Center", "history", "Penn_School_Historic_District", "One of the first schools for freed slaves (1862), now a centre for Gullah culture on St Helena Island."],
      ["Beaufort", "history", "Beaufort,_South_Carolina", "Antebellum waterfront town of white houses under live oaks."]
    ],
    savannah: [
      ["Owens–Thomas House", "history", "Owens–Thomas_House", "1819 Regency house with one of the best-preserved urban slave quarters in the South."],
      ["SCAD Museum of Art", "culture", "SCAD_Museum_of_Art", "Contemporary art in an old railway depot, run by the art college that revived the city."],
      ["Wormsloe", "history", "Wormsloe_Historic_Site", "A mile-long avenue of live oaks leading to the ruins of a 1730s colonial house."],
      ["Savannah's squares", "history", "Chippewa_Square", "General Oglethorpe's 1733 grid of 22 leafy squares, still intact."]
    ],
    palmsprings: [
      ["Palm Springs Art Museum", "culture", "Palm_Springs_Art_Museum", "Modern art and an architecture centre in a 1961 bank building."],
      ["Sunnylands", "history", "Sunnylands", "The Annenbergs' mid-century estate where presidents and the Queen stayed. Book the house tour."]
    ],
    joshuatree: [
      ["Keys Ranch", "history", "Keys_Desert_Queen_Ranch", "A homesteader's ranch inside the park, kept as it was. Ranger-led tours only."]
    ],
    ojai: [
      ["Bart's Books", "culture", "Bart's_Books", "Outdoor bookshop where the shelves face the street and you pay through a slot when it's closed."]
    ],
    santabarbara: [
      ["Mission Santa Barbara", "history", "Mission_Santa_Barbara", "The 'queen of the missions', 1786, with a rose garden in front."],
      ["County Courthouse", "history", "Santa_Barbara_County_Courthouse", "Spanish-revival courthouse with painted rooms and a free clock-tower view."]
    ],
    losangeles: [
      ["Getty Center", "culture", "Getty_Center", "Free art museum on a hill, with gardens and views to the sea."],
      ["Griffith Observatory", "culture", "Griffith_Observatory", "Free observatory with the classic view of the Hollywood sign and the city lights."],
      ["Getty Villa", "culture", "Getty_Villa", "Greek and Roman art in a copy of a Roman villa above the Pacific. Free, but book a time."]
    ]
  };
  Object.entries(C).forEach(([id, items]) => {
    SEE[id] = SEE[id] || [];
    items.forEach(x => { if (!SEE[id].some(s => s[2] === x[2])) SEE[id].push(x); });
  });
})();
