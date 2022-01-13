import { Provider } from "react-redux";
import { store } from "./redux/store";
import { MainPage } from "./components/MainPage";
import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";

export const App = () => {
  return (
    <AppProvider i18n={{}} theme={{ colorScheme: "light" }}>
      <Provider store={store}>
        <MainPage />
      </Provider>
    </AppProvider>
  );
};
