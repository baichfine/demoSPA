<template>
  <v-tooltip
    v-model="search.input.emty"
    location="bottom"
    text="Пустой текст запроса!"
  >
  </v-tooltip>
  <v-tooltip
    :open-on-hover="search.input.active ? false : true"
    :activator="search.input.active ? '' : search.input.onHoverIcon()"
    location="bottom"
    text="Поиск"
  >
  </v-tooltip>
  <v-text-field
    :modelValue="search.input.value"
    :trim="search.input.value"
    :loading="search.input.loading"
    :class="search.input.active ? 'search' : 'search hide'"
    persistent-hint
    v-model="valSearch"
    density="default"
    variant="solo-filled"
    base-color="colorFontMain"
    autocomplete="off"
    placeholder="Введите запрос"
    hide-details
    single-line
    append-inner-icon="mdi-magnify"
    clearable
    clear-icon="mdi-close"
    v-click-outside="{
      handler: search.input.onClickOutside,
      closeConditional: search.input.onCloseConditional,
    }"
    @input="search.input.value = $event.target.value"
    @click:clear="search.input.clearSearch"
    @click:append-inner="search.input.startSearch"
    @keyup.enter="search.input.startSearch"
  ></v-text-field>
</template>

<script setup>
import { ref } from 'vue'
import { useSearch } from '@/use/search'

const required = (val) => !!val
const valSearch = ref()
const search = useSearch({
  input: {
    value: valSearch,
    validators: { required },
  },
})
</script>
