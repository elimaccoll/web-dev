import './vendors/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import './vendors/bootstrap/cyborg/bootstrap.min.css';
import './vendors/fontawesome/fontawesome-free-5.15.4-web/css/all.css';
import './vendors/fontawesome/fontawesome-free-5.15.4-web/css/fontawesome.min.css';
import './vendors/fontawesome/fontawesome-free-5.15.4-web/css/v4-shims.css'

import HelloWorld from "./components/hello-world"; // no .js extension needed
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";

import {BrowserRouter, Route, Routes} from "react-router-dom";
import ExploreComponent from './components/tuiter/ExploreScreen/ExploreComponent';
import HomeScreen from './components/tuiter/HomeScreen';

const App = () => { // can also use const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<Labs/>}/>
            <Route path="hello" element={<HelloWorld/>}/>
            <Route path="tuiter" element={<Tuiter/>}>
              <Route index element={<HomeScreen/>}/>
              <Route path="explore" element={<ExploreComponent/>}/>
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

