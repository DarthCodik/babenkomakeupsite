// let blackbox = document.getElementsByClassName('blackbox');
// let select = document.getElementById('select');
let form = document.getElementById('form');
let foot = document.getElementsByTagName('footer')[0];

let blackbox = document.createElement('div');

let button = document.getElementsByTagName('button');
let timers = document.getElementsByClassName('timer');


// Кнопки


let courses = ['«Визажист PRO»', '«Визажист PRO. CREATIVE»', 
				'«Browmaker» – базовый курс', '«Макияж для себя» - базовый курс', 
				'Мини-курс «Макияж для себя»', '«Праздничный макияж» - Мастер-класс', '«Smoky eyes» - Мастер-класс', 
				'«Стрелки и яркие губы» - Мастер-класс', '«Укладки для себя» - Мастер-класс', '«Fresh make-up» - Мастер-класс', 
				'«Тeenage make-up» - Мастер-класс', '«Lifting make-up» - Мастер-класс', 'submit'];

let active = [];
let active_bot = [];

for (var i = 0; i < button.length; i++) {
	button[i].id = courses[i-1];
	if (button[i].className == 'formBot') {
		active.push(courses[i-1]);
	}
}

	

for (var i = 0; i < button.length-1; i++) {
	if (button[i].className == 'formBot' || button[i].className == 'welcome-button' || button[i].id == 'visazhist-bot') {
		button[i].addEventListener('click', createForm);
		active_bot.push(button[i]);
	}else{
		button[i].className = 'muteBot';
		button[i].innerHTML = 'Пока нет записи';
	}		      
};

// Create form

function createForm () {

	// alert('Форма не работает! Записывайтесь по телефону!');

	console.log('done');

	// blackbox[0].style.display = 'block';
	blackbox.className = 'blackbox';
	foot.appendChild(blackbox);

	// Form

		let form = document.createElement('form');
		form.className = 'formList';
		form.id = 'form';
		form.name = 'feedback';

		blackbox.appendChild(form);



		// Inside

			let heading = document.createElement('div');
			heading.className = 'formHead';	
			heading.innerHTML = 'Запись на занятие';	

			form.appendChild(heading);



		// Selection

			let select = document.createElement('select');	
			select.id = 'select';
			select.name = 'selected';
			form.appendChild(select);

			for (var i = 1; i < button.length-1; i++) {

				if (event.currentTarget == button[i]) {
					let option = document.createElement('option');
					option.innerHTML = courses[i-1];
					select.appendChild(option);
				}
			};	

			if (event.currentTarget == button[0]) {

				for (var i = 0; i < active.length; i++) {
					let option = document.createElement('option');
					option.innerHTML = active[i];
					select.appendChild(option);
				};
			}

			// Error

				let errbox = document.createElement('div');
					errbox.className = 'errBox';
					errbox.id = 'errBox';

					form.appendChild(errbox);


			let inputs = ['*Ваше имя', '*E-mail', '*Телефон'];
			let names = ['firstName', 'email', 'phone'];
			let examples = ['Иван', 'yourmail@example.com', '+9 (999) 999-99-99'];
			let types = ['text', 'email', 'phone'];

			let div = document.createElement('div');
			div.className = 'inputs';

			for (var i = 0; i < inputs.length; i++) {

				let span = document.createElement('div');
				span.className = 'inputList';
				span.innerHTML = inputs[i];
				form.appendChild(span);

				let input = document.createElement('input');
				input.className = 'formInput';
				input.name = names[i];
				input.id = names[i];
				input.type = types[i];
				input.placeholder = examples[i];
				form.appendChild(input);

			}


			// textarea

			let comment = document.createElement('div');
			comment.className = 'inputList';
			comment.innerHTML = 'Комментарии';
			form.appendChild(comment);

			let textarea = document.createElement('textarea');
			textarea.className = 'formInput';
			textarea.id = 'message';
			textarea.type = 'text';
			textarea.name = 'message';

			form.appendChild(textarea);


			// SUBMITE button

			let submited = document.createElement('button');
			submited.className = 'submit';
			submited.id = 'submit';
			// submited.type = 'button';
			submited.innerHTML = 'Подать заявку'; 


			form.appendChild(submited);



			// Letter To Upper Case

			form.firstName.addEventListener("input", function() {
				this.value = this.value[0].toUpperCase() + this.value.slice(1);
			});

			form.message.addEventListener("input", function() {
				this.value = this.value[0].toUpperCase() + this.value.slice(1);
			});



	// Cancel Botton

		let cancel = document.createElement('div');
		cancel.className = 'cancel';
		cancel.addEventListener('click', deleteForm);
		cancel.innerHTML = '<svg viewBox="0 0 16 16" class="cancel" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';

		blackbox.appendChild(cancel);


// Plugins

		$(function() {
			$("#phone").mask("+7 (999) 999-99-99");
		});


		$('#form').submit(function() {

			let firstName = $('#firstName').val().trim();
			let email = $('#email').val().trim();
			let phone = $('#phone').val().trim();
			let message = $('#message').val().trim();
			let select = $('#select').val();

			if (firstName == '') {
				$("#firstName").css('border-color', 'red');
				$("#errBox").text('Введите имя');
				return false;
			}else{
				$("#firstName").css('border-color', '#adadad');
			}
				
			if (email == '') {
				$("#email").css('border-color', 'red');
				$("#errBox").text('Введите email');
				return false;

			}else{ 
				$("#email").css('border-color', '#adadad');
			}

			if (phone == '') {
				$("#phone").css('border-color', 'red');
				$("#errBox").text('Введите номер телефона');
				return false;
			}else{
				$("#phone").css('border-color', '#adadad');
			}

			$.ajax({
				url: 'mail.php',
				type: 'POST',
				dataType: 'html',
				data: {'firstName': firstName, 'email': email, 'phone': phone, 'message': message, 'select' : select},
				// success: function(data){
				// 	if (!data) {

				// 	}else {
				// 	}
				// }	
			})
			.done(function() {
				console.log("success");
				$('#form').trigger('reset'); 
				alert('Заявка успашно отправлена');
			})
			.fail(function() {
				alert('Произошла ошибка! Заявка не отправлена!');
				console.log("error");
			})

			return false;
			
		});




}



// Delete form

function deleteForm(){
	foot.removeChild(blackbox);
}



