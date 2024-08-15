import { useFetchPost } from '@/hooks/useFetch'
import type { CreateUser, QueryUserDto, QueryUsersByPage, User } from './definitions'
import { $fetchPost } from '@/utils/fetch'
// export const queryUsersByPageApiHook = (data: QueryUserDto) => {
//   return useFetchPost<QueryUserDto, QueryUsersByPage>('/api/users/queryUsersByPage', data)
// }

export const queryUsersByPageAPI = (data: QueryUserDto) => {
    return $fetchPost<QueryUserDto, QueryUsersByPage>('/api/users/queryUsersByPage', data)
  }
  

export const createUserAPI = (data: CreateUser) => {
  return $fetchPost<CreateUser, User>('/api/users/create', data)
}


