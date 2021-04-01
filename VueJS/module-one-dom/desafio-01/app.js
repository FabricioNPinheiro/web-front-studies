new Vue({
    el: '#desafio',
    data: {
        name: "Fabrício",
        age: "22", 
        linkImg: "http://files.cod3r.com.br/curso-vue/vue.jpg" 
    },
    methods: {
        multiAge: function() {
            return this.age * 3;
        },
        numberRandom: function() {
            return Math.random();
        }
    }
})