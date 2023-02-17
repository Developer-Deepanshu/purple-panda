import './App.css';
import Contect from './components/Contect';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/Contect' element={<Contect />} />
      </Routes>
    </>
  );
}

export default App;
