import React from 'react'
import {Form, Container} from "react-bootstrap"

export default class Sidebar extends React.Component{
    render(){
        return (
            <Container className="container-sidebar">
            <Form>
                <Form.Control type="text" placeholder="Search" />
            </Form>
            </Container>
        );
    }
}