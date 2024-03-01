import {saveImage, toBase64} from './imageConverter.js';

//отвечает за отправку запроса
export async function img2imgPostRequest({
  my_prompt = 'Funny Criper',
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
  init_image = 'anything',
  resize_mode = 0,
  image_cfg_scale = 0,
  mask_blur_x = 4,
  mask_blur_y = 4,
  mask_blur = 0,
  inpainting_fill = 0,
  inpaint_full_res = true,
  inpaint_full_res_padding = 0,
  inpainting_mask_invert = 0,
  initial_noise_multiplier = 0,
  latent_mask = null,
  sampler_index = 'Euler',
  include_init_images = false,
  script_name = null,
  script_args = [],
  send_images = true,
  save_images = false,
  alwayson_scripts = {},
} = {}) {
  try {
    if (init_image === 'anything') {
      const contents = await toBase64('./../../example/example.png');
      init_image = contents;
    }

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
      override_settings_restore_afterwards:
        override_settings_restore_afterwards,
      refiner_checkpoint: refiner_checkpoint,
      refiner_switch_at: refiner_switch_at,
      disable_extra_networks: disable_extra_networks,
      comments: comments,
      init_images: [`${init_image}`],
      resize_mode: resize_mode,
      image_cfg_scale: image_cfg_scale,
      mask_blur_x: mask_blur_x,
      mask_blur_y: mask_blur_y,
      mask_blur: mask_blur,
      inpainting_fill: inpainting_fill,
      inpaint_full_res: inpaint_full_res,
      inpaint_full_res_padding: inpaint_full_res_padding,
      inpainting_mask_invert: inpainting_mask_invert,
      initial_noise_multiplier: initial_noise_multiplier,
      latent_mask: latent_mask,
      sampler_index: `${sampler_index}`,
      include_init_images: include_init_images,
      script_name: script_name,
      script_args: script_args,
      send_images: send_images,
      save_images: save_images,
      alwayson_scripts: alwayson_scripts,
    });

    const options = {
      url: `${url}/sdapi/v1/img2img`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: payload,
    };

    await fetch(options.url, options)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => {
        console.log(error);
        throw new Error(error);
      });
  } catch (e) {
    console.log(e);
  }
}
