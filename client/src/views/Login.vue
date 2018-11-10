<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <v-text-field
          v-model="email"
          label="Email"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          required
        ></v-text-field>
        <div>{{ error }}</div>
        <v-btn class="primary" @click="login">Login</v-btn>
      </panel>
    </v-flex>
  </v-layout>
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
        this.$router.push({
          name: 'movies'
        })
      } catch (error) {
        console.log(error.response)
        this.error = error.response.data.result
      }
    }
  }
}
</script>
