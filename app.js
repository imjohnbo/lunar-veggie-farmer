/********************************************
 service: lunar-veggie-farmer
 returns current stock of veggies
 - TEXT response is 200OK + json object
 - based on https://github.com/open-disco/uuid-generator
*********************************************/

// pull in modules
const express = require('express');
const app = express();
const discovery = require('./discovery.js');
const config = require('./config.js');
const veggies = require('./veggies.json');
const port = process.env.PORT || config.port;

// register this service w/ defaults
discovery.register(null, function(data, response) {
  app.get('/', function(req, res) {
    res.send(veggies);
  });
  app.listen(port);
  console.info('lunar-veggie-farmer running on port '+port+'.');
});

// set up proper discovery shutdown
process.on('SIGTERM', function () {
  discovery.unregister(null, function(response) {
    try {  
      uuidGenerator.close(function() {
      console.log('gracefully shutting down');
        process.exit(0);
      });
    } catch(e){}
  });
  setTimeout(function() {
    console.error('forcefully shutting down');
    process.exit(1);
  }, 10000);  
});
