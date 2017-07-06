module.exports = {

  get_posts: function(req, res, next){
    req.app.get('db')
    .get_posts()
    .then(posts =>{
      res.status(200).json(posts);
    })
    .catch(err =>{
      console.log('something broke dumbass')
      res.status(500).json(err)
    })
  }


}
