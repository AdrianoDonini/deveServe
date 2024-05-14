import prismaClient from "../../prisma";

export default class ListOrderFinishedService{
    async execute(data: string){
        if(!data){
            throw new Error("Informe uma data para buscar!");
        }
        const pedidos = await prismaClient.pedido.findMany({
            where:{
                status: true,
                atualizado_em:{
                    gte: new Date(data)
                }
            }
        });
        console.log(data);
        
        
        return pedidos ;
    }
}