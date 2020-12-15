import React from 'react'
import {Modal,Button,Form} from 'react-bootstrap'

export default class Modals extends React.Component{
    render(){
        return(
            <Modal
            show={this.props.show}
            onHide={this.props.hide}
            >
            {/* <Modal.Header> */}
            <Modal.Title>Modal title</Modal.Title>
            {/* </Modal.Header> */}
            <Modal.Body>
            <Form>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text"/>
                <Form.Label>Tags</Form.Label>
                <Form.Control type="text"/>
                <Form.Label>Assignee</Form.Label>
                <Form.Control type="text"/>
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="text"/>
                <Form.Label>End Date</Form.Label>
                <Form.Control type="text"/>
                <Button variant="primary" onClick={this.props.addTask}>
                Add
            </Button>
            </Form>
            </Modal.Body>
            {/* <Modal.Footer> */}
            
            {/* </Modal.Footer> */}
        </Modal>
        );
    }
}