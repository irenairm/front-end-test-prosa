import React from 'react'
import Column from './Column'
import {Row, Container, Col} from 'react-bootstrap'
import logoprosa from './icon/prosa.png'
import user1 from './icon/user1.jpg'
import user2 from './icon/user2.jpg'
import user3 from './icon/user3.jpg'


export default class Kanban extends React.Component{
    constructor(){
        super();
        this.state={
            showModalBacklog:false,
            showModalToDo:false,
            showModalDone:false,
            data:JSON.parse(localStorage.getItem("Cards")),
            issues:JSON.parse(localStorage.getItem("Issues"))
        }
    }
    onClickCard(title){
        if (title === 'backlog'){
            this.setState({showModalBacklog:!this.state.showModalBacklog});
        }
        else if (title === 'todo'){
            this.setState({showModalToDo:!this.state.showModalToDo});
        }
        else{
            this.setState({showModalDone:!this.state.showModalDone});
        }
    }
    addTask(title){
        if (title === 'backlog'){
            this.setState({showModalBacklog:!this.state.showModalBacklog});
        }
        else if (title === 'todo'){
            this.setState({showModalToDo:!this.state.showModalToDo});
        }
        else{
            this.setState({showModalDone:!this.state.showModalDone});
        }
        window.location.reload()
    }
    render(){
        console.log(JSON.parse(localStorage.getItem("Issues")))
        console.log(JSON.parse(localStorage.getItem("Cards")))
        return(
            <Container id="container-kanban">
                <Row id="kanban-project">
                    <Col lg={4}> 
                        <img src={logoprosa} alt="Prosa" id="logoprosa"></img>
                        <span id="board-name">Kanban Prosa</span>
                        {/* icon */}
                    </Col>
                    <Col lg={4}>
                    </Col>
                   <Col className="justify-content-md-end" id="kanban-members" lg={4}>
                    <img src={user1} alt="User A" id="user-pic-board"></img>
                    <img src={user2} alt="User B" id="user-pic-board"></img>
                    <img src={user3} alt="User C" id="user-pic-board"></img>
                    <span id="team-members-board">70 Members</span>
                   </Col>
                </Row>
                <Row>
                    {
                    this.state.data.map(data=> {
                        return (
                            <Col>
                                <Column name={data.title} 
                                onClickAdd={()=>this.onClickCard(data.title)} 
                                show={data.title==='backlog'?this.state.showModalBacklog:(data.title==='todo'?this.state.showModalToDo:this.state.showModalDone)} 
                                addTask={()=>this.addTask(data.title)}
                                cardId = {data.card_id} 
                                issue={data.issuesId}
                                ></Column>  
                            </Col>);
                        })
                    } 
                </Row>
            </Container>
           
        );
    }
}
