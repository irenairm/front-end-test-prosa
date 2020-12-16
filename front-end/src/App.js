import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@atlaskit/css-reset'
import React from 'react'
import {Row, Col} from "react-bootstrap"
import Sidebar from './SideBar.js'
import Kanban from './Kanban.js'

class App extends React.Component {
  render(){
    return (
        <div>
          <Row>
            <Col id="col-sidebar" lg={3}>
              <Sidebar />
            </Col>
            <Col id="col-kanban" lg={9}>
              <Kanban />
            </Col>
          </Row>
        </div>
      
    );
  }
}

export default App;
