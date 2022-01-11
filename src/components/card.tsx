import { Frame } from "./Styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchImages } from "../redux/fetchImages";
import { RootState } from "../redux/rootReducer";

export const Card = () => {
  const dispatch = useDispatch();
  const imagesState = useSelector((state: RootState) => state.images);

  useEffect(() => {
    dispatch(fetchImages());
  }, []);

  return (
    <div>
      <Frame>NASA APP</Frame>
      <img src={imagesState.images} />
    </div>
  );
};
