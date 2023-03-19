// Basic set up for express / routes, and PORT
const express = require(`express`);
const routes = require(`./routes`);
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
