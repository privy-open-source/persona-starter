<template>
  <p-caption
    weight="bold"
    transform="capitalize">
    Balance
  </p-caption>

  <p-carousel
    direction="vertical"
    height="5rem"
    align="start"
    class="carousel--balance">
    <p-carousel-item>
      <NuxtLink
        to="#"
        class="no-underline">
        <p-card
          element="div"
          class="h-full px-4 py-2 shadow-sm"
          sectioned>
          <span class="flex items-center justify-between">
            <span>
              <p-text variant="caption">Privy Balance</p-text>
              <p-text
                class="block mt-1 text-info dark:text-dark-info"
                weight="bold"
                variant="h6">99</p-text>
            </span>
            <span class="shrink-0">
              <pi-chevron-right-20 />
            </span>
          </span>
        </p-card>
      </NuxtLink>
    </p-carousel-item>
    <p-carousel-item>
      <NuxtLink
        to="#"
        class="no-underline">
        <p-card
          element="div"
          class="h-full px-4 py-2 shadow-sm"
          sectioned>
          <span class="flex items-center justify-between">
            <span>
              <p-text variant="caption">Privy Balance</p-text>
              <p-text
                class="block mt-1 text-info dark:text-dark-info"
                weight="bold"
                variant="h6">99999</p-text>
            </span>
            <span class="shrink-0">
              <pi-chevron-right-20 />
            </span>
          </span>
        </p-card>
      </NuxtLink>
    </p-carousel-item>
    <p-carousel-item>
      <NuxtLink
        to="#"
        class="no-underline">
        <p-card
          element="div"
          class="h-full px-4 py-2 border shadow-sm"
          sectioned>
          <span class="flex items-center justify-between">
            <span>
              <p-text variant="caption">Privy Balance</p-text>
              <p-text
                class="block mt-1 text-info dark:text-dark-info"
                weight="bold"
                variant="h6">123</p-text>
            </span>
            <span class="shrink-0">
              <pi-chevron-right-20 />
            </span>
          </span>
        </p-card>
      </NuxtLink>
    </p-carousel-item>
  </p-carousel>
</template>

<style lang="postcss">
.carousel {
  &--balance {
    .carousel__container {
      @apply w-[calc(100%+8px)] -mx-2;
    }

    .carousel__item {
      @apply px-2 pb-2 pl-2;
    }

    .carousel__progress {
      @apply pb-2;
    }

    .progress-indicator--vertical .progress-indicator__item {
      @apply w-1;
    }
  }
}
</style>
