import { Image } from "./reducer";

export const FETCH_IMAGES_SUCCESS = "FETCH_IMAGES";
export const FETCH_IMAGES_LOADING = "FETCH_IMAGES_LOADING";
export const FETCH_IMAGES_ERROR = "FETCH_IMAGES_ERROR";

interface Photos {
  photos: Image[];
}

export function fetchImagesLoading() {
  return {
    type: FETCH_IMAGES_LOADING
  };
}

export function fetchImagesSuccess(photos: Photos) {
  return {
    type: FETCH_IMAGES_SUCCESS,
    payload: photos.photos
  };
}

export function fetchImagesFailure(error: string) {
  // console.log(error)
  return {
    type: FETCH_IMAGES_ERROR,
    error: error
  };
}
