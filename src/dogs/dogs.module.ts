import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dog } from './dogs.entity';
import { DogRepository } from './dogs.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Dog, DogRepository])],
  controllers: [DogsController],
})
export class DogsModule {}
