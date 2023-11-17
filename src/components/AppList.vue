<template>
  <v-card
    class="cardStyle"
    rounded="xl"
    elevation="3"
  >
    <AppGroup
      v-for="(item, index) in items"
      :key="item[0].title"
      :items="item"
      :index="index"
    ></AppGroup>
  </v-card>
</template>

<script setup>
import AppGroup from '../components/AppGroup.vue'

defineProps({
  items: Object,
})
</script>
