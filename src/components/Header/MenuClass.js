import React from 'react'
import { Link } from "react-router-dom";


export default class MenuClass extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
        return (
            <nav                                   
            className="navbar container"         
            role="navigation"
            aria-label="main navigation"
            >
            <div className="navbar-brand">
              
              <label
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ showMenu: !this.state.showMenu });
                }}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </label>
            </div>
              <div className={`navbar-menu ${
                  this.state.showMenu ? "is-active" : ""
                }`}>
                <Link to="/tents" className="navbar-item">
                    Полу-прицепы                            
                </Link>                                
                <Link to="/containers" className="navbar-item">
                    Контейнеры
                </Link>
                <Link to="/articles" className="navbar-item">
                    Статьи
                </Link>
              </div>
            </nav>
        )
    }
}