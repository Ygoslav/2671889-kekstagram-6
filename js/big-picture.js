import { isEscapeKeyPressed, toggleClass } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

const toggleModal = () => {
  toggleClass(bigPicture, 'hidden');
  toggleClass(document.body, 'modal-open');
};

const createCommentElement = (commentObject) => {
  const { avatar, name, message } = commentObject;
  const li = document.createElement('li');
  li.className = 'social__comment';
  li.innerHTML = `
    <img
      class="social__picture"
      src="${avatar}"
      alt="${name}"
      width="35"
      height="35">
    <p class="social__text">${message}</p>
  `;
  return li;
};

const renderComments = (commentObjects) => {
  socialComments.innerHTML = '';
  const fragment = document.createDocumentFragment();
  for (const comment of commentObjects) {
    fragment.appendChild(createCommentElement(comment));
  }
  socialComments.appendChild(fragment);
};

const fillBigPictureData = (photoObject) => {
  const { url, description, likes, comments } = photoObject;
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  socialCaption.textContent = description;
};

const openBigPicture = (photoObject) => {
  fillBigPictureData(photoObject);
  renderComments(photoObject.comments);

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  toggleModal();

  document.addEventListener('keydown', onPressEscape);
};

const closeBigPicture = () => {
  toggleModal();
  document.removeEventListener('keydown', onPressEscape);
};

function onPressEscape(evt) {
  if (isEscapeKeyPressed(evt)) {
    closeBigPicture();
  }
}

bigPictureCancel.addEventListener('click', closeBigPicture);

export { openBigPicture };
