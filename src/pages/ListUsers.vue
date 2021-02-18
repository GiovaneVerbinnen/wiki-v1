<template>
  <section class="row">
    <!-- <div
      v-if="this.users.length === 0"
      class="text-h5 text-white q-pa-md items-center"
      style="width: 100vw"
    >
      <p class="text-center">Não existem resultados 😥</p>
    </div> -->

    <div v-for="(user, index) in users" :key="user.id" class="q-pa-md">
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <q-card class="my-card">
          <q-item>
            <q-item-section avatar>
              <q-avatar>
                <img :src="user.avatar" alt="" class="rounded-borders" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label
                >{{ user.id }} • {{ user.first_name }}
                {{ user.last_name }}</q-item-label
              >
              <q-item-label caption>{{ user.email }}</q-item-label>
              <q-item-label caption>
                <q-badge outline color="orange" :label="user.id"
              /></q-item-label>
            </q-item-section>
          </q-item>
          <q-card-actions align="around">
            <q-btn
              @click="deleteUser(user.id, index)"
              color="red"
              label="Excluir"
              icon="delete"
              flat
            />
            <q-btn color="warning" label="Editar" icon="create" flat />
          </q-card-actions>
        </q-card>
      </transition>
    </div>
    <!-- NOT WORKING YET -->
    <!-- <div v-else class="q-pa-md flex flex-center">
      <q-circular-progress
        reverse
        indeterminate
        size="50px"
        color="light-blue"
        class="q-ma-md"
      />
    </div> -->
    <!-- <div class="q-pa-md" v-else>
      <q-card style="max-width: 300px">
        <q-item>
          <q-item-section avatar>
            <q-skeleton type="QAvatar" />
          </q-item-section>

          <q-item-section>
            <q-item-label>
              <q-skeleton type="text" />
            </q-item-label>
            <q-item-label caption>
              <q-skeleton type="text" />
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-card-actions align="right" class="q-gutter-md">
          <q-skeleton type="QBtn" />
          <q-skeleton type="QBtn" />
        </q-card-actions>
      </q-card>
    </div> -->

    <!-- PAGINATION -->
    <!-- <div class="pagination">
      <q-pagination
        color="blue-10"
        v-model="current"
        :max="total_pages"
        @click="data()"
      >
      </q-pagination>
    </div> -->
  </section>
</template>
<script>
import axios from "axios";
import { Notify } from "quasar";
import Header from "../components/Header.vue";

export default {
  name: "ListUsers",
  created() {
    this.DB();
    this.populateDB();
  },
  data() {
    return {
      users: [],
      user: {},
      erroResponse: false,
      current: 1,
      total_pages: 1,
      deleted: [],
      framework: {
        plugins: ["Notify"],
        config: {
          notify: {
            /* look at QUASARCONFOPTIONS from the API card (bottom of page) */
          },
        },
      },
    };
  },
  methods: {
    DB() {
      var DB = window.localStorage;
      console.log("==- Definindo armazenamento -==");
    },
    populateDB() {
      axios
        .get(`https://reqres.in/api/users?page=1`)
        .then((r) => {
          var raw = r["data"];
          console.log("==- populando banco -==");
          // localStorage.setItem(raw.data[0].id, raw.data[0].email);
          localStorage.setItem("users", JSON.stringify(raw.data));
          var newUser = { email: "giovane", id: "9" };
          this.users = JSON.parse(localStorage.getItem("users"));
          // localStorage.setItem(
          //   "newUser",
          //   JSON.stringify(newUser)
          // );
          this.users.push(newUser);
          console.log(this.users);
          localStorage.setItem("users", JSON.stringify(this.users));
          for (this.user in this.users) {
          }
          // localStorage.setItem (this.r.data.name)
          //  DB.setItem(this.r.data.id, this.r.data.name)
        })
        .catch((error) => {
          if (error.response) {
            this.erroResponse = true;
            console.log(
              "Ocorreu um erro no carregamento :/",
              error.response.data
            );
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
          console.log(error.config);
        });
    },
    editUser() {
      console.log("--- Edit ---");
    },
    deleteUser(id, index) {
      index = parseInt(index);
      console.log("--- deletando user ---");
      console.log(this.users.splice(index, 1));
      this.$q.notify({
        message: `Usuário de id: ${id} deletado! ⚰️`,
        color: "negative",
      });
      console.log(id, ("index: ", index), this.users);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-enter-active {
  transition: all 0.3s;
}
.v-enter {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}
ul li {
  list-style: none;
}
ul {
  margin: 0;
  padding: 0;
}
.users-container {
  max-width: 100vw;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.pagination {
  margin: 0 auto;
}
.my-card {
  width: 250px;
}
</style>

