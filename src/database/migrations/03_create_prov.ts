import Knex from 'knex';


export async function up(knex: Knex){
    //criar a tabela
    return knex.schema.createTable('prov', table =>{
        table.increments('id_prov').primary();
        table.float('proventos').notNullable();
        table.date('data_prov').notNullable();
        

    });
}
export async function down(knex: Knex){
    //voltar atras(delatar)contrario do up
 return knex.schema.dropTable('prov');
 

}