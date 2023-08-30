import { Route, Routes } from 'react-router-dom';

import './App.scss';
import { Departments } from './pages/Departments';

import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/departments" element={<Departments />} />
    </Routes>
  );
}

export default App;




