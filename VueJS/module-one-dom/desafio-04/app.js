new Vue({
	el: '#desafio',
	data: {
		classOne: 'destaque',
		perigoProp: true,
		alterClass: ''
	},
	methods: {
		iniciarEfeito() {
			setInterval(() =>{
				this.classOne = this.classOne == 'destaque' ? 'encolher' : 'destaque'
			} , 2000)
		},
		iniciarProgresso() {

		}
	}
})
