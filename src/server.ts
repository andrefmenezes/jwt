//rota:endereço completo
//recurso: qual a entidade estamos acessando

//get:buscar uma ou mais informaçoes do back
//post: criar uma nova informaçao no back
//put:atualizar uma informaçao existente
//delete: remover uma info

//request Param: parametros que vem na propria rota que identificam um recurso
//query Param: parametros que vem na propria rota geralmentes opcionais para filtros...
//Request Body: parametros para a criaçao/atualizaçao de info
//knex('users').where('name','diego').select('*')

import express from 'express';
import cors from 'cors';
import path from  'path';
import routes from './routes';
 const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extend: false}));
app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3334);