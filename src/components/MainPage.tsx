import { Card } from "./Card";
import { Page } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";

export const MainPage = () => {
  return (
    <Page>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          flexWrap: "wrap"
        }}
      >
        <Card />
        {/* <Card />
        <Card />

        <Card />
        <Card />

        <Card /> */}
      </div>
    </Page>
  );
};
