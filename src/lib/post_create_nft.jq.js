var settings = {
  "url": "localhost:3000/nft/createRecord/?recordID={{recordID}}&owner={{owner}}&participant={{participant}}",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({"auth":{"blockArrayAuth":{"sig":"{{sig}}"},"ownerAuth":{"sig":"{{sig1}}"},"partAuth":{"sig":"{{sig2}}"}}}),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});