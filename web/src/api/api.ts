import { useFetchPost } from '@/hooks/useFetch'
import type { CreateUser, User } from './definitions'
import { $fetchPost } from '@/utils/fetch'
export const createUserApiHook = (data: CreateUser) => {
  return useFetchPost<CreateUser, User>('/api/users/create', data)
}

export const createUserAPI = (data: CreateUser) => {
  return $fetchPost<CreateUser, User>('/api/users/create', data)
}
