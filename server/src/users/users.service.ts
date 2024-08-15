import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import { Users, Prisma } from '@prisma/client';
import { error } from 'console';
// prisma error types
// https://www.prisma.io/docs/orm/reference/error-reference#prismaclientvalidationerror
// prisma error handling
// https://www.prisma.io/docs/orm/prisma-client/debugging-and-troubleshooting/handling-exceptions-and-errors
// nestjs standard exceptions
// https://docs.nestjs.com/exception-filters#throwing-standard-exceptions
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
  async createUser(data: Prisma.UsersCreateInput): Promise<Users> {
    try {
      const user = await this.prisma.users.create({
        data,
      });
      return user
    } catch (err) {
      console.log('err',err)
      if(err instanceof Prisma.PrismaClientKnownRequestError){
        switch(err.code){
          case 'P2002':
            throw new BadRequestException('Email should be unique.')
            default:
            throw new BadRequestException('Fields not match')
        }
      }else{
        throw new BadRequestException()
      }
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
