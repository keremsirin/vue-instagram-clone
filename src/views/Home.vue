<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style scoped>
  h1 {
    color: red;

    @media (--t) {
      color: blue;
    }
  }
</style>