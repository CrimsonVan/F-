<template>
  <layoutNav></layoutNav>
  <layoutHeader></layoutHeader>
  <RouterView />
  <layoutFooter></layoutFooter>
</template>
<script setup>
import layoutNav from './component/layoutNav.vue'
import layoutHeader from './component/layoutHeader.vue'
import layoutFooter from './component/layoutFooter.vue'
</script>
<style lang="scss" scoped></style>
