$.ajax({
    URL: 'https://tranquil-sierra-86540.herokuapp.com/belyy19699@gmail.com',
    method: 'POST',

    data: {

        name: '',

        surname: ''

    },

    dataType: 'json'

});

(function() {

	let inputs = document.createElement('input');

	let supports = {};

	supports.autofocus = 'autofocus' in inputs;
	supports.required = 'required' in inputs;
	supports.placeholder = 'placeholder' in inputs;

	if (!supports.autofocus) {

	}


	if (!supports.required) {

	}


	if (!supports.placeholder) {

	}


	let send = document.getElementById('contact-submit');
	if (send) {
		send.onclick = function() {
			this.innerHTML = '...Відправлення';
		}
	}

})();

