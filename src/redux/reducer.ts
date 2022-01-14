import {
  FETCH_IMAGES_LOADING,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR
} from "./actions";

export interface Image {
  id: number;
  sol: number;
  camera: {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
  };
}

interface ImagesState {
  loading: boolean;
  imagesPayload?: Image[];
  error?: any;
}

const initialState: ImagesState = {
  loading: false, 
  imagesPayload: undefined
};

export function imagesReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_IMAGES_LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        imagesPayload: action.payload
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
