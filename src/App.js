import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import ErrorPage from './Pages/Error';
import {Routes, Route } from 'react-router-dom';

function App() {
  return (
        <Routes>
          <Route path='/ProfileApp/' element={<Home/>} errorElement={<ErrorPage/>}/>
          <Route path='/ProfileApp/About' element={<About/>} errorElement={<ErrorPage/>}/>
          <Route path='/ProfileApp/Contact' element={<Contact/>} errorElement={<ErrorPage/>}/>
          <Route path='/ProfileApp/Portfolio' element={<Portfolio/>} errorElement={<ErrorPage/>}/>
        </Routes>
  );
}

export default App;
