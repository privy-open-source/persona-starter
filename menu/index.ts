import IconOverview from '@privyid/persona-icon/vue/dashboard/20.vue'
import IconUserRole from '@privyid/persona-icon/vue/user-groups/20.vue'
import IconEnterpriseSeal from '@privyid/persona-icon/vue/lock/20.vue'
import IconReminder from '@privyid/persona-icon/vue/time/20.vue'
import IconEmailLogo from '@privyid/persona-icon/vue/envelope/20.vue'
import IconEmployeeHandover from '@privyid/persona-icon/vue/collaboration/20.vue'
import IconCategoryDocument from '@privyid/persona-icon/vue/folder/20.vue'
import IconBilling from '@privyid/persona-icon/vue/document-filled/20.vue'
import IconPaymentHistory from '@privyid/persona-icon/vue/receipt-history/20.vue'
import IconReport from '@privyid/persona-icon/vue/report-statistics/20.vue'

import { defineMenu } from '@privyid/persona/core'

export default defineMenu([
  {
    title: 'General',
    items: [
      {
        name : 'overview',
        label: 'Overview',
        url  : '/',
        icon : IconOverview,
      },
      {
        name : 'user-and-role',
        label: 'User and role',
        url  : '/user-role',
        icon : IconUserRole,
      },
      {
        name : 'enterprise-seal',
        label: 'Enterprise seal',
        url  : '/enterprise',
        icon : IconEnterpriseSeal,
      },
      {
        name : 'reminder',
        label: 'Reminder',
        url  : '/reminder',
        icon : IconReminder,
      },
      {
        name : 'email-logo',
        label: 'Email logo',
        url  : '/email',
        icon : IconEmailLogo,
      },
      {
        name : 'employee-handover',
        label: 'Employee handover',
        url  : '/employee',
        icon : IconEmployeeHandover,
      },
      {
        name : 'category-document',
        label: 'Category document',
        url  : '/category',
        icon : IconCategoryDocument,
      },
    ],
  },
  {
    title: 'Other',
    items: [
      {
        name : 'billing',
        label: 'Billing',
        url  : '/billing',
        icon : IconBilling,
      },
      {
        name : 'payment-history',
        label: 'Payment history',
        url  : '/payment-history',
        icon : IconPaymentHistory,
      },
      {
        name : 'report',
        label: 'Report',
        url  : '/report',
        icon : IconReport,
      },
    ],
  },
])
