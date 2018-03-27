var players = ['#darts'/*, '#darts2', '#darts3'*/];

for (var player in players) {
  new Vue({
    el: players[player],
    data: {
      current_value: null,
      score: 0
    },
    methods: {
      // adunare: function(event) {
      //   var sageata = parseInt(this.value);
      //   return this.score+= sageata;
      // },
      reseter: function(event) {
        this.current_value = 0;
        this.score = 0;
      },
      submit: function(event) {
        this.score += parseInt(this.current_value);
        this.current_value = null;
      }
    }
  });
}
