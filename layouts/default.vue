<template>
  <p-navbar>
    <p-navbar-brand>
      <img
        src="https://privy-design-system.vercel.app/assets/images/logo.svg"
        alt="persona-icon"> Persona
    </p-navbar-brand>
  </p-navbar>

  <div class="flex h-full min-h-screen">
    <p-sidebar-menu :menus="menus" />

    <div>
      <div class="bg-default">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import menus from '../menu'
</script>
