// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Express Configurationn
// =============================================================

// Sets up the "express" server
var app = express();

// Sets up initial port.
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extend: true }));
app.use(bodyParser.json());

// Router
// =============================================================
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

// Listener
// =============================================================
app.listen(PORT, function(err) {
    if (err) throw err;
    console.log("App listening on PORT: " + PORT);
});