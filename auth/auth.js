const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
    const expired = Date.now() >= decoded.exp * 1000
    
    console.log("Date.now()" + Date.now());
    console.log(decoded.exp * 1000);
    console.log("Venceu ? " + expired); 

    if(expired){
      return res.status(403).send("Token expired");
    }

  } catch (err) {
    console.error("Erro " + err);
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
