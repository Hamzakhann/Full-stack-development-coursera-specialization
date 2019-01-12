import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
  import { baseUrl } from '../shared/baseUrl';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
  function RenderDish({dish}) {
    if(dish !== null){
      return(
        <Card>
        <CardImg top src={baseUrl + dish.image} alt={dish.name} />
             <CardBody>
               <CardTitle>{dish.name}</CardTitle>
               <CardText>{dish.description}</CardText>
        </CardBody>
        </Card>
      )
    }else{
      return <div></div>
    }
  }
  function RenderComments({comments, postComment, dishId}) {
    console.log(comments)
        
    if (props.isLoading) {
      return(
          <div className="container">
              <div className="row">            
                  <Loading />
              </div>
          </div>
      );
  }
  else if (props.errMess) {
      return(
          <div className="container">
              <div className="row">            
                  <h4>{props.errMess}</h4>
              </div>
          </div>
      );
  }else
    if(comments !==  null){
      return(

        comments.map((comment) =>{
          return(
            <ul key={comment.id}  className="list-unstyled" >
              <li >{comment.comment}</li>
              <br/>
              <li  >--{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
            </ul>
          )

        })
      )
    }else{
      return <div></div>
    }
  }

  const DishDetail = (props)=>{
    return(
      <div className="container">
      <div className="row">
          <Breadcrumb>

              <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
              <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
              <h3>{props.dish.name}</h3>
              <hr />
          </div>                
      </div>
      <div className="row">
          <div className="col-12 col-md-5 m-1">
              <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
          <RenderComments comments={props.comments}
       postComment={props.postComment}
        dishId={props.dish.id}
      />
           <CommentForm dishId={dishId} postComment={postComment} />
          </div>
      </div>
      </div>
    )
  }

export default DishDetail;