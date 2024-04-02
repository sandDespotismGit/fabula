import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
export const getAllFirst = async () => {
  try {
    const response = await fetch("http://176.222.55.165:7000/allFirstStyle", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
export const getAllSecond = async () => {
  try {
    const response = await fetch("http://176.222.55.165:7000/allSecondStyle", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

// Пример использования:
// getAllSecond().then((result) => {
//   if (result) {
//     console.log("Результат запроса:", result);
//   } else {
//     console.log("Произошла ошибка при выполнении запроса.");
//   }
// });

export const getAllThird = async () => {
  try {
    const response = await fetch("http://176.222.55.165:7000/allThirdStyle", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getFirstStyle = (id) => {
  fetch(`http://176.222.55.165:7000/first/:${id}`, { method: "GET" })
    .then((response) => response.json())
    .then((data) => console.log(data));
};
export const getSecondStyle = (id) => {
  fetch(`http://176.222.55.165:7000/first/:${id}`, { method: "GET" })
    .then((response) => response.json())
    .then((data) => console.log(data));
};
export const getThirdStyle = (id) => {
  fetch(`http://176.222.55.165:7000/first/:${id}`, { method: "GET" })
    .then((response) => response.json())
    .then((data) => console.log(data));
};

// export default function base64Txt2imgPostRequest({
//     my_prompt = 'Vagina',
//     negative_prompt = '',
//     styles = [],
//     seed = -1,
//     subseed = -1,
//     subseed_strength = 0,
//     seed_resize_from_h = -1,
//     seed_resize_from_w = -1,
//     sampler_name = null,
//     batch_size = 1,
//     n_iter = 1,
//     steps = 50,
//     cfg_scale = 7,
//     width = 512,
//     height = 512,
//     restore_faces = true,
//     tiling = true,
//     do_not_save_samples = false,
//     do_not_save_grid = false,
//     eta = 0,
//     denoising_strength = 0.75,
//     s_min_uncond = 0,
//     s_churn = 0,
//     s_tmax = 0,
//     s_tmin = 0,
//     s_noise = 0,
//     override_settings = {},
//     override_settings_restore_afterwards = true,
//     refiner_checkpoint = null,
//     refiner_switch_at = 0,
//     disable_extra_networks = false,
//     comments = {},
//     enable_hr = false,
//     firstphase_width = 0,
//     firstphase_height = 0,
//     hr_scale = 2,
//     hr_upscaler = 'string',
//     hr_second_pass_steps = 0,
//     hr_resize_x = 0,
//     hr_resize_y = 0,
//     hr_checkpoint_name = 'string',
//     hr_sampler_name = 'string',
//     hr_prompt = '',
//     hr_negative_prompt = '',
//     sampler_index = 'Euler',
//     script_name = null,
//     script_args = [],
//     send_images = true,
//     save_images = false,
//     alwayson_scripts = {},
//     setImage = null,
//   } = {}) {
//     const payload = JSON.stringify({
//       prompt: `${my_prompt}`,
//       negative_prompt: `${negative_prompt}`,
//       styles: styles,
//       seed: seed,
//       subseed: subseed,
//       subseed_strength: subseed_strength,
//       seed_resize_from_h: seed_resize_from_h,
//       seed_resize_from_w: seed_resize_from_w,
//       sampler_name: sampler_name,
//       batch_size: batch_size,
//       n_iter: n_iter,
//       steps: steps,
//       cfg_scale: cfg_scale,
//       width: width,
//       height: height,
//       restore_faces: restore_faces,
//       tiling: tiling,
//       do_not_save_samples: do_not_save_samples,
//       do_not_save_grid: do_not_save_grid,
//       eta: eta,
//       denoising_strength: denoising_strength,
//       s_min_uncond: s_min_uncond,
//       s_churn: s_churn,
//       s_tmax: s_tmax,
//       s_tmin: s_tmin,
//       s_noise: s_noise,
//       override_settings: override_settings,
//       override_settings_restore_afterwards: override_settings_restore_afterwards,
//       refiner_checkpoint: refiner_checkpoint,
//       refiner_switch_at: refiner_switch_at,
//       disable_extra_networks: disable_extra_networks,
//       comments: comments,
//       enable_hr: enable_hr,
//       firstphase_width: firstphase_width,
//       firstphase_height: firstphase_height,
//       hr_scale: hr_scale,
//       hr_upscaler: `${hr_upscaler}`,
//       hr_second_pass_steps: hr_second_pass_steps,
//       hr_resize_x: hr_resize_x,
//       hr_resize_y: hr_resize_y,
//       hr_checkpoint_name: `${hr_checkpoint_name}`,
//       hr_sampler_name: `${hr_sampler_name}`,
//       hr_prompt: `${hr_prompt}`,
//       hr_negative_prompt: `${hr_negative_prompt}`,
//       sampler_index: `${sampler_index}`,
//       script_name: script_name,
//       script_args: script_args,
//       send_images: send_images,
//       save_images: save_images,
//       alwayson_scripts: alwayson_scripts,
//     });

//   console.log(payload);

//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: payload,
//   };
//   fetch("http://176.222.55.165:7000/txt2img", options) // Use fetch instead of request
//     .then((response) => response.json())
//     .then((body) => {
//       // Uncomment if you want to see the response

//       console.log(body);
//       console.log("1");
//       console.log("2");
//       setImage(`data:image/png;base64,${body.images[0]}`)
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
export default function base64Txt2imgPostRequest({
  my_prompt = "Vagina",
  negative_prompt = "",
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
  hr_upscaler = "string",
  hr_second_pass_steps = 0,
  hr_resize_x = 0,
  hr_resize_y = 0,
  hr_checkpoint_name = "string",
  hr_sampler_name = "string",
  hr_prompt = "",
  hr_negative_prompt = "",
  sampler_index = "Euler",
  script_name = null,
  script_args = [],
  send_images = true,
  save_images = false,
  alwayson_scripts = {},
  setImage = null,
} = {}) {
  const payload = JSON.stringify({
    my_prompt: "Funny Criper",
    negative_prompt: "",
    styles: [],
    seed: -1,
    subseed: -1,
    subseed_strength: 0,
    seed_resize_from_h: -1,
    seed_resize_from_w: -1,
    sampler_name: null,
    batch_size: 1,
    n_iter: 1,
    steps: 50,
    cfg_scale: 7,
    width: 512,
    height: 512,
    restore_faces: true,
    tiling: true,
    do_not_save_samples: false,
    do_not_save_grid: false,
    eta: 0,
    denoising_strength: 0.75,
    s_min_uncond: 0,
    s_churn: 0,
    s_tmax: 0,
    s_tmin: 0,
    s_noise: 0,
    override_settings: {},
    override_settings_restore_afterwards: true,
    refiner_checkpoint: null,
    refiner_switch_at: 0,
    disable_extra_networks: false,
    comments: {},
    enable_hr: false,
    firstphase_width: 0,
    firstphase_height: 0,
    hr_scale: 2,
    hr_upscaler: "string",
    hr_second_pass_steps: 0,
    hr_resize_x: 0,
    hr_resize_y: 0,
    hr_checkpoint_name: "string",
    hr_sampler_name: "string",
    hr_prompt: "",
    hr_negative_prompt: "",
    sampler_index: "Euler",
    script_name: null,
    script_args: [],
    send_images: true,
    save_images: false,
    alwayson_scripts: {},
  });

  console.log(payload);

  const options = {
    url: "http://176.222.55.165:7000/txt2img",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  };

  console.log("Create request!");

  fetch(options.url, options) // Use fetch instead of request
    .then((response) => response.json())
    .then((body) => {
      // Uncomment if you want to see the response

      console.log(body);
      console.log("1");
      console.log("2");
      setImage(`data:image/png;base64,${body.images[0]}`);
    })
    .catch((error) => {
      console.log(error);
    });
}

//отвечает за отправку запроса
export async function base64img2imgPostRequest({
  init_image = "anything",
  setImage = null,
  style = {
    alwayson_scripts: {},
    batch_size: 1,
    cfg_scale: 7,
    comments: {},
    denoising_strength: 0.75,
    disable_extra_networks: false,
    do_not_save_grid: false,
    do_not_save_samples: false,
    height: 512,
    image_cfg_scale: 1.5,
    init_images: [],
    initial_noise_multiplier: 1,
    inpaint_full_res: 0,
    inpaint_full_res_padding: 32,
    inpainting_fill: 1,
    inpainting_mask_invert: 0,
    mask_blur: 4,
    mask_blur_x: 4,
    mask_blur_y: 4,
    mask_round: true,
    n_iter: 1,
    negative_prompt: "",
    override_settings: {},
    override_settings_restore_afterwards: true,
    prompt: "Picasso; Van gog; Abstract",
    resize_mode: 0,
    restore_faces: false,
    s_churn: 0,
    s_min_uncond: 0,
    s_noise: 1,
    s_tmax: null,
    s_tmin: 0,
    sampler_name: "DPM++ 2M Karras",
    script_args: [],
    script_name: null,
    seed: -1,
    seed_enable_extras: true,
    seed_resize_from_h: -1,
    seed_resize_from_w: -1,
    steps: 20,
    styles: [],
    subseed: -1,
    subseed_strength: 0,
    tiling: false,
    width: 512,
  },
} = {}) {
  try {
    let prompt = style;
    style.init_images[0] = init_image;
    const payload = JSON.stringify(prompt);

    const options = {
      url: `http://176.222.55.165:7000/img2img`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    };

    await fetch(options.url, options)
      .then((response) => response.json())
      .then((body) => {
        // Uncomment if you want to see the response

        console.log(body);
        console.log("1");
        console.log("2");
        setImage(body.images[0]);
      })
      .catch((error) => {
        console.log(error);

        throw new Error(error);
      });
  } catch (e) {
    console.log(e);
  }
}
export const saveBase64ImageToGallery = async (
  base64Image,
  albumName = "Neuron"
) => {
  try {
    // Проверяем разрешение на доступ к галерее
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access media library was denied");
      return;
    }

    // Создаем альбом, если он не существует

    // Создаем временный файл с расширением .png
    const fileUri = FileSystem.cacheDirectory + "tempImage.png";

    // Записываем base64 данные в файл
    await FileSystem.writeAsStringAsync(fileUri, base64Image, {
      encoding: FileSystem.EncodingType.Base64,
    });

    // Сохраняем файл в галерее в указанном альбоме
    const asset = await MediaLibrary.createAssetAsync(fileUri);
    let album = await MediaLibrary.getAlbumAsync(albumName);
    if (!album) {
      album = await MediaLibrary.createAlbumAsync(albumName, asset);
    }
    await MediaLibrary.addAssetsToAlbumAsync([asset], album.id, false);

    console.log("Изображение успешно сохранено в галерее в альбоме", albumName);
  } catch (error) {
    console.error("Произошла ошибка при сохранении изображения:", error);
  }
};
export const getMask = async (base64Image) => {
  const payload = JSON.stringify({ image: `${base64Image}` });
  const options = {
    url: `http://176.222.55.165:7000/get-mask`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  };
  console.log(options);

  const result = fetch(options.url, options);
  return result;
};

export async function base64img2imgPostRequestDepth({
  init_image = "anything",
  setImage = null,
  mask,
  style = {
    alwayson_scripts: {
      "API payload": {
        args: [],
      },
      ControlNet: {
        args: [
          {
            advanced_weighting: null,
            batch_images: "",
            control_mode: "Balanced",
            enabled: false,
            guidance_end: 1,
            guidance_start: 0,
            hr_option: "Both",
            image: null,
            inpaint_crop_input_image: true,
            input_mode: "simple",
            is_ui: true,
            loopback: false,
            low_vram: false,
            model: "None",
            module: "none",
            output_dir: "",
            pixel_perfect: false,
            processor_res: -1,
            resize_mode: "Crop and Resize",
            save_detected_map: true,
            threshold_a: -1,
            threshold_b: -1,
            weight: 1,
          },
          {
            advanced_weighting: null,
            batch_images: "",
            control_mode: "Balanced",
            enabled: false,
            guidance_end: 1,
            guidance_start: 0,
            hr_option: "Both",
            image: null,
            inpaint_crop_input_image: true,
            input_mode: "simple",
            is_ui: true,
            loopback: false,
            low_vram: false,
            model: "None",
            module: "none",
            output_dir: "",
            pixel_perfect: false,
            processor_res: -1,
            resize_mode: "Crop and Resize",
            save_detected_map: true,
            threshold_a: -1,
            threshold_b: -1,
            weight: 1,
          },
          {
            advanced_weighting: null,
            batch_images: "",
            control_mode: "Balanced",
            enabled: false,
            guidance_end: 1,
            guidance_start: 0,
            hr_option: "Both",
            image: null,
            inpaint_crop_input_image: true,
            input_mode: "simple",
            is_ui: true,
            loopback: false,
            low_vram: false,
            model: "None",
            module: "none",
            output_dir: "",
            pixel_perfect: false,
            processor_res: -1,
            resize_mode: "Crop and Resize",
            save_detected_map: true,
            threshold_a: -1,
            threshold_b: -1,
            weight: 1,
          },
          {
            advanced_weighting: null,
            batch_images: "",
            control_mode: "Balanced",
            enabled: false,
            guidance_end: 1,
            guidance_start: 0,
            hr_option: "Both",
            image: null,
            inpaint_crop_input_image: true,
            input_mode: "simple",
            is_ui: true,
            loopback: false,
            low_vram: false,
            model: "None",
            module: "none",
            output_dir: "",
            pixel_perfect: false,
            processor_res: -1,
            resize_mode: "Crop and Resize",
            save_detected_map: true,
            threshold_a: -1,
            threshold_b: -1,
            weight: 1,
          },
          {
            advanced_weighting: null,
            batch_images: "",
            control_mode: "Balanced",
            enabled: false,
            guidance_end: 1,
            guidance_start: 0,
            hr_option: "Both",
            image: null,
            inpaint_crop_input_image: true,
            input_mode: "simple",
            is_ui: true,
            loopback: false,
            low_vram: false,
            model: "None",
            module: "none",
            output_dir: "",
            pixel_perfect: false,
            processor_res: -1,
            resize_mode: "Crop and Resize",
            save_detected_map: true,
            threshold_a: -1,
            threshold_b: -1,
            weight: 1,
          },
        ],
      },
      "Extra options": {
        args: [],
      },
      Refiner: {
        args: [false, "", 0.8],
      },
      Seed: {
        args: [-1, false, -1, 0, 0, 0],
      },
    },
    batch_size: 1,
    cfg_scale: 3,
    comments: {},
    denoising_strength: 1,
    disable_extra_networks: false,
    do_not_save_grid: false,
    do_not_save_samples: false,
    height: 1344,
    image_cfg_scale: 1.5,
    init_images: ["base64image placeholder"],
    initial_noise_multiplier: 1,
    inpaint_full_res: 0,
    inpaint_full_res_padding: 0,
    inpainting_fill: 0,
    inpainting_mask_invert: 0,
    mask_blur: 0,
    mask_blur_x: 0,
    mask_blur_y: 0,
    mask: "base64",
    n_iter: 1,
    override_settings: {},
    override_settings_restore_afterwards: true,
    prompt: "mountains",
    resize_mode: 0,
    restore_faces: false,
    s_churn: 0,
    s_min_uncond: 0,
    s_noise: 1,
    s_tmax: null,
    s_tmin: 0,
    sampler_name: "DPM++ 2M Karras",
    script_args: [],
    script_name: null,
    seed: -1,
    seed_enable_extras: true,
    seed_resize_from_h: -1,
    seed_resize_from_w: -1,
    steps: 25,
    styles: [],
    subseed: -1,
    subseed_strength: 0,
    tiling: false,
    width: 768,
  },
} = {}) {
  try {
    let prompt = style;
    let count = 0;
    style.init_images = [init_image];
    style.mask = `${mask}`;
    // style.mask = init_image;
    const payload = JSON.stringify(prompt);

    const options = {
      url: `http://176.222.55.165:7000/img2img`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    };

    await fetch(options.url, options)
      .then((response) => response.json())
      .then((body) => {
        // Uncomment if you want to see the response

        console.log(body);
        console.log("1");
        console.log("2");
        setImage(body.images[0]);
      })
      .catch((error) => {
        console.log(error);

        throw new Error(error);
      });
  } catch (e) {
    console.log(e);
  }
}
export async function base64img2imgPost13({
  init_image = "anything",
  setImage = null,
  keypoint = "anything",
  store = "",
  dimensions = [1024, 1024],

  style = {
    alwayson_scripts: {
      "API payload": {
        args: [],
      },
      Comments: {
        args: [],
      },
      ControlNet: {
        args: [
          {
            advanced_weighting: null,
            batch_images: "",
            control_mode: "Balanced",
            enabled: true,
            guidance_end: 1,
            guidance_start: 0,
            hr_option: "Both",
            image: {
              image: "",
              mask: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA+gAAAKbCAIAAADpADdoAAAHqklEQVR4nO3BMQEAAADCoPVPbQsvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgYozFAAFcrZ6hAAAAAElFTkSuQmCC",
            },
            inpaint_crop_input_image: false,
            input_mode: "simple",
            is_ui: true,
            loopback: false,
            low_vram: false,
            model: "ip_adapter_instant_id_sdxl [eb2d3ec0]",
            module: "instant_id_face_embedding",
            output_dir: "",
            pixel_perfect: false,
            processor_res: 640,
            resize_mode: "Resize and Fill",
            save_detected_map: true,
            threshold_a: -1,
            threshold_b: -1,
            weight: 1,
          },
          {
            advanced_weighting: null,
            batch_images: "",
            control_mode: "Balanced",
            enabled: true,
            guidance_end: 1,
            guidance_start: 0,
            hr_option: "Both",
            image: {
              image: "",
              mask: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB6gAAASTCAIAAABI4PQdAAAaKElEQVR4nO3BMQEAAADCoPVPbQsvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADuBhsiAAHSU28TAAAAAElFTkSuQmCC",
            },
            inpaint_crop_input_image: false,
            input_mode: "simple",
            is_ui: true,
            loopback: false,
            low_vram: false,
            model: "control_instant_id_sdxl [c5c25a50]",
            module: "instant_id_face_keypoints",
            output_dir: "",
            pixel_perfect: false,
            processor_res: 640,
            resize_mode: "Resize and Fill",
            save_detected_map: true,
            threshold_a: -1,
            threshold_b: -1,
            weight: 1,
          },
          {
            advanced_weighting: null,
            batch_images: "",
            control_mode: "Balanced",
            enabled: false,
            guidance_end: 1,
            guidance_start: 0,
            hr_option: "Both",
            image: null,
            inpaint_crop_input_image: false,
            input_mode: "simple",
            is_ui: true,
            loopback: false,
            low_vram: false,
            model: "None",
            module: "none",
            output_dir: "",
            pixel_perfect: false,
            processor_res: -1,
            resize_mode: "Just Resize",
            save_detected_map: true,
            threshold_a: -1,
            threshold_b: -1,
            weight: 1,
          },
        ],
      },
      "Extra options": {
        args: [],
      },
      Hypertile: {
        args: [],
      },
      "OpenPose Editor": {
        args: [],
      },
      Refiner: {
        args: [false, "", 0.8],
      },
      Seed: {
        args: [-1, false, -1, 0, 0, 0],
      },
      roop: {
        args: [
          null,
          false,
          "0",
          "/home/egore/automatic/stable-diffusion-webui/models/roop/inswapper_128.onnx",
          "CodeFormer",
          1,
          "",
          1,
          1,
          false,
          true,
        ],
      },
    },
    batch_size: 1,
    cfg_scale: 1.5,
    comments: {},
    denoising_strength: 0.7,
    disable_extra_networks: false,
    do_not_save_grid: false,
    do_not_save_samples: false,
    enable_hr: false,
    height: 1344,
    hr_negative_prompt: "",
    hr_prompt: "",
    hr_resize_x: 0,
    hr_resize_y: 0,
    hr_scale: 2,
    hr_second_pass_steps: 0,
    hr_upscaler: "Latent",
    n_iter: 2,
    negative_prompt:
      "long neck, lowres, text, error, cropped, worst quality, low quality, jpeg artifacts, ugly",
    override_settings: {
      sd_model_checkpoint: "turboDiffusionXL_v112.safetensors",
    },
    prompt:
      "natural skin, High contrast, vibrant colors, stunningly beautiful, detailed, sleek, ultramodern, magenta highlights, dark purple shadows, high contrast, cinematic, ultra detailed, intricate, professional masterpieces, best quality, realistic, plum blossom, jewelry, chinese clothes, headpiece, ultra detailed skin texture, ultra detailed hair, blurry background, depth of field, (branch:1.2), very aesthetic, absurdres, glowing, sparks, chromatic aberration, fantasy art style,The dark atmosphere, the contrast between light and dark,Dark background",
    restore_faces: false,
    s_churn: 0,
    s_min_uncond: 0,
    s_noise: 1,
    s_tmax: null,
    s_tmin: 0,
    sampler_name: "DPM++ SDE Karras",
    script_args: [],
    script_name: null,
    seed: -1,
    seed_enable_extras: true,
    seed_resize_from_h: -1,
    seed_resize_from_w: -1,
    steps: 8,
    styles: [],
    subseed: -1,
    subseed_strength: 0,
    tiling: false,
    width: 768,
  },
} = {}) {
  try {
    let prompt = style;
    console.log(prompt.alwayson_scripts);
    prompt.alwayson_scripts.ControlNet.args[0].image.image = init_image;
    prompt.alwayson_scripts.ControlNet.args[1].image.image = keypoint;
    prompt.height = dimensions[1];
    prompt.width = dimensions[0];
    // style.mask = init_image;
    const payload = JSON.stringify(prompt);

    const options = {
      url: `http://176.222.55.165:7000/txt2img`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    };

    await fetch(options.url, options)
      .then((response) => response.json())
      .then((body) => {
        // Uncomment if you want to see the response

        console.log(body);
        console.log("1");
        console.log("2");
        setImage(body.images[0]);
      })
      .catch((error) => {
        console.log(error);
        store.updateLoading = false;
      });
  } catch (e) {
    console.log(e);
  }
}
