
import './App.css';
import Homepage  from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useState} from 'react'
import SignIn from './components/login/newLogin';
function App() {
  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          
          <SignIn checkLogin={(user, pass) => {
            return user === "user" && pass === "password"
        }}/>
              
          </Route>
          <Route path="/home">
            <Homepage/>
            </Route>
          <Route path="/login">
            <SignIn checkLogin={(user, pass) => {
            return user === "user" && pass === "password"
        }}  />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
