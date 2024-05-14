import { Request, Response } from "express";
import DeleteItemOrderService from "../../services/order/DeleteItemOrderService";

export default class  DeleteItemOrderController{
    async handle(req:Request, res:Response){
        const {id_pedido, id_item} = req.body;

        const deleteItemOrderService = new DeleteItemOrderService();

        const item = await deleteItemOrderService.execute({id_item, id_pedido});
        
        return res.json(item);
    }
}