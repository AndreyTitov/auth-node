const jwt = require('jsonwebtoken');
const tokenModel = require('../models/Token.model');

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, { expiresIn: '30m' });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, { expiresIn: '30d' });
    return {
      accessToken,
      refreshToken,
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await tokenModel.findOne(userId);
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await tokenModel.create({ user: userId, refreshToken });
    return token;
  }
}

module.exports = new TokenService();
