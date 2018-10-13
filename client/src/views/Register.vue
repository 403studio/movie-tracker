<template>
  <div>
    <h1>Register</h1>
    <input type="email" v-model="email" placeholder="Email" /><br/>
    <input type="password" v-model="password" placeholder="Password" /><br/>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'register',
  data () {
    return {
      email: '1',
      password: '2'
    }
  },
  methods: {
    async register () {
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
