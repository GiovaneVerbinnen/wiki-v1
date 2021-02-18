<template>
  <div class="q-pa-md container" style="max-width: 400px">
    <q-form @reset="onReset" class="q-gutter-md" style="width: 350px">
      <q-input
        color="black"
        bg-color="white"
        filled
        v-model="name"
        label="Seu nome"
        hint="Digite seu nome"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Não pode ser vazio']"
      />
      <q-input
        color="black"
        bg-color="white"
        filled
        v-model="job"
        label="Seu Trabalho"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Não pode ser vazio']"
      />

      <div>
        <q-btn label="Enviar" color="primary" @click="Submit()" />
        <q-btn label="Limpar" type="reset" color="white" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script>
import axios from "axios";
import { Notify } from "quasar";
import Header from "../components/Header.vue";

export default {
  components: { Header },
  name: "CreateUser",
  created() {},
  data() {
    return {
      name: null,
      job: null,
      user: null,
    };
  },

  methods: {
    Submit() {
      var users = [];
      users = localStorage.getItem("users");
      console.log("users: ", JSON.parse(users), typeof users);

      users.push(9, this.name);
      localStorage.setItem("users", JSON.stringify(this.users));
      console.log("new: ", JSON.parse(this.users));
    },

    onReset() {
      this.name = null;
      this.job = null;
    },
  },
};
</script>


<style lang="scss" scoped>
.container {
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-self: start;
  align-items: center;
}
.v-enter-active {
  transition: all 0.3s;
}
.v-enter {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}
</style>

