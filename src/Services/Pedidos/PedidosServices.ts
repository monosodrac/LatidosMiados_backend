import prismaClient from '../../Prisma';

interface CriarPedidos {
    id_usuario: string
    id_produto: string
    valor: number
    quantidade: number
};

interface AdicionarItensPedidos {
    id_produto: string
    id_carrinho: string
    valor: number
    quantidade: number
};

class PedidosServices {
    async criarPedidos({ id_usuario, id_produto, valor, quantidade }: CriarPedidos) {

        const pedidoAberto = await prismaClient.carrinho.findFirst({
            where: {
                id_usuario: id_usuario,
            }
        });

        if (pedidoAberto) {
            throw new Error('Existe Pedido Em Aberto')
        };

        const resposta = await prismaClient.carrinho.create({
            data: {
                id_usuario: id_usuario,
            }
        });

        await prismaClient.itensCarrinho.create({
            data: {
                id_carrinho: resposta.id,
                id_produto: id_produto,
                valor: valor,
                quantidade: quantidade,
            }
        });
        return resposta;
    };

    async adicionarItensPedido({ id_produto, id_carrinho, valor, quantidade }: AdicionarItensPedidos) {
        const produtoExiste = await prismaClient.itensCarrinho.findFirst({
            where: {
                id_produto: id_produto
            }
        });

        if (produtoExiste) {
            throw new Error('Produto Já Adicionado no Carrinho')
        };

        await prismaClient.itensCarrinho.create({
            data: {
                id_produto: id_produto,
                id_carrinho: id_carrinho,
                valor: valor,
                quantidade: quantidade
            }
        });
        return ({ dados: 'Item Adicionado Com Sucesso' });
    };

    async buscarPedidosCliente(id: string) {
        const resposta = await prismaClient.carrinho.findMany({
            where: {
                id_usuario: id
            }, orderBy: {
                n_pedido: 'asc'
            }
        });
        return resposta;
    };

    async buscarCarrinhoAbertoDoUsuario(id_usuario: string) {
        const pedido = await prismaClient.carrinho.findFirst({
            where: {
                id_usuario,
                status: 'aberto'
            },
            include: {
                itens: true
            }
        });

        return pedido;
    };

    async visualizaPedidoClienteUnico(id: string) {
        const resposta = await prismaClient.carrinho.findFirst({
            where: {
                id: id
            },
            select: {
                id: true,
                n_pedido: true,
                itens: {
                    select: {
                        quantidade: true,
                        valor: true,
                        produtos: {
                            select: {
                                nome: true,
                                banner: true,
                            }
                        }
                    }
                }
            }
        });
        return resposta;
    };

    async apagarCarrinho(id: string) {
        await prismaClient.carrinho.delete({
            where: {
                id: id
            }
        });
        return ({ dados: 'Carrinho apagado com sucesso' });
    };

    async apagarItensCarrinho(id: string) {
        await prismaClient.itensCarrinho.delete({
            where: {
                id: id
            }
        });
        return ({ dados: 'Item apagado com sucesso' });
    };
};

export { PedidosServices };