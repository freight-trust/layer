var settings = {
  "url": "localhost:3000/nft/tokenURI/?tokenId={{tokenId}}",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "Accept": "application/json"
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});