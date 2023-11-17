<template>
  <v-menu
    open-on-hover
    transition="slide-y-transition"
    :close-on-content-click="false"
    :openDelay="0"
    :closeDelay="0"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        class="menubtn"
        color="background"
        v-bind="props"
        :symbol="false"
      >
        {{ type }}
      </v-btn>
    </template>
    <AppList
      v-once
      :items="items"
    />
  </v-menu>
</template>

<script setup>
import AppList from '../components/AppList.vue'

defineProps({
  type: String,
  items: Object,
})
</script>
