import './App.css';
import { useState, useEffect,useNavigate } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Reset from './pages/Reset/Reset';
import Signup from './pages/Signup/Signup';
import Pagenotfound from './pages/Pagenotefound/pagenotfound';
import Loadingpage from './pages/loadingpage/loadingpage';


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() =>{
      setLoading(true)
      setTimeout(()=>{
          setLoading(false)
      },1000)
  },[]);

  return (

    (loading ? <Loadingpage />:(

    <div className="App">
     <Router>
    
       <Routes>
        
         <Route path='/' element={<Home />}/>
         <Route path='/Login' element={<Login/>}/>
         <Route path='/Profile' element={<Profile/>}/>
         <Route path='/reset' element={<Reset/>}/>
         <Route path='/Signup' element={<Signup/>}/>
         <Route path='/loadingpage' element={ <Loadingpage/>} />
         <Route path='/*' element={<Pagenotfound/>}/>
        
       </Routes>
      
     </Router>
    </div>
     ))
  );
}

export default App;
