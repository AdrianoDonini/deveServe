import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

export default class AddItemController{
    async handle(req:Request, res:Response){
        const {quantidade, id_pedido, id_produto} = req.body;

        const addItemService = new AddItemService();

        const item = await addItemService.execute({quantidade,id_pedido,id_produto})

        return res.json(item);
    }
}
