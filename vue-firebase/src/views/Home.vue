<template>
  <div class="Home">
    <div class="row">
      <div
        class="col s10 m8 l8 offset-s1 offset-m2 offset-l2 grey lighten-3 valign-wrapper presentation-card mg-t10 mg-mb-t3"
      >
        <div class="col s12">
          <h3 class="col s12 center">{{ $t('welcome.title',{app:'Vuejs 2 + Firestore'})}}</h3>
          <p class="col s10 offset-s1 subtitle-1 center">{{ $t('welcome.content')}}</p>
          <div class="col s8 offset-s2 grey lighten-2 mg-yx-2"></div>
          <div class="col s10 offset-s1 center">{{ $t('welcome.call_to_action') }}</div>
          <div class="col s12 center mg-yx-2">
            <router-link to="/login" class="btn flat Primario">{{$t('welcome.action_button')}}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
@import "@/Stylos/Global-Var.scss";
.mg-t10 {
  margin-top: 5%;
}
.mg-yx-2 {
  margin-top: 2%;
  margin-bottom: 2%;
}
.mg-yx-4 {
  margin-top: 4%;
  margin-bottom: 4%;
}
.presentation-card {
  margin-bottom: 5%;
}
.aju {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.subtitle-1 {
  font-size: medium;
}
@media #{$small-and-down} {
  // styles for small screens and down
  .mg-mb-t3 {
    margin-top: 3%;
  }
}
</style>
