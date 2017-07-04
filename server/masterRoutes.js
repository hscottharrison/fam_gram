const registerRoute = require('./features/register/registerRoute.js');
const loginRoute = require('./features/login/loginRoute.js');





module.exports = app => {
  registerRoute(app);
  loginRoute(app);
}
