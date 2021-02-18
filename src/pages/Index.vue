<template>
  <q-page class="flex justify-center">
    <h6 class="text-white text-h6">
      Clique em um dos Menus para Listar ou Cadastrar novos usuários!
    </h6>
    <div class="row">
      <img
        src="../assets/charts.svg"
        style="max-width: 800px; height: 400px"
        class=""
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      users: null,
    };
  },
};
</script>

<style scoped>
img {
  max-width: 100%;
}
</style>