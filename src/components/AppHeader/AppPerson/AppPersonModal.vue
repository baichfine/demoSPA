<template>
  <v-card
    rounded="lg"
    elevation="5"
  >
    <AppPersonTheme
      @changeTheme="menu.modal.toggleTheme"
      :theme="menu.modal.stTheme"
    >
    </AppPersonTheme>
    <AppPersonList
      v-for="(item, index) in menu.modal.persons"
      :key="index"
      :title="item"
      :icon="menu.modal.icons[index]"
    >
    </AppPersonList>
  </v-card>
</template>

<script setup>
import AppPersonList from './AppPersonList.vue'
import AppPersonTheme from './AppPersonTheme.vue'
import { usePersonMenu } from '@/use/personMenu'

const menu = usePersonMenu({
  modal: {},
})
</script>
