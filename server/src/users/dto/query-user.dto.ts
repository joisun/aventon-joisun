import { ApiProperty } from "@nestjs/swagger"
import { Users } from "@prisma/client"


export class QueryUserDto {
    @ApiProperty({ required: false, default: 1 })
    currentPage?: number = 1 //当前页索引

    @ApiProperty({ example: 'Mei' })
    query: string // 查询字段

    @ApiProperty({ required: false, default: 5 })
    size?: number = 5 // 分页大小
}



const resultExp = [
    {
        "id": "c31fe30d-e26b-4b1d-b998-a86b0ba67f7d",
        "email": "user16@example.com",
        "name": "User Mei 16",
        "address": "123 Example Street, City 16",
        "avatar": "🧑‍🦲",
        "f_color": "yellow",
        "f_food": "sushi",
        "date": "2024-08-28T11:30:50.000Z"
    },
    {
        "id": "a98c50b6-ea2f-4a7d-af49-0a5a5845be0a",
        "email": "user5@example.com",
        "name": "User Mei 5",
        "address": "123 Example Street, City 5",
        "avatar": "👨",
        "f_color": "purple",
        "f_food": "salad",
        "date": "2024-08-27T18:55:33.000Z"
    },
]

export class QueryUsersByPage {
    @ApiProperty({ example: 1, description: 'The total pages count for the querying result' })
    total: number


    @ApiProperty({ example: resultExp, description: 'Querying results' })
    data: Users[]
}
