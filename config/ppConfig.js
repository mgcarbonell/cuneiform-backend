<<<<<<< HEAD
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');


/*
- passport 'serializes' objects to make easier to store, converting the
- user to an identifier (id)
*/
passport.serializeUser((user, cb) => {
  cb(null, user.id)
})

/*
- passport 'deserializes' objects by taking user's serialization (id)
- and looking it up in the database
*/
passport.deserializeUser((id, cb) => {
  db.user.findByPk(id).then(user => {
    cb(null, user)
  }).catch(cb)
})

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, cb) => {
  // find user in db with their email
  db.user.findOne({
    where: {email}
  }).then(user => {
    // if no user, or incorrect pw, cb(null, false)
    if (!user || !user.password) {
      cb(null, false)
    } else {
      // log user in with cb(null, user)
      cb(null, user)
    }
  }).catch(cb)
}))

=======
const passport = require ('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models');

passport.serializeUser((user, cb) => {
  cb(null, user.id)
});

passport.deserializeUser((id, cb) => {
  db.user.findByPk(id).then(user => {
    cb(null, user);
  }).catch(cb)
});

passport.use(new LocalStrategy ({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, cb) => {
  db.user.findOne({
    where: { email } 
  }).then(user => {
    if (!user || !user.validPassword(password)) {
      cb(null, false);
    } else {
      cb(null, user);
    }
  }).catch(cb)
}));
>>>>>>> submain

module.exports = passport;