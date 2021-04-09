import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import { useMediaQuery } from 'react-responsive';

// My Components
// Structure
import Content from './components/Content/Content.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

// Routes
import Tents from './components/main/Tents';
import Articles from './components/Artilces/Articles';
import Containers from './components/main/Containers';
import About from './components/About/About';
import TentsEuro from './components/main/Tents/TentsEuro';
import Semitrailers from "./components/main/Semitrailers/Semitrailers";
import SemitrailersCont from "./components/main/SemitrailersCont/SemitrailersCont";
import Trals from "./components/main/Trals/Trals";

import { YMInitializer } from 'react-yandex-metrika';


function App() {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  if (isDesktopOrLaptop) {
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
    );
  }

  if (isBigScreen) {
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
    );
  }

  if (isTabletOrMobile) {
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
    );
  }

  if (isPortrait) {
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
    );
  }

  if (isRetina) {
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
    );
  }

  else {
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
    );
  }

}

export default App;
