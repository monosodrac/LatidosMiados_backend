import prismaClient from '../../Prisma'
import { hash } from 'bcryptjs'

interface cadUsuarios {
    nome: string,
    email: string,
    cep: string
    rua: string
    numero: string
    bairro: string
    cidade: string
    uf: string
    password: string
    foto: string
}

interface AlterarUsuarios {
    id: string,
    nome: string,
    email: string
    cep: string
    rua: string
    numero: string
    bairro: string
    cidade: string
    uf: string
}

class UsuariosServices {
    async cadastrarUsuarios({ nome, email, cep, rua, numero, bairro, cidade, uf, password, foto }: cadUsuarios) {

        const senhaCrypt = await hash(password, 8)
        await prismaClient.usuarios.create({
            data: {
                nome: nome,
                email: email,
                cep: cep,
                rua: rua,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                estado: uf,
                senha: senhaCrypt,
                foto: foto
            }
        })
        return ({ dados: 'Cadastro Efetuado Com Sucesso' })
    }

    async consultarUsuarios() {
        const resposta = await prismaClient.usuarios.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
                cep: true,
                rua: true,
                numero: true,
                bairro: true,
                cidade: true,
                estado: true,
                foto: true
            }
        })
        return resposta
    }

    async consultarUsuariosUnico(id: string) {
        const resposta = await prismaClient.usuarios.findFirst({
            where: {
                id: id
            },
            select: {
                nome: true,
                email: true,
                cep: true,
                rua: true,
                numero: true,
                bairro: true,
                cidade: true,
                estado: true,
                senha: true,
                foto: true
            }
        })
        return resposta
    }

    async alterarDadosUsuarios({ id, nome, email, cep, rua, numero, bairro, cidade, uf }: AlterarUsuarios) {
        await prismaClient.usuarios.update({
            where: {
                id: id
            },
            data: {
                nome: nome,
                email: email,
                cep: cep,
                rua: rua,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                estado: uf,
            }
        })
        return ({ dados: 'Cadastro Alterado Com Sucesso' })
    }

    async apagarUsuarios(id: string) {
        await prismaClient.usuarios.delete({
            where: {
                id: id
            }
        })
        return ({ dados: 'Registro Apagado com Sucesso' })
    }
}

export { UsuariosServices }