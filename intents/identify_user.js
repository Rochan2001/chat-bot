const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017";
const dbName = "bot";
var user_name = "";

async function identify_user(agent) {
  const number = agent.parameters.number.toString();
  const client = new MongoClient(url);
  await client.connect({ useUnifiedTopology: true });
  const snap = await client
    .db(dbName)
    .collection("User_details")
    .findOne({ acct_num: number });
  console.log(typeof number);
  if (snap == null) {
    await agent.add("Re-Enter your account number");
  } else {
    user_name = snap.username;
    await agent.add("Welcome  " + user_name + "!!  \n How can I help you");
  }
}

module.exports = identify_user;
