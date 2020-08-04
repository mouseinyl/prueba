<template>
  <div class="row">
    <div class="col s12">
      <div class="col l8 offset-l2">
        <div class="col s12 green lighten-2 center">
          <h3>{{$t(`${accion}.title`)}}</h3>
        </div>
        <div v-if="accion!=''">
          <div class="col s8 offset-s2 input-field">
            <i class="material-icons prefix">account_circle</i>
            <div
              :class="['error green-text grey darken-2']"
              v-if="validar_email==false && email!=''"
            >
              <span>{{$t('validations.email')}}</span>
            </div>
            <input id="User" type="text" v-model="email" name="email" />

            <label for="User">{{$t('auth.email')}}</label>
          </div>

          <div class="col s8 offset-s2 input-field">
            <i class="material-icons prefix">vpn_key</i>
            <div
              :class="['error green-text grey darken-2']"
              v-if="validar_password!=true && password!=''"
            >
              <span>{{$t("validations.minLength", { field: "Password", length: 6 })}}</span>
            </div>
            <input id="Password" type="password" v-model="password" name="password" />
            <label for="Password">{{$t('auth.password')}}</label>
          </div>
          <div class="col s8 offset-s2 input-field" v-if="accion=='register'">
            <i class="material-icons prefix">vpn_key</i>
            <div
              :class="['error green-text grey darken-2']"
              v-if="validar_password_confirmation!=true && password_confirmation!=''"
            >
              <span>{{$t('validations.password_confirmation')}}</span>
            </div>
            <input
              id="Password_confirmation"
              type="password"
              v-model="password_confirmation"
              name="password_confimation"
            />
            <label for="Password_confirmation">{{$t('auth.password_confirmation')}}</label>
          </div>

          <div class="col s12 center">
            <button :class="['btn',validado]" @click="submit">{{$t(`${accion}.submit`)}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheForm",
  props: {
    accion: {
      require: false,
      type: String,
    },
  },
  data() {
    return {
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    submit() {
      this.$emit("process", { email: this.email, password: this.password });
    },
  },
  computed: {
    validado() {
      if (this.valid) {
        return "blue";
      } else {
        return "disabled";
      }
    },
    validar_email() {
      var email = this.email;
      var Regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      console.log(Regex.test(email));
      return Regex.test(email);
    },
    validar_password() {
      if (this.password.length != 6) {
        return false;
      } else {
        return true;
      }
    },
    validar_password_confirmation() {
      if (this.validar_password) {
        if (this.password === this.password_confirmation) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    valid() {
      if (this.accion == "register") {
        if (
          this.validar_email &&
          this.validar_password &&
          this.validar_password_confirmation
        ) {
          return true;
        }
      } else {
        if (this.validar_email && this.validar_password) {
          return true;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-size: x-large;
  font-weight: 600;
}
.error {
  position: absolute;
  right: -10%;
  padding: 5px;
  border: 0px;
  border-radius: 5px;
  text-align: center;
  font-weight: 600;
}
</style>