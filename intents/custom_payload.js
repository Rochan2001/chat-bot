const { Payload } = require("dialogflow-fulfillment");

function custom_payload(agent) {
  console.log("payload");
  var payLoadData = {
    richContent: [
      [
        {
          type: "list",
          title: "Internet Down",
          subtitle: "Press '1' for Internet is down",
          event: {
            name: "",
            languageCode: "",
            parameters: {},
          },
        },
        {
          type: "divider",
        },
        {
          type: "list",
          title: "Slow Internet",
          subtitle: "Press '2' Slow Internet",
          event: {
            name: "",
            languageCode: "",
            parameters: {},
          },
        },
        {
          type: "divider",
        },
        {
          type: "list",
          title: "Buffering problem",
          subtitle: "Press '3' for Buffering problem",
          event: {
            name: "",
            languageCode: "",
            parameters: {},
          },
        },
        {
          type: "divider",
        },
        {
          type: "list",
          title: "No connectivity",
          subtitle: "Press '4' for No connectivity",
          event: {
            name: "",
            languageCode: "",
            parameters: {},
          },
        },
      ],
    ],
  };
  agent.add(
    new Payload(agent.UNSPECIFIED, payLoadData, {
      sendAsMessage: true,
      rawPayload: true,
    })
  );
}

module.exports = custom_payload;
