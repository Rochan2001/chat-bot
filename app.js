const express = require("express");
var logger = require("morgan");

const { WebhookClient } = require("dialogflow-fulfillment");

const identify_user = require("./intents/identify_user");
const custom_payload = require("./intents/custom_payload");
const report_issue = require("./intents/report_issue");

const app = express();

app.use(logger("dev"));

app.post("/", express.json(), (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });
  // console.log(agent);
  var intentMap = new Map();
  intentMap.set("service_intent", identify_user);
  intentMap.set("service_intent - custom", custom_payload);
  intentMap.set("service_intent - custom - custom", report_issue);

  agent.handleRequest(intentMap);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
