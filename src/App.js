import './App.css';
// import NewUserForm from './components/NewUserForm.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import NavBar from './Navbar/NavBar.js'
import Feed from './Navbar/Feed'
import Inbox from './Navbar/Inbox'
import Profile from './components/Profile'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { isLoading } = useAuth0()

  if (isLoading) return <div>Loading...</div>

  return (
    <Router>
    <div className="container">
  <LoginButton />
  <LogoutButton />
  <Profile />
    <NavBar />
    <Route exact path="/" component={Feed} />
    <Route exact path="/Inbox" component={Inbox} />
    </div>
  </Router>
  );
}

export default App;
