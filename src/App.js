
import { Component } from 'react';

import Main from './components/MainComponent';
class App extends Component  {

  render (){
    return (
      // <div className="App">
        
      //   {/* app.js là chính nề,  */}
      //   {/* hiển thị Navbar*/}
      //   <Navbar dark color="primary">
      //       <div className="container">
      //         <NavbarBrand href="/">Coursera</NavbarBrand>
      //       </div>
      //   </Navbar>
      //   {/* Hiển thị Menu */}
      //   <Menu dishes={this.state.dishes} />
        
      // </div>
      <div className="App">
         <Main />
      </div>
    );
  }
  
}

export default App;
