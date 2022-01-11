import {
  FETCH_IMAGES_LOADING,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR
} from "./actions";

interface ImagesState {
  loading: boolean;
  images?: string;
  error?: undefined;
}

const initialState: ImagesState = {
  loading: false
};

export function imagesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGES_LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_IMAGES_SUCCESS:
      console.log(action.images, 2);
      return {
        ...state,
        loading: false,
        images: action.images
      };
    case FETCH_IMAGES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
