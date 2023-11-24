import { reactive, ref, computed } from 'vue'
import { useTheme } from 'vuetify'
import { useStore } from 'vuex'
import { consts } from '@/store/consts'

function createObj() {
  //Attributes
  const theme = useTheme()
  const store = useStore()
  const persons = ref(consts.ARR_PERSON_NAME)
  const icons = ref(consts.ARR_PERSON_ICON)
  const stTheme = computed(() => store.getters.stTheme)

  //Functions
  const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark
      ? 'myCustomLightTheme'
      : 'myCustomDarkTheme'
    store.commit(consts.SET_STATE_THEME, {
      value: !stTheme.value,
    })
    console.log(stTheme.value)
    console.log(store.getters.stTheme)
  }
  return {
    persons,
    icons,
    stTheme,
    toggleTheme,
  }
}
export function usePersonMenu(init = {}) {
  const menu = reactive({})

  for (const [key] of Object.entries(init)) {
    menu[key] = createObj()
  }
  return menu
}
