<template>
  <div id="app">
    <Quote />
  </div>
</template>

<script>
import Quote from './components/Quote'

export default {
  name: "app",
  components: {
    Quote
  }
}
</script>

<style>
body {
  background: url("assets/wallpaper.jpg") no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;
}
</style>
