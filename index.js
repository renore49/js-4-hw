// №1
if (false) {
	console.log(1)
}
// при if false операторы не показывают значение которые в обьекте, а при true значение в обьекте показывается

// №2
let age = prompt('Введите свой возраст')
if (age >= 1 && age <= 6) {
	alert('я советую вам посмотреть мультики')
} else if (age >= 7 && age <= 13) {
	alert('я советую вам посмотреть аниме "Наруто"')
} else if (age >= 14 && age <= 17) {
	alert('я советую вам посмотреть фильм "интерстеллар"')
} else if (age =< 18) {
	alert('я советую вам посмотреть сериал "Игру Престолов"')
}

// №3
// (2 < 3 && 3 > 4) || true
// (true && false) || true
// false || true
// true

// !true && (!true || 100 != 5 * 5)
// false && (false || true)
// false && true
// false

// '123' == 123 || (10 <= 10 && ' ' === false)
// true || (true && false)
// true || false
// true
