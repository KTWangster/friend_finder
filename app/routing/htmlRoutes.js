// Routing
// =============================================================
var path = require("path");


module.exports = function(app) {
    // HTML GET requests.
    // Displays survey page.
    app.get("/survey", function(req, res) {
        return res.json(__dirname, "../public/survey.html");
    });

    // Leads to 'home.html' which displays the home page.
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};