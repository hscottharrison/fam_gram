const profileCtrl = require('./profileCtrl.js')



module.exports = app =>{
  app.get('/api/users', profileCtrl.get_users)
  app.put('/api/users', profileCtrl.update_profile)
}
