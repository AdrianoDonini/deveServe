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
        
        let total = 0;
        itemsPedido.forEach(item => {
            let valor = parseFloat(item.produto.preco)
            let quantidade = (item.quantidade)
            total += (quantidade * valor);
        });
        
        return {itemsPedido, total};
    }
}