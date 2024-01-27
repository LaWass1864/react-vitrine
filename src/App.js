import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (

    <BrowserRouter>
   <Routes>

    <Route path='/' element={<Home />} />
    <Route path='/projet-1' element={<Project1/>} />
    <Route path='/projet-2' element={<Project2 />} />
    <Route path='/projet-3' element={<Project3 />} />
    <Route path='/projet-4' element={<Project4 />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/*' element={<NotFound />} />
    
   
   </Routes>
    </BrowserRouter>

  );
};

export default App;