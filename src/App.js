import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Reset from './pages/Reset/Reset';
import Signup from './pages/Signup/Signup';


function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Login' element={<Login/>}/>
         <Route path='/Profile' element={<Profile/>}/>
         <Route path='/reset' element={<Reset/>}/>
         <Route path='/Signup' element={<Signup/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
