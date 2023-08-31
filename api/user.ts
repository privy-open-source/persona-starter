import { createLazyton } from '@privyid/nuapi/core'

const useApi = createLazyton({ prefixURL: '/api/example' })

export interface Account {
  text: string,
  value: number,
}

export async function getUser () {
  return await useApi().get('/user')
}
