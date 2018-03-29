Vue.component('darts_player', {
  data: function () {
    return {
      current_value: null,
      score: 0,
    }
  },
  template: '<div class="player">' +
  '<div class="player-score">' +
  '<input type="number"' +
  'v-model="current_value" @keypress.enter="submit">' +
  '<p>Current value: {{ current_value }}</p>' +
  '<p>Current round: {{ score }}</p>' +
  '<button @click="reseter()">Reset score</button>' +
  '</div>' +
  '<div class="progress-bar" :style="myStyle"></div>' +
  '</div>',
  methods: {
    submit: function(event) {
      this.score += parseInt(this.current_value);
      this.current_value = null;
    },
    reseter: function(event) {
      this.current_value = 0;
      this.score = 0;
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
  el: '#components-demo',
  data: {
    inc: 0
  }
})
