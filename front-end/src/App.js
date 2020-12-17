import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@atlaskit/css-reset'
import React from 'react'
import Home from './Home'
// import {Data} from './Data.js'
import {HashRouter} from 'react-router-dom'
import {Route, Switch} from 'react-router'
class App extends React.Component {
  // componentDidMount(){
  //   localStorage.setItem("Cards",JSON.stringify(Data.Cards))
  //   localStorage.setItem("Issues",JSON.stringify(Data.Issues))
  // }
  render(){
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
