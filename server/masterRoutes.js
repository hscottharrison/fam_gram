const registerRoute = require('./features/register/registerRoute.js');
const loginRoute = require('./features/login/loginRoute.js');
const postRoute = require('./features/post/postRoute.js');
const timelineRoute = require('./features/timeline/timelineRoute.js');
const profileRoute = require('./features/profile/profileRoute.js');





module.exports = app => {
  registerRoute(app);
  loginRoute(app);
  postRoute(app);
  timelineRoute(app);
  profileRoute(app);
}
