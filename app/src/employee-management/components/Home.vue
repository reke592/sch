<template>
  <div>
    <h3>Employee Management</h3>
    <button v-on:click="onAddNew">Add New</button>
  </div>
</template>

<script>
export default {
  mounted: function () {
    console.log('component ready : employee-management/Home.vue')
  },
  methods: {
    onAddNew: function () {
      this.$router.push({ name: 'emp-registration' })
    }
  }
}
</script>
