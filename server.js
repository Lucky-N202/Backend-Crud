const express = require("express");
const cors = require("cors");
const { urlencoded } = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(cors(corsOptions));

//Parser requests of content-type application/json
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({extended: true}));

const db = require("./app/models");

const dbConfig = require("./config/db.config.js");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

var corsOptions = {
    origin: "https://localhost:4200"
};

app.get("/", (req, res) => {
    res.json({message: 'Node application' });
});

require('./app/routes/tutorial.routes')(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log('Express Server up and running on port ' + PORT);
});