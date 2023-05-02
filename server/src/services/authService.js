const User = require('../models/User');

function createUser(req, res) {
  const {
    name, email, password,
  } = req.body;

  const user = new User({
    name,
    email,
    password,
  });

  return user.save().then(() => res.status(200).json({ message: 'Success' }));
}

module.exports = {
  createUser,
};
