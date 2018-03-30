Vue.component('darts_player', {
  data: function () {
    return {
      current_value: null,
      score: 0,
      remainingPoints: 301,
    }
  },
  template: '<div class="player">' +
  '<div class="player-score">' +
  '<input type="number"' +
  'v-model="current_value" @keypress.enter="submit">' +
  '<p>Remaining points: {{ remainingPoints }}</p>' +
  '<p>Current round: {{ score }}</p>' +
  '<button @click="reseter()">Reset score</button>' +
  '</div>' +
  '<div class="progress-bar-container">' +
  '<div class="progress-bar" :style="myStyle"></div>' +
  '</div>' +
  '</div>',
  methods: {
    submit: function(event) {
      this.current_value = parseInt(this.current_value);
      this.score += this.current_value;
      this.remainingPoints -= this.current_value;
      if (this.score > 301) {
        this.score -= this.current_value;
        this.remainingPoints += this.current_value;
      } else if (this.score == 301) {
        alert("we have a winner");
      }
      this.current_value = null;
    },
    reseter: function(event) {
      this.current_value = 0;
      this.score = 0;
      this.remainingPoints = 301;
    }
  },
  computed: {
    myStyle: function() {
      return {
        height: this.score / 2 + 'px'
      }
    }
  }
})

new Vue({
  el: '#darts-tracker',
  data: {
    inc: 0
  }
})
