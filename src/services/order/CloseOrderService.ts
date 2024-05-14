import prismaClient from "../../prisma";

export default class CloseOrderService {
    async execute(id_pedido:string){
        const itemsPedido = await prismaClient.item.findMany({
            where:{
                id_pedido:id_pedido
            },
            include:{
                produto:true
            }
        })
        
        let total;
        itemsPedido.forEach(item => {
            total += (item.quantidade * parseFloat(item.produto.preco));
        });
        return {itemsPedido, total};
    }
}