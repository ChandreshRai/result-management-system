const jwt = require('jsonwebtoken');

require('dotenv').config();

const generateToken=async(data, expireTime)=>{

    try {

        const user = { data }; // User data to include in the token
        const secretKey = process.env.JWT_SECRET_KEY; // Replace with a strong secret key

        const token =  jwt.sign(user, secretKey, { expiresIn: expireTime });
        return token;
    } catch (error) {
        console.log(error);
    }
}

const verifyToken=(req, res, next)=>{
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    const secretKey = process.env.JWT_SECRET_KEY; // Same secret key used during token generation
  
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
            console.log('Token has expired');
          } else if (err.name === 'JsonWebTokenError') {
            console.log('Invalid token');
          } else {
            console.log('Error while verifying token:', err.message);
          }
      }
  
      req.decoded = decoded.data; // Attach decoded user data to the request object
      next(); // Move to the next middleware or route handler
    });
  }


module.exports = {generateToken, verifyToken};