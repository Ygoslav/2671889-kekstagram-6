import { addPhotos, photos } from './data.js';
import { renderPhotos } from './photo-render.js';
import { initializeForm } from './upload-form.js';
import './big-picture.js';
import './upload-form-validation.js';
import './image-preview-scale.js';
import './image-preview-effects.js';

addPhotos();
renderPhotos(photos);
initializeForm();
