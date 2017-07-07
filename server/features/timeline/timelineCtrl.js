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
  },

  add_comment: function(req, res, next){
    req.app.get('db')
    .add_comment([req.body.text, req.body.postId, req.body.userId])
    .then(succ =>{
      res.status(200).json(succ);
    })
    .catch(err =>{
      res.status(500).json(err);
    })
  },

  get_comment: function(req, res, next){
    req.app.get('db')
    .get_comments()
    .then(comments =>{
      // console.log(comments)
      res.status(200).json(comments);
    })
    .catch(err => {
      // console.log('something broke dumbass')
      res.status(500).json(err);
    })
  },

  update_likes: function(req, res, next){
    req.app.get('db')
    .update_likes([req.body.like_count, req.body.post_id])
    .then(likes =>{
      res.status(200).json(likes);
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  }


}
