import "reflect-metadata";
import {Connection, createConnection, Repository} from "typeorm";
//import {Roles,Userasasas} from "./entity/psql/index";
import {User} from "./entity/mongo/index";

import configPsql = require("../config/psqlConfig")
import configMongo = require("../config/mongoConfig")


 (async () => {
     console.log('\x1b[36m%s\x1b[0m',"  Bienvenido al testing de la base de datos Veinte")

   // Si createConnection no recibe ningun parametro, busca en ormconfig.json
     
   // POSTGRESS  
   /*  const connectionPsql: Connection = await createConnection(configPsql);
    console.log("   Status of connection Psql:", connectionPsql.isConnected, '\n')
    //const userRepo: Repository<User> = connectionPsql.getRepository(User)
    const roleRepo: Repository<Roles> = connectionPsql.getRepository(Roles)
    const roles = await roleRepo.find(); 
    console.log(roles)  */


    // MONGO
    const connectionMongo: Connection = await createConnection(configMongo);
    console.log("   Status of connection Mongo:", connectionMongo.isConnected) 
    const userRepoMongo: Repository<User> = connectionMongo.getRepository(User)
    const usereses = await userRepoMongo.findOne(1); 
    console.log(usereses) 

   
})().catch(error => console.log("Error: ", error));




