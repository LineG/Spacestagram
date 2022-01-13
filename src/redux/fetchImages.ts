import {
  fetchImagesFailure,
  fetchImagesLoading,
  fetchImagesSuccess
} from "./actions";

// const API = "https://images-api.nasa.gov";

export function fetchImages() {
  return (dispatch: any) => {
    dispatch(fetchImagesLoading());
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=VFAzB2MN3LCuiD7m9Bfntsc2tlfD0w5ui5zi00NA`
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
