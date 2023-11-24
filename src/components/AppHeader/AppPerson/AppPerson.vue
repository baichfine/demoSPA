<template>
  <v-menu
    :close-on-content-click="false"
    location="end"
    content-class="personalModal"
    transition="scroll-y-transition"
    open-on-hover
    openDelay="0"
    closeDelay="0"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        append-icon="$iconAccountTie"
        class="person"
        v-bind="props"
      >
        Личный кабинет
      </v-btn>
    </template>
    <AppPersonModal></AppPersonModal>
  </v-menu>
</template>

<script setup>
import AppPersonModal from './AppPersonModal.vue'
</script>
