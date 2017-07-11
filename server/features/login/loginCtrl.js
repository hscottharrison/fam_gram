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
  },
  login: function(req, res, next){
    console.log(req.body)
    req.app.get('db')
    .login([req.body.user_id])
    .then(succ=>{
      return res.status(200).json(succ) })
    .catch(err=>{
      return res.status(200).json(err) })
   },
   whoLogin: function(req, res, next){
     req.app.get('db')
     .who_login()
     .then(users =>{
       for(var i = 0; i < users.length; i++){
         if(users[i].user_id == req.body.id){
           return res.status(200).json({whologgedin: true})
         }
       }
       return res.status(200).json({whologgedin: false})
     })
     .catch(err=>{
       return res.status(500).json(err)
     })
   },
   logout: function(req, res, next){
     var id = parseInt(req.params.id)
     console.log(id)
     req.app.get('db')
     .logout([id])
     .then(succ=>{
       return res.status(200).json(succ)
     })
     .catch(err=>{
       return res.status(500).json(err)
     })
   }
}
