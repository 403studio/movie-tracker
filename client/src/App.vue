<template>
  <v-app id="app">
    <page-header />
    <div id="container">
      <router-view/>
    </div>
  </v-app>
</template>
<script>
import PageHeader from '@/components/PageHeader.vue'

export default {
  components: {
    PageHeader
  }
}
</script>

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

#container
  margin-top 80px
</style>
