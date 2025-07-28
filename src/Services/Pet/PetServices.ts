import prismaClient from '../../Prisma'

interface CadPet {
    nome: string
}

class PetServices {
    async cadastrarPet({ nome }: CadPet) {
        await prismaClient.pet.create({
            data: {
                nome: nome
            }
        })
        return ({ dados: 'Cadastro Efetuado Com Sucesso' })
    }

    async listarPet() {
        const resposta = await prismaClient.pet.findMany();
        return resposta;
    };
}

export { PetServices }