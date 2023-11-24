<template>
  <v-list>
    <v-list-item
      title="Интернет-банк"
      prepend-icon="$iconBank"
    >
      <template v-slot:append>
        <v-btn
          variant="text"
          :icon="theme ? '$iconDark' : '$iconLight'"
          @click="emit('changeTheme')"
        ></v-btn>
      </template>
    </v-list-item>
  </v-list>
  <v-divider></v-divider>
</template>

<script setup>
const emit = defineEmits(['changeTheme'])
defineProps({
  theme: Boolean,
})
</script>
