var http = require('follow-redirects').http;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': '18.216.213.235:8545',
  'port': 8545,
  'path': '/',
  'headers': {
    'Content-Type': 'application/json'
  },
  'maxRedirects': 20
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = JSON.stringify({"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":["${TX_PARAMS}"],"id":1});

req.write(postData);

req.setTimeout(600, function() {
  req.abort();
});

req.end();