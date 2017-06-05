<template>
  <div>
    <h3>Add new Employee</h3>
    <div>
      <input class="form-input" type="text" v-model="lastname" placeholder="Last name">
    </div>
    <div>
      <input class="form-input" type="text" v-model="firstname" placeholder="First name">
    </div>
    <div>
      <input class="form-input" type="text" v-model="middlename" placeholder="Middlename">
    </div>
    <div>
      <input class="form-input" type="text" v-model="address" placeholder="Address">
    </div>
    <button v-on:click="onSave">Save</button>
    <button v-on:click="onCancel">Cancel</button>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        firstname: '',
        middlename: '',
        lastname: '',
        address: ''
      }
    },
    methods: {
      onSave: function () {
        this.$store.dispatch('emp/register', this.$data)
          .then(({data}) => {
            if(data.result.ok == 1)
              this.resetInputFields()
          })
        .catch(error => alert(error.response.data))
      },
      onCancel: function () {
        this.$router.push({ name: 'emp-home' })
      },
      resetInputFields: function () {
        this.firstname = ''
        this.middlename = ''
        this.lastname = ''
        this.address = ''
      }
    }
  }
</script>

<style scoped>
  .form-input {
    width: 250px;
    margin-bottom: 10px;
  }
</style>
