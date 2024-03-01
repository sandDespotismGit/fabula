import { txt2imgPostRequest } from './public/api/func/txt2img.js';
import { img2imgPostRequest } from './public/api/func/img2img.js';
import { toBase64 } from './public/api/func/imageConverter.js';

// const base64String = toBase64('./public/image/20240130204821110.png');
// console.log(base64String);

// const withPrefix = 'data:image/png;base64,' + base64String;
// console.log(withPrefix);

// пример текста в картинку
// txt2imgPostRequest("Fat Shrek", 550, 550);

// пример картинки в картинку
const check_img = toBase64('./public/image/20240131085425600.png');
img2imgPostRequest({init_image: check_img});
