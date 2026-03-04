import { Router, Request, Response } from "express";
import multer from "multer";
import uploadConfig from "./config/Multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { RemoveUserController } from "./controllers/user/RemoveUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { EditCategoryController } from "./controllers/category/EditCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { RemoveCategoryController } from "./controllers/category/RemoveCategoryController";
import { CreateProductController } from "./controllers/Procut/CreateProductController";
import { EditProcutController } from "./controllers/Procut/EditProductController";
import { ListProductByCategoryController } from "./controllers/Procut/ListProductByCategoryController";
import { RemoveProductController } from "./controllers/Procut/RemoveProductController";
import { ListAllProductsController } from "./controllers/Procut/ListAllProductsController";
import { SaleProductController } from "./controllers/Sales/SaleProductController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

router.get("/test", (request: Request, response: Response) => {
    return response.json({ ok: true });
});

//User Routes
router.post('/user', new CreateUserController().handle);  //Cria uma instancia do CreateUserController
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);
router.delete('/user/remove', new RemoveUserController().handle);

//Category Routes
router.post('/category', isAuthenticated, new CreateCategoryController().handle);
router.put("/category/edit", isAuthenticated, new EditCategoryController().handle);
router.get("/category/all", isAuthenticated, new ListCategoryController().handle);
router.delete("/category/remove", isAuthenticated, new RemoveCategoryController().handle);

//Product Routes
router.post("/product", isAuthenticated, upload.single("file"), new CreateProductController().handle);
router.put("/product/edit", isAuthenticated, upload.single("file"), new EditProcutController().handle);
router.get("/product", isAuthenticated, new ListProductByCategoryController().hanlde);
router.delete("/product/remove", isAuthenticated, new RemoveProductController().handle);
router.get("/product/all", isAuthenticated, new ListAllProductsController().handle);

//Sales Routes
router.put("/sale/product", isAuthenticated, new SaleProductController().handle);

export { router };

