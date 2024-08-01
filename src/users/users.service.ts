import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UsersService {
    // get /users
    // get /users/:id
    // post /users body
    // patch /users/:id body
    // delete /users/:id
    constructor(private readonly dataBase: DatabaseService) { }

    async create(createUserDto: Prisma.UserCreateInput) {
        return this.dataBase.user.create({
            data: createUserDto
        })
    }

    async findAll() {
        return this.dataBase.user.findMany()
    }

    async findOne(id: number) {
        return this.dataBase.user.findUnique({
            where: {
                id
            }
        })
    }

    //update
    async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
        return this.dataBase.user.update({
            where: {
                id
            },
            data: updateUserDto
        })
    }
    //delete
    async delete(id: number) {
        return this.dataBase.user.delete({
            where: {
                id
            }
        })
    }
}
