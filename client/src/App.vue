<template>
  <v-app id="app">
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Movie Tracker</v-toolbar-title>
      <v-btn flat :to="'/'">
        <span>Home</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>fa-search</v-icon>
      </v-btn>
      <v-btn flat :to="{name: 'register'}">
        <span>Register</span>
      </v-btn>
      <v-btn flat :to="{name: 'login'}">
        <span>Login</span>
      </v-btn>
    </v-toolbar>
    <router-view/>
  </v-app>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
