<template>
  <p-table-flex :fields="fields" />
</template>

<script lang="ts" setup>
import { defineTable } from '@privyid/persona/core'

interface User {
  id: number,
  name: string,
  _selectable?: boolean,
}

const fields = defineTable<User>([
  {
    key  : 'id',
    label: 'Id',
  },
  {
    key  : 'name',
    label: 'Name',
  },
])
</script>
