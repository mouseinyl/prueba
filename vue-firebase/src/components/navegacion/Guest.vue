<template>
  <div class="guest">
    <nav class>
      <div class="nav-wrapper Primario">
        <router-link to="/" class="mg-y-10 mg-mb-y-15 btn button-edit grey darken-3">Vue + firebase</router-link>
        <ul class="right">
          <li class>
            <router-link to="/Login" class="btn-flat white-text">{{$t('navigation.login')}}</router-link>
          </li>
          <li class>
            <router-link to="/Register" class="btn-flat white-text">{{$t('navigation.register')}}</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="row">
      <div class="top">
        <ul id="slide-out" class="sidenav">
          <li v-for="item in items" :key="item.id">
            <router-link :to="item.to">
              <i class="material-icons">{{item.icon}}</i>
              {{item.title}}
            </router-link>
          </li>
          <div class="divider"></div>
          <li>
            <a href="#!" class="sidenav-close">
              <i class="material-icons">arrow_back</i>
              {{$t("navigation.close_menu")}}
            </a>
          </li>
        </ul>
        <a href="#" data-target="slide-out" class="sidenav-trigger">
          <i class="material-icons">menu</i>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Guest",
  data() {
    return {
      items: [
        { title: this.$t("navigation.home"), icon: "home", to: "/" },
        { title: this.$t("navigation.login"), icon: "forward", to: "/Login" },
        {
          title: this.$t("navigation.register"),
          icon: "account_circle",
          to: "/register",
        },
      ],
    };
  },
  methods: {
    close() {},
  },
};
</script>

<style lang="scss" scoped>
@import "@/Stylos/Global-Var.scss";

.mg-y-10 {
  margin-left: 10%;
}
.button-edit {
  width: 150px;
}
.top {
  position: absolute;
  top: 20px;
  left: 30px;
}
@media #{$small-and-down} {
  .mg-mb-y-15 {
    margin-left: 15%;
  }
}
</style>
