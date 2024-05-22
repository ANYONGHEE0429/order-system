import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Ordering from './pages/Ordering';
import Settings from './pages/Settings';

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<Ordering />} />
         <Route path="/settings" element={<Settings />} />
         <Route path="" />
      </Routes>
   );
};

export default App;
