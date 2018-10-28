<template>
  <v-layout>
    <v-flex md6 offset-md3>
      <form>
        <v-text-field
          v-model="email"
          label="邮箱"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="密码"
          type="password"
          required
        ></v-text-field>
        <div class="red">{{ error }}</div>
        <v-btn @click="register">注册提交</v-btn>
      </form>
    </v-flex>
  </v-layout>
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
