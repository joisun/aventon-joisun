export type User = {
  id: string
  name: string
  email: string
  address: string
  avatar?: string
  f_color?: string
  f_food?: string
  date: Date | null
}

export type CreateUser = Omit<User, 'id'>


export type QueryUserDto  = {
  currentPage?: number //当前页索引
  query: string // 查询字段
  size?:number // 分页大小
}

export type QueryUsersByPage = {
  total: number
  data: User[]
}