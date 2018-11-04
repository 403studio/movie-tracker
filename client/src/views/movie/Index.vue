<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="电影列表">
        <v-btn :to="{name: 'movie-create'}" icon slot="operation"><v-icon>fa-plus</v-icon></v-btn>
        <div class="white elevation-2 mb-2" v-for="movie in movies" :key="movie.id">
          <v-layout wrap>
            <v-flex xs12>
              <h2>{{ movie.title }}<span class="movie-year">（{{ movie.title }}）</span></h2>
            </v-flex>
            <v-flex xs6>
              <div><span>导演:</span>{{ movie.director }}</div>
              <div><span>编剧:</span>{{ movie.screenwriter }}</div>
              <div><span>类型:</span>{{ movie.type }}</div>
              <div><span>片长:</span>{{ movie.duration }}</div>
              <div><span>IMDB:</span>{{ movie.imdb }}</div>
            </v-flex>
            <v-flex xs6>
              <img width="200px" src="https://img3.doubanio.com/view/photo/l/public/p2535096871.webp" />
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import MovieService from '../../services/MovieService'

export default {
  data () {
    return {
      movies: null
    }
  },
  created: async function () {
    try {
      this.movies = (await MovieService.index()).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>

</style>
