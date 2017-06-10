<template>
  <div class="login">
    <div id="auth_form1">
      <input type="text" name="user" v-model="user" placeholder="username">
      <input type="password" name="passwd" v-model="passwd" placeholder="password">
      <button v-on:click="onLogin">Login</button>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        user: '',
        passwd: ''
      }
    },
    methods: {
      onLogin: function () {
        console.log("do login procedure")
        this.$store.dispatch('user/login', this.$data)
          .then(() => {
            this.$router.push({ name: 'emp-home' })
          })
      }
    }
  }
</script>