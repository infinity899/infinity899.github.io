var players = ['#darts', '#darts2', '#darts3']

for (var player in players) {
  new Vue({
    el: players[player],
    data: {
      value: 0,
      score: 0
    },
    methods: {
      adunare: function(event) {
        var sageata = parseInt(this.value);
        return this.score+= sageata;
      },
      reseter: function(event) {
        this.sageata = 0;
        this.score = 0;
        this.value = 0;
        return this;
      }
    }
  });
}
