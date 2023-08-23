import { Route, Routes } from 'react-router-dom';

import './App.scss';

import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/departments" element={<h1>hello</h1>}></Route>
    </Routes>
  );
}

export default App;




