import { createLazyton } from '@privyid/nuapi/core'

const useApi = createLazyton({ prefixURL: '/api/example' })

export interface Account {
  text: string,
  value: number,
}

export function getUser () {
  return useApi().get('/user')
}
