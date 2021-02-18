<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
<style scoped>
#q-app {
  /*
    background: #000428;  
    background: -webkit-linear-gradient(to bottom, #004e92, #000428);  
    background: linear-gradient(to bottom, #004e92, #000428);
  */
  background: linear-gradient(to top, #00d2ff, #3a7bd5);
}
</style>