import { Router } from 'express';
import multer from 'multer'
import uploadConfig from './config/multer'

//Importação dos Controllers
import { UsuariosControllers } from './Controllers/Usuarios/UsuariosControllers';
import { LoginUsuariosControllers } from './Controllers/Login/LoginUsuariosControllers';
import { ProdutosControllers } from './Controllers/Produtos/ProdutosControllers';
import { PedidosControllers } from "./Controllers/Pedidos/PedidosControllers";

import { estaAutenticado } from './middleware/estaAutenticado';

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
router.post('/CadastrarProdutos', upload.single('file'), estaAutenticado, new ProdutosControllers().cadastrarProdutos)
router.get('/ConsultarProdutos', new ProdutosControllers().consultarProdutos);
router.post('/ConsultarProdutosUnico', new ProdutosControllers().consultarProdutosUnico);

//Rotas de Pedidos
router.post('/RealizarPedidos', new PedidosControllers().criarPedidos);
router.post('/AdicionarItensPedidos', new PedidosControllers().adcionarItensPedido);
router.get('/BuscarPedidosCliente', estaAutenticado, new PedidosControllers().buscarPedidosCliente);
router.delete('/ApagarCarrinho/:id', estaAutenticado, new PedidosControllers().apagarCarrinho);
router.post('/visualizaPedidoClienteUnico', estaAutenticado, new PedidosControllers().visualizaPedidoClienteUnico);

export default router;