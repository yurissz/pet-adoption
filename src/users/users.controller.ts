import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client'


@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {
    }

    @Post()
    create(@Body() createUserDto: Prisma.UserCreateInput) {
        return this.userService.create(createUserDto)
    }

    @Get()
    findAll() {
        return this.userService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: Prisma.UserUpdateInput) {
        return this.userService.update
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return
    }







}
