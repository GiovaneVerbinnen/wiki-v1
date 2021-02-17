<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Seu nome"
        hint="Digite seu nome"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Não pode ser vazio']"
      />
      <q-input
        filled
        v-model="job"
        label="Seu Trabalho"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Não pode ser vazio']"
      />

      <div>
        <q-btn label="Enviar" type="submit" color="primary" />
        <q-btn
          label="Limpar"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
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

  data() {
    return {
      name: null,
      job: null,
    };
  },

  methods: {
    onSubmit() {},

    onReset() {
      this.name = null;
      this.job = null;
    },
  },
};
</script>


export default {
   components: { Header, },
  name: "ListUsers",
  data() {
    return {
      users: null,
      current: 1,
      total_pages: 1,
      deleted: [],
      framework: {
        plugins: [
          'Notify'
        ],
        config: {
          notify: { /* look at QUASARCONFOPTIONS from the API card (bottom of page) */ }
        }
      }
    };
    
  },
  methods: {
    getUsers() {
        axios.get(`https://reqres.in/api/users?page=${this.current}`).then(r => {
          console.log(r['data']);
          this.users = r['data'].data;
          this.total_pages = r['data'].total_pages + 1;
        });
    },
    editUser() {
       console.log("--- Edit ---")
    },
    deleteUser(id, index) {
      this.deleted = this.users.slice(index, 1);
    }
  },

<style lang="scss" scoped>
.v-enter-active {
  transition: all 0.3s;
}
.v-enter {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}
</style>

