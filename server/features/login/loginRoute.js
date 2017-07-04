const loginCtrl = require('./loginCtrl.js');


module.exports = app => {
  app.post('/api/login', loginCtrl.getUsers);
}
