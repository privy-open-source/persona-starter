<template>
  <p-dropdown-header>
    Switch To
  </p-dropdown-header>
  <p-dropdown-item>
    <span class="flex items-center space-x-2">
      <span>
        <pi-privy-alt-20 class="text-brand-accent dark:text-dark-brand-accent" />
      </span>
      <span>PrivySign</span>
    </span>
  </p-dropdown-item>
  <p-dropdown-item>
    <span class="flex items-center space-x-2">
      <span>
        <pi-admin-center-logo-apps-20 class="text-brand-accent dark:text-dark-brand-accent" />
      </span>
      <span>PrivySign Admin Center</span>
    </span>
  </p-dropdown-item>
  <p-dropdown-item>
    <span class="flex items-center space-x-2">
      <span>
        <pi-message-logo-apps-20 class="text-info dark:text-dark-info" />
      </span>
      <span>PrivyChat</span>
    </span>
  </p-dropdown-item>
</template>

<script lang="ts" setup>
import PiPrivyAlt20 from '@privyid/persona-icon/vue/privy-alt/20.vue'
import PiAdminCenterLogoApps20 from '@privyid/persona-icon/vue/admin-center-logo-apps/20.vue'
import PiMessageLogoApps20 from '@privyid/persona-icon/vue/message-logo-apps/20.vue'
</script>
