// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var weebData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/weebs", function(req, res) {
    res.json(weebData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/weebs", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware


    var weebMatches = [];
    for (var i = 0; i < weebData.length; i++) {
      var points = 0;
      for (var z = 0; z < weebData[i].weebScores.length; z++) {
        if (req.body.weebScores[z] == weebData[i].weebScores[z]) {
          points++;
        }
      }

      weebMatches.push({ name: weebData[i].weebName, friendPoints: points });
    }

    weebMatches.sort(function(a, b) {
      return b.friendPoints - a.friendPoints;
    });

    weebMatches = weebMatches.slice(0, 10);
    console.log(weebMatches);

    weebData.push(req.body);
    res.json(weebMatches);
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
