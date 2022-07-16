import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';

@Module({
  imports: [TypeOrmModule.forRoot(), DogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
