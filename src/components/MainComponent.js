import React, { Component } from 'react';
import Home from "./HomeComponent";
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      //selectedDish: null
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId });
  // }

  render() {

    const Homepage = () => {
      return(
        <Home/>
      );
    }

    return (
      <div>
          <Header />
          {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
        {/* <div className="row"  >
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        </div> */}
          <Switch>
              <Route path="/home" component={Homepage}/>
              {/* c2 */}
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              {/* c3. Mặc định rằng nếu 2 link có path kia sai thì hén sẽ chạy về hôm
              redirect là mặc định */}
              <Redirect to="/home" />

          </Switch>
          <Footer />
      </div>
    );
  }
}

export default Main;