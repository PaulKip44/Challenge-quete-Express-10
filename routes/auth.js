const authRouter = require("express").Router();
const User = require("../models/user");

authRouter.post("/", (req, res) => {
  const { email, password } = req.body;
  User.findByEmail(email).then((user) => {
    if (!user) res.status(401).send("Email and/or password are wrong !");
    else {
      User.verifyPassword(password, user.hashedPassword).then(
        (passwordIsCorrect) => {
          if (passwordIsCorrect) res.send("hello, you are connected !");
          else res.status(401).send("Email and/or password are wrong !");
        }
      );
    }
  });
});

module.exports = authRouter;
