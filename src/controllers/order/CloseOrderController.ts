import { Request, Response } from "express";
import CloseOrderService from "../../services/order/CloseOrderService";

export default class CloseOrderController{
    async handle(req:Request, res:Response){
        const id_pedido = req.query.id_pedido as string;
        const closeOrderService = new CloseOrderService();
        const total =  await closeOrderService.execute(id_pedido);
        return res.json(total);
    }
}