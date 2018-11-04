<template>
  <v-toolbar dark color="primary" fixed>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text mr-2">Movie Tracker</v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat :to="'/movies'">列表</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat :to="{name: 'register'}">Register</v-btn>
      <v-btn flat :to="{name: 'login'}">Login</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {

}
</script>

<style>

</style>
