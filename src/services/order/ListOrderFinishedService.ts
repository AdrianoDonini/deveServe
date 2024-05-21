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

        if(pedidos[0] == null){
            throw new Error("Não temos pedidos registrados para esse dia informado!");
        }
        console.log(data);
        
        
        return pedidos ;
    }
}