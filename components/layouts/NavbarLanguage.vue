<template>
  <span class="flex items-center">
    <span class="space-x-2 grow">
      <pi-translates-20 class="inline-block" />
      <span>Language</span>
    </span>
    <span class="space-x-2 shrink-0">
      <template
        v-for="(lang, id) in languages"
        :key="id">
        <p-radio
          v-model="selected"
          appearance="none"
          class="radio--switch"
          :value="lang.value">
          <template #default="{ isChecked }">
            <p-card
              element="div"
              style="--p-card-border: transparent; --p-card-border-dark: transparent;"
              :class="{ 'radio--switch__active': isChecked }"
              sectioned>
              {{ lang.text }}
            </p-card>
          </template>
        </p-radio>
      </template>
    </span>
  </span>
</template>

<script lang="ts" setup>
import { useLang } from '@privyid/persona/core'
/**
 * Switch language
 */
const languages = ref([{ text: 'ID', value: 'id' }, { text: 'EN', value: 'en' }])
const selected  = useLang()

</script>
