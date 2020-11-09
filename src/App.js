import './App.css';
// import NewUserForm from './components/NewUserForm.js'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'
import Profile from './components/Profile'
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  const { isLoading } = useAuth0()

  if (isLoading) return <div>Loading...</div>
  
  return (
    <div>
  <LoginButton />
  <LogoutButton />
  <Profile />
    </div>
  );
}

export default App;
