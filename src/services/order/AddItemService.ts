import prismaClient from "../../prisma";

interface ItemRequest{
    quantidade: number
    id_produto:string
    id_pedido:string
}

class AddItemService{
    async execute({quantidade, id_pedido, id_produto}:ItemRequest){
        const item = await prismaClient.item.create({
            data:{
                quantidade:quantidade,
                id_pedido:id_pedido,
                id_produto:id_produto
            }
        })
        return item;
    }
}

export {AddItemService}