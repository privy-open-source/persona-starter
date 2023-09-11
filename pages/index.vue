<template>
  <div class="p-6">
    <p-breadcrumb :items="items" />
  </div>
  <div class="p-6">
    <div class="grid grid-cols-6 gap-6 px-0 xl:px-36 lg:px-6">
      <div class="col-span-6">
        <p-subheading weight="medium">
          General
        </p-subheading>

        <p-card
          element="div"
          body-class="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 gap-y-4">
          <div>
            <div class="flex items-center justify-center w-24 h-24 mb-4 border rounded-full">
              <img
                src="~/assets/images/logo-privy.svg"
                alt="">
            </div>
            <p-heading
              element="h6"
              weight="medium"
              class="mb-2">
              PT Privy Identitas digital
            </p-heading>
            <p-text
              variant="body2"
              class="text-subtlest dark:text-dark-subtlest">
              Admin
            </p-text>
          </div>
          <div class="flex flex-col">
            <span class="block px-0 py-2 md:px-3">
              <p-text
                variant="caption"
                class="block mb-1 text-subtlest dark:text-dark-subtlest">
                Enterprise ID
              </p-text>
              <p-text variant="body2">
                KC059012
              </p-text>
            </span>
            <span class="block px-0 py-2 md:px-3">
              <p-text
                variant="caption"
                class="block mb-1 text-subtlest dark:text-dark-subtlest">
                Address
              </p-text>
              <p-text variant="body2">
                Jalan Lele sumargo No II Block IV Cluster melati K.H Dewantara, Sewon, Bantul, Yogyakarta, Indonesia
              </p-text>
            </span>
            <p-button
              variant="link"
              color="info"
              class="ml-auto">
              Edit
            </p-button>
          </div>
        </p-card>
      </div>
      <div class="grid grid-cols-6 col-span-6 gap-6 md:col-span-3">
        <p-card
          class="col-span-3"
          element="div"
          body-class="flex flex-col space-x-0 space-y-2 sm:space-y-0 sm:items-center sm:space-x-2 sm:flex-row"
          style="--p-card-padding-x:1rem; --p-card-padding-y:1rem;">
          <p-text
            variant="caption"
            weight="medium">
            Privy Balance
          </p-text>
          <p-text
            variant="body"
            weight="bold"
            class="sm:text-right grow text-info dark:text-dark-info">
            120,930
          </p-text>
        </p-card>
        <p-card
          class="col-span-3"
          element="div"
          body-class="flex flex-col space-x-0 space-y-2 sm:space-y-0 sm:items-center sm:space-x-2 sm:flex-row"
          style="--p-card-padding-x:1rem; --p-card-padding-y:1rem;">
          <p-text
            variant="caption"
            weight="medium">
            e-Materai
          </p-text>
          <p-text
            variant="body"
            weight="bold"
            class="sm:text-right grow text-info dark:text-dark-info">
            120,930
          </p-text>
        </p-card>
      </div>
      <p-card
        class="col-span-6 md:col-span-3"
        element="div"
        body-class="flex items-center h-full space-x-2"
        style="--p-card-padding-x:1rem; --p-card-padding-y:1rem;">
        <p-text
          variant="caption"
          weight="medium">
          Employess Account
        </p-text>
        <p-text
          variant="body"
          weight="bold"
          class="text-right grow text-info dark:text-dark-info">
          120,930
        </p-text>
      </p-card>

      <div class="grid items-start grid-cols-8 col-span-6 mt-8 sm:items-center gap-y-2 sm:gap-y-0">
        <p-subheading
          weight="medium"
          class="col-span-8 sm:col-span-5 md:col-span-6">
          Activity summary
        </p-subheading>
        <p-select
          v-model="activity"
          class="col-span-8 sm:col-span-3 md:col-span-2"
          :options="options" />
      </div>

      <p-card
        class="col-span-3 md:col-span-2"
        body-class="px-4 space-y-2 sm:px-6"
        element="div">
        <pi-document-filled-24 class="text-info dark:text-dark-info" />
        <p-text
          variant="caption"
          weight="medium">
          Document Upload
        </p-text>
        <p-heading
          weight="medium"
          element="h6">
          777
        </p-heading>
      </p-card>
      <p-card
        class="col-span-3 md:col-span-2"
        body-class="space-y-2"
        element="div">
        <pi-signature-24 class="text-success dark:text-dark-success" />
        <p-text
          variant="caption"
          weight="medium">
          Signature placed
        </p-text>
        <p-heading
          weight="medium"
          element="h6">
          5
        </p-heading>
      </p-card>
      <p-card
        class="col-span-3 md:col-span-2"
        body-class="space-y-2"
        element="div">
        <pi-document-check-24 class="text-success/65 dark:text-dark-success" />
        <p-text
          variant="caption"
          weight="medium">
          Document reviewed
        </p-text>
        <p-heading
          weight="medium"
          element="h6">
          12
        </p-heading>
      </p-card>
      <p-card
        class="col-span-3 md:col-span-2"
        body-class="space-y-2"
        element="div">
        <pi-signature-text-24 class="text-warning/65 dark:text-dark-warning" />
        <p-text
          variant="caption"
          weight="medium">
          Seals placed
        </p-text>
        <p-heading
          weight="medium"
          element="h6">
          21
        </p-heading>
      </p-card>
      <p-card
        class="col-span-3 md:col-span-2"
        body-class="space-y-2"
        element="div">
        <pi-template-24 class="text-link dark:text-dark-link" />
        <p-text
          variant="caption"
          weight="medium">
          Document template used
        </p-text>
        <p-heading
          weight="medium"
          element="h6">
          321
        </p-heading>
      </p-card>
      <p-card
        class="col-span-3 md:col-span-2"
        body-class="space-y-2"
        element="div">
        <pi-user-groups-24 class="text-danger dark:text-dark-danger" />
        <p-text
          variant="caption"
          weight="medium">
          Employee account added
        </p-text>
        <p-heading
          weight="medium"
          element="h6">
          42
        </p-heading>
      </p-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineNavigation } from '@privyid/persona/core'

const items = defineNavigation([
  {
    text: 'Dashboard',
    href: '/',
  },
  {
    text  : 'All Documents',
    active: true,
  },
])

/**
 * Activity options
 */
const activity = ref('monthly')
const options  = ref([
  {
    text : 'This Month',
    value: 'monthly',
  },
  {
    text : 'This Week',
    value: 'weekly',
  },
  {
    text : 'This Day',
    value: 'daily',
  },
])
</script>
