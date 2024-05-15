import { Request, Response } from "express";
import ListOrderFinishedService from "../../services/order/ListOrderFinishedService";

export default class ListOrderFinishedController {
    async handle(req:Request, res:Response){
        const data = req.query.dataPedido as string;
        const listOrderFinishedService = new ListOrderFinishedService();

        const pedidos = await listOrderFinishedService.execute(data);
        
        return res.json({pedidos}    
    );}
}