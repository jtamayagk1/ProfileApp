import './App.css';
import Home from './Pages/Home';
import Navigation from './Components/Navigation';
import { Container } from 'react-bootstrap';

function App() {
  return (
    // <div className="App">
    //     <Navigation/>
    //     <Home/>
    // </div>
    <Container className='' >
        <Navigation/>
        <Home/>
    </Container>
  );
}

export default App;
