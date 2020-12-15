import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {Row, Col} from "react-bootstrap"
import Sidebar from './SideBar.js'
import Kanban from './Kanban.js'

class App extends React.Component {
  render(){
    return (
        <div>
          <Row>
            <Col id="col-sidebar" lg={2}>
              <Sidebar />
            </Col>
            <Col id="col-kanban" lg={10}>
              <Kanban />
            </Col>
          </Row>
        </div>
      
    );
  }
}

export default App;
