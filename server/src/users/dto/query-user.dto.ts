import { Users } from "@prisma/client"


export class QueryUserDto {
    currentPage?: number //当前页索引
    query: string // 查询字段
    size?:number // 分页大小
}

export class QueryUsersByPage{
    total: number
    data: Users[]
}