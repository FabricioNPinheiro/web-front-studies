new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Exibindo alerta')
        },
        pressKey(event) {
            this.valor = event.target.value
        }
    }
})