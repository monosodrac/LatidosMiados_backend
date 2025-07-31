import { Router } from 'express';
import multer from 'multer'
import uploadConfig from './config/multer'

//Importação dos Controllers
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers';
import { LoginUsuariosControllers } from './Controllers/Login/LoginUsuariosControllers';
import { ProdutosControllers } from './Controllers/Produtos/ProdutosControllers';
import { PedidosControllers } from "./Controllers/Pedidos/PedidosControllers";

import { estaAutenticado } from './middleware/estaAutenticado';
import { PetControllers } from './Controllers/Pet/PetControllers';

const router = Router();
const upload = multer(uploadConfig.upload('./tmp'))

//Rotas de Usuarios
router.post('/CadastrarUsuarios', upload.single('file'), new UsuariosControllers().cadastrarUsuarios);
router.get('/ConsultarUsuarios', estaAutenticado, new UsuariosControllers().consultarUsuarios);
router.post('/ConsultarUsuariosUnico', estaAutenticado, new UsuariosControllers().consultarUsuariosUnico);
router.put('/AlterarDadosUsuarios', estaAutenticado, new UsuariosControllers().alterarDadosUsuarios);
router.delete('/ApagarUsuarios/:id', estaAutenticado, new UsuariosControllers().apagarUsuarios);

//Rotas de Login
router.post('/LoginUsuarios', new LoginUsuariosControllers().loginUsuarios);
router.get('/VerificaToken', estaAutenticado, new LoginUsuariosControllers().verificaToken);

//Rotas de Produtos
router.post('/CadastrarProdutos', upload.single('file'), new ProdutosControllers().cadastrarProdutos)
router.get('/ConsultarProdutos', new ProdutosControllers().consultarProdutos);
router.post('/ConsultarProdutosUnico', new ProdutosControllers().consultarProdutosUnico);
//Rotas de Pet
router.post('/CadastrarPet', new PetControllers().cadastrarPet);
router.get('/ListarPet', new PetControllers().listarPet);

//Rotas de Pedidos
router.post('/RealizarPedidos', new PedidosControllers().criarPedidos);
router.post('/AdicionarItensPedidos', new PedidosControllers().adicionarItensPedido);
router.get('/BuscarPedidosCliente', estaAutenticado, new PedidosControllers().buscarPedidosCliente);
router.get('/BuscarCarrinhoAbertoDoUsuario', estaAutenticado, new PedidosControllers().buscarCarrinhoAbertoDoUsuario);
router.delete('/ApagarItensCarrinho/:id', estaAutenticado, new PedidosControllers().apagarItensCarrinho);
router.delete('/ApagarCarrinho/:id', estaAutenticado, new PedidosControllers().apagarCarrinho);
router.post('/visualizaPedidoClienteUnico', estaAutenticado, new PedidosControllers().visualizaPedidoClienteUnico);

//Rotas de Pedidos
router.put('/AtualizarLocalizacaoUsuario', estaAutenticado, new UsuariosControllers().atualizarLocalizacao);

export default router;