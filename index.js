// Configuration variables
var config = require('./config.json');

// Require node modules
var twilio = require('twilio')(config.account_sid, config.auth_token);

// Require hardware
var tessel = require('tessel');
var rfidLib = require('rfid-pn532');
var rfid = rfidLib.use(tessel.port['A']);

rfid.on('ready', function () {
  tessel.led[1].output(1);
  console.log('RFID reader ready and waiting.')
  rfid.on('data', function (cardData) {
    console.log(cardData.uid);
    sendText( config.num_to_call, config.twilio_num, cardData.uid + ' says hi');
  });
});

rfid.on('error', function(err){
  console.log('Error:', err);
});
 
function sendText(to,from,msg) {
  console.log('Sending text...');
  twilio.sendMessage({
    to: to,
    from: from,
    body: msg
  }, function(error, message) {
    if (!error) {
      console.log('Success! The SID for this SMS message is:');
      console.log(message.sid);
      console.log('Message sent on:');
      console.log(message.dateCreated);
    } else {
      console.log('Oops! There was an error.', error);
    }
  });
}
