<template>
  <div class="white elevation-2">
    <v-toolbar dark class="primary">
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <slot name="operation"></slot>
    </v-toolbar>
    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>No content</slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style>

</style>
