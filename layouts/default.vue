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

    <p-app>
      <div class="bg-default">
        <slot></slot>
      </div>
    </p-app>
  </div>
</template>

<script lang="ts" setup>
  import menus from '../menu'
</script>
