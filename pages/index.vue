<template>
  <div class="p-6">
    <p-breadcrumb :items="items" />
  </div>
  <div class="p-6">
    <div class="grid gap-6 px-6 mb-8 xl:px-44 lg:px-8">
      <p-subheading weight="medium">General</p-subheading>
      <p-card element="div" body-class="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 gap-y-4">
        <div>
          <div class="flex items-center justify-center w-24 h-24 mb-4 border rounded-full">
            <img src="~/assets/images/logo-privy.svg" alt="">
          </div>
          <p-heading element="h6" weight="medium" class="mb-2">
            PT Privy Identitas digital
          </p-heading>
          <p-text variant="body2" class="text-subtlest dark:text-dark-subtlest">
            Admin
          </p-text>
        </div>
        <div class="flex flex-col">
          <span class="block px-0 py-2 md:px-3">
            <p-text variant="caption" class="block mb-1 text-subtlest dark:text-dark-subtlest">
              Enterprise ID
            </p-text>
            <p-text variant="body2">
              KC059012
            </p-text>
          </span>
          <span class="block px-0 py-2 md:px-3">
            <p-text variant="caption" class="block mb-1 text-subtlest dark:text-dark-subtlest">
              Address
            </p-text>
            <p-text variant="body2">
              Jalan Lele sumargo No II Block IV Cluster melati K.H Dewantara, Sewon, Bantul, Yogyakarta, Indonesia
            </p-text>
          </span>
          <p-button variant="link" color="info" class="ml-auto">Edit</p-button>
        </div>
      </p-card>

      <div class="grid grid-cols-1 gap-6 mb-16 md:grid-cols-2">
        <div class="grid grid-cols-2 gap-x-6">
          <p-card element="div" body-class="flex flex-col space-y-2 sm:items-center sm:space-x-3 sm:flex-row" style="--p-card-padding-x:1rem; --p-card-padding-y:1rem;">
            <p-text variant="caption" weight="medium">Privy Balance</p-text>
            <p-text variant="body" weight="bold" class="sm:text-right grow text-info dark:text-dark-info">120,930</p-text>
          </p-card>
          <p-card element="div" body-class="flex flex-col space-y-2 sm:items-center sm:space-x-3 sm:flex-row" style="--p-card-padding-x:1rem; --p-card-padding-y:1rem;">
            <p-text variant="caption" weight="medium">e-Materai</p-text>
            <p-text variant="body" weight="bold" class="sm:text-right grow text-info dark:text-dark-info">120,930</p-text>
          </p-card>
        </div>
        <p-card element="div" body-class="flex items-center w-full space-x-3" class="flex flex-1" style="--p-card-padding-x:1rem; --p-card-padding-y:1rem;">
          <p-text variant="caption" weight="medium">Employess Account</p-text>
          <p-text variant="body" weight="bold" class="text-right grow text-info dark:text-dark-info">120,930</p-text>
        </p-card>
      </div>

      <div class="flex flex-col space-y-4 md:space-y-0 sm:flex-row sm:items-center sm:justify-between">
        <p-subheading weight="medium">Activity summary</p-subheading>
        <p-select
          v-model="activity"
          :options="options" />
      </div>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <p-card body-class="space-y-2">
          <pi-document-filled-24 class="text-info dark:text-dark-info" />
          <p-text variant="caption" weight="medium">Document Upload</p-text>
          <p-heading weight="medium" element="h6">777</p-heading>
        </p-card>
        <p-card body-class="space-y-2">
          <pi-signature-24 class="text-success dark:text-dark-success" />
          <p-text variant="caption" weight="medium">Signature placed</p-text>
          <p-heading weight="medium" element="h6">5</p-heading>
        </p-card>
        <p-card body-class="space-y-2">
          <pi-document-check-24 class="text-success/65 dark:text-dark-success" />
          <p-text variant="caption" weight="medium">Document reviewed</p-text>
          <p-heading weight="medium" element="h6">12</p-heading>
        </p-card>
        <p-card body-class="space-y-2">
          <pi-signature-text-24 class="text-warning/65 dark:text-dark-warning" />
          <p-text variant="caption" weight="medium">Seals placed</p-text>
          <p-heading weight="medium" element="h6">21</p-heading>
        </p-card>
        <p-card body-class="space-y-2">
          <pi-template-24 class="text-link dark:text-dark-link" />
          <p-text variant="caption" weight="medium">Document template used</p-text>
          <p-heading weight="medium" element="h6">321</p-heading>
        </p-card>
        <p-card body-class="space-y-2">
          <pi-user-groups-24 class="text-danger dark:text-dark-danger" />
          <p-text variant="caption" weight="medium">Employee account added</p-text>
          <p-heading weight="medium" element="h6">42</p-heading>
        </p-card>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts" setup>
const counter = ref(0)
import { defineNavigation } from '@privyid/persona/core'

const items = defineNavigation([
  {
    text: 'Dashboard',
    href: '/'
  },
  {
    text  : 'All Documents',
    active: true
  }
])

/**
 * Activity options
 */
const activity = ref('monthly')
const options = ref([
  {
    text: 'This Month',
    value: 'monthly'
  },
  {
    text: 'This Week',
    value: 'weekly'
  },
  {
    text: 'This Day',
    value: 'daily'
  }
])
</script>
