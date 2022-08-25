import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import MenuDetail from './components/DishDetailComponent';

import { DISHES } from './shared/dishes';

class App extends Component  {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render (){
    return (
      <div className="App">
        {/* app.js là chính nề,  */}
        {/* hiển thị Navbar*/}
        <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">Coursera</NavbarBrand>
            </div>
        </Navbar>
        {/* Hiển thị Menu */}
        <MenuDetail dishes={this.state.dishes} />
      </div>
    );
  }
  
}

export default App;
