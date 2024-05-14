import prismaClient from "../../prisma";

interface ItemRequest {
    id_item:string
    id_pedido:string
}

export default class DeleteItemOrderService {
    async execute({id_item, id_pedido}:ItemRequest){
        const pedido = await prismaClient.pedido.findFirst({
            where:{
                id:id_pedido
            }
        })
        if (!pedido.rascunho) {
            throw new Error ("O Item não pode ser removido. O pedido ja está na cozinha!");
        }
        const item = await prismaClient.item.delete({
            where:{
                id:id_item
            }
        })
        return item;
    }
    
    
}