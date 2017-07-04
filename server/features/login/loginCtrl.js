module.exports = {
  getUsers: function(req, res, next){
    var username = req.body.username
    var password = req.body.password
    const instance = req.app.get('db')
    instance.get_users()
    .then(users =>{
      users.forEach(user =>{
        if(username == user.username && password == user.user_password){
          return res.status(200).json({userFound: true, user})
        }
      })
      return res.status(200).json({userFound: false})
    })
    .catch(err =>{
      res.status(500).json(err);
    })
  }
}
