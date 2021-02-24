<template>
  <div class="app">
    <MasterHeader></MasterHeader>
    <main class="main">
      <Container />
      <router-view />
    </main>
  </div>
</template>

<script>
import MasterHeader from '@/components/Header'

export default {
  name: 'App',
  components: {
    MasterHeader
  }
}
</script>

<style scoped>
.main {
  padding-top: 32px;
}
</style>
