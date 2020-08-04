"<template>
  <div id="app">
    <guest />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import TheToolbar from "@/components/TheToolbar.vue";
import Guest from "@/components/navegacion/Guest.vue";
import Footer from "@/components/Footer.vue";

export default {
  mounted() {
    M.AutoInit();
    console.log("hola");
  },
  components: {
    Guest,
    Footer,
  },
  methods: {
    // z() {
    //   M.toast({ html: "I am a toast" });
    // },
  },
};
</script>
<style lang="scss">
@import "@/Stylos/Global-Var.scss";
.Primario {
  background: $Color-principal !important;
}
</style>
