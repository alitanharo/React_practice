import Detail from "./pages/Detail";

import MainProvider from "./context/MainProvider";
import Home from "./pages/Home";
import MainRouter from "./components/MainRouter";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <MainProvider>
      <MainRouter />
    </MainProvider>
  );
};

export default App;
