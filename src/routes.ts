import  { Router} from 'express';
import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import {isAuthenticated} from './middleware/isAuthenticated';
import {DetailUserController} from './controllers/user/detailUserController'
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import  ListCategoryController  from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/product/createProductController';
import { ListByCategoryController } from './controllers/product/ListByCategoryController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { DeleteOrderController } from './controllers/order/DeleteOrderController';
import AddItemController from './controllers/order/AddItemController';
import SendOrderController from './controllers/order/SendOrderController';

import upLoadConfig from './config/multer';
const upLoad = multer(upLoadConfig.upload('./tmp'));

const router = Router();

router.post('/user', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/useinfo', isAuthenticated, new DetailUserController().handle);
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.get('/listcategory', isAuthenticated, new ListCategoryController().handle);
router.post('/product', isAuthenticated, upLoad.single('file'), new CreateProductController().handle);
router.get('/listByCategory', isAuthenticated, new ListByCategoryController().handle);
router.post('/createOrder', isAuthenticated, new CreateOrderController().handle);
router.delete('/deleteOrder', isAuthenticated, new DeleteOrderController().handle);
router.post('/addItem', isAuthenticated, new AddItemController().handle);
router.put('/sendOrder', isAuthenticated, new SendOrderController().handle);

export{router};


