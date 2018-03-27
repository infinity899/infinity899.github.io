new Vue({
        el: '#darts',
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