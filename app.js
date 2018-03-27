Vue.component('darts_player', {
  data: function () {
    return {
      current_value: null,
      score: 0,
    }
  },
  template: '<div>' +
  '<input type="number"' +
  'v-model="current_value" @keypress.enter="submit">' +
  '<p>Current value: {{ current_value }}</p>' +
  '<p>Current round: {{ score }}</p>' +
  '<button @click="reseter()">Reset score</button>' +
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
  }
})

new Vue({
  el: '#components-demo',
  data: {
    inc: 0
  }
})
