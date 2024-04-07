import * as utils from './util.js';

const DESCRIPTIONS = [
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

const SIMILAR_PHOTO_COUNT = 25;

const generatePhotoId = utils.createRandomIdFromRangeGenerator(1, SIMILAR_PHOTO_COUNT);

const generateUrlPhoto = utils.createRandomIdFromRangeGenerator(1, SIMILAR_PHOTO_COUNT);

const generateCommentsId = utils.createRandomIdFromRangeGenerator(0, COMMENTS.length - 1);

const generateAvatarUrl = () => utils.getRandomInteger(1, 6);

const createPhotoComments = () => ({
  id: generateCommentsId(),
  avatar: `img/avatar-${ generateAvatarUrl() }.svg`,
  message: utils.getRandomArrayElements(COMMENTS),
  name: utils.getRandomArrayElements(NAMES),
});

const createPhotoDescription = () => ({
  id: generatePhotoId(),
  url: `photos/${ generateUrlPhoto() }.jpg`,
  description: utils.getRandomArrayElements(DESCRIPTIONS),
  likes: utils.getRandomInteger(15, 200),
  comments: Array.from({length: utils.getRandomInteger(1, COMMENTS.length - 1)}, createPhotoComments),
});

export const generateSimilarPhotos = () => Array.from({length: SIMILAR_PHOTO_COUNT}, createPhotoDescription);
