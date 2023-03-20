// Basic set up for express / routes, and PORT
const express = require(`express`);
const {api, html} = require(`./routes`);
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.use('/api', api);
app.use('/', html);

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
