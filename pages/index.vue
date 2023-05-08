<template>
  <div>
    <p-button @click="counter++">
      <pi-add-plus-16 />
      Counter: {{ counter }}
    </p-button>
  </div>
</template>

<script lang="ts" setup>
const counter = ref(0)
</script>
