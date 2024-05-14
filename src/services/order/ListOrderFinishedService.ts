import prismaClient from "../../prisma";

export default class ListOrderFinishedService{
    async execute(){
        const pedidos = await prismaClient.pedido.findMany({
            where:{
                status: true,
            }
            

        })
        return pedidos;
    }
}