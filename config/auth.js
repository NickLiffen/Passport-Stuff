// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '150885658588539', // your App ID
        'clientSecret'  : '8c504f83ffb14f860301e51c363dcb4a', // your App Secret
        'callbackURL'   : 'https://passportlocal.herokuapp.com/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'bhmo1kmPWyEySI9ejpezBGEha',
        'consumerSecret'    : 'NcKp5kfLfrwwd0mySWSwbLaCpDMfDj4HXKKDqyJvMlljBEGwRx',
        'callbackURL'       : 'https://passportlocal.herokuapp.com/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '734495668730-63deu83o9c8727ls3ul3amh7u3jvk30q.apps.googleusercontent.com',
        'clientSecret'  : 'fHz-FPgSHAen5VqkJyQZdqGe',
        'callbackURL'   : 'https://passportlocal.herokuapp.com/auth/google/callback'
    }

};