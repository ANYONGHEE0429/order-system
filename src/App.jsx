import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Order from './pages/Order';
import Settings from './pages/Settings';

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<Order />} />
         <Route path="/settings" element={<Settings />} />
         <Route path="" />
      </Routes>
   );
};

export default App;
