import {PrismaClient} from '@prisma/client'
import prismaClient from '../../prisma'
import {hash} from 'bcryptjs'


interface UserRequest{
    nome: string
    email: string
    senha: string
}

class CreateUserService{
    async execute({nome, email, senha}: UserRequest){
        if (!email) {
            throw new Error("E-mail não enviado")
        }
        const UserAreadyExists = await prismaClient.usuario.findFirst(
            {
                where:{
                    email:email
                }
            }
        )
        if(UserAreadyExists){
            throw new Error('Email já utilizado')
        }
        const senhaHash = await hash(senha,8);
        const user = await prismaClient.usuario.create({
            data:{
                nome: nome,
                email : email,
                senha : senhaHash
            },
            select:{
                id:true,
                nome:true,
                email:true
            }
        })
        return user;
    }
    }


export {CreateUserService}