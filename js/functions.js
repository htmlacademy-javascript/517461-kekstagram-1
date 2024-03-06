/*
Функция проверки строки. Является ли она полиндромом?
 */

function isPolindrom (string) {
  string = (string.toLowerCase()).replaceAll(' ', '');

  let newString = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    newString += string[i];
  }
  return newString === string;
}

isPolindrom('ДовОд');

/*
Функция принимает строку и извлекает,
содержащиеся в ней цифры от 0 до 9 и возвращает NaN
если нет чисел.
*/

function extractNumberFromString(string) {
  let strNumber = '';

  for (let i = 0; i < string.length; i += 1) {
    if (+string[i] >= 0 && +string[i] <= 9) {
      strNumber += string[i].toString();
    }
  }

  if(strNumber.length === 0) {
    return NaN;
  }
  return strNumber;
}

extractNumberFromString('Hello from 2023 year');

/*
Функция для проверки длинны строки.
Функцию дополнил проверкой на минимальную длинну.
*/

const MAX_LENGHT = 20;
const MIN_LENGTH = 5;

function isValidString (string) {
  if (string.length <= MAX_LENGHT && string.length >= MIN_LENGTH) {
    return true;
  }
  return false;
}

isValidString('Hello');
