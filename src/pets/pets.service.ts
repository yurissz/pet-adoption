import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';


@Injectable()
export class PetsService {
  // get /pets
  // get /pets/:id
  // post /pets body
  // patch /pets/:id body
  // delete /pets/:id
  constructor(private readonly dataBaseService: DatabaseService) { }

  async create(createPetDto: Prisma.PetsCreateInput) {
    return this.dataBaseService.pets.create({
      data: createPetDto
    })
  }

  async findAll() {
    return this.dataBaseService.pets.findMany()
  }

  async findOne(id: number) {
    return this.dataBaseService.pets.findUnique({
      where: {
        id
      }
    })
  }

  async update(id: number, updatePetDto: Prisma.PetsUpdateInput) {
    return this.dataBaseService.pets.update({
      where: {
        id
      },
      data: updatePetDto
    })
  }

  async remove(id: number) {
    return this.dataBaseService.pets.delete({
      where: {
        id
      }
    })
  }
}
