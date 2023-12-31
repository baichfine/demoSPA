import { reactive, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { consts } from '@/store/consts'

function createObj(field) {
  const store = useStore()
  //Attributes
  const value = computed({
    get() {
      return store.getters.valSearch
    },
    set() {
      store.commit(consts.SET_VALUE_SEARCH, {
        value: field.value,
      })
      emty.value = false
    },
  })
  const active = ref(false)
  const loading = ref(false)
  const clickOutTrue = ref(false)
  const emty = ref(false)
  const result = ref(false)

  //Functions
  const startSearch = () => {
    if (value.value !== '' && active.value) {
      loading.value = true
      emty.value = false
      setTimeout(() => {
        loading.value = false
        clickOutTrue.value = true
        result.value = true
      }, 2000)
    } else if (active.value) emty.value = true
    active.value = true
    clickOutTrue.value = true
  }
  const clearSearch = () => {
    store.commit(consts.SET_VALUE_SEARCH, {
      value: '',
    })
    result.value = false
  }
  const onClickOutside = () => {
    clickOutTrue.value = false
    emty.value = false
    active.value = false
    result.value = false
  }
  const onCloseConditional = () => {
    return clickOutTrue.value
  }
  const onHoverIcon = () => {
    return document.querySelector('.v-field__append-inner')
  }

  return {
    value,
    active,
    loading,
    emty,
    result,
    startSearch,
    clearSearch,
    onClickOutside,
    onCloseConditional,
    onHoverIcon,
  }
}

export function useSearch(init = {}) {
  const search = reactive({})

  for (const [key, value] of Object.entries(init)) {
    search[key] = createObj(value)
  }
  return search
}
