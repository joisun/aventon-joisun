import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule, 
  //   ConfigModule.forRoot({
  //   envFilePath: ['../.env'],
  //   // ignoreEnvFile: process.env.NODE_ENV === 'production', // 在生产环境中不加载 .env 文件
  // })
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
