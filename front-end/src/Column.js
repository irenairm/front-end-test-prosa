import React from 'react'
import {Container, Button, Row, Col} from 'react-bootstrap'
import Modals from './Modal.js'
import {Data} from './Data.js' 

class Card extends React.Component{
    getInitials(name){
        return name.split(" ")[0].charAt(0)
    }
    getDeadline(start,end){
        return (new Date(end).getTime()-new Date(start).getTime())/(1000*3600*24)*-1
    }
    render(){
        return(
            Data.Issues.map((data,key)=>{
            var i;
            for (i=0; i<this.props.issue.length; i++){
                if (data.issue_id===this.props.issue[i]) {
                    console.log()
                    return(
                        <Container id="container-card-column">
                            <p id="card-task">{data.title}</p>
                            <Row>
                            <Col id="col-card-assignee" lg={1}><span id="card-assignee">{this.getInitials(data.assignee)}</span></Col>
                            <Col lg={7}><span className={"card-tag " + data.tags}>{data.tags}</span></Col>
                            <Col><span id="card-deadline">{this.getDeadline(data.end_date,data.start_date)} days</span></Col>
                            </Row>
                        </Container>
                    );
                }
            }
                
        })
    );
    }
}

export default class Column extends React.Component{
    render(){
        return(
            
           <Container id="container-column">
               <Row id="column-header">
                   <Col id="column-name" lg={6}>{this.props.name}</Col>
                   <Col id="col-add-task-button" lg={6}><Button id="add-task-button" onClick={this.props.onClickAdd}>+Add Task</Button></Col>
               </Row>
               <Row>
                   <Col><Card issue ={this.props.issue}
                ></Card></Col>
               </Row>
               <Modals show={this.props.show} hide={this.props.hide} addTask={this.props.addTask} cardId = {this.props.cardId}></Modals>
           </Container>
        );
    }
}