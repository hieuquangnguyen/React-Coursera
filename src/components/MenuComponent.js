import React, { Component } from 'react';
import DishDetail from './DishDetailComponent';
import '../App.css';
// mỗi lần muốn dùng bootstrap gì thì pải import vào và from reactstrap
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
// file menu ni có thể hiểu là  Presentational Component
class Menu extends Component {

 
  // khai bao constructor 
  constructor(props){
    super(props);
  }
  // constructor(props) {
  //   super(props);
  //   // tao state, la tao ra cac mang du lieu, cac component

  //   // state khác với dữ liệu thường
  //   // state có thể render lại dữ liệu ra màn hình lại
  //   // còn dữ liệu thường ko có cập nhập lại dữ liệu thay đổi ra màn hình
  //   this.state = {
  //     // gán ban đầu bằng null kiểu như chưa click cái nào hết
  //     selectedDish: null,
      
  //   };
  // } --> đã chuyển sang Main

  // function onDishSelect
  // hàm khởi tạo có đối số
  // onDishSelect(dish) {
  //   // setState để khowir tao gawns SelectedDish = dish
  //   this.setState({ selectedDish: dish });
  // } --> đã được chuyển sang Main

  // renderDish khi click thì sẽ xuất hiện cái gì
  // render là chứa UI, cái mà sẽ hiển thị ra
  // renderDish(dish) {
  //   if (dish != null)
  //     return (
  //       <Card>
  //         <CardImg top src={dish.image} alt={dish.name} />
  //         <CardBody>
  //           <CardTitle className='dishName' >{dish.name}</CardTitle>
  //           <CardText>{dish.description}</CardText>
  //         </CardBody>
  //       </Card>
  //     );
  //   else
  //     return (
  //       <div></div>
  //     );
  // }

  // renderComment(dish){
  //   if(dish!=null)
  //   {
  //     const cmt = dish.comments.map((cmt) => {
  //       return(
  //         <div>
  //           <p> {cmt.author} </p>
  //         </div>
  //       );
  //     });
  //     return cmt;
  //   }
  //   else
  //   return(
  //     <div></div>
  //   );
  // }

  // render main
  render() {
    // khai bao bien menu goi mang state đã được dinh nghia
    // tim hieu map ở javascript
    // lesson 2, thay state = props
    const menu = this.props.dishes.map((dish) => {
      // return một card
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card // khi onclick vào một dish nào đó
            onClick={() => this.props.onClick(dish.id)} > 

            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );// end return menu
    });
    // return của render mới xuất hiện ra màn hình
    // return all
    return (
      <div className="container">
        <div className="row">
          {/* gọi biến menu hiển thị */}
          {menu}
        </div>
        {/* <DishDetail dish = {this.state.selectedDish}/> */}
        {/* {DishDetail(this.state.selectedDish)} */}
      </div>
    );
  } // end return render
}

export default Menu;