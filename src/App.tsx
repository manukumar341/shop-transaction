import { Provider } from "react-redux";
import { CustomerContainer } from "./container-customer/customer-container";
import store from "./container-customer/store/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <CustomerContainer />
      </Provider>
    </div>
  );
}

export default App;
