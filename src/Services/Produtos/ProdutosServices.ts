import prismaClient from '../../Prisma'

interface CadProdutos {
    nome: string
    pet: string
    descricao?: string
    preco: string
    banner: string
}

class ProdutosServices {
    async cadastrarProdutos({nome, pet, preco, descricao, banner}: CadProdutos){
        await prismaClient.produtos.create({
            data: {
                nome: nome,
                pet: pet,
                descricao: descricao,
                preco: preco,
                banner: banner
            }
        })
        return ({dados: 'Produto Cadastrado com Sucesso'})
    }

    async consultarProdutos() {
        const resposta = await prismaClient.produtos.findMany();
        return resposta;
    };

    async consultarProdutosUnicos(id: string) {
        const resposta = await prismaClient.produtos.findUnique({
            where: {
                id: id
            }
        });
        return resposta;
    };
};

export { ProdutosServices };