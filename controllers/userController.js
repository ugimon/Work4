const express = require('express');
const Users = require('../models/users');
const Views = '../views/'

module.exports = {
  doGetUser: function (req, res, next) {
    Users.getUser(id).then((result) => {
      res.render(Views + 'index.ejs',{users: result});
    });
  }
}