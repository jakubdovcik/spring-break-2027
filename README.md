# spring/27

**Open the site: https://jakubdovcik.github.io/spring-break-2027/**

A small dashboard for choosing a spring-break trip (12–21 March 2027): route maps, stays, Michelin tables, weather odds, transport and flights for each option, plus a budget builder.

- Trip content lives in the `data*.js` files: `data.js` (options), `data-budget.js` (prices and routes), `data-see.js` (sights), `data-transport.js` (legs between stops), `data-weather.js` and `data-more.js` (weather and extra stops), `data-theme.js` (colours and fonts).
- `data-plan.js`: booking deadlines, date clashes, entry rules, plan B, door-to-door times
- `data-seaside.js`: seaside hotels and coastal stops in Scotland
- Ratings, notes and budget choices save in your own browser. **Notes → Copy share link** sends them to someone else.
- Static site: Leaflet + Esri light-gray tiles, with photos pulled live from Wikipedia.
