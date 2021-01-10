import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import NewProject from './Components/Projects/NewProject';
import Inbox from './Components/Projects/Inbox';
import MyProjects from './Components/Projects/MyProjects';
import AllProjects from './Components/Projects/AllProjects';
import Browse from './Components/Search/Browse';
import Search from './Components/Search/Search';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{display: 'flex'}}>
          <Navbar />
          <div style={{padding: '1rem', width: '100%'}}>
            <Route exact path="/" component={Dashboard} />
            <Route path="/newProject" component={NewProject} />
            <Route path="/inbox" component={Inbox} />
            <Route path="/myProjects" component={MyProjects} />
            <Route path="/allProjects" component={AllProjects} />
            <Route path="/search" component={Search} />
            <Route path="/browse" component={Browse} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
