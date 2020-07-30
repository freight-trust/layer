var settings = {
  "url": "localhost:3000/nft/versionRecord/?currentHash={{currentHash}}&newHash={{newHash}}",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({"auth":{"sig":"{{sig}}"}}),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});