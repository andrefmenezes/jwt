import Knex from 'knex';
// const bcrypt = require('bcryptjs')

export async function up(knex: Knex){
    //criar a tabela
    return knex.schema.createTable('user', table =>{
        table.increments('id_user').primary();
        table.string('name_user').notNullable();
        table.string('email_user').notNullable();
        table.string('senha_user').notNullable();

    });
}
export async function down(knex: Knex){
    //voltar atras(delatar)contrario do up
 return knex.schema.dropTable('user');
 

}