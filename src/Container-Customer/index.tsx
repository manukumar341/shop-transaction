import { Provider } from "react-redux";
import { CustomerContainer } from "./customer-container";
import store from "./store/store";

function CustomerApp() {
  return (
    <div>
      <Provider store={store}>
        <CustomerContainer />
      </Provider>
    </div>
  );
}

export default CustomerApp;
