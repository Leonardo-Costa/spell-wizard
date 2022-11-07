import dotenv from 'dotenv';

dotenv.config();

import './src/backend/database';
import express from 'express';
import homeRoutes from './src/backend/routes/homeRoutes';
import userRoutes from './src/backend/routes/userRoutes';

class AppBE {
  constructor() {
    this.app_be = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app_be.use(express.urlencoded({ extended: true }));
    this.app_be.use(express.json());
  }

  routes() {
    this.app_be.use('/', homeRoutes);
    this.app_be.use('/users', userRoutes);
  }
}

export default new AppBE().app_be;
