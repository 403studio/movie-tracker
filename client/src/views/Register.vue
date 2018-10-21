<template>
  <div>
    <h1>Register</h1>
    <input type="email" v-model="email" placeholder="Email" /><br/>
    <input type="password" v-model="password" placeholder="Password" /><br/>
    <div>{{ error }}</div>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
  name: 'register',
  data () {
    return {
      email: '1',
      password: '2',
      error: ''
    }
  },
  methods: {
    async register () {
      try {
        await UserService.register({
          email: this.email,
          password: this.password
        })
        this.error = ''
      } catch (error) {
        console.log(error.response)
        this.error = error.response.data.result
      }
    }
  }
}
</script>
