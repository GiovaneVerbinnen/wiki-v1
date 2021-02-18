<template>
  <q-layout view="lHh lpr lFf">
    <q-page-container>
      <Header />
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from "../components/Header";
export default {
  components: { Header },
  name: "MainLayout",
  data() {
    return {};
  },
};
</script>

<style>
</style>
