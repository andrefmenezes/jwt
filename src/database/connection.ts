import knex from 'knex';
import path from 'path';


const connection = knex({
    client: 'sqlite3',
    connection:{
        filename: path.resolve(__dirname,'database.sqlite' )//une caminhos--padronizar
    },
    useNullAsDefault: true,
});

export default connection;

//migrations =  historico do banco de dados colocar em ordem na pasta para o modelo relacional

