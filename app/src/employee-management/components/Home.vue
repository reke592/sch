<template>
  <div>
    <h3>Employee Management</h3>
    <button v-on:click="onAddNew">Add New</button>
    <div>
      <table border="1px solid gray" cellspacing="0" cellpadding="10px">
        <thead>
          <tr>
            <th colspan="4">Name</th>
            <th rowspan="2">Address</th>
          </tr>
          <tr>
            <th>?</th>
            <th>Last</th>
            <th>First</th>
            <th>Middle</th>   
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees">
            <td><button v-on:click="onSelect(employee)">edit</button></td>
            <td>{{ employee.lastname }}</td>
            <td>{{ employee.firstname }}</td>
            <td>{{ employee.middlename }}</td>
            <td>{{ employee.address }}</td>
          </tr>
        </tbody>
      </table>      
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    employees: function () {
      return this.$store.getters["emp/list"]
    }
  },
  mounted: function () {
    console.log('component ready : employee-management/Home.vue')
    this.$store.dispatch("emp/list")
  },
  methods: {
    onAddNew: function () {
      this.$router.push({ name: 'emp-registration' })
    },
    onSelect: function (employee) {
      this.$store.dispatch('emp/select', employee)
        .then(data => {
          this.$router.push({ name: 'emp-edit' })
        })
    }
  }
}
</script>
