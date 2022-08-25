import React, { Component } from 'react';
import { Media, NavItem } from 'reactstrap';
import '../App.css';
// mỗi lần muốn dùng bootstrap gì thì pải import vào và from reactstrap
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { DISHES } from '../shared/dishes';

class Menu extends Component {

  // normaldish = {name :"", description:"",comments:[]};

  test = "ok1";
  
  // khai bao constructor 
  constructor(props) {
    super(props);
    // tao state, la tao ra cac mang du lieu, cac component

    // state khác với dữ liệu thường
    // state có thể render lại dữ liệu ra màn hình lại
    // còn dữ liệu thường ko có cập nhập lại dữ liệu thay đổi ra màn hình
    this.state = {
      // gán ban đầu bằng null kiểu như chưa click cái nào hết
      selectedDish: null,
      test: ""
    };
  }

  // function onDishSelect
  // hàm khởi tạo có đối số
  onDishSelect(dish) {
    // setState để khowir tao gawns SelectedDish = dish
    this.setState({ selectedDish: dish });
    // this.setState({test : "ok2"});
    // this.test = "Ok2";
    // alert("đã click")
    // this.normaldish = dish;
  }

  // renderDish khi click thì sẽ xuất hiện cái gì
  // render là chứa UI, cái mà sẽ hiển thị ra
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle className='dishName' >{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else
      return (
        <div></div>
      );
  }

  renderComment(dish){
    if(dish!=null)
    {
      const cmt = dish.comments.map((cmt) => {
        return(
          <div>
            <p> {cmt.author} </p>
          </div>
        );
      });
      return cmt;
    }
    else
    return(
      <div></div>
    );
  }

  // render main
  render() {
    // khai bao bien menu goi mang state đã được dinh nghia
    // tim hieu map ở javascript
    // lesson 2, thay state = props
    const menu = this.props.dishes.map((dish) => {
      // return một card
      return (
        <div className="col-12 col-md-5 m-1">
          <Card key={dish.id}
            // khi onclick vào một dish nào đó
            onClick={() => this.onDishSelect(dish)} >

            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            {/* <p>{dish.comments.map((cmt) => {
              return (
                <div>
                  {cmt.author}
                </div>
              );
            })}</p> */}
          </Card>

          {/* gọi hàm rendercomment */}
          {/* {this.renderComment(dish)} */}
          
        </div>
      );// end return menu
    });

    // return của render
    // return của render mới xuất hiện ra màn hình
    // return all
    return (
      <div className="container">
        <div className="row">
          {/* gọi biến menu hiển thị */}
          {menu}

          {/* {this.state.test} */}
          {/* {this.test} */}

        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {/* gọi renderDish để hiển thị */}
            {this.renderDish(this.state.selectedDish)}
          </div>
          <div className="col-12 col-md-5 m-1">
          {/* dung toan tu cho ko dung cu phap dc */}
          {this.state.selectedDish != null ? <h4>comments</h4> : <div> </div>}
          
          {this.renderComment(this.state.selectedDish)}
          {/* {this.renderComment(this.normaldish)} */}
          </div>
        </div>
      </div>
    );
  } // end return render
}

export default Menu;