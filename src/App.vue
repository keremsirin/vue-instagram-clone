<template>
  <div class="app">
    <MasterHeader></MasterHeader>
    <router-view />
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
