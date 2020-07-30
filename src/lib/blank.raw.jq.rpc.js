var settings = {
  "url": "http://18.216.213.235:8545",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":[""],"id":1}),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});