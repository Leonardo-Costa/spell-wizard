import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);

export default router;

/*
index -> list users -> GET
store/create -> create new user -> POST
delete -> erase one user -> DELETE
show -> show one user -> GET
update -> update one user -> PATCH or PUT
*/
