export const FETCH_IMAGES_SUCCESS = "FETCH_IMAGES";
export const FETCH_IMAGES_LOADING = "FETCH_IMAGES_LOADING";
export const FETCH_IMAGES_ERROR = "FETCH_IMAGES_ERROR";

export function fetchImagesLoading() {
  return {
    type: FETCH_IMAGES_LOADING
  };
}

export function fetchImagesSuccess(images) {
  return {
    type: FETCH_IMAGES_SUCCESS,
    images: images.collection.items[0].links[0].href
  };
}

export function fetchImagesFailure(error: string) {
  return {
    type: FETCH_IMAGES_ERROR,
    error: error
  };
}
