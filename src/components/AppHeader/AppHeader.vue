<template>
  <div class="header">
    <div class="header2">
      <AppLogo></AppLogo>
      <AppMenu
        v-for="(item, index) in menu.nav.statics"
        :key="index"
        :items="item"
        :type="menu.nav.names[index]"
        :index="index"
        :classBtn="menu.nav.classes[index]"
        @enter="menu.nav.onEnterMenu"
        @leave="menu.nav.onLeaveMenu"
      >
      </AppMenu>
      <AppSearch></AppSearch>
      <AppPerson></AppPerson>
    </div>
  </div>
</template>

<script setup>
import AppLogo from './AppLogo.vue'
import AppMenu from './AppMenu/AppMenu.vue'
import AppSearch from './AppSearch/AppSearch.vue'
import AppPerson from './AppPerson/AppPerson.vue'
import { useNavMenu } from '@/use/navMenu'

const menu = useNavMenu({
  nav: {},
})
</script>
