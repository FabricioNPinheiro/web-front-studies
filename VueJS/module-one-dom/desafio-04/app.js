new Vue({
	el: '#desafio',
	data: {
		classOne: 'destaque',
		perigo: true,
		Class3: '',
		Class4: '',
		cor5: '',
		estilo5: {
			width: '100px',
			height: '100px',
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() =>{
				this.classOne = this.classOne == 'destaque' ? 'encolher' : 'destaque'
			} , 2000)
		},
		iniciarProgresso() {

		},
		setPerigo(event) {
			if(event.target.value == "true") {
				this.perigo = true
			} else if(event.target.value == "false"){
				this.perigo = false
			  }
		}
	}
})
