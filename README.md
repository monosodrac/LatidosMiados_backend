# 🐾 Latidos e Miados – Aplicativo de Compras

Bem-vindo ao repositório oficial do **Latidos e Miados**, um aplicativo desenvolvido para facilitar a compra de produtos em petshops, conectando clientes e lojistas de forma simples, prática e eficiente.

## 📱 Sobre o Projeto

O **Latidos e Miados** é um sistema completo onde os usuários podem:

- Criar uma conta e gerenciar seu perfil;
- Navegar pelos produtos disponíveis;
- Adicionar itens ao carrinho;
- Finalizar pedidos de forma rápida;
- Ter seus dados geográficos armazenados para análises estratégicas.

Tudo isso pensado para melhorar a experiência de compra do cliente e otimizar o atendimento e logística do petshop.

---

## ✅ Funcionalidades

- **Cadastro e login de usuários**
- **Carrinho de compras integrado ao sistema de pedidos**
- **Finalização de pedidos com atualização de status no banco de dados**
- **Histórico de pedidos (mantido no banco para análises futuras)**
- **Sistema de geolocalização (GPS)**
  - Armazena localização do cliente
  - Permite entender a distribuição de compras por região
- **Área de perfil do usuário**
  - Permite edição de dados pessoais (nome, e-mail, endereço, etc.)

---

## 🔄 Fluxo de Pedidos

1. O usuário adiciona produtos ao carrinho.
2. Ao finalizar a compra:
   - O status do pedido é alterado para `Finalizado` no banco de dados.
   - O pedido é removido da tela do app, permitindo criar um novo.
   - No back-end, o pedido é armazenado para manter o **histórico de compras**.
3. A loja é notificada com os dados do pedido e cliente, possibilitando o contato direto para **entrega ou retirada**.

---

## 🔍 Objetivos do Projeto

- Criar uma experiência de compra intuitiva para clientes de petshops;
- Facilitar o gerenciamento de pedidos para a loja;
- Coletar dados relevantes para campanhas de marketing e estratégias de venda;
- Tornar o processo de compra e entrega mais inteligente e eficaz.

---

## 🛠️ Tecnologias Utilizadas

- **Mobile:** React Native
- **Back-end:** Node.js / Express
- **Banco de Dados:** MySQL / Prisma ORM
- **APIs:** Localização (GPS), autenticação JWT, etc.

---

## 📦 Estrutura de Pastas (Exemplo)

```
📁 src
├── 📁 prisma
├── 📁 src
├── 📁 tmp
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── tsconfig.json
```

---

# 🚀 Como Rodar

Este guia irá te ajudar a configurar e rodar o projeto back-end do Latidos e Miados na sua máquina local.

---

## ✅ Requisitos

Certifique-se de ter os seguintes itens instalados:

- [Node.js](https://nodejs.org/) (versão 16.x ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [MySQL](https://www.mysql.com/)
- [Prisma CLI](https://www.prisma.io/)
- Um editor de código como [VS Code](https://code.visualstudio.com/)

---

## ⚙️ Configuração Passo a Passo

### 1. Clone o repositório

```bash
git clone https://github.com/monosodrac/LatidosMiados_backend
```

### 2. Instale as dependências

```bash
npm install
```

---

## ▶️ Rodando o servidor

```bash
npm run dev
```

Certifique-se de que o `package.json` tenha o script:

```json
"scripts": {
  "dev": "ts-node-dev src/server.ts"
}
```

---

## 🧪 Testando

- Use ferramentas como **Postman** ou **Insomnia** para testar os endpoints
- Acesse: `http://localhost:3333/` ou `http://[endereço de ip da sua maquina]:3333/`

---

## 🛠️ Problemas Comuns

- Verifique o banco MySQL: está rodando e com a porta correta

---

Pronto! Seu back-end estará funcionando localmente 🚀

## 📌 Observações

Este projeto foi desenvolvido com fins educacionais e demonstra a aplicação de conceitos de e-commerce, autenticação, integração com GPS e manipulação de dados no contexto de uma loja real.

---

## 📧 Contato
Para dúvidas, sugestões ou colaborações, entre em contato:

**Desenvolvedores:** [Yzabeli Idalgo](https://github.com/yzabeli), [Caio Augusto Martis](https://github.com/CaioMessi10), [Lucas Martins da Silva](https://github.com/lucaxdelrey), [Mono Cardoso](https://github.com/monosodrac)
