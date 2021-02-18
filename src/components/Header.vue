<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn flat icon="account_box" label="Wiki Crud" to="/" />
      <q-tabs
        v-model="tab"
        flat
        align="center"
        class="bg-primary text-white"
        :breakpoint="0"
      >
        <q-route-tab exact to="View" name="View" label="Listar" />
        <q-route-tab exact to="Create" name="Create" label="Cadastrar" />
      </q-tabs>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      tab: "",
      text: "",
    };
  },
};
</script>

<style>
</style>