new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Estou alertando')
        },
        pressKey(event) {
            this.valor = event.target.value;
        }
    }
})