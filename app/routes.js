var User            = require('../app/models/user');
var Class            = require('../app/models/class');

// app/routes.js
module.exports = function(app, passport) {




    // HOME PAGE (with login links)
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

    //FIRST TIME LOGIN
     app.get('/validate', function(req, res) {
        res.render('validate.ejs', { message: req.flash('loginMessage') });
    });

    app.post('/validate', passport.authenticate('local-validate', {
        successRedirect : '/validateCode', // redirect to the secure profile section
        failureRedirect : '/validate', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));


    // VALIDATE CODE
    app.get('/validateCode', function(req, res) {
        res.render('validateCode.ejs', { message: req.flash('loginMessage') });
    });

    app.post('/validateCode', function(req, res, done){
        if(req.body.code == '670987856'){
            var email = req.user.local.email;
            var id    = req.user.id;

         User.findByIdAndUpdate(id, { $set: { 'local.firstTime' : true }}, function (err, user) {
            if (err) return handleError(err);
                console.log(user);
            });
         res.render('validateSuccess.ejs');
        }
        else{
            req.flash('loginMessage', 'You have entered the wrong code');
            res.redirect('/validateCode');
        }
     });



    //FIRST TIME LOGIN
     app.get('/validateSuccess', function(req, res) {
        res.render('validateSuccess.ejs');
    });

    // LOGIN
    app.get('/login', function(req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

  app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // SIGNUP
    app.get('/signup', function(req, res) {
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/validate', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // PROFILE SECTION
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // LOGOUT
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
