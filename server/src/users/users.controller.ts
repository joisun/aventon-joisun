import { Controller, Get, Post, Body, Patch, Param, Delete, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { BadRequestResponse, CreateResponsedDto, CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma, Users as UsersModel } from '@prisma/client';
import { QueryUserDto, QueryUsersByPage } from './dto/query-user.dto';
import { ApiBody, ApiOperation, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('create')
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'User created successfully', type: CreateResponsedDto })
  @ApiResponse({ status: 400, description: 'Bad Request',type: BadRequestResponse })
  async create(@Body() createUserData: CreateUserDto): Promise<UsersModel> {
    //  why use custom CreateUserDto insdead of Prisma.UsersCreateInput, bescause Prisima not support intergration with swagger currently
    return this.usersService.createUser(createUserData);
  }

  @Post('queryUsersByPage')
  @ApiOperation({ summary: 'Query user list by page' })
  @ApiBody({ type: QueryUserDto })
  @ApiResponse({ status: 201, description: 'Querying successfully', type: QueryUsersByPage })
  @ApiResponse({ status: 400, description: 'Bad Request',type: BadRequestResponse })
  async queryUsersByPage(@Body() queryData: QueryUserDto): Promise<QueryUsersByPage> {
    return this.usersService.queryUsersByPage(queryData)

  }

  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
