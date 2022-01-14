import {
  fetchImagesFailure,
  fetchImagesLoading,
  fetchImagesSuccess
} from "./actions";

// const API = "https://images-api.nasa.gov";

export function fetchImages(roverName = "curiosity", sol = 1000) {
  return (dispatch: any) => {
    dispatch(fetchImagesLoading());
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&api_key=DAnjq9nzCYSphxZTRf2cjgMBIxHrzHUnmAE4prkx`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.status > 400) {
          throw res.errors;
        }
        dispatch(fetchImagesSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchImagesFailure(error));
      });
  };
}
