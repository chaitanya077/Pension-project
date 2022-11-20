import logo from './logo.svg';
import './App.css';
import SignIn from './views/SignIn';
import { useState } from 'react';
import SignUp from './views/SignUp';
// import ResponsiveAppBar from './views/ResponsiveAppBar';
import Navbar from './views/Navbar';
function App() {
  const[signin,setSignin] = useState(true);
  return (
    <div className="App">
    {/* {signin ? <SignIn/> : <SignUp/>} */}
    <Navbar/>

    </div>
  );
}

export default App;
