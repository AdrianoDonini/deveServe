import { Request, Response } from "express";
import ListOrderNoFinishedService from "../../services/order/ListOrderNoFinishedService";

export default class ListOrderNoFinishedController {
    async handle(req:Request, res:Response){
        const dataPedido = req.query.dataPedido as string
        const listOrderNoFinishedService = new ListOrderNoFinishedService();

        const pedidos = await listOrderNoFinishedService.execute(dataPedido);

        return res.json({pedidos});
    }
}