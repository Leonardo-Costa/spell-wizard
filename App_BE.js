import express from 'express';
import homeRoutes from './src/backend/routes/homeRoutes';

class App_BE {
  constructor() {
    this.app_be = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app_be.use(express.urlencoded({ extended: true}));
    this.app_be.use(express.json());
  }

  routes() {
    this.app_be.use('/', homeRoutes);
  }
}

export default new App_BE().app_be;
