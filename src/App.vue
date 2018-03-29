<template>
  <div id="app">
    <button v-on:click="page = 'page-one'">Sentances</button>
    <button v-on:click="page = 'page-two'">Happy Birthday</button>
    <component v-bind:is="page"></component>
  </div>
</template>

<script>

import Sentances from './components/Sentances.vue';
import BirthdaySong from './components/BirthdaySong.vue';

export default {
  components: {
    'page-one': Sentances,
    'page-two': BirthdaySong
  },
  data () {
    return {
      page: "page-one"
    }
  }
}
</script>

<style>

</style>
<!-- https://www.youtube.com/watch?v=CzJyGo5rh7M&index=43&list=PL4cUxeGkcC9gQcYgjhBoeQH7wiAyZNrYa -->
