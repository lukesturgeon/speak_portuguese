new Vue({
  el:"#vue-app",
  data: {
    help: false,
    count: 0,
    sentances: [
      {pt:"Ola", en:"Hello"},
      {pt:"Obrigado", en:"Thanks"},
      {pt:"Xiao", en:"Bye"}
    ]
  },
  methods: {
    prev: function(){
      this.count--;
    },
    next: function(){
      this.count++;
    },
    random: function(){
      this.count = Math.floor(Math.random() * this.sentances.length);
    }
  },
  computed: {
    sentance: function(){
      var lang = this.help ? 'en' : 'pt';
      return this.sentances[this.count][lang];
    },
    total: function(){
      return this.sentances.length;
    }
  }
});
