import Knex from 'knex';


export async function up(knex: Knex){
    //criar a tabela
    return knex.schema.createTable('user_ativo', table =>{
        table.increments('id_user_ativo').primary();        
        table.integer('id_user')
        .notNullable()
        .references('id_user').inTable('user');
        table.integer('id_ativo').notNullable()
        .references('id_ativo').inTable('ativo');

    });
}
export async function down(knex: Knex){
    //voltar atras(delatar)contrario do up
 return knex.schema.dropTable('user_ativo');
 

}