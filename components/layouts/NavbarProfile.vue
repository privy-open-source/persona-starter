<template>
  <p-nav-item-dropdown
    no-caret
    class="nav__item--avatar">
    <template #button-content>
      <p-avatar />
    </template>
    <p-dropdown-header>
      Profile
    </p-dropdown-header>
    <p-dropdown-item>
      <span class="flex items-center space-x-2">
        <p-avatar src="https://picsum.photos/50" />
        <span>
          Jane Doe
          <p-caption>
            JN6363
          </p-caption>
        </span>
      </span>
    </p-dropdown-item>
    <p-dropdown-item>
      <LayoutsNavbarLanguage />
    </p-dropdown-item>
    <p-divider class="divider--dropdown" />
    <p-dropdown-item>
      <span class="space-x-2">
        <pi-settings-20 class="inline-block" />
        <span>Personal Settings</span>
      </span>
    </p-dropdown-item>
    <p-divider class="divider--dropdown" />
    <p-dropdown-item>
      <span class="space-x-2">
        <pi-sign-out-20 class="inline-block text-danger dark:text-dark-danger" />
        <span class="text-danger dark:text-dark-danger">Log Out</span>
      </span>
    </p-dropdown-item>
  </p-nav-item-dropdown>
</template>
<script lang="ts" setup>

</script>
