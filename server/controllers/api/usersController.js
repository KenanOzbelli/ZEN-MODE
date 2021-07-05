const usersController = require('express').Router();

const db = require('../../models');
const { JWTVerifier } = require('../../lib/passport');
const jwt = require('jsonwebtoken');

usersController.post('/', (req, res) => {
  const { email, password } = req.body;
  
  db.Users.create({ email, password })
    .then(user => res.json(user))
    .catch(err => {
      if(err.name === 'ValidationError') 
          return err = handleValidationError(err,res);
      if(err.code && err.code == 11000) 
          return err = handleDuplicateKeyError(err, res);
    });

    handleValidationError = (err, res) => {
      let errors = Object.values(err.errors).map(el => el.message);
      let fields = Object.values(err.errors).map(el => el.path);
      let code = 400;

      if(errors.length > 1){
        const formattedErrors = errors.join(' ');
        res.status(code).send({message: formattedErrors, fields: fields})
      }else{
        res.status(code).send({message: errors, fields: fields});
      }
    }
    handleDuplicateKeyError = (err, res) => {
        const field = Object.keys(err.keyValue);
        const code = 409;

        res.status(code).send({message: `An account with that ${field} already exists.`});

    }
});

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
