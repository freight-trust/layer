const axios = require('axios');
let data = JSON.stringify({"auth":{"sig":"{{sig}}"}});

let config = {
  method: 'post',
  url: 'localhost:3000/proxy/changeController/?newController={{newController}}',
  headers: { 
    'Content-Type': 'application/json'
  },
  timeout: 600,
  maxRedirects: 0,
  data : data
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
