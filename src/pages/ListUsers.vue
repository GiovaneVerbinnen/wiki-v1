<template>
  
  <section class="users-container">
      <button @click="getUser">Listar</button>
      <hr>
    <div class="q-pa-md row items-start q-gutter-md ">
        <ul v-for="user in users" :key="user.id" class="my-card">
            <li class=""> {{ user.id }} </li>
            <li class="img"> <img :src="user.avatar" alt=""></li>
            <li class="text-h6"><p> {{ user.email }}</p></li>
            <li class="text-subtitle"> <p> {{ user.first_name }} {{ user.last_name }}</p></li>
            <q-btn color="red" label="Excluir" icon="delete" /> 
            <q-btn color="warning" label="Editar" icon="create" /> 
        </ul>
    </div>

 <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-separator />

      <q-card-actions align="right">
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-purple text-white">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-actions align="around">
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-teal text-white">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-actions vertical align="right">
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-grey-8 text-white">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-actions vertical align="center">
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
  </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "ListUsers",
  data() {
    return {
      users: null
    };
  },
  methods: {
    getUser() {
      axios.get("https://reqres.in/api/users?page=1").then(r => {
        console.log(r)
        this.users = r['data'].data;
        console.log(r)
      });
    }
  },
  created() {
   // this.getUser();
  }

};
</script>

<style lang="scss" scoped>
    ul li {
        list-style: none;
    }
</style>

