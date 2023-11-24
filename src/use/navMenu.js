import { reactive, ref } from 'vue'
import { consts } from '@/store/consts'

function createObj() {
  //Attributes
  const classes = ref(consts.ARR_CLASS_NAME_MENU)
  const names = ref(consts.ARR_NAME_MENU)
  const statics = ref([
    consts.ARR_PRIVATE_PERSON,
    consts.ARR_BUSINESS,
    consts.ARR_BANK,
  ])

  //Functions
  const onEnterMenu = (index) => {
    if (classes.value[index] !== 'navBtn activeBtn')
      for (let i = 0; i < consts.ARR_CLASS_NAME_MENU.length; i++) {
        if (i !== index) classes.value[i] = 'navBtn unactiveBtn'
        else classes.value[index] = 'navBtn activeBtn'
      }
  }
  const onLeaveMenu = (e) => {
    if (e.relatedTarget !== document.querySelector('.v-menu .navMenu'))
      for (let i = 0; i < consts.ARR_CLASS_NAME_MENU.length; i++) {
        classes.value[i] = 'navBtn'
      }
  }

  return {
    classes,
    names,
    statics,
    onEnterMenu,
    onLeaveMenu,
  }
}
export function useNavMenu(init = {}) {
  const menu = reactive({})

  for (const [key] of Object.entries(init)) {
    menu[key] = createObj()
  }
  return menu
}
