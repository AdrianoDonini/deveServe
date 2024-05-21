import { empty } from "@prisma/client/runtime/library";
import prismaClient from "../../prisma";

export default class ListOrderNoFinishedService{
    async execute(data: string){
        if(!data){
            throw new Error("Informe uma data para buscar!");
        }
        let date = new Date(data);
        date.setDate(date.getDate() + 1);

        const pedidos = await prismaClient.pedido.findMany({
            where:{
                status: false,
                criado_em:{
                    gte: new Date(data),
                    lt: date
                }
            }
        });

        if(pedidos[0] == null){
            throw new Error("Não temos pedidos registrados para esse dia informado!");
        }
        console.log(pedidos);
        
       
        //date = new Date((new Date().getTime())-(new Date().getTimezoneOffset()*60*1000)).toISOString().substring(0,10);
        return pedidos ;
    }
}