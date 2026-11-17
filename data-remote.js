/* ------------------------------------------------------------------
   Remote Scotland add-ons: islands, roadless glens, the far north-west.
   Loaded after data-more.js. Same formats as there.
------------------------------------------------------------------- */
(() => {
  const B = window.BUDGET, SEE = window.SEE;
  const add = (id, base, see, wx) => { B.bases[id] = Object.assign(base, { wx: { hi: wx[0], lo: wx[1], rain: wx[2], sun: wx[3], t15: wx[4], t20: wx[5], frost: wx[6], wind: wx[7], snow: wx[8], windName: "" } }); SEE[id] = see; };

  add("mull", { name: "Mull & Iona", lat: 56.6227, lng: -6.0672, f: 1.1, hotels: [["Glengorm Castle", 280, "Castle on a wild headland"], ["Tobermory Hotel", 170, "On the coloured harbour"], ["Croft B&B", 110, "Simple"]], dine: [["Café Fish, Tobermory", 150, 0]] },
    [["Iona Abbey", "sight", "Iona_Abbey", "Island abbey, a 10-min ferry from Mull."], ["Tobermory", "town", "Tobermory,_Mull", "Painted harbour houses."], ["Staffa", "nature", "Staffa", "Fingal's Cave by boat (boats start around April)."]],
    [9, 3, .58, .17, .04, 0, .25, .35, .01]);
  add("knoydart", { name: "Knoydart (boat only)", lat: 57.04, lng: -5.68, f: 1.15, hotels: [["Doune Knoydart", 300, "Full board, cabins by the sea, boat pick-up"], ["Knoydart Lodge", 180, "Lodge in Inverie"]], dine: [["The Old Forge, Inverie", 80, 0]] },
    [["Knoydart", "nature", "Knoydart", "No road in: mainland Britain's last wilderness."], ["Loch Nevis", "nature", "Loch_Nevis", "The boat in from Mallaig, seals and eagles."]],
    [9, 3, .65, .12, .03, 0, .30, .35, .03]);
  add("torridon", { name: "Torridon · Applecross", lat: 57.546, lng: -5.51, f: 1.15, hotels: [["The Torridon", 480, "Victorian lodge on a sea loch"], ["Applecross Inn rooms", 180, "Seafood inn facing Skye"], ["Torridon Inn", 160, "Climbers' inn"]], dine: [["The Torridon dining room", 300, 0], ["Applecross Inn", 120, 0]] },
    [["Bealach na Bà", "nature", "Bealach_na_Bà", "Hairpin pass to 626 m, views to Skye."], ["Liathach", "nature", "Liathach", "Torridon's giant ridge above the loch."]],
    [8, 2, .62, .15, .03, 0, .35, .35, .04]);
  add("harris", { name: "Isle of Harris", lat: 57.83, lng: -6.8, f: 1.1, hotels: [["Borve Lodge", 350, "Turf-roofed houses above the beach"], ["Harris Hotel", 200, "Tarbert, since 1903"], ["Croft B&B", 120, "Simple"]], dine: [["Scarista House", 220, 0], ["Harris Hotel dining room", 140, 0]] },
    [["Luskentyre", "nature", "Luskentyre", "White sand and turquoise water, the Caribbean in a fleece."], ["Callanish Stones", "sight", "Callanish_Stones", "5,000-year-old standing stones on Lewis."]],
    [9, 4, .58, .17, .03, 0, .20, .45, .01]);
  add("assynt", { name: "Assynt · far north-west", lat: 58.148, lng: -5.244, f: 1.1, hotels: [["Inver Lodge", 350, "Hilltop lodge over Lochinver"], ["Kylesku Hotel", 220, "Lochside inn, langoustines"]], dine: [["Kylesku Hotel", 160, 0], ["Lochinver Larder pies", 30, 0]] },
    [["Suilven", "nature", "Suilven", "Strange lone mountain over a roadless wilderness."], ["Clachtoll & Achmelvich", "nature", "Clachtoll", "White-sand coves at the end of single-track roads."]],
    [8, 2, .55, .18, .02, 0, .35, .40, .04]);
  add("orkney", { name: "Orkney", lat: 58.98, lng: -2.96, f: 1.1, hotels: [["The Foveran", 180, "Above Scapa Flow"], ["Lynnfield Hotel", 160, "Whisky-bar hotel"]], dine: [["The Foveran restaurant", 140, 0]] },
    [["Skara Brae", "sight", "Skara_Brae", "Neolithic village older than the pyramids."], ["Ring of Brodgar", "sight", "Ring_of_Brodgar", "Stone circle between two lochs."]],
    [8, 3, .55, .20, .02, 0, .20, .45, .01]);

  Object.assign(B.segs, {
    "gleneagles>mull": [["car", 3, 0, "A85 to Oban, then the CalMac ferry to Craignure (45 min). Ferry fare is in the add-on cost."]],
    "mull>knoydart": [["car", 3.5, 0, "Ferry back to Oban, north to Mallaig, then the small boat to Inverie. Book the boat ahead."]],
    "knoydart>torridon": [["car", 3.5, 0, "Boat back to Mallaig, then north past Eilean Donan."]],
    "torridon>harris": [["car", 3, 0, "Over to Skye and the Uig → Tarbert ferry (1 h 40). Book the car space early."]],
    "harris>braemar": [["car", 7, 0, "Ferry back to Skye, then a very long drive east. Better to overnight on the way."]],
    "mull>braemar": [["car", 5, 0, "Ferry to Oban, then across via Crianlarich and Pitlochry."]],
    "knoydart>braemar": [["car", 5, 0, "Boat to Mallaig, then via Fort William and Laggan."]],
    "torridon>braemar": [["car", 4, 0, "East via Inverness and the A939."]],
    "gleneagles>knoydart": [["car", 4, 0, "Via Fort William to Mallaig, then the boat to Inverie."]],
    "gleneagles>torridon": [["car", 4.5, 0, "A9 north, then west from Inverness through Achnasheen."]],
    "gleneagles>harris": [["car", 6, 0, "A long day via Skye and the Uig ferry. Best paired with Skye or Torridon."]],
    "skye>mull": [["car", 4, 0, "South via Fort William and Oban."]],
    "skye>knoydart": [["car", 1.5, 0, "Armadale → Mallaig ferry, then the boat to Inverie."]],
    "skye>torridon": [["car", 1.5, 0, "Over the Skye Bridge and up the coast."]],
    "skye>harris": [["car", 1.7, 0, "Uig → Tarbert ferry (1 h 40)."]],
    "glencoe>mull": [["car", 2, 0, "To Oban, or the Corran ferry and the back road to Lochaline."]],
    "glencoe>knoydart": [["car", 2, 0, "Road to Mallaig, then the boat."]],
    "braemar>orkney": [["car", 5.5, 0, "North via Inverness to Scrabster, then the NorthLink ferry (1 h 30). Or fly Inverness → Kirkwall."]],
    "braemar>assynt": [["car", 4.5, 0, "Via Inverness, then the empty single-track roads of the north-west."]],
    "orkney>assynt": [["car", 4, 0, "Ferry back to Scrabster, then west along the north coast."]],
    "assynt>standrews": [["car", 6, 0, "Long drive south via Inverness and the A9."]],
    "orkney>standrews": [["car", 7, 0, "Fly Kirkwall → Edinburgh instead, about 1 h 20.", "incl"]],
    "orkney>inverness": [["car", 4, 0, "Ferry to Scrabster, then the A9 south."]],
    "inverness>orkney": [["flight", 0.8, 0, "Loganair Inverness → Kirkwall, or the ferry from Scrabster.", "incl"]],
    "inverness>assynt": [["car", 2, 0, "North-west through Ullapool."]],
    "assynt>inverness": [["car", 2, 0, "Through Ullapool."]]
  });

  const X = {
    mull: ["mull", 2, "after:gleneagles", 2, 25, "Island harbours, Iona Abbey, eagles. Includes the ferry."],
    knoydart: ["knoydart", 2, "after:gleneagles", 1, 30, "Britain's last wilderness: no roads, a boat in, the remotest pub. Includes the boat."],
    torridon: ["torridon", 2, "after:gleneagles", 2, 0, "Giant mountains over sea lochs, The Torridon's whisky bar, the Bealach na Bà pass."],
    harris: ["harris", 2, "after:gleneagles", 2, 30, "Outer Hebrides: white beaches, Harris Tweed, standing stones. Includes the ferry."],
    assynt: ["assynt", 2, "after:braemar", 3, 0, "The empty far north-west: lone mountains, white coves, single-track roads."],
    orkney: ["orkney", 2, "after:braemar", 2, 120, "Neolithic villages and stone circles at the edge of the North Sea. Includes the flight or ferry."]
  };
  const it = B.itineraries.find(i => i.id === "scotland");
  ["mull", "knoydart", "torridon", "harris", "assynt", "orkney"].forEach(k => it.extras.push(X[k]));
})();
