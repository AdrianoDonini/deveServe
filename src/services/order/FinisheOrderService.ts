import prismaClient from "../../prisma";

export default class FinisheOrderService {
    async execute(id_pedido: string){
        const order = await prismaClient.pedido.update({
            where:{
                id:id_pedido
            },
            data:{
                status: true
            }
        })
        return order;
    }
}