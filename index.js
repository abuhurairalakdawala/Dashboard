const https = require('https');

https.get('https://jsonplaceholder.typicode.com/todos/1', (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    console.log(chunk)
  });

});
