import prismaClient from "../../prisma";

export default class ListOrderFinishedService{
    async execute(data: string){
        if(!data){
            throw new Error("Informe uma data para buscar!");
        }

        let date = new Date(data);
        date.setDate(date.getDate() + 1);
        
        const pedidos = await prismaClient.pedido.findMany({
            where:{
                status: true,
                atualizado_em:{
                    gte: new Date(data),
                    lt: date
                }
            }
        });
        console.log(data);
        
        
        return pedidos ;
    }
}