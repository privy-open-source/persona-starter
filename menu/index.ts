import IconDashboard from '@carbon/icons-vue/lib/dashboard/20'
import IconDocument from '@carbon/icons-vue/lib/document/20'
import IconUsers from '@carbon/icons-vue/lib/group/20'
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
