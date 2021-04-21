import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './../App.css';

// My Components
// Structure
import Content from './Content/Content.js';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';

// Routes
import Tents from './main/Tents';
import Articles from './Artilces/Articles';
import Containers from './main/Containers';
import About from './About/About';
import TentsEuro from './main/Tents/TentsEuro';
import Semitrailers from "./main/Semitrailers/Semitrailers";
import SemitrailersCont from "./main/SemitrailersCont/SemitrailersCont";
import Trals from "./main/Trals/Trals";

import { YMInitializer } from 'react-yandex-metrika';

let BaseLayout = () => {
    return (
        <div className='app-wrapper'>
        <BrowserRouter> 
          <Header /> 
          {/* <Content /> */}
          <div className="app-wrapper-content">
            <Switch>
              <Route exact path="/" component={Content} />
              <Route exact path="/tents" component={Tents} />
              <Route exact path="/articles" component={Articles} />
              <Route exact path="/containers" component={Containers} />
              <Route exact path="/about" component={About} />
              <Route exact path="/tents-euro" component={TentsEuro} />
              <Route exact path="/semitrailers" component={Semitrailers} />
              <Route exact path="/semitrailers-cont" component={SemitrailersCont} />
              <Route exact path="/trals" component={Trals} />
            </Switch>
          </div>
        </BrowserRouter>
        <Footer />
        <YMInitializer accounts={[75168874]} />
      </div>
    )
}


export default  BaseLayout;