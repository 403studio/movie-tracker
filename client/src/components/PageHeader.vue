<template>
  <v-toolbar dark color="primary" fixed>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text mr-2">Movie Tracker</v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat :to="'/movies'">列表</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLogin" flat :to="{name: 'register'}">Register</v-btn>
      <v-btn v-if="!$store.state.isUserLogin" flat :to="{name: 'login'}">Login</v-btn>
      <v-btn v-if="$store.state.isUserLogin" flat @click="logout">Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setUser', null)
      this.$store.dispatch('setToken', null)
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<style>

</style>
