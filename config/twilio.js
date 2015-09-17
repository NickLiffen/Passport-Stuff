var twilio = require('twilio')('ACCOUNT_SID', 'AUTH_TOKEN');

var exports = module.exports = {};

	exports.sendMessage = function(to, body){

			//Send an SMS text message
			twilio.sendMessage({

			    to: to, // Any number Twilio can deliver to
			    from: '+14506667788', // A number you bought from Twilio and can use for outbound communication
			    body: body // body of the SMS message

			}, function(err, responseData) { //this function is executed when a response is received from Twilio

			    if (!err) { 
			        return responseData.from; // outputs "+14506667788"
			        return responseData.body; // outputs "word to your mother."
			    }
			});

	};




