import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Header from './components/NavBar/Header';
import MovieDetails from './components/MovieApi/MovieDetails';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/movieapidetails' element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
