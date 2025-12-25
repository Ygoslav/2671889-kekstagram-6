import { isEscapeKeyPressed, toggleClass } from './util.js';
import { resetEffectSlider } from './image-preview-effects.js';
import { resetScale } from './image-preview-scale.js';

const uploadFormElement = document.querySelector('.img-upload__form');
const uploadInputElement = uploadFormElement.querySelector('#upload-file');
const uploadOverlayElement = uploadFormElement.querySelector('.img-upload__overlay');
const uploadFormCancelElement = uploadOverlayElement.querySelector('#upload-cancel');

const toggleModal = () => {
  toggleClass(uploadOverlayElement, 'hidden');
  toggleClass(document.body, 'modal-open');
};

const openForm = () => {
  toggleModal();
  document.addEventListener('keydown', onPressEscape);
  uploadFormCancelElement.addEventListener('click', onClickUploadFormCancel);
};

const closeForm = () => {
  toggleModal();
  uploadFormElement.reset();
  document.removeEventListener('keydown', onPressEscape);
  uploadFormCancelElement.removeEventListener('click', onClickUploadFormCancel);
  resetScale();
  resetEffectSlider();
};

const onFileInputChange = () => {
  if (uploadInputElement.files && uploadInputElement.files.length > 0) {
    openForm();
  }
};

const initializeForm = () => {
  uploadInputElement.addEventListener('change', onFileInputChange);
};

function onClickUploadFormCancel(evt) {
  evt.preventDefault();
  closeForm();
}

function onPressEscape(evt) {
  if (isEscapeKeyPressed(evt)) {
    evt.preventDefault();
    closeForm();
  }
}

export { initializeForm, closeForm, uploadFormElement };
