import prismaClient from "../../prisma";

export default class ListOrderNoFinishedService{
    async execute(data: string){
        const pedidos = await prismaClient.pedido.findMany({
            where:{
                status: false
            }
        });
        JSON.parse(JSON.stringify(pedidos));
        console.log('====================================PEDIDOS');
        console.log(pedidos);
        console.log('====================================');

        let pedidosFiltrados = [];
        pedidos.forEach(pedido => {
            let dataPedido :string
            dataPedido = pedido.criado_em.toString().split('T')[0];
            console.log("DataPedido = " + pedido.criado_em);
            if(dataPedido === data) {
                pedidosFiltrados.push(pedido);
            }
        });
        
        console.log(data);
        console.log('====================================');
        console.log(pedidosFiltrados);
        console.log('====================================');
        console.log('====================================');
        console.log(pedidos);
        console.log('====================================');
        return pedidosFiltrados;

    }
}