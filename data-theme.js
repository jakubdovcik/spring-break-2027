/* ------------------------------------------------------------------
   Per-option look. When an option is open (Explore page or Budget),
   the page takes on its accent colour, background tint, heading
   typeface and a short vibe line. Everything else stays neutral.
------------------------------------------------------------------- */
window.THEMES = {
  spain:      { accent: "#1F6F5C", tint: "#F2F7F4", font: "'DM Serif Display', Georgia, serif", vibe: "Pintxo bars, cider houses, green hills and surf beaches" },
  scotland:   { accent: "#5A4570", tint: "#F5F3F7", font: "'Fraunces', Georgia, serif", vibe: "Peat fires, whisky, tweed and lochs" },
  provence:   { accent: "#9C5518", tint: "#FBF6EE", font: "'Cormorant Garamond', Georgia, serif", vibe: "Ochre villages, plane-tree squares, rosé and the mistral" },
  azores:     { accent: "#2A6F80", tint: "#EFF6F7", font: "'Fraunces', Georgia, serif", vibe: "Crater lakes, hydrangea hedges and hot springs" },
  lisbon:     { accent: "#2754A0", tint: "#F1F4FA", font: "'DM Serif Display', Georgia, serif", vibe: "Blue tiles, old trams, dunes and cork oaks" },
  andalusia:  { accent: "#A8352A", tint: "#FCF3EE", font: "'Cormorant Garamond', Georgia, serif", vibe: "Orange blossom, tiled patios and late dinners" },
  lowcountry: { accent: "#4E6E4D", tint: "#F3F6F0", font: "'Fraunces', Georgia, serif", vibe: "Live oaks, porches, oysters and azaleas" },
  socal:      { accent: "#A8622A", tint: "#FBF5EC", font: "'Space Grotesk', system-ui, sans-serif", vibe: "Desert, mid-century pools, Joshua trees and the Pacific" }
};
/* two-region routes borrow a look */
window.THEME_FOR = { "loire-basque": "spain", "basque-bordeaux": "spain", "lyon-provence": "provence", "provence-basque": "provence", "edinburgh-basque": "scotland", "edinburgh-provence": "scotland" };
