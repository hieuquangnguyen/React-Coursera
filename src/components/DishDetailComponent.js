import React from 'react';
import '../App.css';

// mỗi lần muốn dùng bootstrap gì thì pải import vào và from reactstrap
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

  function RenderDish({dish}) {
      return (
        <div >
          <Card  >
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle className='dishName' >{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
  }

  function RenderComment({dish}) {
      const cmt = dish.comments.map((cmt) => {
        return (
          <div>
            <p> {cmt.comment} </p>
            <p>-- {cmt.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(cmt.date)))}</p>
          </div>
        );
      });
      return cmt;
  }

const DishDetail = (props) => {
  if(props.dish != null)
    return (
      <div className='container'>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            {props.dish != null ? <h4>Comments</h4> : <div> </div>}
            <RenderComment dish={props.dish} />
          </div>
        </div>
      </div>
    );
  else
      return (
        <div></div>
      );
}

export default DishDetail;