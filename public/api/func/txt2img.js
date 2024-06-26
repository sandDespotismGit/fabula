//ссылка на сервер
export const url = 'http://176.222.55.165:7860';

//объект для работы с файлами
export const fs = null; // Remove the Node.js fs import

//объект для работы с запросами к api
export const fetch = window.fetch; // Use the browser's fetch API instead of node-fetch

//объект для работы с запросами к api
export var request = null; // Remove the request import

import {saveBase64ImageToGallery, saveImage, saveImageToGallery} from './imageConverter.js';

// Modify the txt2imgPostRequest function to remove the request dependency
export default function txt2imgPostRequest({
  my_prompt = 'Vagina',
  negative_prompt = '',
  styles = [],
  seed = -1,
  subseed = -1,
  subseed_strength = 0,
  seed_resize_from_h = -1,
  seed_resize_from_w = -1,
  sampler_name = null,
  batch_size = 1,
  n_iter = 1,
  steps = 50,
  cfg_scale = 7,
  width = 512,
  height = 512,
  restore_faces = true,
  tiling = true,
  do_not_save_samples = false,
  do_not_save_grid = false,
  eta = 0,
  denoising_strength = 0.75,
  s_min_uncond = 0,
  s_churn = 0,
  s_tmax = 0,
  s_tmin = 0,
  s_noise = 0,
  override_settings = {},
  override_settings_restore_afterwards = true,
  refiner_checkpoint = null,
  refiner_switch_at = 0,
  disable_extra_networks = false,
  comments = {},
  enable_hr = false,
  firstphase_width = 0,
  firstphase_height = 0,
  hr_scale = 2,
  hr_upscaler = 'string',
  hr_second_pass_steps = 0,
  hr_resize_x = 0,
  hr_resize_y = 0,
  hr_checkpoint_name = 'string',
  hr_sampler_name = 'string',
  hr_prompt = '',
  hr_negative_prompt = '',
  sampler_index = 'Euler',
  script_name = null,
  script_args = [],
  send_images = true,
  save_images = false,
  alwayson_scripts = {},
  setImage = null,
} = {}) {
  const payload = JSON.stringify({
    prompt: `${my_prompt}`,
    negative_prompt: `${negative_prompt}`,
    styles: styles,
    seed: seed,
    subseed: subseed,
    subseed_strength: subseed_strength,
    seed_resize_from_h: seed_resize_from_h,
    seed_resize_from_w: seed_resize_from_w,
    sampler_name: sampler_name,
    batch_size: batch_size,
    n_iter: n_iter,
    steps: steps,
    cfg_scale: cfg_scale,
    width: width,
    height: height,
    restore_faces: restore_faces,
    tiling: tiling,
    do_not_save_samples: do_not_save_samples,
    do_not_save_grid: do_not_save_grid,
    eta: eta,
    denoising_strength: denoising_strength,
    s_min_uncond: s_min_uncond,
    s_churn: s_churn,
    s_tmax: s_tmax,
    s_tmin: s_tmin,
    s_noise: s_noise,
    override_settings: override_settings,
    override_settings_restore_afterwards: override_settings_restore_afterwards,
    refiner_checkpoint: refiner_checkpoint,
    refiner_switch_at: refiner_switch_at,
    disable_extra_networks: disable_extra_networks,
    comments: comments,
    enable_hr: enable_hr,
    firstphase_width: firstphase_width,
    firstphase_height: firstphase_height,
    hr_scale: hr_scale,
    hr_upscaler: `${hr_upscaler}`,
    hr_second_pass_steps: hr_second_pass_steps,
    hr_resize_x: hr_resize_x,
    hr_resize_y: hr_resize_y,
    hr_checkpoint_name: `${hr_checkpoint_name}`,
    hr_sampler_name: `${hr_sampler_name}`,
    hr_prompt: `${hr_prompt}`,
    hr_negative_prompt: `${hr_negative_prompt}`,
    sampler_index: `${sampler_index}`,
    script_name: script_name,
    script_args: script_args,
    send_images: send_images,
    save_images: save_images,
    alwayson_scripts: alwayson_scripts,
  });

  console.log(payload);

  const options = {
    url: `${url}/sdapi/v1/txt2img`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: payload,
  };

  console.log('Create request!');

  fetch(options.url, options) // Use fetch instead of request
    .then(response => response.json())
    .then(body => {
      // Uncomment if you want to see the response

      console.log(body);
      console.log('1')
      console.log('2')
      setImage(`data:image/png;base64,${body.images[0]}`)

    })
    .catch(error => {
      console.log(error);
    });
}
