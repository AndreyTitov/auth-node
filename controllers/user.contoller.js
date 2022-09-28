const User = require('../models/User.model');
const Role = require('../models/Role.model');

class UserController {
  async registration(req, res, next) {
    try {

    } catch (e) {
      console.log(e);
    }
  }

  async login(req, res, next) {
    try {

    } catch (e) {
      console.log(e);
    }
  }

  async logout(req, res, next) {
    try {

    } catch (e) {
      console.log(e);
    }
  }

  async activate(req, res, next) {
    try {

    } catch (e) {
      console.log(e);
    }
  }

  async refresh(req, res, next) {
    try {

    } catch (e) {
      console.log(e);
    }
  }

  async users(req, res, next) {
    try {
      const userRole = new Role();
      const adminRole = new Role({value: 'ADMIN'});
      await userRole.save();
      await adminRole.save();
      res.json(['1234', 'Hola']);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new UserController();
