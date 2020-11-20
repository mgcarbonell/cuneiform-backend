const db = require('../models')

const login = (req, res) => {
  res.json({ 
    user: req.user.id,
    username: req.user.username
  })
}


const register = (req, res) => {
  const { name, username, email, password } = req.body
  console.log(req.body)
  
  // validate the POSTed data - making sure we have a name, an email, a pw
  if (!name || !username || !email || !password) {
    return res.json({ message: 'Please enter a name, an username, an email, and a password' })
  }

  // make sure the user doesn't already exist
  db.user.findOne({ where: { email } })
    .then(foundUser => {
      if (foundUser) {
        return res.json({ message: "A user with that email already exists" })
      }

      // if the user doesnt exist, create and save a user to the DB
      db.user.create({
        name,
        username,
        email,
        password
      }).then(newUser => {
        console.log('New user created!')
        res.json(newUser)
      })
    })
}

const logout = (req, res) => {
  if (!req.user) {
    return res.json({ message: 'No User to log out' })
  }
  req.logout()
  res.json({ message: "User logged out" })
}

module.exports = {
  login,
  register,
  logout
}
