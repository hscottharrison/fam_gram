const registerRoute = require('./features/register/registerRoute.js');






module.exports = app => {
  registerRoute(app);
}
