module.exports= {
  get_users: function(req, res, next){
    req.app.get('db')
    .get_users()
    .then(users =>{
      res.status(200).json(users)
    })
    .catch(err=>{
      res.status(500).json(err)
    })
  },
  update_profile: function(req, res, next){
    req.app.get('db')
    .update_profile([req.body.url, req.body.id])
    .then(succ=>{res.status(200).json(succ)})
    .catch(err=>{res.status(500).json(err)})
  }
}
