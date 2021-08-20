import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store/store";
import CssBaseline from "@material-ui/core/CssBaseline";
import Component from "./component/component";

import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CssBaseline>
          <Component />
        </CssBaseline>
      </PersistGate>
    </Provider>
  );
}
