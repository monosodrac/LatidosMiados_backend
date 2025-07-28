import { Request, Response } from 'express'
import { PetServices } from '../../Services/Pet/PetServices'

class PetControllers {
    async cadastrarPet(req: Request, res: Response) {
        const { nome } = req.body
        const enviarDadosServices = new PetServices()
        const resposta = await enviarDadosServices.cadastrarPet({
            nome
        })
        return res.json(resposta)
    }

    async listarPet(req: Request, res: Response) {
        const enviarDadosServices = new PetServices()
        const resposta = await enviarDadosServices.listarPet();
        return res.json(resposta);
    };
}

export { PetControllers }