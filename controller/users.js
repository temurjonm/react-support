const User = require("../models/users");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
};

async function signup(req, res) {
  console.log("Hello");
  console.log(req.body);
  try {
    const user = await User.create(req.body);
    console.log(user);
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    console.log("this is err", err);
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log("this is user",user);
    if (!user) return res.status(401).json({ err: "bad credentials" });
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
        console.log("this is res" ,res)
      } else {
        return res.status(401).json({ err: "bad credentials" });
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

function createJWT(user) {
  return jwt.sign({ user }, SECRET, { expiresIn: "24h" });
}
