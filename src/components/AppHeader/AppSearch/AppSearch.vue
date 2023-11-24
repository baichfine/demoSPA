<template>
  <AppSearchField
    :search="search"
    @change-input="search.input.value = $event"
    v-model="valSearch"
  ></AppSearchField>
  <Teleport to="body">
    <AppSearchList v-show="search.input.result"></AppSearchList>
  </Teleport>
  <AppTooltipSearch :search="search"> </AppTooltipSearch>
  <AppTooltipEmpty v-model="search.input.emty"> </AppTooltipEmpty>
</template>

<script setup>
import { ref } from 'vue'
import { useSearch } from '@/use/search'
import AppSearchList from './AppSearchList.vue'
import AppSearchField from './AppSearchField.vue'
import AppTooltipSearch from './AppTooltipSearch.vue'
import AppTooltipEmpty from './AppTooltipEmpty.vue'

const required = (val) => !!val
const valSearch = ref()
const search = useSearch({
  input: {
    value: valSearch,
    validators: { required },
  },
})
</script>
