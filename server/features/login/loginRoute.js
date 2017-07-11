const loginCtrl = require('./loginCtrl.js');


module.exports = app => {
  app.post('/api/login', loginCtrl.getUsers);
  app.post('/api/loggedin', loginCtrl.login);
  app.post('/api/whologgedin', loginCtrl.whoLogin);
  app.delete('/api/login/:id', loginCtrl.logout);
}
