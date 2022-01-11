import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Card } from "./components/card";

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Card />
      </div>
    </Provider>
  );
};
