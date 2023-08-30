import { Route, Routes } from 'react-router-dom';

import './App.scss';
import { Departments } from './pages/Departments';
import { HomePage } from './pages/HomePage';

//for testing
// 20450763721973
// 20450763589742


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/departments" element={<Departments />} />
    </Routes>
  );
}

export default App;




