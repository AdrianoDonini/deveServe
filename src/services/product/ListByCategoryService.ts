import prismaClient from "../../prisma";
interface ProductRequest{
    id_categoria: string;
}

class ListByCategoryService{
    async execute({id_categoria}:ProductRequest){
        const product = await prismaClient.produto.findMany(
            {
                where:{
                    idCategoria:id_categoria
                }
            }
        )
        return product;
    }
}

export {ListByCategoryService};