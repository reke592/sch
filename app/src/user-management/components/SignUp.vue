<template>
	<div>
		Sign Up
		<div>
			<label for="username">Username:</label>
			<input type="text" v-model="user" :class="{ error: error.user }">
		</div>
		<div>
			<label for="password">Password:</label>
			<input type="text" v-model="pass" :class="{ error: error.pass }">
		</div>
		<div>
			<button v-on:click="onSubmit">Submit</button>
		</div>
	</div>
</template>

<script>
	export default {
		data: function () {
			return {
				user: '',
				pass: '',
				error: {}
			}
		},
		mounted: function () {
			console.log('component ready : SignUp')
		},
		methods: {
			onSubmit: function () {
				this.$store.dispatch('user/signUp', this.$data)
					.catch(error => {
						this.error = error
					})
			}
		}
	}
</script>

<style scoped>
	.error {
		background-color: red;
	}
</style>