const usersController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

usersController.post('/', (req, res) => {
  const { email, password, quote } = req.body;

  db.Users.create({ email, password, quote })
    .then(user => res.json(user))
    .catch(err => res.json(err));
});

usersController.put('/update', (req, res) => {
const { quote } = req.body;
db.Users.updateOne({$push:{ quote}})
  .then(user => res.json(user))
  .catch(err => res.json(err));
})

usersController.get('/me', JWTVerifier, (req, res) => {
  res.json(req.user);
});

usersController.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.Users.findOne({ email })
    .then(user => {
      if (!user || !user.comparePassword(password)) {
        return res.status(401).send("Unauthorized");
      }

      res.json({
        token: jwt.sign({ sub: user.id }, process.env.JWT_SECRET),
        user
      });
    });
});

module.exports = usersController;
