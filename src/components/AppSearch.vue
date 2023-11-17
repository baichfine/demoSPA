<template>
  <v-tooltip
    v-model="searchEmpty"
    location="top"
    ><span>Пустой текст запроса!</span>
  </v-tooltip>
  <v-tooltip
    :open-on-hover="active ? false : true"
    :activator="onHoverIcon()"
    location="bottom"
    text="Поиск"
    width="auto"
    eager
  >
  </v-tooltip>
  <v-text-field
    :modelValue="valSearch"
    :class="active ? 'search' : 'search hide'"
    :trim="valSearch"
    :loading="loading"
    persistent-hint
    ref="input"
    density="default"
    variant="solo-filled"
    base-color="colorFontMain"
    append-inner-icon="mdi-magnify"
    clear-icon="mdi-close"
    autocomplete="off"
    placeholder="Введите запрос"
    hide-details
    single-line
    clearable
    v-click-outside="{
      handler: onClickOutside,
      closeConditional: onCloseConditional,
    }"
    @input="valSearch = $event.target.value"
    @click:clear="clearSearch"
    @keyup.enter="startSearch"
    @click:append-inner="startSearch"
  ></v-text-field>
</template>
<script setup>
import { useStore } from 'vuex'
import { consts } from '@/store/consts'
import { computed, ref } from 'vue'

const store = useStore()
const input = ref()
const active = ref(false)
const clickOutsideEnabled = ref(false)
const loading = ref(false)
const searchEmpty = ref(false)

const valSearch = computed({
  get() {
    return store.getters.valSearch
  },
  set() {
    store.commit(consts.SET_VALUE_SEARCH, {
      value: input.value.modelValue,
    })
  },
})
function clearSearch() {
  store.commit(consts.SET_VALUE_SEARCH, {
    value: '',
  })
  console.log('  ' + 'clearSearch')
}
function startSearch() {
  if (valSearch.value !== '' && active.value === true) {
    loading.value = true
    searchEmpty.value = false
    setTimeout(() => {
      loading.value = false
      clickOutsideEnabled.value = true
    }, 2000)
  } else if (active.value) searchEmpty.value = true
  else {
    active.value = true
    clickOutsideEnabled.value = true
  }
  console.log('startSearch')
}
function onClickOutside() {
  clickOutsideEnabled.value = false
  searchEmpty.value = false
  active.value = false
  console.log('onClickOutside')
}
function onCloseConditional() {
  console.log(clickOutsideEnabled.value + '  onCloseConditional ')

  return clickOutsideEnabled.value
}
function onHoverIcon() {
  console.log(document.querySelector('.v-field__append-inner'))
  return active.value === false
    ? document.querySelector('.v-field__append-inner')
    : ''
}
</script>
