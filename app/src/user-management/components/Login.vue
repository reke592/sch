<template>
  <div class="login">
    <div id="auth">
      <div v-if="error">
        <span class="error">{{ error }}</span>
      </div>
      <div>
        <input type="text" name="user" v-model="user" placeholder="username">
      </div>
      <div>
        <input type="password" name="pass" v-model="pass" placeholder="password">
      </div>
      <button v-on:click="onLogin">Login</button>
      <router-link to='/user/signup'>Sign Up</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        user: '',
        pass: '',
        error: ''
      }
    },
    methods: {
      onLogin: function () {
        console.log("do login procedure")
        this.$store.dispatch('user/login', this.$data)
          .then(() => {
            this.$router.push({ name: 'emp-home' })
          })
          .catch((error) => {
            this.error = error
          })
      }
    }
  }
</script>

<style scoped>
  .error {
    color: red;
    font-size: 9pt;
  }
</style>