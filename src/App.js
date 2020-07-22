import React, {useState} from 'react';
import AuthRoute from './AuthRoute';
import './App.css';
import {signIn} from './auth';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Home, User, CreateUser } from './pages';
import LogoutButton from './LogoutButton';
import LoginForm from './LoginForm';

const App = () => {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({email, password}) =>setUser(signIn({email, password}));
  const logout = () => setUser(null);

  return (
    <div className="body">
      <Router>
        <div className="nav">
          <Link to="/"><button className="btnHome">Home</button></Link>
          <div className="users"> 
          <Link to="/User"><button className="btnUser">User</button></Link>
          <Link to="/CreateUser"><button className="btnCreateUser">CreateUser</button></Link>
          {authenticated ? (
            <LogoutButton logout={logout}/>
          ):(
            <Link to="/login">
              <button className="btnLogin">Login</button>
            </Link>
          )}

          </div>
          
        </div>
        
        <Route exact path='/' component={Home} />
        <main>
          <Switch>
          <Route exact path='/User' component={User} />
          <Route
            path="/login"
            render={props => (
              <LoginForm authenticated={authenticated} login={login}{...props}/>
            )}
          />
          <AuthRoute
            authenticated={authenticated}
            path="/User"
            render={props=><User user={user}{...props}/>}
          />
          </Switch>
        </main>
        <Route exact path='/CreateUser' component={CreateUser} />
      </Router>
    </div>

  )

}



export default App;