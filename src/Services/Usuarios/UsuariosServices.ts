import prismaClient from '../../Prisma'
import { hash } from 'bcryptjs'

interface cadUsuarios {
    nome: string,
    cpf: string,
    email: string,
    telefone: string,
    cep?: string
    rua?: string
    numero?: string
    complemento?: string
    bairro?: string
    cidade?: string
    uf?: string
    latitude?: number
    longitude?: number
    password: string
    foto?: string
}

interface AlterarUsuarios {
    id: string,
    nome: string,
    cpf: string,
    email: string
    telefone: string,
    cep: string
    rua: string
    numero: string
    complemento: string
    bairro: string
    cidade: string
    uf: string
    latitude?: number
    longitude?: number
}

interface LocalizacaoRequest {
    id_usuario: string;
    latitude: number;
    longitude: number;
}

class UsuariosServices {
    async cadastrarUsuarios({ nome, cpf, email, telefone, cep, rua, numero, complemento, bairro, cidade, uf, password, foto }: cadUsuarios) {
        const senhaCrypt = await hash(password, 8)
        await prismaClient.usuarios.create({
            data: {
                nome: nome,
                cpf: cpf,
                email: email,
                telefone: telefone,
                cep: cep,
                rua: rua,
                numero: numero,
                complemento: complemento,
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
                cpf: true,
                telefone: true,
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
                id: true,
                nome: true,
                cpf: true,
                email: true,
                telefone: true,
                cep: true,
                rua: true,
                numero: true,
                complemento: true,
                bairro: true,
                cidade: true,
                estado: true,
                senha: true,
                foto: true
            }
        })
        return resposta
    }

    async alterarDadosUsuarios({ id, nome, cpf, email, telefone, cep, rua, numero, complemento, bairro, cidade, uf }: AlterarUsuarios) {
        await prismaClient.usuarios.update({
            where: {
                id: id
            },
            data: {
                nome: nome,
                cpf: cpf,
                email: email,
                telefone: telefone,
                cep: cep,
                rua: rua,
                numero: numero,
                complemento: complemento,
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
    };

    async atualizarLocalizacao({ id_usuario, latitude, longitude }: LocalizacaoRequest) {
        const usuario = await prismaClient.usuarios.update({
            where: {
                id: id_usuario
            },
            data: {
                latitude,
                longitude
            }
        });

        return usuario;
    }
};

export { UsuariosServices };