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
  },
  get_one: function(req, res, next){
    req.app.get('db')
    .get_posts()
    .then(posts=>{
      console.log(posts[0].post_id)
      console.log(req.body.post_id)
      // var postsArr = []
      for(var i = 0; i < posts.length; i++){
        if(posts[i].post_id == req.body.post_id){
          return res.status(200).json(posts[i]);
        }
      }
    })
    .catch(err=>{
      res.status(500).json(err);
    })
  }
}
