// Load Data
// =============================================================
// Creates variable that links routes to "data" source
var friendsData = require("../data/friends");

// Routing
// =============================================================

module.exports = function(app) {
    // Displays a JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // A POST routes `/api/friends`. 
    // This will be used to handle incoming survey results. 
    // Also be used to handle compatibility logic.
    app.post("/api/friends", function(req, res) {
        var userInput = req.body;
        var userScore = userInput.userScore;
        var totalScore = 50;
        var diffScore = 0;
        var matchName = '';
        var matchPhoto = '';
        // Checks differences in answers.
        for (var i = 0; i < friendsData.length; i++) {
            for (var j = 0; j < userScore.length; j++) {
                diffScore += Math.abs(friendsData[i].userScore[j] - userScore[j]);
            };

            if (diffScore < totalScore) {
                totalScore = diffScore;
                matchName = friendsData[i].name;
                matchPhoto = friendsData[i].photo;
            };
        };
        friendsData.push(userInput);
    })
    res.json({ matchName: matchName, matchPhoto: matchPhoto });
};