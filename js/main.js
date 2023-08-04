const mobileNav = document.querySelector('.nav-wrapper');
const navIcon = document.querySelector('.nav__icon-middle');
const block = document.querySelector ('.mobile-nav');

document.querySelector('.nav__icon--hidden').addEventListener('click', function () {
    navIcon.classList.toggle('nav__icon-middle--active');
    mobileNav.classList.toggle('nav-wrapper--active');
    block.classList.toggle('mobile-nav--active');
} );

const navLinks = document.querySelectorAll('.mobile-nav a');

navLinks.forEach(function (item) {
    item.addEventListener('click', function () {
        mobileNav.classList.remove('nav-wrapper--active');
        block.classList.remove('mobile-nav--active');
        navIcon.classList.remove('nav__icon-middle--active');
    });
});

// Форма обратной связи

const formItems = document.querySelectorAll(".form__field");

for(let item of formItems) {
    const thisParent = item.closest(".form__item");
    const thisPlaceholder = thisParent.querySelector(".form__castom-placeholder");

    item. addEventListener('focus', function(){

        thisPlaceholder.classList.add('form__castom-placeholder--active');
    });

    item.addEventListener('blur', function() {

        if(item.value.length > 0) {
        thisPlaceholder.classList.add('form__castom-placeholder--active');
    }else{
        thisPlaceholder.classList.remove('form__castom-placeholder--active')};
    });
};     

$(document).ready(function () {

	// Валидация
		
		$(".form").validate({
			rules: {
				email: {
					required: true,
					email: true
				},
				
				message: {
					required: true
				}
			},
			messages: {
				email: {
					required: 'Введите email',
					email: 'отсутсвует символ @'
				},
				
				message: {
					required: 'Поле не должно быть пустым'
				}
			},
			submitHandler: function (form) {
				ajaxFormSubmit();
			}
	
		});

		function ajaxFormSubmit() {

			let string = $(".form").serialize(); // Соханяем данные введенные в форму в строку.
	
			//Формируем ajax запрос
			$.ajax({
				type: "POST", // Тип запроса - POST
				url: "php/mail.php", // Куда отправляем запрос
				data: string, // Какие даные отправляем, в данном случае отправляем переменную string
	
				// Функция если все прошло успешно
				success: function (html) {
					$(".form").slideUp(800);
					$('#answer').html(html);
				}
			});
			// Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
			return false;
		}

		// mix button

		let containerEl = document.querySelector('#mix-cards');

		let mixer = mixitup(containerEl, {
			classNames: {
				block: ""
			}
		})
});

// Bactop arrow

const backTopBtn = document.querySelector('#backtop');

backTopBtn.style.opacity = 0;

document.addEventListener('scroll', function () {
	if (window.pageYOffset > 300) {
		backTopBtn.style.opacity = 1;
	} else {
		backTopBtn.style.opacity = 0;
	}
})