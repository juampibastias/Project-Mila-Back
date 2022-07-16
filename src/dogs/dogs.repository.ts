import { Dog } from "./dogs.entity";
import { EntityRepository, Repository } from "typeorm";
import { DogDto } from "./interfaces/dog.dto";

@EntityRepository(Dog)
export class DogRepository extends Repository<Dog> {
  createDog = async (dogDto: DogDto) => {
    return await this.save(dogDto);
  };
}
