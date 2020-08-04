<template>
  <div>
    <the-form accion="register" v-on:process="register($event)"></the-form>
    <div>{{h}}</div>
  </div>
</template>

<script>
import TheForm from "@/components/Formulario/TheForm.vue";
import { mapActions } from "vuex";

export default {
  name: "Register",
  components: {
    TheForm,
  },
  data() {
    return {
      queso: "hola",
      user: {
        email: "rmalan99@gmail.com",
        password: "123456",
      },
    };
  },
  computed: {
    h() {
      var m = this.$store.dispatch("pam");
      console.log(m);
    },
  },
  methods: {
    ...mapActions("authM", ["firebaseRegister", "pam"]),
    register(user) {
      // this.firebaseRegister
      //   .dispatch("firebaseRegister", user)
      //   .then((userRegistered) => {
      //     console.log(userRegistered);
      //   })
      //   .catch((err) => {});
    },
  },
};
</script>

<style lang="scss" scoped>
</style>