import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Connects } from './components/Connect';
import { Profile } from './components/Profile';

function App() {
  return (
    <div className="App">
      {/* <Connects/> */}
     <Navbar/>
     <Profile/>
     <Home/>
     {/* <ContactForm/> */}
    </div>
  );
}

export default App;
