interface User {
  name: string,
  email: string,
}

export const useAuthStore = defineStore('auth-store', () => {
  const user = ref<User>()

  function getProfile () {
    // TODO: load profile from Backend
    user.value = {
      name : 'Trajono',
      email: 'trajono@anumas.com',
    }
  }

  return {
    user,
    getProfile,
  }
})
