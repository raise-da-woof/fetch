import React from "react";
import Login from "./pages/Login/index"
import Home from './pages/Home/index'
import Profile from './pages/Profile'
import Messages from './pages/Messages'
import OurMission from './pages/OurMission'
import MeetTheTeam from './pages/MeetTheTeam'
import Thread from './pages/Thread';
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import './style.css'
import FetchFooter  from "./components/Footer/"

function App() {
  return (
    <Router>
    <div>
    <div className="flex-wrapper">
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/ourmission" component={OurMission} />
        <PrivateRoute exact path="/meettheteam" component={MeetTheTeam} />
        <PrivateRoute path="/match">
          <Route exact path="/match" component={Home} /> 
        </PrivateRoute >
        <PrivateRoute exact path="/thread" component={Thread} />
        <PrivateRoute exact path='/profile' component={Profile} />
        <PrivateRoute exact path='/messages' component={Messages} />
        <Route>
          <NoMatch />
        </Route>
      </Switch>
      </div>
      <FetchFooter className="footer" />
    </div>
    </Router>
  );
}

export default App;
