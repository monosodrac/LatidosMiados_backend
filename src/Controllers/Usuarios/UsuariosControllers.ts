import { Request, Response } from 'express'

import { UsuariosServices } from '../../Services/Usuarios/UsuariosServices'

class UsuariosControllers {
    async cadastrarUsuarios(req: Request, res: Response) {
        const { nome, email, telefone, cep, rua, numero, bairro, cidade, uf, password } = req.body;
        const foto = req.file ? req.file.filename : null;
        const enviarDadosServices = new UsuariosServices()
        const resposta = await enviarDadosServices.cadastrarUsuarios({
            foto,
            nome,
            email,
            telefone,
            cep,
            rua,
            numero,
            bairro,
            cidade,
            uf,
            password,
        })
        return res.json(resposta)
    }

    async consultarUsuarios(req: Request, res: Response) {
        const enviarDadosServices = new UsuariosServices()
        const resposta = await enviarDadosServices.consultarUsuarios()
        return res.json(resposta)
    }

    async consultarUsuariosUnico(req: Request, res: Response) {
        const { id } = req.body
        const enviarDadosServices = new UsuariosServices()
        const resposta = await enviarDadosServices.consultarUsuariosUnico(id)
        return res.json(resposta)
    }

    async alterarDadosUsuarios(req: Request, res: Response) {
        const { id, nome, email, cep, rua, numero, complemento, bairro, cidade, uf } = req.body
        const enviarDadosServices = new UsuariosServices()
        const resposta = await enviarDadosServices.alterarDadosUsuarios({
            id,
            nome,
            email,
            cep,
            rua,
            complemento,
            numero,
            bairro,
            cidade,
            uf,
        })
        return res.json(resposta)
    }

    async apagarUsuarios(req: Request, res: Response) {
        const { id } = req.params
        const enviarDadosServices = new UsuariosServices()
        const resposta = await enviarDadosServices.apagarUsuarios(id)
        return res.json(resposta)
    }
}

export { UsuariosControllers }