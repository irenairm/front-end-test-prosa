import React from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
export default class Modals extends React.Component{
    constructor(){
        super()
        this.state = {
            data_issues: JSON.parse(localStorage.getItem("Issues")),
            data_cards: JSON.parse(localStorage.getItem("Cards"))
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    getLatestId(){
        return this.state.data_issues.length
    }
    handleSubmit(event){
        event.preventDefault()
        var data = {
            issue_id : this.getLatestId()+1,
            title : event.target[0].value,
            assignee : event.target[1].value,
            start_date: event.target[2].value,
            end_date : event.target[3].value
        }
        var updated_issues = this.state.data_issues
        updated_issues.push(data)
        localStorage.setItem("Issues",JSON.stringify(updated_issues))

        var updated_cards = this.state.data_cards
        updated_cards[this.props.cardId-1].issuesId.push(data.issue_id)
        localStorage.setItem("Cards",JSON.stringify(updated_cards))
        console.log(JSON.parse(localStorage.getItem("Issues")))
        console.log(JSON.parse(localStorage.getItem("Cards")))
        return this.props.addTask()
    }
    render(){
        return(
            <Modal
            show={this.props.show}
            id="modal-task"
            >
            <Modal.Body id="modal-body">
                <p id="modal-title">New Task</p>
            <Form onSubmit = {this.handleSubmit}>
                <Form.Label className="label-form-modal">Title</Form.Label>
                <Form.Control id="form-input-modal"    type="text"/>
                <Form.Label className="label-form-modal">Tags</Form.Label>
                <Form.Control id="form-input-modal"  type="text"/>
                <Form.Label className="label-form-modal">Assignee</Form.Label>
                <Form.Control id="form-input-modal"   type="text"/>
                <Form.Label className="label-form-modal">Start Date</Form.Label>
                <Form.Control id="form-input-modal"  type="text"/>
                <Form.Label className="label-form-modal">End Date</Form.Label>
                <Form.Control id="form-input-modal" type="text"/>
                <Button id="add-task-button-modal" type="submit">
                Add
                </Button>
            </Form>
            
            </Modal.Body>
        </Modal>
        );
    }
}
