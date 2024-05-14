import { Request, Response } from "express";
import FinishOrderService from "../../services/order/FinisheOrderService";

export default class FinisheOrderController{
    async handle(req:Request, res:Response){
        const {id_pedido} = req.body;
        const finishOrderService = new FinishOrderService();
        const pedido = finishOrderService.execute(id_pedido);
        return res.json(pedido);
    }
}