import './vendors/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import './vendors/bootstrap/cyborg/bootstrap.min.css';
import './vendors/fontawesome/fontawesome-free-5.15.4-web/css/all.css';

import HelloWorld from "./components/hello-world"; // no .js extension needed
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";

import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() { // can also use const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/hello" exact={true} element={<HelloWorld/>}/>
          <Route path="/" exact={true} element={<Labs/>}/>
          <Route path="/tuiter/" exact={true} element={<Tuiter/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

