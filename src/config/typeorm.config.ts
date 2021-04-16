import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeormConfig: TypeOrmModuleOptions = {​

    type: 'postgres',​
   
    host: 'localhost',​
   
    port: 5432,​
   
    username: 'postgres',​
   
    password: 'Not24get',​
   
    database: 'mangamanagement',​
   
    autoLoadEntities: true,​
   
    synchronize: true,​
   
   };