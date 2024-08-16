import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ required: true, description: "The email of the user", example: 'Joisun@example.com' })
    email: string;

    @ApiProperty({ required: true, description: "The name of the user", example: 'Mei' })
    name: string;

    @ApiProperty({ required: true, description: 'The address of the user', example: 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO' })
    address: string;

    @ApiProperty({ required: false, description: "The avatar of the user, it's an emoji currently selected in FE", example: '👩‍🦳' })
    avatar?: string | null;

    @ApiProperty({ required: false, description: 'The favorite color of the user', example: 'red' })
    f_color?: string | null;

    @ApiProperty({ required: false, description: 'The favorite food of the user', example: 'noodles' })
    f_food?: string | null;

    @ApiProperty({ required: true, type: Date, description: 'The locale time the when user register', example: "2024-08-15T09:25:26.397Z" })
    date: Date | string;
}


export class CreateResponsedDto {
    @ApiProperty({ example: 'b4f1bf84-1692-4184-997b-bb7f1173b7f3' })
    id: string;

    @ApiProperty({ example: 'mei@example.com' })
    email: string;

    @ApiProperty({ example: 'Mei' })
    name: string;

    @ApiProperty({ example: 'Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO' })
    address: string;

    @ApiProperty({ example: '👩‍🦳' })
    avatar: string | null;

    @ApiProperty({ example: 'red' })
    f_color: string | null;

    @ApiProperty({ example: 'noodles' })
    f_food: string | null;

    @ApiProperty({ example: '2024-08-15T09:25:26.397Z' })
    date: Date;
}


export class BadRequestResponse {
    @ApiProperty({ default: 400 })
    statusCode: number

    @ApiProperty({ default: 'There is a unique constraint violation, a new user cannot be created with this email' })
    message: string

    @ApiProperty({ default: 'Bad Request' })
    error: string
}

