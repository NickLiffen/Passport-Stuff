// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '150885658588539', // your App ID
        'clientSecret'  : '8c504f83ffb14f860301e51c363dcb4a', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'bhmo1kmPWyEySI9ejpezBGEha',
        'consumerSecret'    : 'NcKp5kfLfrwwd0mySWSwbLaCpDMfDj4HXKKDqyJvMlljBEGwRx',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '734495668730-63deu83o9c8727ls3ul3amh7u3jvk30q.apps.googleusercontent.com',
        'clientSecret'  : 'fHz-FPgSHAen5VqkJyQZdqGe',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};