
import {Request, Response} from 'express';
import knex from '../database/connection';
class Ativo{
    
async show(request: Request,response: Response){
    const id = request.params.id_ativo;

    const ativo = await knex('ativo').select('*');
/*
   if(!user){
       return response.status(400).json({msg: 'erro'});
   }

   //join
const ativos = await knex('ativo')
.join('user_ativo','ayivo.id_ativo','=','user_ativo.id_ativo')
.where('user_ativo.iduser',id);

//return response.json({user, ativos});
*/
   return response.json(ativo);
}



    async create(request: Request,response: Response){
       // console.log('[DEBUG] USER ROTA',request)
        const {
            name_ativo,
            pm_ativo,
            qtd_ativo,
            data_ativo
            
            //ativos
        } = request.body;
     
     
     
     const ativo ={
        name_ativo,
        pm_ativo,
        qtd_ativo,
        data_ativo
       }  
       //console.log('[DEBUG] USUARIO REQ:', usuario)
        await knex('ativo').insert(ativo);
    /* const papeis = ativos.map((ativo_id: number) =>{
       return{
             ativo_id,
             user_id: ids[0],
         }
     });
     
     await trx('user_ativo').insert(papeis);
     */
     
     
         return response.json(ativo)
     }

     async delete(request: Request,response: Response){
        //console.log('[DEBUG] USER ROTA',request)
        //console.log('[DEBUG] USER ROTA',request.params.id_user);
      const del =  await knex('ativo').where('id_ativo',request.params.id_ativo).del()
         
       return response.json(del);

    }
 
    async atualizar(request: Request,response: Response){
        const {
            name_ativo,
            pm_ativo,
            qtd_ativo,
            data_ativo
            
            //ativos
        } = request.body;
     
     
     
     const atualizar ={
        name_ativo,
        pm_ativo,
        qtd_ativo,
        data_ativo        
       }  
      
        await knex('ativo').where('id_ativo', request.params.id_ativo)
       .update(atualizar)
       return response.json({msg: 'ok'});
    }

    
}


export default Ativo;