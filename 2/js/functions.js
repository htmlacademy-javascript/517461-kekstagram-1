/*
Функция проверки строки. Является ли она полиндромом?
 */

let string = 'q';

function getIsPolindrom () {
  string = (string.toLowerCase()).replaceAll(' ', '');

  let newString = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    newString += string[i];
  }
  if (newString === string) {
    return 'Yes, this is polindrom';
  } else {
    return 'No, this is not polindrom';
  }
}

getIsPolindrom(string);

/*
Функция принимает строку и извлекает,
содержащиеся в ней цифры от 0 до 9 и возвращает NaN
если нет чисел.
*/

function getNumber () {
  if (string === Number(string)) {
    string = string.toString();
  }

  let strNumber = '';

  for (let i = 0; i < string.length; i += 1) {
    if (+string[i] >= 0 && +string[i] <= 9) {
      strNumber += string[i].toString();
    }
  }

  if(strNumber.length === 0) {
    return strNumber / strNumber;
  }
  return strNumber;
}

getNumber(string);

/*
Функция для проверки длинны строки.
Функцию дополнил проверкой на минимальную длинну.
*/

const MAX_LENGHT = 20;
const MIN_LENGTH = 5;

function getStringLength () {
  if (string.length <= MAX_LENGHT && string.length >= MIN_LENGTH) {
    return true;
  }
  return false;
}

getStringLength(string);
