import prismaClient from "../../prisma";
class ListCAtegoryService{
    async execute(){
        const category = await prismaClient.categoria.findMany(
            {
                select:{
                    id:true,
                    nome:true,
                }
            }
        )
        return category;
    }
}
export {ListCAtegoryService};