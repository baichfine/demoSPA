<template>
  <v-list
    v-once
    :items="items"
  ></v-list>
  <v-divider
    v-if="items[0].title !== 'Полезное'"
    vertical
    inset
  ></v-divider>
</template>

<script setup>
defineProps({
  items: Object,
  index: Number,
})
</script>
