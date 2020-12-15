import React from 'react'
import {Container, Button} from 'react-bootstrap'
import Modals from './Modal.js'

class Card extends React.Component{
    render(){
        return(
            <Container id="container-card-column">
                <p>{this.props.task}</p>
                <p>
                   <span>{this.props.assignee}</span>
                   <span>{this.props.tag}</span>
                   <span>{this.props.deadline}</span>
                </p>
            </Container>
        );
    }
}
export default class Column extends React.Component{
    render(){
        return(
           <Container className="container-column">
               {this.props.name}
               <Button id="add-task-button" onClick={this.props.onClickAdd}>+Add Task</Button>
               <Card task="Improve accuracy of voice-to-text" assignee="I"
               tag="Research" deadline="2 days"
               ></Card>
               <Modals show={this.props.show} hide={this.props.hide} addTask={this.props.addTask}></Modals>
           </Container>
        );
    }
}