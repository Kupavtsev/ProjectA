import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Content from './components/Content/Content.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Tents from './components/main/Tents';
import Trucks from './components/main/Trucks';
import Containers from './components/main/Containers';
import Wagons from './components/main/Wagons';


function App() {
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <Header />
        {/* <Content /> */}
        <Footer />

        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/" component={Content} />
            <Route exact path="/tents" component={Tents} />
            <Route exact path="/trucks" component={Trucks} />
            <Route exact path="/containers" component={Containers} />
            <Route exact path="/wagons" component={Wagons} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
