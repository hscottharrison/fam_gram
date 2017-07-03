const registerCtrl = require('./registerCtrl')


module.exports = app => {
  app.post('/api/user', registerCtrl.create_user)
  app.get('/api/branches', registerCtrl.getBranches)
}
