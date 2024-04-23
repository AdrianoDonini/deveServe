import { Request, Response } from "express";
import { ListCAtegoryService } from "../../services/category/ListCategoryService";

class ListCategoryController{
    async handle(req: Request, res: Response){
        const listCategoryService = new ListCAtegoryService();
        const category = await listCategoryService.execute();
        return res.json(category);
    }
}

export {ListCategoryController};