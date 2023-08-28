import IconDashboard from '@privyid/persona-icon/vue/dashboard/20.vue'
import IconDocument from '@privyid/persona-icon/vue/document-filled/20.vue'
import IconUsers from '@privyid/persona-icon/vue/user-groups/20.vue'
import { defineMenu } from '@privyid/persona/core'

export default defineMenu([
  {
    items: [
      {
        name : 'dashboard',
        label: 'Dashboard',
        url  : '/',
        icon : IconDashboard,
      },
      {
        name : 'documents',
        label: 'Documents',
        url  : '/',
        icon : IconDocument,
      },
      {
        name : 'contacts',
        label: 'Contacts',
        url  : '/',
        icon : IconUsers,
      },
    ],
  },
])
