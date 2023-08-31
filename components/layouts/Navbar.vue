<template>
  <p-navbar fixed>
    <p-navbar-brand>
      <p-button
        icon
        class="mr-4 lg:!hidden"
        variant="ghost"
        @click="toggle">
        <pi-menu-burger-20 />
      </p-button>
      <img
        src="https://privy-design-system.vercel.app/assets/images/logo.svg"
        alt="persona-icon"> Persona
    </p-navbar-brand>
    <p-navbar-nav
      align="right"
      class="space-x-3">
      <p-nav-item class="relative">
        <template #icon>
          <pi-question-circle-20 />
        </template>
      </p-nav-item>
      <p-nav-item-dropdown
        no-caret
        icon>
        <template #button-content>
          <pi-menu-app-20 />
        </template>
        <LayoutsNavbarSwitchApp />
      </p-nav-item-dropdown>
      <LayoutsNavbarProfile />
    </p-navbar-nav>
  </p-navbar>
</template>
<script lang="ts" setup>
/**
 * Toggle sidebar via burger menu
 * in the sidebar brand
 */

const emit = defineEmits(['update:toggle'])

const model = ref(false)

const toggle = () => {
  model.value = !model.value
  emit('update:toggle', model.value)
}
</script>
<style lang="postcss">
.navbar {
  --p-navbar-z-index: 1045;
  --p-navbar-padding-y: theme(spacing.2);
  --p-navbar-padding-x: theme(spacing.5);

  &,
  &&--shadow {
    @apply shadow-sm;
  }

  &__nav {
    .nav__item--avatar {
      .dropdown__activator.btn {
        @apply p-0 hover:bg-transparent;
      }

      .dropdown--open .dropdown__activator.btn {
        @apply bg-transparent hover:bg-transparent;
      }
    }
  }

  .nav.nav--pills .nav__link--active:not(.nav__link--disabled) {
    @apply rounded-b-none bg-transparent;
  }
  .tabs .nav {
    @apply pl-0;
  }

  .divider--dropdown {
    @apply my-0;
  }

  .radio--switch {
    .card {
      @apply px-2 py-0.5 text-sm duration-200 ease-in-out hover:shadow-md bg-base rounded-sm;
      @apply dark:bg-dark-base;

      &.radio--switch__active {
        @apply border-info-emphasis text-state-emphasis bg-info-emphasis;
        @apply dark:text-dark-state-emphasis dark:bg-dark-info-emphasis;
      }
    }
  }
}
</style>
