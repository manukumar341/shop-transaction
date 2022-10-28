import { Provider } from "react-redux";
import { CustomerContainer } from "./Container-Customer/customer-container";
import store from "./Container-Customer/store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CustomerContainer />
      </Provider>
    </div>
  );
}

export default App;
