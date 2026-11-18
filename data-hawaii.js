/* ------------------------------------------------------------------
   Hawaii: Maui and the Big Island. Everything for this option in one
   place: the Explore page, budget stops and route, add-ons, weather,
   highlights, planning, foods, look and reading.
   Loaded after data-culture.js. Same formats as the other files.

   8 nights: fly out Friday 12, red-eye home from Kona on Saturday 20,
   home Sunday afternoon. Hawaii is 6 hours behind Boston in March.
------------------------------------------------------------------- */
(() => {
  const B = window.BUDGET, T = window.TRIP, SEE = window.SEE, SEA = " · by the sea";
  const g = q => "https://www.google.com/search?q=" + encodeURIComponent(q);

  /* ---------------- budget stops ---------------- */
  const wx = a => ({ hi: a[0], lo: a[1], rain: a[2], sun: a[3], t15: a[4], t20: a[5], frost: a[6], wind: a[7], snow: a[8], windName: "" });
  Object.assign(B.bases, {
    maui: { name: "Wailea · Maui", lat: 20.6873, lng: -156.4423, f: 1.35, wx: wx([27, 19, .12, .70, 1, 1, 0, .20, 0]),
      hotels: [["Four Seasons Resort Maui at Wailea", 1700, "Oceanfront, adults' pool" + SEA], ["Hotel Wailea", 1100, "Adults only, suites on the hill"], ["Andaz Maui at Wailea", 900, "Terraced pools on Mōkapu beach" + SEA],
        ["Wailea Beach Resort", 650, "On Wailea beach" + SEA], ["Mana Kai Maui", 380, "Condo hotel on Keawakapu beach" + SEA], ["Kīhei condo", 280, "Simple, across the road from the beach"]],
      dine: [["Mama's Fish House", 320, 0], ["Ka'ana Kitchen (Andaz)", 260, 0], ["Monkeypod Kitchen", 130, 0]] },
    volcano: { name: "Volcano · Kīlauea", lat: 19.4285, lng: -155.2381, f: 1.1, wx: wx([19, 10, .65, .25, .85, .35, 0, .10, 0]),
      hotels: [["Volcano House", 330, "On the crater rim, inside the park"], ["Kīlauea Lodge", 250, "Fireplaces in the rainforest"], ["Volcano village B&B", 180, "Simple"]],
      dine: [["The Rim at Volcano House", 150, 0], ["Kīlauea Lodge restaurant", 130, 0]] },
    kohala: { name: "Kohala Coast · Big Island", lat: 19.946, lng: -155.863, f: 1.35, wx: wx([28, 19, .08, .75, 1, 1, 0, .25, 0]),
      hotels: [["Kona Village, a Rosewood Resort", 2500, "Thatched hale on the lava coast" + SEA], ["Mauna Lani, Auberge", 1300, "Fishponds and a quiet beach" + SEA], ["Mauna Kea Beach Hotel", 900, "1965 hotel on a crescent beach" + SEA],
        ["Fairmont Orchid", 700, "Lagoon and spa huts by the water" + SEA], ["Holualoa Inn", 400, "Coffee-farm inn above Kona"], ["Royal Kona Resort", 300, "On the rocks in Kona town" + SEA]],
      dine: [["CanoeHouse (Mauna Lani)", 300, 0], ["Merriman's Waimea", 240, 0], ["Da Poke Shack (lunch)", 50, 0]] },
    oahu: { name: "Honolulu · Oʻahu", lat: 21.2793, lng: -157.8292, f: 1.3, wx: wx([27, 20, .22, .60, 1, 1, 0, .15, 0]),
      hotels: [["Halekulani", 800, "Quiet luxury on Waikīkī" + SEA], ["The Royal Hawaiian", 650, "The 1927 pink palace" + SEA], ["Moana Surfrider", 500, "1901, the oldest on the beach" + SEA], ["Simple Waikīkī hotel", 280, "Simple"]],
      dine: [["La Mer (Halekulani)", 500, 0], ["Senia", 300, 0], ["Helena's Hawaiian Food", 60, 0]] },
    hana: { name: "Hāna · Maui", lat: 20.7575, lng: -155.9903, f: 1.3, wx: wx([26, 19, .65, .30, 1, .98, 0, .15, 0]),
      hotels: [["Hāna-Maui Resort", 750, "Ocean-view cottages" + SEA], ["Hāna Kai Maui", 320, "Condos on the bay" + SEA]],
      dine: [["Hāna Ranch Restaurant", 90, 0]] },
    hilo: { name: "Hilo", lat: 19.7297, lng: -155.09, f: 1.05, wx: wx([26, 18, .70, .25, 1, .95, 0, .08, 0]),
      hotels: [["Grand Naniloa", 260, "On Hilo Bay" + SEA], ["Hilo B&B", 170, "Simple"]],
      dine: [["Hilo Bay Café", 120, 0], ["Café 100 (loco moco)", 30, 0]] },
    kauai: { name: "Poʻipū · Kauaʻi", lat: 21.874, lng: -159.458, f: 1.35, wx: wx([26, 20, .30, .55, 1, 1, 0, .20, 0]),
      hotels: [["Grand Hyatt Kauai", 800, "Pools and a saltwater lagoon" + SEA], ["Koa Kea", 750, "Small, on the beach" + SEA], ["Waimea Plantation Cottages", 350, "Old sugar-camp cottages" + SEA], ["Poʻipū condo", 300, "Simple"]],
      dine: [["The Beach House", 250, 0], ["Merriman's Poʻipū", 220, 0]] }
  });

  /* highlights per stop: [name, kind, wikipedia title, one line] */
  Object.assign(SEE, {
    maui: [
      ["Haleakalā", "nature", "Haleakalā_National_Park", "Sunrise above the clouds from the 10,000 ft crater."],
      ["Humpback whales", "nature", "Humpback_whale", "Thousands winter off Maui. March is still peak season."],
      ["Road to Hāna", "nature", "Hāna_Highway", "Waterfalls, rainforest and black sand along the coast."],
      ["Molokini", "nature", "Molokini", "Snorkel in a sunken crater with clear water."],
      ["Mākena Big Beach", "nature", "Mākena_State_Park", "A mile of golden sand with no hotels on it."],
      ["ʻĪao Valley", "history", "Iao_Valley", "A green rock needle in the valley where Kamehameha won a battle in 1790."],
      ["Hula", "culture", "Hula", "Free hula shows at the hotels and shopping centres, or a lūʻau run by a Hawaiian family."]
    ],
    volcano: [
      ["Kīlauea", "nature", "Kīlauea", "One of the world's most active volcanoes. When it's erupting the crater glows at night."],
      ["Chain of Craters Road", "nature", "Chain_of_Craters_Road", "Down through lava flows to a sea arch on the coast."],
      ["Kīlauea Iki", "nature", "Kīlauea_Iki", "Walk across a crater floor that was a lava lake in 1959."],
      ["Punaluʻu black-sand beach", "nature", "Punaluʻu_Beach", "Green turtles asleep on black sand, on the drive to Kohala."],
      ["Halemaʻumaʻu", "history", "Halemaʻumaʻu", "The crater Hawaiians hold sacred as the home of Pele, goddess of fire."],
      ["Volcano House", "history", "Volcano_House", "A hotel on the crater rim since 1846. Mark Twain stayed."]
    ],
    kohala: [
      ["Hāpuna Beach", "nature", "Hāpuna_Beach_State_Recreation_Area", "One of the best beaches in Hawaii: wide, white and calm."],
      ["Manta rays at night", "nature", "Reef_manta_ray", "Giant mantas feed under lights off Kona. You float and watch."],
      ["Mauna Kea", "nature", "Mauna_Kea", "Sunset at 13,800 ft among the observatories, then the stars."],
      ["Waipiʻo and Pololū valleys", "nature", "Pololū_Valley", "Cliffs and black-sand bays at the northern tip."],
      ["Kealakekua Bay", "nature", "Kealakekua_Bay", "Spinner dolphins and the best snorkelling on the island."],
      ["Puʻuhonua o Hōnaunau", "history", "Puʻuhonua_o_Hōnaunau_National_Historical_Park", "Place of refuge with carved wooden figures and turtles on the lava."],
      ["Puʻukoholā Heiau", "history", "Puʻukoholā_Heiau_National_Historic_Site", "Stone temple Kamehameha built in 1791 before uniting the islands."],
      ["Huliheʻe Palace", "history", "Huliheʻe_Palace", "Royal summer house on Kona's seafront."],
      ["Kona coffee farms", "culture", "Kona_coffee", "Small farms above Kona with free tastings."]
    ],
    oahu: [
      ["Diamond Head", "nature", "Diamond_Head,_Hawaii", "Short climb up a crater for the view over Waikīkī."],
      ["North Shore", "nature", "North_Shore_(Oahu)", "Big-wave beaches, turtles and shrimp trucks."],
      ["Pearl Harbor", "history", "USS_Arizona_Memorial", "The USS Arizona memorial. Book the free timed tickets."],
      ["ʻIolani Palace", "history", "ʻIolani_Palace", "Home of Hawaii's last king and queen, before the 1893 overthrow."],
      ["Bishop Museum", "culture", "Bishop_Museum", "The best collection of Hawaiian and Pacific culture."],
      ["Waikīkī", "town", "Waikīkī", "Beach, surf lessons and old hotels."]
    ],
    hana: [
      ["Pīpīwai Trail", "nature", "Pipiwai_Trail", "Through a bamboo forest to a 400 ft waterfall."],
      ["Waiʻānapanapa", "nature", "Waianapanapa_State_Park", "Black-sand beach and sea caves. Reserve entry ahead."],
      ["Hāna town", "town", "Hāna,_Hawaii", "A quiet ranch town at the end of the road."]
    ],
    hilo: [
      ["ʻAkaka Falls", "nature", "Akaka_Falls_State_Park", "A 440 ft waterfall in the rainforest, short paved loop."],
      ["Hilo", "town", "Hilo,_Hawaii", "Old wooden bayfront town with a big farmers market."]
    ],
    kauai: [
      ["Nā Pali Coast", "nature", "Nā_Pali_Coast", "Green cliffs 3,000 ft high, by boat or helicopter."],
      ["Waimea Canyon", "nature", "Waimea_Canyon_State_Park", "Red canyon with lookouts over the Kalalau valley."],
      ["Hanalei Bay", "nature", "Hanalei_Bay", "A wide bay under waterfall-streaked mountains."]
    ]
  });

  /* ---------------- the route in the budget ---------------- */
  Object.assign(B.segs, {
    "maui>volcano": [["flight", 3.5, 110, "Fly Kahului → Hilo (40 min, a few a day; check), new hire car, then 45 min up to Volcano."]],
    "volcano>kohala": [["car", 2.5, 0, "Round the south through Kaʻū past Punaluʻu's turtles, or north over the Saddle Road between the volcanoes."]],
    "oahu>maui": [["flight", 2, 110, "Honolulu → Kahului, 40 min, flights most hours."]],
    "maui>hana": [["car", 2.5, 0, "The Road to Hāna: about 600 bends and 50 one-lane bridges. Stop at the waterfalls."]],
    "hana>volcano": [["flight", 5.5, 110, "Back to Kahului the way you came, then fly to Hilo."]],
    "volcano>hilo": [["car", 0.75, 0, "Down Highway 11 to the bay."]],
    "hilo>kohala": [["car", 1.5, 0, "Up the Hāmākua coast past ʻAkaka Falls, then over to Waimea."]],
    "kohala>kauai": [["flight", 3, 130, "Kona → Līhuʻe, direct or via Honolulu."]]
  });
  const it = { id: "hawaii", kind: "single", name: "Hawaii: Maui & Big Island", color: "#0E7C80", domestic: true, nightsTarget: 8,
    legs: [["maui", 4], ["volcano", 1], ["kohala", 3]], car: 8, transfers: [], flight: { BOS: 1150, BWI: 1200 }, hubs: [], redeye: true,
    how: "One stop on the West Coast to Maui, a short flight to the Big Island mid-trip, and a red-eye home from Kona on Saturday night.",
    sky: "Delta via Los Angeles or Seattle to Maui, home from Kona the same way. Hawaiian and Alaska (now one airline) fly Boston → Honolulu direct on some days.",
    extras: [
      ["oahu", 2, "start", 0, 0, "Start in Honolulu: Pearl Harbor, ʻIolani Palace, Waikīkī. Hawaiian flies Boston → Honolulu direct some days."],
      ["hana", 1, "after:maui", 1, 0, "Sleep at the end of the Road to Hāna instead of driving it there and back in a day."],
      ["hilo", 1, "after:volcano", 1, 0, "Hilo's bayfront and farmers market, ʻAkaka Falls and the Hāmākua coast."],
      ["kauai", 2, "end", 2, 0, "Finish on Kauaʻi: Waimea Canyon and the Nā Pali cliffs. Fly home from Līhuʻe."]
    ] };
  const at = B.itineraries.findIndex(x => x.id === "socal");
  if (!B.itineraries.some(x => x.id === "hawaii")) B.itineraries.splice(at + 1, 0, it);

  /* ---------------- the Explore page ---------------- */
  T.destinations.push({
    id: "hawaii",
    name: "Hawaii",
    region: "Maui · Big Island",
    proposedBy: "Wildcard",
    color: "#0E7C80",
    wildcard: true,
    domestic: true,
    tagline: "Warm sea, humpback whales and a live volcano: beach days on Maui and the Big Island, with sunrise above the clouds.",
    hero: "Haleakalā_National_Park",
    unsplash: "maui",
    weather: { hi: 27, lo: 19, rainDays: 3, daylight: "12h 05m", sea: 24, summary: "Near 80°F on the dry west coasts, with a light trade wind. Showers on the wet side of each island and up at Volcano. Near freezing at dawn on the summits." },
    scores: { relax: 5, food: 3, cozy: 2, weather: 5, ease: 2 },
    budget: "$$$$$",
    pros: ["The only option where the sea is warm enough to swim (24°C / 75°F)", "Humpback whale season: often seen from the beach in March", "A live volcano, sunrise above the clouds, and some of the clearest night skies on Earth", "Domestic: no passport needed, US dollars"],
    cons: ["Longest journey: about 13 h each way with a connection, and a red-eye home", "The most expensive hotels and food on the list", "6-hour time change, so the first mornings start at 5 am"],
    stops: [
      { name: "Wailea, Maui", lat: 20.6873, lng: -156.4423, nights: 4, wiki: "Wailea,_Hawaii", desc: "Calm beaches, whales offshore, sunsets over Kahoʻolawe." },
      { name: "Haleakalā", lat: 20.7097, lng: -156.2533, nights: 0, wiki: "Haleakalā_National_Park", desc: "The 10,000 ft volcano: sunrise above the clouds." },
      { name: "Road to Hāna", lat: 20.7575, lng: -155.9903, nights: 0, wiki: "Hāna_Highway", desc: "Waterfalls and rainforest on the road east." },
      { name: "Volcano · Kīlauea", lat: 19.4285, lng: -155.2381, nights: 1, by: "flight", wiki: "Hawaiʻi_Volcanoes_National_Park", desc: "A night on the crater rim. Short flight from Maui to Hilo." },
      { name: "Kohala Coast", lat: 19.946, lng: -155.863, nights: 3, wiki: "Hāpuna_Beach_State_Recreation_Area", desc: "White beaches on black lava, manta rays at night." },
      { name: "Mauna Kea", lat: 19.8207, lng: -155.4681, nights: 0, wiki: "Mauna_Kea", desc: "Sunset at 13,800 ft, then stargazing." },
      { name: "Kona coffee country", lat: 19.6214, lng: -155.9475, nights: 0, wiki: "Kona_coffee", desc: "Coffee farms, the place of refuge, Kealakekua Bay." }
    ],
    days: [
      { d: "Fri 12", t: "Fly BOS → Maui with one stop on the West Coast (about 13 h). Land late afternoon, 30 min to Wailea, early night." },
      { d: "Sat 13", t: "Jet lag wakes you at 3 am, so use it: Haleakalā sunrise (permit needed). Upcountry breakfast, then sleep by the pool." },
      { d: "Sun 14", t: "Morning whale-watching boat. Beach afternoon. Dinner at Mama's Fish House." },
      { d: "Mon 15", t: "Road to Hāna: waterfalls, bamboo forest, the black-sand beach at Waiʻānapanapa. Or snorkel Molokini and stay put." },
      { d: "Tue 16", t: "Fly Kahului → Hilo. Rainbow Falls, then up to Volcano. Look into the crater at dusk from the rim." },
      { d: "Wed 17", t: "Hawaiʻi Volcanoes: Crater Rim Drive, Kīlauea Iki, the lava tube. Drive round the south past the turtles at Punaluʻu to the Kohala Coast." },
      { d: "Thu 18", t: "Beach day at Hāpuna or Mauna Kea Beach. Evening: snorkel with manta rays off Kona." },
      { d: "Fri 19", t: "Coffee farm and Puʻuhonua o Hōnaunau in the morning. Sunset and stars on Mauna Kea with a tour." },
      { d: "Sat 20", t: "Last beach morning and a late check-out. Red-eye from Kona in the evening." },
      { d: "Sun 21", t: "Connect on the West Coast, home to Boston or Baltimore in the afternoon." }
    ],
    stays: [
      { name: "Hotel Wailea", place: "Wailea, Maui", price: "$$$$$", tag: "Adults only", why: "Small, quiet hotel on the hill with ocean-view suites. The most relaxing on Maui.", url: g("Hotel Wailea"), highlight: true },
      { name: "Four Seasons Resort Maui", place: "Wailea, Maui", price: "$$$$$", tag: "On the beach", why: "Big, easy, and right on Wailea beach. The adults' pool looks at the whales.", url: g("Four Seasons Resort Maui at Wailea"), sea: true },
      { name: "Andaz Maui", place: "Wailea, Maui", price: "$$$$", tag: "Terraced pools", why: "Modern, with pools stepping down to Mōkapu beach.", url: g("Andaz Maui at Wailea"), sea: true },
      { name: "Mana Kai Maui", place: "Kīhei, Maui", price: "$$", tag: "On the sand", why: "Plain condo rooms, but right on Keawakapu, one of the best beaches.", url: g("Mana Kai Maui"), sea: true },
      { name: "Volcano House", place: "Hawaiʻi Volcanoes National Park", price: "$$", tag: "On the crater rim", why: "The only hotel inside the park. Ask for a crater-view room.", url: g("Volcano House Hawaii"), highlight: true },
      { name: "Mauna Kea Beach Hotel", place: "Kohala Coast, Big Island", price: "$$$$", tag: "Crescent beach", why: "Laurance Rockefeller's 1965 hotel on one of the best beaches in Hawaii. Mantas come in at night.", url: g("Mauna Kea Beach Hotel"), highlight: true, sea: true },
      { name: "Kona Village, a Rosewood Resort", place: "Kona, Big Island", price: "$$$$$", tag: "Thatched hale", why: "Rebuilt in 2023: private bungalows on the lava coast. A big splurge.", url: g("Kona Village Rosewood"), sea: true },
      { name: "Holualoa Inn", place: "Above Kona, Big Island", price: "$$$", tag: "Coffee-farm inn", why: "Six rooms on a coffee farm, cooler air and views down to the sea.", url: g("Holualoa Inn") }
    ],
    eat: [
      { name: "Mama's Fish House", place: "Pāʻia, Maui", stars: 0, note: "Fish caught that morning, with the fisherman named on the menu. Book weeks ahead." },
      { name: "Merriman's", place: "Waimea, Big Island", stars: 0, note: "Where Hawaii regional cooking started, with food from the farms around it." },
      { name: "CanoeHouse", place: "Mauna Lani, Big Island", stars: 0, note: "Tables by the water at sunset." },
      { name: "The Rim", place: "Volcano House", stars: 0, note: "Dinner looking into Kīlauea's crater." },
      { name: "Da Poke Shack", place: "Kona", stars: 0, note: "A small counter with the best poke on the island. Lunch." },
      { name: "Monkeypod Kitchen", place: "Wailea, Maui", stars: 0, note: "Mai tais with honey foam and cream pies. Easy and fun." }
    ],
    do: [
      { t: "Beach and pool days", relax: true },
      { t: "Whale watching from a boat or the shore", relax: true },
      { t: "Spa day", relax: true },
      { t: "Mauna Kea sunset and stars", relax: true },
      { t: "Kona coffee farm tasting", relax: true },
      { t: "Haleakalā sunrise", relax: false },
      { t: "Road to Hāna", relax: false },
      { t: "Manta ray night snorkel", relax: false },
      { t: "Walk across Kīlauea Iki crater (4 mi)", relax: false }
    ],
    photos: ["Haleakalā_National_Park", "Wailea,_Hawaii", "Humpback_whale", "Hāna_Highway", "Hawaiʻi_Volcanoes_National_Park", "Mauna_Kea", "Hāpuna_Beach_State_Recreation_Area", "Puʻuhonua_o_Hōnaunau_National_Historical_Park"],
    flights: { summary: "One stop each way via the West Coast, about 12–13 h out. Home on a red-eye from Kona. Hawaiian (now part of Alaska) flies Boston → Honolulu direct some days.",
      legs: [{ from: "BOS", to: "OGG", by: "Delta, Alaska, United, American via LAX / SEA / SFO", direct: false }, { from: "BOS", to: "HNL", by: "Hawaiian direct (some days; check)", direct: true },
        { from: "BWI", to: "OGG", by: "1 stop (United via SFO or DEN, Delta via LAX or SEA)", direct: false }, { from: "KOA", to: "BOS / BWI", by: "Overnight to the West Coast, then on (1 stop)", direct: false }],
      searchIn: "OGG", searchOut: "KOA" }
  });

  /* ---------------- weather, look ---------------- */
  window.WX.hawaii = { rain: .20, sun: .65, t15: .98, t20: .90, frost: 0, wind: .20, snow: .03, windName: "Trade wind",
    note: "The dry west coasts (Wailea, Kohala) get rain about one day in ten. The windward side and Volcano are wet most days, usually as passing showers. If it's raining, drive to the other side of the island. The Haleakalā and Mauna Kea summits are near freezing at dawn and get the odd snowfall." };
  window.THEMES.hawaii = { accent: "#0E6E73", tint: "#EEF6F5", font: "'DM Serif Display', Georgia, serif", vibe: "Warm sea, humpback whales, lava fields and sunrise above the clouds" };

  /* ---------------- what makes it special ---------------- */
  window.DISCOVER.hawaii = {
    special: [
      ["Humpback whales", "Thousands of humpbacks spend the winter in the warm, shallow water off Maui. Mid-March is still the season, and you can often see them blow from the beach."],
      ["A live volcano", "Kīlauea is one of the most active volcanoes on Earth. When it's erupting, the crater glows orange at night. Check the USGS page before you go."],
      ["Above the clouds", "Haleakalā and Mauna Kea rise to 10,000 and 13,800 ft. Sunrise over a sea of cloud, and some of the clearest night skies anywhere."],
      ["Hawaiian culture", "Hula, the Hawaiian language on road signs, and sacred places like the place of refuge at Hōnaunau. Locals ask visitors to treat the land and sea with care (mālama ʻāina)."],
      ["A warm sea", "About 24°C (75°F) water. The only option on the list where you'll actually swim and snorkel."]
    ],
    items: [
      ["Haleakalā sunrise", "nature", "maui", "easy", "half a day", "Haleakalā_National_Park", "The sun comes up over a sea of cloud from the rim of a 10,000 ft crater.", "Reserve the sunrise permit 60 days ahead. It's freezing at the top, so bring hats and the hotel blanket. Jet lag makes the 3 am start easy."],
      ["Whale watching", "nature", "maui", "passive", "2 h", "Humpback_whale", "Boats from Māʻalaea and Kīhei go out among mothers, calves and singing males.", "Go in the morning, when the sea is calmest. The Pacific Whale Foundation's boats are run by a non-profit."],
      ["Road to Hāna", "nature", "maui", "easy", "a day", "Hāna_Highway", "Waterfalls, rainforest and black-sand coves on a slow, winding coast road.", "Leave by 7 am and reserve Waiʻānapanapa. The point is the stops, not getting to Hāna."],
      ["Molokini snorkel", "nature", "maui", "easy", "half a day", "Molokini", "A half-sunken crater with clear water and reef fish.", "Morning boats only: the wind picks up after noon."],
      ["Hawaiʻi Volcanoes National Park", "nature", "volcano", "easy", "a day", "Hawaiʻi_Volcanoes_National_Park", "Steam vents, a walk across the floor of Kīlauea Iki, a lava tube, and the road down to the sea.", "Look into the crater after dark if it's erupting."],
      ["Manta ray night snorkel", "nature", "kohala", "easy", "an evening", "Reef_manta_ray", "Lights draw plankton, and manta rays with 10 ft wingspans glide just under you.", "You hold on to a lit float board and just watch. No experience needed."],
      ["Mauna Kea stars", "nature", "kohala", "passive", "an evening", "Mauna_Kea", "Sunset from 13,800 ft among the observatories, then telescopes lower down.", "Go with a tour: the summit road needs a 4x4, and hire-car contracts ban it."],
      ["Puʻuhonua o Hōnaunau", "culture", "kohala", "easy", "1 h 30", "Puʻuhonua_o_Hōnaunau_National_Historical_Park", "A place of refuge where people who broke sacred law could be forgiven, with carved wooden figures and a royal ground.", "Snorkel at Two Step next door afterwards."],
      ["Kona coffee", "food", "kohala", "passive", "half a day", "Kona_coffee", "Small family farms on the volcano slopes above Kona, with free tastings.", "Hōlualoa village has galleries too."],
      ["Hula", "culture", "maui", "passive", "an evening", "Hula", "Hula tells stories and genealogies. It's much more than a hotel show.", "Look for a lūʻau run by a Hawaiian family, or the free hula at the shopping centres."]
    ]
  };

  /* ---------------- planning ---------------- */
  window.PLAN.dest.hawaii = {
    best: "Warm beaches, whales and volcanoes: the most 'proper holiday' option, if the long flights are OK.",
    d2d: { BOS: [17, 15], BWI: [17.5, 15.5], how: "Out: Boston → West Coast → Maui, about 13 h of flying and connecting, plus the drive to Wailea. Back: an evening flight from Kona overnight, a connection on the West Coast, home Sunday afternoon." },
    book: [
      ["Dec – Jan", "Hotels and the hire cars: spring break plus whale season make March one of Maui's busiest months. Cars sell out."],
      ["12 Jan", "Haleakalā sunrise permit for 13 March: released 60 days ahead at 7 am Hawaii time on recreation.gov, plus a few two days before."],
      ["Jan", "Mama's Fish House: reservations fill weeks to months ahead."],
      ["Feb", "Manta ray night snorkel and a Mauna Kea stargazing tour."],
      ["Feb", "Waiʻānapanapa State Park entry for the Road to Hāna (opens 30 days ahead)."]
    ],
    clash: [
      ["Mid March", "US spring break: busier beaches and higher car prices."],
      ["Through March", "End of the humpback whale peak. A bonus, not a clash."]
    ],
    entry: ["us"],
    wet: ["Drive to the dry side: rain on one coast usually means sun on the other", "Maui Ocean Center aquarium", "Spa day at the hotel", "Hilo's farmers market and the Lyman Museum", "A Kona coffee farm tour"],
    miss: "Lots of flights to Hawaii via the West Coast, but they're full in spring break. A missed connection can mean a night in LA or Seattle, so keep it on one ticket.",
    down: "The longest and most tiring journey on the list: about 13 hours each way, a 6-hour time change and a red-eye home, at the highest prices."
  };
  window.PLAN.media.hawaii = {
    book: ["Unfamiliar Fishes", "Sarah Vowell", 2011, "", "A short, funny history of how missionaries, whalers and sugar planters turned the Hawaiian kingdom into part of the US."],
    film: ["The Descendants", "Alexander Payne", 2011, "115 min", "George Clooney as a Honolulu lawyer taking his daughters across the islands. Hawaii as a place people live, not a postcard."]
  };

  /* ---------------- foods to try ---------------- */
  window.FOOD.hawaii = [
    ["Poke", "Da Poke Shack, Kona; any supermarket counter", "Cubes of raw ahi tuna with soy, sesame and seaweed. Buy it by the pound for the beach."],
    ["Ono and mahi-mahi", "Mama's Fish House, Maui", "Local fish, often caught that morning, grilled or in macadamia crust."],
    ["Shave ice", "Ululani's, Maui", "Very finely shaved ice with tropical syrups, sometimes over ice cream."],
    ["Plate lunch", "Anywhere, at lunch", "Two scoops of rice, macaroni salad and a main like kalbi ribs or chicken katsu."],
    ["Kalua pig and laulau", "A lūʻau, or Helena's in Honolulu", "Pork slow-cooked in an underground oven, and pork wrapped and steamed in taro leaves."],
    ["Poi", "A lūʻau", "Pounded taro, the old Hawaiian staple. Slightly sour; eat it with kalua pig."],
    ["Loco moco", "Café 100, Hilo, where it started", "Rice, a hamburger patty, a fried egg and gravy."],
    ["Spam musubi", "Every convenience store", "Grilled Spam on rice wrapped in seaweed. Better than it sounds."],
    ["Malasadas", "Tex Drive-In, Big Island", "Portuguese doughnuts rolled in sugar, sometimes filled with custard."],
    ["Kona coffee", "The farms above Kona", "Grown only on the slopes of Hualālai and Mauna Loa."],
    ["Mai tai", "Any beach bar at sunset", "Rum, lime, orgeat and orange curaçao."]
  ];
  Object.assign(window.FOOD_IMG, { "Poke": "Poke (dish)", "Ono and mahi-mahi": "Mahi-mahi", "Shave ice": "Hawaiian shave ice", "Plate lunch": "Plate lunch", "Kalua pig and laulau": "Kālua", "Poi": "Taro",
    "Loco moco": "Loco moco", "Spam musubi": "Spam musubi", "Malasadas": "Malassada", "Kona coffee": "Kona coffee", "Mai tai": "Mai Tai" });
  window.FOOD_REGION.hawaii = "Hawaii";
})();
