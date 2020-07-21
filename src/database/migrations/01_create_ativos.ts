import Knex from 'knex';


export async function up(knex: Knex){
    //criar a tabela
    return knex.schema.createTable('ativo', table =>{
        table.increments('id_ativo').primary();
        table.string('name_ativo').notNullable();
        table.float('pm_ativo').notNullable();
        table.integer('qtd_ativo').notNullable();
        table.float('pa_ativo').notNullable();
        table.date('data_ativo').notNullable();

    });
}
export async function down(knex: Knex){
    //voltar atras(delatar)contrario do up
 return knex.schema.dropTable('ativo');
 

}