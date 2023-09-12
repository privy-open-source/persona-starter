<template>
  <div class="site">
    <LayoutsNavbar v-model:toggle="model" />

    <p-page
      v-model="model"
      expand="lg">
      <LayoutsSidebar v-model="model" />

      <p-main class="p-0">
        <slot />
      </p-main>
    </p-page>
  </div>
</template>

<script lang="ts" setup>
const model = ref(false)
</script>

<style lang="postcss">
.page {
  --p-page-type-narrow: 285px;

  /**
  * page reset padding-left
  * althought is expanded
  */
  &&--expand {
    &:where(&&-all, &&-lg, &&-md, &&-sm) {
      &:is(.page--expanded) {
        &.page--type-wide,
        &.page--type-narrow {
          @apply pl-0;
        }
      }
    }

    &&-lg {
      @apply lg:pl-[var(--p-page-type-narrow)];
    }
  }
}
</style>
