var settings = {
  "url": "http://127.0.0.1:8545",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({"jsonrpc":"2.0","method":"debug_traceTransaction","params":["0x2cc6c94c21685b7e0f8ddabf277a5ccf98db157c62619cde8baea696a74ed18e",{"disableStorage":true}],"id":1}),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});