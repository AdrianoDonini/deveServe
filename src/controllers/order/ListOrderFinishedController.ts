import { Request, Response } from "express";
import ListOrderFinishedService from "../../services/order/ListOrderFinishedService";

export default class ListOrderFinishedController {
    async handle(req:Request, res:Response){
        const listOrderFinishedService = new ListOrderFinishedService();

        const pedidos = await listOrderFinishedService.execute();

        return res.json(pedidos);
    }
}