/* ------------------------------------------------------------------
   Planning data per option: door-to-door time, what to book and when,
   date clashes during 12–21 March 2027, entry rules, a wet-day plan,
   what happens if a connection is missed, the main downside, and
   anything personal about the place.
   Hours are rough: leave home → first hotel, last hotel → home,
   including getting to the airport early.
   Entry rules and festival dates change: check them before booking.
------------------------------------------------------------------- */
window.PLAN = {
  entry: {
    eu: ["Spain, France, Portugal (Schengen)", [
      "Passport valid at least 3 months after you leave, and issued in the last 10 years.",
      "The EU Entry/Exit System (EES) takes fingerprints and a photo the first time you enter. Allow extra time at passport control.",
      "ETIAS, an online travel authorisation (€20), is due to start in late 2026. Check whether it's live before you fly and apply a few weeks ahead."
    ]],
    uk: ["United Kingdom", [
      "US citizens need a UK ETA (Electronic Travel Authorisation, about £16). Apply in the UK ETA app; most decisions come within 3 working days.",
      "Needed for Scotland, a London stop, or a connection where you go through UK passport control.",
      "Passport valid for the whole stay."
    ]],
    ie: ["Ireland (Dublin connection)", [
      "No visa or travel authorisation for US citizens.",
      "On the way home you clear US immigration in Dublin, so allow 2.5–3 hours there."
    ]],
    us: ["US domestic flights", [
      "A REAL ID driver's licence or a passport is needed to fly. A plain licence is no longer accepted."
    ]]
  },

  /* applies to every option */
  common: {
    book: [
      ["Now – mid Dec", "Flights. Spring-break-week fares usually rise from January."],
      ["Mid Dec – Jan", "Hotels with free cancellation, so you hold the room while you decide."],
      ["Feb", "Rental car. Book an automatic early in Europe; there are fewer of them."],
      ["2–3 weeks before", "Travel insurance (within 14 days of the first payment if you want pre-existing-condition cover), and any entry authorisation."]
    ],
    clash: [
      ["Sun 14 Mar", "US clocks go forward, Europe's don't until 28 March. That week Europe is 4 hours ahead of Boston instead of 5 (Portugal and the UK 3, the Azores 2)."]
    ]
  },

  dest: {
    spain: {
      d2d: { BOS: [14, 14.5], BWI: [15.5, 16], how: "Out: Boston → Paris or Amsterdam → Bilbao, then a taxi into town. Back: drive to Asturias airport, fly via Madrid or Paris." },
      book: [
        ["Mid Dec – Jan", "Asador Etxebarri: bookings open about 2–3 months ahead and go fast. Ask for lunch."],
        ["Jan", "Arzak, Akelarre, Martín Berasategui, Mugaritz: book 6–8 weeks ahead. Mugaritz usually reopens in spring, so check its dates."],
        ["Feb", "Cider house (sagardotegi) dinner. Season runs January to April and weekends fill up."]
      ],
      clash: [
        ["Sun 21 Mar", "Palm Sunday, the start of Holy Week. Your last night is fine, but flights out of Spain that weekend are busier."]
      ],
      entry: ["eu"],
      wet: ["Guggenheim and the Fine Arts Museum in Bilbao", "A long pintxo crawl in San Sebastián's old town", "La Perla thalasso spa on La Concha beach", "Cider-house dinner (it's indoors anyway)", "Tito Bustillo cave and the Jurassic Museum in Asturias"],
      miss: "On one ticket via Paris or Amsterdam, the airline rebooks you; there are 4–6 flights a day to Bilbao. Worst case you lose an afternoon.",
      down: "Rain on about 4 days in 10, and the 3 h 30 drive from San Sebastián to Asturias is the longest single move of the European options.",
    },
    scotland: {
      d2d: { BOS: [12, 13.5], BWI: [14, 15], how: "Out: Boston → Dublin → Edinburgh. Back: from St Andrews to Edinburgh airport, then via Dublin, where you clear US immigration." },
      book: [
        ["Jan", "Restaurant Andrew Fairlie at Gleneagles (2 stars, one room): book as soon as your dates are firm."],
        ["Jan – Feb", "The Kitchin, Timberyard and The Witchery in Edinburgh: 4–6 weeks ahead for a weekend."],
        ["Feb", "Gleneagles spa slots and falconry. Book with the room."]
      ],
      clash: [
        ["Mid March", "Six Nations rugby ends around this weekend. If Scotland play at home at Murrayfield, Edinburgh hotels fill and prices rise. Check the 2027 fixtures."]
      ],
      entry: ["uk", "ie"],
      wet: ["National Museum of Scotland and the Scottish National Gallery", "Whisky tasting at a distillery (Glenturret is near Gleneagles)", "Afternoon tea and the spa at Gleneagles", "The Fife Arms art collection in Braemar", "Fireside reading: every stop has one"],
      miss: "Dublin and London have many flights a day to Edinburgh. On one ticket you're rebooked the same day.",
      down: "It's the coldest option, about 9°C by day, with grey skies most days and about a 1-in-5 chance that snow disrupts a day in the Cairngorms.",
    },
    provence: {
      d2d: { BOS: [14.5, 14], BWI: [16, 15.5], how: "Out: Boston → Paris CDG, then the TGV from the airport to Aix (about 3 h 30). Back: Marseille → Paris → Boston." },
      book: [
        ["Jan", "Le Petit Nice and AM par Alexandre Mazzia in Marseille: 6–8 weeks ahead."],
        ["Jan", "TGV tickets CDG → Aix go on sale about 4 months ahead and get pricier closer in."],
        ["Feb", "La Villa Madie in Cassis, and a boat to the calanques if the weather is calm (book on the day)."]
      ],
      clash: [
        ["All week", "No big events. Some Luberon village restaurants and hotels open only in late March, so check before you book."]
      ],
      entry: ["eu"],
      wet: ["Musée Granet (Cézanne) and the Cézanne studio in Aix", "Carrières de Lumières light show in a quarry at Les Baux", "MuCEM and the old port in Marseille", "A long lunch: Provence does those well", "Wine tasting in Châteauneuf-du-Pape cellars"],
      miss: "If the transatlantic flight is late and you miss the TGV, SNCF usually lets you take a later train with a connection ticket. Otherwise expect a new fare, about €60–100.",
      down: "The mistral can blow hard for 2–3 days at a time, and some Luberon places don't open until April.",
      personal: "Elizabeth studied in Aix.",
    },
    azores: {
      d2d: { BOS: [7, 8.5], BWI: [10, 11.5], how: "Boston → Ponta Delgada direct, about 4 h 30. From Baltimore, connect in Boston or fly direct from another hub." },
      book: [
        ["Dec – Jan", "Direct Boston flights. There are few a week in March, so fares jump once they fill."],
        ["Feb", "Terra Nostra or Octant Furnas: rooms near the hot springs go first."],
        ["Week before", "Cozido stew lunch in Furnas: book a day ahead so it goes in the ground for you."]
      ],
      clash: [
        ["All week", "No clashes. Whale-watching season starts around now, but boats cancel in rough sea."]
      ],
      entry: ["eu"],
      wet: ["Terra Nostra and Poça da Dona Beija hot pools (better in the rain)", "Gorreana tea plantation and factory", "Pineapple greenhouses in Ponta Delgada", "Cozido lunch in Furnas", "Spa at the hotel"],
      miss: "With only a few direct flights a week, a cancellation can mean a day's delay. Keep the last day flexible.",
      down: "The weather changes several times a day and crater-lake views are often in cloud.",
    },
    lisbon: {
      d2d: { BOS: [9, 11.5], BWI: [11, 13], how: "TAP direct from Boston or Washington Dulles to Lisbon, about 6 h 30. Back from the Alentejo it's 1 h 30 to Lisbon airport." },
      book: [
        ["Jan", "Belcanto (2 stars): about 6 weeks ahead."],
        ["Feb", "São Lourenço do Barrocal and Casas na Areia: small places with few rooms."],
        ["Week before", "Fado night in Alfama: book a table at a small house."]
      ],
      clash: [
        ["All week", "No clashes. It's low season, so Comporta's beach restaurants may have shorter hours."]
      ],
      entry: ["eu"],
      wet: ["Gulbenkian Museum and the tile museum in Lisbon", "Fado dinner", "Wine tasting in Alentejo cellars", "Évora's cathedral and Chapel of Bones", "A long lunch at the Barrocal estate"],
      miss: "With a direct flight there's no connection to miss. If it's cancelled, TAP rebooks on the next day's flight.",
      down: "Lisbon is hilly and busy, and the beach part is quiet because it's out of season.",
    },
    andalusia: {
      d2d: { BOS: [14, 15], BWI: [15, 16], how: "Out: Boston → Madrid, then the AVE train to Seville (2 h 30). Back: drive to Málaga airport and fly via Madrid." },
      book: [
        ["Dec – Jan", "Alhambra tickets for Granada: they sell out weeks ahead, and the Nasrid Palaces need a timed slot."],
        ["Jan", "Seville hotel. Prices rise from 19 March as Holy Week approaches."],
        ["Feb", "Real Alcázar in Seville: timed tickets online."]
      ],
      clash: [
        ["Fri 19 – Sun 21 Mar", "Holy Week starts on Palm Sunday, 21 March. Seville fills up and processions close streets from that weekend. Leave Seville by then, or plan to see the first processions."]
      ],
      entry: ["eu"],
      wet: ["Real Alcázar and the cathedral in Seville", "Flamenco in a small tablao", "Hammam at Aire de Sevilla", "Alhambra palaces (mostly roofed)", "Sherry tasting in a bodega"],
      miss: "On one ticket via Madrid you're rebooked. If you miss your AVE, Renfe has trains about every hour.",
      down: "Holy Week crowds start on your last weekend, and Granada nights can be close to freezing.",
    },
    lowcountry: {
      d2d: { BOS: [5, 5.5], BWI: [4.5, 5], how: "Direct Boston → Charleston, about 2 h 30. Back: direct Savannah → Boston, or connect through Atlanta." },
      book: [
        ["Now", "Savannah hotel: St Patrick's Day week sells out early and prices double."],
        ["Jan", "FIG, The Grey and other Charleston dinners: 3–4 weeks ahead."],
        ["Feb", "Festival of Houses and Gardens tickets in Charleston (it usually runs mid-March into April)."]
      ],
      clash: [
        ["Wed 17 Mar", "St Patrick's Day. Savannah's parade is one of the biggest in the US, with crowds of several hundred thousand and hotel prices that double or triple. Avoid being in Savannah 16–18 March, or plan around the party."],
        ["Mid March", "Spring break for many US colleges. Beaches and Tybee Island are busier."]
      ],
      entry: ["us"],
      wet: ["Gibbes Museum and historic house tours in Charleston", "SCAD Museum of Art in Savannah", "A long lunch with oysters", "Spa at the Montage or Kiawah", "Leopold's ice cream and bookshops"],
      miss: "Domestic flights rebook easily, and there's always the drive.",
      down: "Savannah is in the middle of St Patrick's Day week, and the sea is too cold for swimming.",
    },
    socal: {
      d2d: { BOS: [10.5, 8], BWI: [11, 8.5], how: "Out: Boston → Los Angeles direct, then about 2 h 30 to Palm Springs (or fly into Palm Springs with one stop). Back: direct from LA." },
      book: [
        ["Dec – Jan", "Palm Springs hotels: spring break is high season there."],
        ["Jan", "Channel Islands boat (Island Packers): book ahead, and expect some cancellations for rough sea."],
        ["Feb", "Addison in San Diego, if you add it: about 30 days ahead."]
      ],
      clash: [
        ["Mid March", "Spring break crowds in Palm Springs and Joshua Tree. Get to the park gates by 8 am."],
        ["Mid March", "Wildflowers bloom in the desert if winter was wet. Nice, but busier."]
      ],
      entry: ["us"],
      wet: ["Getty Center and LACMA in Los Angeles", "Wine tasting in Santa Barbara's Funk Zone", "Spa at Two Bunch Palms (mineral pools)", "Palm Springs Art Museum", "Dinner with Elizabeth's friends in LA"],
      miss: "Lots of daily flights to LA, so you're rebooked the same day.",
      down: "Five stops and about 7 hours of driving between them, plus Los Angeles traffic.",
      personal: "Elizabeth's friends live in LA.",
    }
  },

  /* combos borrow from their parts */
  combo: {
    "loire-basque": ["eu"], "basque-bordeaux": ["eu"], "lyon-provence": ["eu"], "provence-basque": ["eu"],
    "edinburgh-basque": ["uk", "ie", "eu"], "edinburgh-provence": ["uk", "ie", "eu"]
  }
};

/* something to watch or read on the way there: [title, by, year, length, why] */
window.PLAN.media = {
  spain: {
    book: ["The Basque History of the World", "Mark Kurlansky", 1999, "", "Cod, whaling, the language nobody can trace, and how Basque food got so good. Easy to dip in and out of."],
    film: ["Spanish Affair (Ocho apellidos vascos)", "Emilio Martínez-Lázaro", 2014, "98 min", "A man from Seville pretends to be Basque to win over a girl from a Basque village. Spain's biggest box-office comedy, and full of the stereotypes you'll then spot."]
  },
  scotland: {
    book: ["Kidnapped", "Robert Louis Stevenson", 1886, "", "An Edinburgh writer's chase across the Highlands after the Jacobite rising. Short, and it ends in Edinburgh."],
    film: ["Skyfall", "Sam Mendes", 2012, "143 min", "Bond drives the old Aston Martin DB5 up the Glen Etive road in Glen Coe to his childhood home. The house was a set, but the glen is real, and it's on the Glen Coe add-on."]
  },
  provence: {
    book: ["A Year in Provence", "Peter Mayle", 1989, "", "An English couple's first year in a Luberon farmhouse, month by month, starting with the mistral. Set where you'd be staying."],
    film: ["Jean de Florette", "Claude Berri", 1986, "120 min", "Two farmers plot to ruin a newcomer by hiding his spring. Filmed in the Provence hills; the second part is Manon des Sources."]
  },
  azores: {
    book: ["Stormy Isles: An Azorean Tale (Mau Tempo no Canal)", "Vitorino Nemésio", 1944, "", "The classic Azorean novel: whaling families, island society and the weather between the islands."],
    film: ["Moby-Dick", "John Huston, from Melville's novel", 1956, "116 min", "Azorean sailors crewed the New England whaling ships, which is why so many Azorean families ended up around Boston. Melville mentions them in the novel."]
  },
  lisbon: {
    book: ["Night Train to Lisbon", "Pascal Mercier", 2004, "", "A Swiss teacher walks out of class, takes the train to Lisbon and traces a doctor who resisted Salazar's dictatorship."],
    film: ["Lisbon Story", "Wim Wenders", 1994, "100 min", "A sound engineer wanders Lisbon recording the city. Slow, and mostly about the light, the trams and fado (Madredeus play themselves)."]
  },
  andalusia: {
    book: ["Tales of the Alhambra", "Washington Irving", 1832, "", "An American writer lived in the empty Alhambra palace in 1829 and wrote down its legends. Read it before Granada."],
    film: ["Carmen", "Carlos Saura", 1983, "102 min", "A flamenco company rehearses Carmen and the story takes over their lives. Mostly dance, with Paco de Lucía on guitar."]
  },
  lowcountry: {
    book: ["Midnight in the Garden of Good and Evil", "John Berendt", 1994, "", "A true murder case among Savannah's eccentrics. You'll recognise Mercer House and Bonaventure Cemetery."],
    film: ["Forrest Gump", "Robert Zemeckis", 1994, "142 min", "The bench scenes were filmed in Savannah's Chippewa Square, and much of the rest around Beaufort, South Carolina."]
  },
  socal: {
    book: ["Slouching Towards Bethlehem", "Joan Didion", 1968, "", "Essays on California in the 1960s. Short pieces, good for a flight."],
    film: ["Sideways", "Alexander Payne", 2004, "127 min", "Two friends on a week of wine tasting in the Santa Barbara hills. You'll pass the same wineries and diners."]
  }
};
