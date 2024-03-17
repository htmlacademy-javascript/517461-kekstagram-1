/*
В файле main.js напишите необходимые функции для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.

Структура каждого объекта должна быть следующей:

id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.

url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.

description, строка — описание фотографии. Описание придумайте самостоятельно.

likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:

{
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
}

У каждого комментария есть идентификатор — id — любое число. Идентификаторы не должны повторяться.

Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.

Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:

Всё отлично!
В целом всё неплохо. Но не всё.
Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!

Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.

{
  id: 1,
  url: 'photos/1.jpg',
  description: 'photo description',
  likes: 15,
  comments: {
    id: 135,
    avatar: 'img/avatar-6.svg',
    message: 'text message',
    name: 'Artem',
  }
}

*/

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElements = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const DESCRIPTION = [
  'Фото в Париже',
  'Котик лакомиться новыми вкусняшками',
  'Новый ресторан в Амстердаме',
  'Невероятные приключения кота - Бориса',
  'Египетские пирамиды - часть 1',
  'Египетские пирамиды - часть 2',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Андрей',
  'Максим',
  'Ирина',
  'Натали',
  'Николай',
  'Владимир',
];

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      //console.error(`Перебраны все числа из диапазона от ${ min } до ${ max}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const SIMILAR_PHOTO_COUNT = 25;

const generatePhotoId = createRandomIdFromRangeGenerator(1, SIMILAR_PHOTO_COUNT);

const generateUrlPhoto = createRandomIdFromRangeGenerator(1, SIMILAR_PHOTO_COUNT);

const generateCommentsId = createRandomIdFromRangeGenerator(0, COMMENTS.length - 1);

const generateAvatarUrl = () => getRandomInteger(1, 6);

// const SIMILAR_COMMENTS_COUNT = ;

const createPhotoComments = () => ({
  id: generateCommentsId(),
  avatar: `img/avatar-${ generateAvatarUrl() }.svg`,
  message: getRandomArrayElements(COMMENTS),
  name: getRandomArrayElements(NAMES),
});

const createPhotoDescription = () => ({
  id: generatePhotoId(),
  url: `photos/${ generateUrlPhoto() }.jpg`,
  description: getRandomArrayElements(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(1, COMMENTS.length - 1)}, createPhotoComments),
});

const similarPhotoGenerate = () => Array.from({length: SIMILAR_PHOTO_COUNT}, createPhotoDescription);

similarPhotoGenerate();
