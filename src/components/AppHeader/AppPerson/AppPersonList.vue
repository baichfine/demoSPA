<template>
  <v-list>
    <v-list-item
      :prepend-icon="icon"
      :title="title"
      link
    >
    </v-list-item>
  </v-list>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
})
</script>
