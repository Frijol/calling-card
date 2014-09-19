Calling Card
============

Tap an RFID card on a Tessel RFID reader to send a text over Twilio to any phone.

## You need
* [Tessel](tessel.io) + [RFID Module](tessel.io/modules#module-rfid) + RFID card (one comes with the module)
* A phone (to receive texts)

## Setting up
1. Set up your Twilio account ([it's free!](https://www.twilio.com/try-twilio))
1. [Install your Tessel](start.tessel.io)
1. Clone this repo
1. Set up your config.json file based on the example-config.json file
1. Run `npm install` to install Node dependencies
1. [Connect Tessel to the internet](http://start.tessel.io/wifi)
1. Run the code on Tessel: `tessel run index.js`
1. When the console logs that the reader is ready, tap a card to receive a text!

## Future work
This is a work in progress; it would be much more useful to create a lookup for different UIDs, and associate specific RFID cards with specific people.

## Use Cases
* Someone came to visit, but you weren't there (think Victorian calling cards)
* Very fast check-ins at locations with associated RFID cards (e.g. if you could register a transit card with Foursquare to check in at locations)
* Tool checkout– tap to text someone that you're borrowing their thing
