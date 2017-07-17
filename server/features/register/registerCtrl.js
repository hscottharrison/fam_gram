module.exports = {

  create_user: function(req, res, next){
    req.app.get('db')
    .register_user([req.body.first_name, req.body.last_name, req.body.branch_name, req.body.username, req.body.profile_pic, req.body.email, req.body.password])
    .then(function(){
      res.status(200).json('Success!')
    })
    .catch(err=>{
      res.status(500).json(err)
      console.log('something broke brah!')
    })
  },

  getBranches: function(req, res, next){
    var instance = req.app.get('db')

    instance.get_branches()
    .then(branches =>{
      res.status(200).json(branches)
    })
    .catch(err => {
      res.status(500).json(err)

    })
  }
}
