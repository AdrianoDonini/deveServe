import  { Router} from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import {isAuthenticated} from './middleware/isAuthenticated';
import {DetailUserController} from './controllers/user/detailUserController'
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

const router = Router();

router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/useinfo', isAuthenticated, new DetailUserController().handle);
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/listcategory', isAuthenticated, new ListCategoryController().handle);

export{router};


