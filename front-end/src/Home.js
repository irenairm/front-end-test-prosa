import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@atlaskit/css-reset'
import React from 'react'
import {Row, Col} from "react-bootstrap"
import Sidebar from './SideBar.js'
import Kanban from './Kanban.js'
import {Data} from './Data.js'
import {withRouter} from 'react-router'

class Home extends React.Component {
  componentDidMount(){
    localStorage.setItem("Cards",JSON.stringify(Data.Cards))
    localStorage.setItem("Issues",JSON.stringify(Data.Issues))
  }
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

export default withRouter(Home);
