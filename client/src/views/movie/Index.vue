<template>
  <v-container fluid grid-list-md>
    <v-layout wrap>
      <v-flex xs6 offset-xs3>
        <panel title="搜索">
          <v-text-field
            v-model="search"
            label="请输入查询条件（名称、导演、类型）"
            required
          ></v-text-field>
        </panel>
      </v-flex>
      <v-flex xs6 offset-xs3>
        <panel title="电影列表">
          <v-btn :to="{name: 'movie-create'}" icon slot="operation"><v-icon>fa-plus</v-icon></v-btn>
          <div class="white elevation-2 mb-2" v-for="movie in movies" :key="movie.id">
            <v-layout wrap>
              <v-flex xs12>
                <h2>{{ movie.title }}<span class="movie-year">（{{ movie.year }}）</span></h2>
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
  </v-container>
</template>

<script>
import MovieService from '../../services/MovieService'
import _ from 'lodash'

export default {
  data () {
    return {
      movies: null,
      search: ''
    }
  },
  watch: {
    'search': _.debounce(async function (newValue) {
      this.movies = (await MovieService.search(newValue)).data
      this.$router.push({
        name: 'movies',
        query: {
          search: newValue
        }
      })
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (newValue) {
        if (newValue) {
          this.search = newValue
        }
      }
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
