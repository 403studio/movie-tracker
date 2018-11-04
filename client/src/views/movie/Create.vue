<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="新增电影">
        <v-text-field
          v-model="movie.title"
          label="电影名称"
          required
        ></v-text-field>
        <v-text-field
          v-model="movie.year"
          label="所属年份"
          required
        ></v-text-field>
        <v-text-field
          v-model="movie.director"
          label="导演"
          required
        ></v-text-field>
        <v-text-field
          v-model="movie.screenwriter"
          label="编剧"
          required
        ></v-text-field>
        <v-text-field
          v-model="movie.type"
          label="类型"
          required
        ></v-text-field>
        <v-text-field
          v-model="movie.imdb"
          label="IMDB"
          required
        ></v-text-field>
        <v-text-field
          v-model="movie.poster"
          label="海报（地址）"
          required
        ></v-text-field>
        <v-text-field
          v-model="movie.description"
          label="剧情简介"
          multi-line
          required
        ></v-text-field>
        <v-btn color="primary" @click="save">保存</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import MovieService from '../../services/MovieService'

export default {
  data () {
    return {
      movie: {
        'title': '',
        'year': '',
        'director': '',
        'screenwriter': '',
        'type': '',
        'duration': '',
        'imdb': '',
        'poster': '',
        'description': ''
      }
    }
  },
  methods: {
    async save () {
      // TODO:添加数据必填项的校验
      console.log(this.movie)
      const movie = MovieService.post(this.movie)
      console.log(movie)
    }
  }
}
</script>

<style>

</style>
