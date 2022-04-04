import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './HomePage';
import { BrowserRouter, Switch } from "react-router-dom";
import {Route} from "react-router-dom";
import Detail from './Detail';
import Paid from './Paid';
import './App.css';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path={`/detail/:id`} component={Detail} />
    <Route exact path="/paid" component={Paid}/>
    </Switch>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
