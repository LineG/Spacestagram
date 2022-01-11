import { Dispatch } from "react";
import {
  fetchImagesFailure,
  fetchImagesLoading,
  fetchImagesSuccess
} from "./actions";

const API = "https://images-api.nasa.gov";

export function fetchImages() {
  return (dispatch) => {
    dispatch(fetchImagesLoading());
    fetch(
      `https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchImagesSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchImagesFailure(error));
      });
  };
}
