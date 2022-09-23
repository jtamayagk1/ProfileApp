import './App.css';
import Home from './Pages/Home';
import Navigation from './Components/Navigation';
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer';

function App() {
  return (
    // <div className="App">
    //     <Navigation/>
    //     <Home/>
    // </div>
    <>
        <Navigation/>
        <Home/>
        <Footer/>
    </>
  );
}

export default App;
