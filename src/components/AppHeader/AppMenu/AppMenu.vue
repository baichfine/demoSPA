<template>
  <v-menu
    open-on-hover
    transition="scroll-y-transition"
    :close-on-content-click="false"
    openDelay="0"
    closeDelay="0"
    location-strategy="connected"
    content-class="navMenu"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        :class="classBtn"
        v-bind="props"
        :symbol="false"
        @mouseenter="emit('enter', index)"
        @mouseleave="emit('leave', $event)"
      >
        {{ type }}
      </v-btn>
    </template>
    <AppList
      v-once
      :items="items"
      @mouseleave="emit('leave', $event)"
    />
  </v-menu>
</template>

<script setup>
import AppList from './AppMenuList.vue'
const emit = defineEmits(['enter', 'leave'])
defineProps({
  type: String,
  items: Object,
  index: Number,
  classBtn: String,
})
</script>
