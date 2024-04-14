import { generateSimilarPhotos } from './data.js';
const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content.
  querySelector('.picture');
const pictureFragment = document.createDocumentFragment();

const arrayPhotos = generateSimilarPhotos();

export function renderPictures() {
  arrayPhotos.forEach(({url, description, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    const pictureImg = pictureElement.querySelector('.picture__img');

    pictureImg.src = url;
    pictureImg.alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureFragment.append(pictureElement);
  });

  pictureList.append(pictureFragment);
}
