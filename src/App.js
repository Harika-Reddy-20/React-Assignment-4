import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Student, { New } from './Components/Student';
import Contactus from './Components/Contactus';
import Navigator from './Components/Navigator';




const App = () => {
  return (
    <>
   <Router>
     <Navigator />
     <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/home' element={<Home />} />
       <Route path='/Student' element={<Student />} />
       <Route path='/contactus' element={<Contactus />} />
     </Routes>
    
   </Router>
    </>
  );
}

export default App;
