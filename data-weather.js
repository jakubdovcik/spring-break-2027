/* ------------------------------------------------------------------
   Mid-March weather odds per option, estimated from long-term March
   climate averages (roughly the 1991–2020 normals) for the main stops.
   These are climate odds, not a forecast.

   Daily odds (chance on any given day of the trip):
     rain   at least 1 mm of rain
     sun    mostly sunny
     t15    afternoon high of 15°C / 59°F or more
     t20    afternoon high of 20°C / 68°F or more
     frost  frost overnight somewhere on the route
     wind   strong-wind day (gusts above ~50 km/h / 30 mph)
   Trip-level:
     snow   snow disrupting at least one drive or visit during the trip
------------------------------------------------------------------- */
window.WX = {
  spain: { rain: .40, sun: .30, t15: .55, t20: .15, frost: .05, wind: .15, snow: .10, windName: "Atlantic gales",
    note: "Rain comes in spells off the Atlantic: plan on a few wet days, usually with bright breaks between them. A warm southerly wind (the hego haizea) sometimes brings 20°C+ days. The snow risk is only on the Picos mountain roads." },
  scotland: { rain: .45, sun: .25, t15: .05, t20: .01, frost: .40, wind: .25, snow: .35, windName: "Atlantic gales",
    note: "Four seasons in a day. Edinburgh rarely sees lasting snow, but the Cairngorm passes (A93, A939) close a few days most Marches. Clear days are often the coldest." },
  provence: { rain: .18, sun: .60, t15: .60, t20: .15, frost: .15, wind: .30, snow: .02, windName: "Mistral",
    note: "The sunniest of the European options. The catch is the mistral, which blows about one day in three: blue skies, but cold and gusty. Inland Luberon nights can freeze." },
  azores: { rain: .50, sun: .25, t15: .90, t20: .10, frost: 0, wind: .25, snow: 0, windName: "Atlantic gales",
    note: "Mild and very changeable: sun, shower and mist in the same hour. Rarely a full washout. Crater-lake views depend on the cloud lifting." },
  lisbon: { rain: .25, sun: .50, t15: .95, t20: .40, frost: .02, wind: .15, snow: 0, windName: "Atlantic wind",
    note: "Spring-like. Wet spells happen, but they rarely last more than a couple of days. Comporta's beaches can be breezy." },
  andalusia: { rain: .20, sun: .65, t15: .98, t20: .70, frost: .05, wind: .10, snow: .03, windName: "Levante",
    note: "Warmest and sunniest in Europe. Granada nights are cold (frost about 1 night in 6 there), and the Sierra Nevada is snow-capped." },
  lowcountry: { rain: .25, sun: .55, t15: .85, t20: .60, frost: .08, wind: .10, snow: 0, windName: "Thunderstorm",
    note: "Mostly warm and bright. Rain comes as short afternoon thunderstorms rather than grey days." },
  socal: { rain: .10, sun: .80, t15: .95, t20: .75, frost: .08, wind: .15, snow: .05, windName: "Desert wind",
    note: "Very dry in the desert (rain about 1 day in 30) and a little more changeable on the coast. Joshua Tree nights can drop near freezing. Snow only on the high passes and the Palm Springs tram summit." }
};
