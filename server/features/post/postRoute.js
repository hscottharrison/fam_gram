const postCtrl = require('./postCtrl');

module.exports = app => {
  app.post('/api/posts', postCtrl.create_post);
}
