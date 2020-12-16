import React from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import {Data} from './Data'
export default class Modals extends React.Component{
    constructor(){
        super()
        this.state = {
            title:'',
            assignee:'',
            start_date:'',
            end_date:'',
            tags:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    getLatestId(){
        return Data.Issues.length
    }
    handleSubmit(event){
        var data = {
            issue_id : this.getLatestId(),
            title : this.state.title,
            assignee : this.state.assignee,
            start_date: this.state.start_date,
            end_date : this.state.end_date
        }
        Data.Issues.push(data)
        Data.Cards[this.props.cardId-1].issuesId.push(data.issue_id)
    }
    render(){
        console.log(Data.Issues)
        console.log(Data.Cards)
        return(
            <Modal
            show={this.props.show}
            onHide={this.props.hide}
            id="modal-task"
            >
            <Modal.Body id="modal-body">
                <p id="modal-title">New Task</p>
            <Form onSubmit = {this.handleSubmit()}>
                <Form.Label className="label-form-modal">Title</Form.Label>
                <Form.Control id="form-input-modal" value ={this.state.title} onChange={e=> this.setState({title:e.target.value})} type="text"/>
                <Form.Label className="label-form-modal">Tags</Form.Label>
                <Form.Control id="form-input-modal" value ={this.state.tags} onChange={e=> this.setState({tags:e.target.value})}type="text"/>
                <Form.Label className="label-form-modal">Assignee</Form.Label>
                <Form.Control id="form-input-modal" value ={this.state.assignee} onChange={e=> this.setState({assignee:e.target.value})}type="text"/>
                <Form.Label className="label-form-modal">Start Date</Form.Label>
                <Form.Control id="form-input-modal" value ={this.state.start_date} onChange={e=> this.setState({start_date:e.target.value})}type="text"/>
                <Form.Label className="label-form-modal">End Date</Form.Label>
                <Form.Control id="form-input-modal" value ={this.state.end_date} onChange={e=> this.setState({end_date:e.target.value})}type="text"/>
                <Button id="add-task-button-modal" type="submit" onClick={this.props.addTask}>
                Add
            </Button>
            </Form>
            </Modal.Body>
        </Modal>
        );
    }
}
