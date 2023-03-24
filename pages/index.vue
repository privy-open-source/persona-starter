<template>
  <div>
    <p-button @click="counter++">
      Counter: {{ counter }}
    </p-button>
  </div>
</template>

<script lang="ts" setup>
const counter = ref(0)
</script>
