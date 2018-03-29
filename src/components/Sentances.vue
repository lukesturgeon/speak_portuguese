<template>
  <div id="app">
    <h1>Learn sentances</h1>
    <button v-on:click="prev">previous</button>
    <button v-on:click="next">next</button>
    <button v-on:click="random">random</button>
    <button v-on:click="help = !help">help</button>
    <p>Sentance {{ count }} of {{ total }}.</p>
    <p>{{ sentance }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      help: false,
      sentances: [
        {pt:"Ola", en:"Hi"},
        {pt:"Obrigado", en:"Thanks"},
        {pt:"Xiao", en:"Bye"}
      ]
    }
  },
  methods: {
    prev: function(){
      this.count = (this.count + (this.sentances.length - 1)) % this.sentances.length;
    },
    next: function(){
      this.count = (this.count + 1) % this.sentances.length;
    },
    random: function(){
      this.count = Math.floor(Math.random() * this.sentances.length);
    }
  },
  computed: {
    sentance: function(){
      var lang = (this.help) ? "en" : "pt";
      return this.sentances[this.count][lang];
    },
    total: function(){
      return this.sentances.length-1;
    }
  }
}
</script>

<style>

</style>
