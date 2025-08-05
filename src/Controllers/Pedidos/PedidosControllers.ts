import { Request, Response } from 'express'
import { PedidosServices } from '../../Services/Pedidos/PedidosServices'

class PedidosControllers {
    async criarPedidos(req: Request, res: Response) {
        const { id_usuario, id_produto, valor, quantidade } = req.body
        const enviaDadosServices = new PedidosServices()
        const resposta = await enviaDadosServices.criarPedidos({
            id_usuario,
            id_produto,
            valor,
            quantidade
        })
        return res.json(resposta)
    }

    async adicionarItensPedido(req: Request, res: Response) {
        const { id_produto, id_carrinho, valor, quantidade } = req.body
        const enviaDadosServices = new PedidosServices()
        const resposta = await enviaDadosServices.adicionarItensPedido({
            id_carrinho,
            id_produto,
            valor,
            quantidade
        })
        return res.json(resposta)
    }

    async buscarPedidosCliente(req: Request, res: Response) {
        const id = req.usuarioId
        const enviaDadosServices = new PedidosServices()
        const resposta = await enviaDadosServices.buscarPedidosCliente(id)
        return res.json(resposta)
    }

    async buscarCarrinhoAbertoDoUsuario(req: Request, res: Response) {
        const id_usuario = req.usuarioId;
        const enviaDadosServices = new PedidosServices();
        const pedido = await enviaDadosServices.buscarCarrinhoAbertoDoUsuario(id_usuario);

        if (!pedido) {
            return res.status(404).json({ message: 'Nenhum carrinho aberto encontrado.' });
        };

        return res.json(pedido);
    };

    async visualizaPedidoClienteUnico(req: Request, res: Response) {
        const { id } = req.body;
        const enviaDadosServices = new PedidosServices();
        const resposta = await enviaDadosServices.visualizaPedidoClienteUnico(id);
        return res.json(resposta);
    };

    async apagarItensCarrinho(req: Request, res: Response) {
        const { id } = req.params;
        const enviaDadosServices = new PedidosServices();
        const resposta = await enviaDadosServices.apagarItensCarrinho(id);
        return res.json(resposta);
    };

    async apagarCarrinho(req: Request, res: Response) {
        const { id } = req.params;
        // console.log(id)
        const enviaDadosServices = new PedidosServices();
        const resposta = await enviaDadosServices.apagarCarrinho(id);
        return res.json(resposta);
    };

    async finalizarCarrinho(req: Request, res: Response) {
        const { id } = req.body;
        const enviaDadosServices = new PedidosServices();
        
        try {
            const resposta = await enviaDadosServices.finalizarCarrinho(id);
            return res.json(resposta);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    };    
};

export { PedidosControllers };