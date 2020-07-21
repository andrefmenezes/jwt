
import {Request, Response} from 'express';
import knex from '../database/connection';
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
class User{

async autentic(request: Request,response: Response){
    //console.log('[DEBUG] USER ROTA',request.body.email_user)  
    const {
        email_user,
        senha_user,      
    } = request.body;
const user = await knex('user').select('*').where('email_user',request.body.email_user)
if(user.length == 1){
   // console.log(user.length);
if(await bcrypt.compare(senha_user, user[0].senha_user)){
    // console.log(user[0].senha_user);
const token = jwt.sign({id: user[0].id_user}, String(process.env.APP_SECRET), {
    expiresIn: '1d'
})
const data ={
    id:user[0].id_user,
    name: user[0].name_user,
    email: user[0].email_user,
    token
}
return response.json(data)
}  
else{
    return response.status(404).json({msg: 'senha '})
}  
}else{
    return response.status(404).json({msg: 'senha errada'})
}

}

    
async show(request: Request,response: Response){
    const id = request.params.id_user;

    const user = await knex('user').select('*');
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
   return response.json(user);
}



    async create(request: Request,response: Response){
    //    console.log('[DEBUG] USER ROTA',request)     
      
       const {
            name_user,
            email_user,
            senha_user,
            //ativos
        } = request.body;
     
        const password = await bcrypt.hash(senha_user, 4)
     
     const usuario ={
        name_user,
        email_user,
        senha_user: password
       }  
       //console.log('[DEBUG] USUARIO REQ:', usuario)
      
      
        await knex('user').insert(usuario);
    /* const papeis = ativos.map((ativo_id: number) =>{
       return{
             ativo_id,
             user_id: ids[0],
         }
     });
     
     await trx('user_ativo').insert(papeis);
     */
     
     
         return response.json(usuario)
     }

     async delete(request: Request,response: Response){
        console.log('[DEBUG] USER ROTA',request)
        console.log('[DEBUG] USER ROTA',request.params.id_user);
      const del =  await knex('user').where('id_user',request.params.id_user).del()
         
       return response.json(del);

    }
 
    async atualizar(request: Request,response: Response){
        const {
            name_user,
            email_user,
            senha_user,
            //ativos
        } = request.body;
     
     
     
     const atualizar ={
        name_user,
        email_user,
        senha_user
       }  
      
        await knex('user').where('id_user', request.params.id_user)
       .update(atualizar)
       return response.json({msg: 'ok'});
    }
}


export default User;