<template>
  <section class="users-container">
    <div class="q-pa-md row items-center q-gutter-md">
      <ul v-for="(user, index) in users" :key="user.id" class="my-card">
        <transition name="fade" mode="out-in">
          <div v-if="users.length == 0">Nada</div>
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
      </ul>
    </div>
    <div class="q-pa-lg flex flex-center">
      <q-pagination
        color="teal"
        v-model="current"
        :max="total_pages"
        @click="getUsers()"
      >
      </q-pagination>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import { Notify } from "quasar";
import Header from "../components/Header.vue";

export default {
  components: { Header },
  name: "EditUser",
  data() {
    return {
      users: null,
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
    getUsers() {
      axios
        .get(`https://reqres.in/api/users?page=${this.current}`)
        .then((r) => {
          console.log(r["data"]);
          this.users = r["data"].data;
          this.total_pages = r["data"].total_pages + 1;
        });
    },
    editUser() {
      console.log("--- Edit ---");
    },
    deleteUser(id, index) {
      this.deleted = this.users.slice(index, 1);
    },
  },
  created() {
    this.getUsers();
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
</style>

