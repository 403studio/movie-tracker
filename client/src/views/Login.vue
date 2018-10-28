<template>
  <div>
    <h1>Login</h1>
    <input type="email" v-model="email" placeholder="Email" /><br/>
    <input type="password" v-model="password" placeholder="Password" /><br/>
    <div>{{ error }}</div>
    <button @click="login">Login</button>
  </div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
  data () {
    return {
      email: '1',
      password: '2',
      error: ''
    }
  },
  methods: {
    async login () {
      try {
        const { data } = await UserService.login({
          email: this.email,
          password: this.password
        })
        this.error = ''
        const user = data.result.user
        const token = data.result.token
        this.$store.dispatch('setUser', user)
        this.$store.dispatch('setToken', token)
      } catch (error) {
        console.log(error.response)
        this.error = error.response.data.result
      }
    }
  }
}
</script>
