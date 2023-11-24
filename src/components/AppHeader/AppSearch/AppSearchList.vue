<template>
  <v-expand-transition>
    <v-card
      rounded="lg"
      elevation="5"
      class="cardStyle searchResult overflow-auto"
    >
      <v-list>
        <v-list-item
          v-for="item in consts.ARR_SEARCH"
          :title="item.title"
          :subtitle="item.subtitle"
          :key="item"
          link
        ></v-list-item>
      </v-list>
    </v-card>
  </v-expand-transition>
</template>

<script setup>
import { consts } from '@/store/consts'
</script>
