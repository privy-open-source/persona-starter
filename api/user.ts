import { createLazyton } from '@privyid/nuapi/core'

const useApi = createLazyton({ prefixURL: '/api/example' })

export function getUser () {
  return useApi().get('/user')
}
