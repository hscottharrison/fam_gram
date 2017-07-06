module.exports = {

  create_post: function(req, res, next){
    req.app.get('db')
    .create_post([req.body.id, req.body.url, req.body.caption])
    .then(function(){
      res.status(200).json('Success!')
    })
    .catch(err =>{
      res.status(500).json(err)
      console.log('something broke dumbass')
    })
  }
}
