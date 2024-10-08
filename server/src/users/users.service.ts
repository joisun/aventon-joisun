import { BadRequestException, ConflictException, HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import { Users, Prisma } from '@prisma/client';
import { error } from 'console';
import { QueryUserDto, QueryUsersByPage } from './dto/query-user.dto';
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/library';
// prisma error types
// https://www.prisma.io/docs/orm/reference/error-reference#prismaclientvalidationerror
// prisma error handling
// https://www.prisma.io/docs/orm/prisma-client/debugging-and-troubleshooting/handling-exceptions-and-errors
// nestjs standard exceptions
// https://docs.nestjs.com/exception-filters#throwing-standard-exceptions
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async createUser(data: Prisma.UsersCreateInput): Promise<Users> {
    try {
      const user = await this.prisma.users.create({
        data,
      });
      return user
    } catch (err) {
      console.log('err', err)
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new BadRequestException('There is a unique constraint violation, a new user cannot be created with this email')
        } else {
          throw new BadRequestException('Might caused by the sumbitted data', { cause: new Error(), description: 'Error occured when create user' })
        }
      } else {
        throw new BadRequestException()
      }
    }
  }
  async queryUsersByPage(data: QueryUserDto): Promise<QueryUsersByPage> {
    try {
      const { query, currentPage = 1, size = 5 } = data
      const [count, result] = await Promise.all([
        this.prisma.users.count({
          where: {
            OR: [
              // https://www.prisma.io/docs/orm/prisma-client/queries/case-sensitivity#mysql-provider
              // TODO: 如果想区分大小写怎么办？ - -
              // { name: { contains: query, mode:'insensitive' } },
              { name: { contains: query } },
              { email: { contains: query } },
              { address: { contains: query } },
              { avatar: { contains: query } },
              { f_color: { contains: query } },
              { f_food: { contains: query } }
            ],

          }
        }),
        this.prisma.users.findMany({
          // https://www.prisma.io/docs/orm/prisma-client/queries/pagination#offset-pagination
          skip: (currentPage - 1) * size,// index
          take: size,// pagesize
          where: {
            OR: [
              { name: { contains: query } },
              { email: { contains: query } },
              { address: { contains: query } },
              { avatar: { contains: query } },
              { f_color: { contains: query } },
              { f_food: { contains: query } }
            ],
          },
          orderBy: {
            date: 'desc',
          },
        })

      ])

      const totalPages = Math.ceil(count / size);

      return { data: result, total: totalPages } as QueryUsersByPage
    } catch (err) {
      console.log('err', err)
      throw new BadRequestException()
    }
  }

}

// findAll() {
//   return `This action returns all users`;
// }

// findOne(id: number) {
//   return `This action returns a #${id} user`;
// }

// update(id: number, updateUserDto: UpdateUserDto) {
//   return `This action updates a #${id} user`;
// }

// remove(id: number) {
//   return `This action removes a #${id} user`;
// }

