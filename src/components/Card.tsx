import { Frame } from "./Styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchImages } from "../redux/fetchImages";
import { RootState } from "../redux/rootReducer";
import React from "react";
import { MediaCard } from "@shopify/polaris";

export const Card = () => {
  const dispatch = useDispatch();
  const imagesState = useSelector((state: RootState) => state.images);

  useEffect(() => {
    dispatch(fetchImages());
  });

  return imagesState.imagesPayload ? (
    <div
      style={{
        height: "400px",
        width: "250px",
        margin: "25px",
        display: "flex",
        alignContent: "center",
        justifyContent: "center"
      }}
    >
      <MediaCard
        title="Curisity Image"
        description="This is an image"
        portrait={true}
      >
        <img
          src={
            "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FRB_486265257EDR_F0481570FHAZ00323M_.JPG"
          }
          alt="A mars Rover"
          width="100%"
          height="100%"
          style={{
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
      </MediaCard>
    </div>
  ) : null;
};
