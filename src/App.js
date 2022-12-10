import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import "./App.css"
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
