
import './App.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes></Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
