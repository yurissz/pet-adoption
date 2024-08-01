import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PetsService } from './pets.service';
import { Prisma } from '@prisma/client'

@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) { }

  @Post()
  create(@Body() createPetDto: Prisma.PetsCreateInput) {
    return this.petsService.create(createPetDto);
  }

  @Get()
  findAll() {
    return this.petsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetDto: Prisma.PetsUpdateInput) {
    return this.petsService.update(+id, updatePetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petsService.remove(+id);
  }
}
