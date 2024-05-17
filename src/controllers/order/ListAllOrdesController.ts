import { Request, Response } from "express";
import ListAllOrdesService from "../../services/order/ListAllOrdesService";

export default class ListAllOrdesController{
    async handle(req:Request, res:Response){
        const listAllOrdesService = new ListAllOrdesService();
        const pedidos = await listAllOrdesService.execute();
        return res.json({pedidos});
    }
}