const pictureTemplate = document.querySelector('#picture');
const picturesContainer = document.querySelector('.pictures');

const createPictureElement = (photoObject) => {
  const { url, description, comments, likes } = photoObject;
  const pictureElement = pictureTemplate.content.cloneNode(true);

  const img = pictureElement.querySelector('.picture__img');
  img.src = url;
  img.alt = description;

  const commentsSpan = pictureElement.querySelector('.picture__comments');
  commentsSpan.textContent = comments.length;

  const likesSpan = pictureElement.querySelector('.picture__likes');
  likesSpan.textContent = likes;

  return pictureElement;
};

const renderPhotos = (photoObjects) => {
  const fragment = document.createDocumentFragment();
  for (const photoObject of photoObjects) {
    fragment.appendChild(createPictureElement(photoObject));
  }
  picturesContainer.appendChild(fragment);
};

export { renderPhotos };
