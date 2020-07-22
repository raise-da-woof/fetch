import React from "react";
import Login from "./pages/Login/index"
import Home from './pages/Home/index'
import Profile from './pages/Profile'
import Messages from './pages/Messages'
import OurMission from './pages/OurMission'
import MettTheTeam from './pages/MeetTheTeam'
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import FetchFooter from './components/Footer'
import './style.css'
import MeetTheTeam from "./pages/MeetTheTeam";


function App() {
  return (
    <Router>
    <div>
      <div className="flex-wrapper">
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path='/match' component={Home}/>
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
