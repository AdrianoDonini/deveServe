import prismaClient from "../../prisma";

export default class ListAllOrdesService{
    async execute(){
        const pedidos = await prismaClient.pedido.findMany({
            select:{
                id:true,
                mesa:true,
                nome:true,
                criado_em:true,
                atualizado_em:true,
                status:true,
                rascunho:true
            }
        });
        return pedidos;
    }
}