import prismaClient from "../../prisma";

interface OrderRequest{
    id_pedido:string;
}
class DeleteOrderService{
    async execute({id_pedido}:OrderRequest){
        const order = await prismaClient.pedido.delete({
            where:{
                id:id_pedido
            }
        })
        return order;
    }
}

export {DeleteOrderService};