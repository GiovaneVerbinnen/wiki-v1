<template>
  <q-page class="flex flex-start">
    <Header />
    <ListUsers />
  </q-page>
</template>

<script>
import ListUsers from "../pages/ListUsers.vue";
import Header from "../components/Header.vue";
export default {
  components: { ListUsers, Header },
  name: "PageIndex",
  data() {
    return {
      users: null,
    };
  },
};
</script>

<style scoped>
main {
  /*
    background: #000428;  
    background: -webkit-linear-gradient(to bottom, #004e92, #000428);  
    background: linear-gradient(to bottom, #004e92, #000428);
  */

  background: linear-gradient(to top, #00d2ff, #3a7bd5);
}
</style>