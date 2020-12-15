import React from 'react'
import Column from './Column'
import {Row, Container, Col} from 'react-bootstrap'

export default class Kanban extends React.Component{
    constructor(){
        super();
        this.state={
            showModalBacklog:false,
            showModalToDo:false,
            showModalDone:false,
        }
    }
    onClickBacklog(){
        this.setState({showModalBacklog:!this.state.showModalBacklog});
        console.log(this.state.showModalBacklog)
    }
    onClickToDo(){
        this.setState({showModalToDo:!this.state.showModalToDo});
    }
    onClickDone(){
        this.setState({showModalDone:!this.state.showModalDone});
    }
    addBacklog(){
        alert('add backlog!')
        this.setState({showModalBacklog:!this.state.showModalBacklog});
    }
    addToDo(){
        alert('add todo')
        this.setState({showModalToDo:!this.state.showModalToDo});
    }
    addDone(){
        alert('add done')
        this.setState({showModalDone:!this.state.showModalDone});
    }
    render(){
        console.log(this.state.showModalBacklog)
        return(
            <Container id="container-kanban">
                <Row>
                  {/* icon */}
                    <p>Kanban Prosa</p>
                    {/* icon */}
                </Row>
                <Row>
                    <Col>
                        <Column name={"Backlog"} onClickAdd={()=>this.onClickBacklog()} 
                        show={this.state.showModalBacklog} hide={()=>this.onClickBacklog()} addTask={()=>this.addBacklog()}></Column>
                    </Col>
                    <Col><Column name={"To Do"} onClickAdd={()=>this.onClickToDo()}
                     show={this.state.showModalToDo} hide={()=>this.onClickToDo()} addTask={()=>this.addToDo()}></Column>
                     </Col>
                    <Col><Column name={"Done"} onClickAdd={()=>this.onClickDone()}
                     show={this.state.showModalDone} hide={()=>this.onClickDone()} addTask={()=>this.addDone()}
                    ></Column></Col>
                </Row>
            </Container>
           
        );
    }
}
