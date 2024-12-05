import Body from "./Components/Body";
import Header from "./Components/Header";
import WatchPage from "./Components/WatchPage";
import "./App.css";
import { Provider } from "react-redux";
import appStore from "./Utils/Store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Body />}/>
            <Route path="/watch" element={<WatchPage />}/>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
