import Home from './componet/Home'
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navb from './componet/Nav';
import Adduser from './componet/Adduser';
import Userlist from './componet/Userlist';
import Edituser from './componet/Edituser'
import Notfound from './componet/Notfound';
import Signin from './componet/auth/Signin';
import Protect from './componet/Protect';
import Public from './componet/Public'



function App() {
  return (
    <>
      <Router>  
        <Routes>
          
          <Route path='/' element={<Protect/>}>
               {/* <Navb/> */}

               <Route path="/" element={<Home />} />
               <Route path="/Adduser" element={<Adduser />} />
                <Route path="/Edituser/:userid" element={<Edituser />} />
          </Route>
   
          <Route path='/' element={<Public/>}>
               <Route path="/Signin" element={<Signin />} />
          </Route>

          <Route path="*" element={<Notfound />} />

        </Routes>
      </Router>





    </>

  )
}

export default App;
