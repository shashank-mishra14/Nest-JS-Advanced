import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from 'src/config/dbConfig';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot({

    isGlobal: true,
    expandVariables: true,
  }),
    PropertyModule, TypeOrmModule.forRoot(pgConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
