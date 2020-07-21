import express, { request, response } from 'express';
import User from './controllers/userController'
import Ativo from './controllers/ativoController'

const routes = express.Router();
const user = new User();
const ativo = new Ativo();


//listar ativos
 routes.post('/section',user.autentic);
//cadastrar usuario
routes.post('/user',user.create);
//listar usuario especifico
routes.get('/user',user.show);
//deletar
routes.delete('/user/:id_user',user.delete);
//atualizar
routes.put('/users/:id_user',user.atualizar);

    export default routes;