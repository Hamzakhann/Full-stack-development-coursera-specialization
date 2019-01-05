import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';


class DishDetail  extends Component {
  constructor(props){
    super(props)
    console.log('oye ' ,this.props.dish)

  }

  componentDidMount(){
    console.log('component did mount chal gya')
  }
  
  componentDidMount(){
    console.log('component did update chal gya')
  }

  renderDish(dish){
    if(dish !== null){
      return(
        <Card>
        <CardImg top src={dish.image} alt={dish.name} />
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

  renderComments(comments){
    console.log(comments)
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

  render(){
    return(
      <div className = "container" >
      <div className="row" >
      <div className="col-12 col-md-5 m-1" >
      {this.props.dish && this.renderDish(this.props.dish)}
      </div>
      <div className="col-12 col-md-5 m-1" >
      <h4>Comments</h4>
      {this.props.dish && this.renderComments(this.props.dish.comments)}
      </div>
      </div>
      </div>
    )
  }

}

export default DishDetail;