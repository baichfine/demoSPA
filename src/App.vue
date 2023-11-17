<template>
  <div>
    <div class="header">
      <div class="header2">
        <p class="logo">
          ТАТСОЦБАНК
          <img
            :src="logo"
            :alt="logo"
          />
        </p>

        <AppMenuBar
          type="Частным лицам"
          v-once
          :items="consts.ARR_PRIVATE_PERSON"
        ></AppMenuBar>

        <AppMenuBar
          type="Бизнесу"
          v-once
          :items="consts.ARR_BUSINESS"
        ></AppMenuBar>
        <AppMenuBar
          type="Еще"
          v-once
          :items="consts.ARR_BANK"
        ></AppMenuBar>
        <AppSearch></AppSearch>
        <AppPerson></AppPerson>
      </div>
    </div>
    <div class="body"></div>
  </div>
</template>

<script setup>
// import { useStore } from 'vuex'
import { consts } from '@/store/consts'
import logo from './scss/svg/logo.svg'
import AppMenuBar from './components/AppMenuBar.vue'
import AppSearch from './components/AppSearch.vue'
import AppPerson from './components/AppPerson.vue'

// const store = useStore()
</script>
