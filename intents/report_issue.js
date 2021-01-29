const url = "mongodb://127.0.0.1:27017";
const dbName = "bot";
var randomstring = require("randomstring");
const MongoClient = require("mongodb").MongoClient;

var user_name = "";

function report_issue(agent) {
  var issue_vals = {
    1: "Internet Down",
    2: "Slow Internet",
    3: "Buffering problem",
    4: "No connectivity",
  };
  console.log("issue");

  const intent_val = agent.parameters.issue_num;

  var val = issue_vals[intent_val];

  var trouble_ticket = randomstring.generate(7);

  MongoClient.connect(url, { useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    var dbo = db.db(dbName);

    var u_name = user_name;
    var issue_val = val;
    var status = "pending";

    let ts = Date.now();
    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    var time_date = year + "-" + month + "-" + date;

    var myobj = {
      username: u_name,
      issue: issue_val,
      status: status,
      time_date: time_date,
      trouble_ticket: trouble_ticket,
    };

    dbo.collection("Issue_details").insertOne(myobj, function (err, res) {
      if (err) throw err;
      db.close();
    });
  });
  agent.add(
    "The issue reported is: " +
      val +
      "\nThe ticket number is: " +
      trouble_ticket
  );
}

module.exports = report_issue;
