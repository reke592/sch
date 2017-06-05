<template>
  <div>
    <div>
      <input class="form-input" type="text" v-model="employee.lastname" placeholder="Last name">
    </div>
    <div>
      <input class="form-input" type="text" v-model="employee.firstname" placeholder="First name">
    </div>
    <div>
      <input class="form-input" type="text" v-model="employee.middlename" placeholder="Middlename">
    </div>
    <div>
      <input class="form-input" type="text" v-model="employee.address" placeholder="Address">
    </div>
    <button v-on:click="onSave">Save</button>
    <button v-on:click="onDelete">Delete</button>
    <button v-on:click="onCloseForm">Cancel</button>
  </div>
</template>

<script>
export default {
  computed: {
    employee: function () {
      return this.$store.getters['emp/selected']
    }
  },
  mounted: function () {
    console.log('component ready : Edit.vue')
  },
  methods: {
    onSave: function () {
      console.log('save..')
    },
    onCloseForm: function () {
      this.$store.dispatch('emp/clearSelected')
        .then(() => this.$router.push({ name: 'emp-home' }))
    },
    onDelete: function () {
      this.$store.dispatch('emp/remove')
        .then(result => {
          let {ok, n} = result.data
          if(ok == 1 && n > 0) {
            // TODO::save deleted records in cache for undo function
            alert('The record has been deleted.')
          }
          this.onCloseForm()
        })
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