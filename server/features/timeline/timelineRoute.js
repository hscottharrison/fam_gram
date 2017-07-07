const timelineCtrl = require('./timelineCtrl.js');

module.exports = app =>{
  app.get('/api/posts', timelineCtrl.get_posts)
  app.post('/api/comments', timelineCtrl.add_comment)
  app.get('/api/comments', timelineCtrl.get_comment)
  app.post('/api/likes', timelineCtrl.update_likes)
}
