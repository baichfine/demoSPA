<template>
  <v-tooltip
    :open-on-hover="search.input.active ? false : true"
    :activator="search.input.active ? '' : search.input.onHoverIcon()"
    location="bottom"
    text="Поиск"
    content-class="searchTooltip"
  >
  </v-tooltip>
</template>

<script setup>
defineProps({
  search: Object,
})
</script>
