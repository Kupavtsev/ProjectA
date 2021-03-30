import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';

import Content from './components/Content/Content.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Tents from './components/main/Tents';
import Trucks from './components/main/Trucks';
import Containers from './components/main/Containers';
import TNVED from './components/main/TNVED';


function App() {
  return (
    <div className='app-wrapper'>
      <BrowserRouter>
        <Header />
        {/* <Content /> */}
        

        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/" component={Content} />
            <Route exact path="/tents" component={Tents} />
            <Route exact path="/trucks" component={Trucks} />
            <Route exact path="/containers" component={Containers} />
            <Route exact path="/tnveds" component={TNVED} />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
