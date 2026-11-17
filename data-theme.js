/* ------------------------------------------------------------------
   Per-option look. When an option is open (Explore page or Budget),
   the page takes on its accent colour, background tint, heading
   typeface and a short vibe line. Everything else stays neutral.
------------------------------------------------------------------- */
window.THEMES = {
  spain:      { accent: "#1F6F5C", tint: "#F2F7F4", font: "'DM Serif Display', Georgia, serif", vibe: "Green Atlantic · pintxo bars · cider poured from a height · surf and stone villages" },
  scotland:   { accent: "#5A4570", tint: "#F5F3F7", font: "'Fraunces', Georgia, serif", vibe: "Heather and slate · peat fires · tweed · lochs in the mist" },
  provence:   { accent: "#9C5518", tint: "#FBF6EE", font: "'Cormorant Garamond', Georgia, serif", vibe: "Ochre and lavender · plane-tree squares · rosé at noon · the mistral" },
  azores:     { accent: "#2A6F80", tint: "#EFF6F7", font: "'Fraunces', Georgia, serif", vibe: "Volcanic green · hydrangea lanes · hot springs in the rain" },
  lisbon:     { accent: "#2754A0", tint: "#F1F4FA", font: "'DM Serif Display', Georgia, serif", vibe: "Azulejo blue · trams and miradouros · dunes and cork oaks" },
  andalusia:  { accent: "#A8352A", tint: "#FCF3EE", font: "'Cormorant Garamond', Georgia, serif", vibe: "Terracotta and orange blossom · tiled patios · late, slow evenings" },
  lowcountry: { accent: "#4E6E4D", tint: "#F3F6F0", font: "'Fraunces', Georgia, serif", vibe: "Live oaks and Spanish moss · porch swings · oysters and azaleas" },
  socal:      { accent: "#A8622A", tint: "#FBF5EC", font: "'Space Grotesk', system-ui, sans-serif", vibe: "Desert light · mid-century pools · Joshua trees · Pacific fog" }
};
/* two-region routes borrow a look */
window.THEME_FOR = { "loire-basque": "spain", "basque-bordeaux": "spain", "lyon-provence": "provence", "provence-basque": "provence", "edinburgh-basque": "scotland", "edinburgh-provence": "scotland" };
