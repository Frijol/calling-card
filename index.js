// Require configuration variables
var config = require('./config.json');

// Require node modules
var twilio = require('twilio')(config.account_sid, config.auth_token);

// Require hardware
var tessel = require('tessel');
var rfidLib = require('rfid-pn532');
var rfid = rfidLib.use(tessel.port['A']);

rfid.on('ready', function () {
  console.log('RFID reader ready and waiting.')
  rfid.on('data', function (cardData) {
    console.log(cardData.uid);
  });
});
