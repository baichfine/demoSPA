<template>
  <v-text-field
    :modelValue="search.input.value"
    :trim="search.input.value"
    :loading="search.input.loading"
    :class="search.input.active ? 'search' : 'search hide'"
    persistent-hint
    density="default"
    variant="solo-filled"
    autocomplete="off"
    placeholder="Введите запрос"
    hide-details
    single-line
    append-inner-icon="$iconMagnify"
    clearable
    clear-icon="mdi-close"
    v-click-outside="{
      handler: search.input.onClickOutside,
      closeConditional: search.input.onCloseConditional,
    }"
    @input="emit('change-input', $event.target.value)"
    @click:clear="search.input.clearSearch"
    @click:append-inner="search.input.startSearch"
    @keyup.enter="search.input.startSearch"
  >
  </v-text-field>
</template>

<script setup>
const emit = defineEmits(['change-input'])

defineProps({
  search: Object,
})
</script>
