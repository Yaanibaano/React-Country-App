import MainBodyComponent from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import { ConfigureStore } from "./redux/configureStore"
import { Provider } from "react-redux"

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <MainBodyComponent></MainBodyComponent>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
