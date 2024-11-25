// Проверка промокода на странице '/checkout'
export function checkValidPromo(promo) {
  if(promo === 'test') {
    return true;
  }
  return false;
}

// Проверка полей авторизации на странице '/auth' 
export function checkValidAccount(email, password) {
  if(email === 'test@test' && password === 'test') {
    return true;
  } else {
    return false;
  }
}

// Проверка регистрационных полей на странице '/registration'
// Имя пользователя
export function checkRegistrationUsername(username) {
  if(!username) {
    return 'required field';
  }
  if(/[А-Яа-я]/gi.test(username)) {
    return 'only English letters';
  }
  if(!/[A-Za-z]/gi.test(username)) {
    return 'must be one letter';
  }
  if(/[0-9]/gi.test(username.charAt(0))) {
    return 'Must start with a letter';
  }
  if(username.length < 4) {
    return 'more than 4 characters';
  }
  if(username.length > 15) {
    return 'no more than 15 characters';
  }
  if(username.includes(' ')) {
    return 'no spaces';
  }
  if(/[.*+?^${}()|[\]\\]/gi.test(username)) {
    return 'no special characters';
  }
}

// Почта
export function checkRegistrationEmail(email) {
  if(!email) {
    return 'required field';
  }
  if(!email.includes('@')) {
    return 'incorrect mail format';
  }
  if(email.match(/[@]/gi).length > 1) {
    return 'incorrect mail format';
  }
  if(email.split('@').filter((el) => el).length < 2) {
    return 'incorrect mail format';
  }
  if(email.includes(' ')) {
    return 'incorrect mail format';
  }
}

// Пароль
export function checkRegistrationPassword(password) {
  if(!password) {
    return 'required field';
  }
  if(password.length < 4) {
    return 'more than 4 characters';
  }
  if(password.length > 15) {
    return 'no more than 15 characters';
  }
  if(password.includes(' ')) {
    return 'no spaces';
  }
  if(/[А-Яа-я]/gi.test(password)) {
    return 'only English letters';
  }
}