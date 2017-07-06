const timelineCtrl = require('./timelineCtrl.js');

module.exports = app =>{
  app.get('/api/posts', timelineCtrl.get_posts)
}
