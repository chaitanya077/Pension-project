import logo from './logo.svg';
import './App.css';
import SignIn from './views/SignIn';
import { useState } from 'react';
import SignUp from './views/SignUp';
import ResponsiveAppBar from './views/ResponsiveAppBar';
import Home from './views/Home';
import Home1 from "./views/Home1"
function App() {
  const[signin,setSignin] = useState(true);
  return (
    <div className="App">
    {/* {signin ? <SignIn/> : <SignUp/>} */}
    <ResponsiveAppBar/>
    {/* <Home/> */}
    <Home1/>

    </div>
  );
}

export default App;
