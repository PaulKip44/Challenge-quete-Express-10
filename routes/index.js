const moviesRouter = require('./movies');
const usersRouter = require('./users');
const authRouter = require('./auth');

const setupRoutes = (app) => {
  app.use('/api/login', authRouter);
  app.use('/api/movies', moviesRouter);
  app.use('/api/users', usersRouter);
};

module.exports = {
  setupRoutes,
};
