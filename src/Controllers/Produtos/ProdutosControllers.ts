import { Request, Response } from 'express'
import { ProdutosServices } from '../../Services/Produtos/ProdutosServices'

class ProdutosControllers {
    async cadastrarProdutos(req: Request, res: Response) {
        const { nome, descricao, preco } = req.body
        // console.log(req.file)
        if(!req.file){
            throw new Error('Imagem com problemas')
        }else{
            const { originalname, filename: banner} = req.file
            const enviaDadosServices = new ProdutosServices()
            const resposta = await enviaDadosServices.cadastrarProdutos({
                nome,
                descricao,
                preco,
                banner
            })
            return res.json(resposta)            
        }
    }

    async consultarProdutos(req: Request, res: Response) {
        const enviarDadosServices = new ProdutosServices();
        const resposta = await enviarDadosServices.consultarProdutos();
        return res.json(resposta);
    };

    async consultarProdutosUnico(req: Request, res: Response) {
        const { id } = req.body

        const enviarDadosServices = new ProdutosServices();
        const resposta = await enviarDadosServices.consultarProdutosUnicos(id);
        return res.json(resposta);
    };
};

export { ProdutosControllers };