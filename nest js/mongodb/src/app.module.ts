// app.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './users/users.service';
import { User, UserSchema } from './schemas/user.schema'; // Import User and UserSchema
import { UserController } from './users/users.controller';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/bank', {
     
    }),
   
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),    
    
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
