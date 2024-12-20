// middlewares/authMiddleware.js
const { getAccessToken } = require('../services/authService');
 
const authenticate = async (req, res, next) => {
  try {
    const token = await getAccessToken();
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send('Unauthorized');
  }
};
 
module.exports = { authenticate };