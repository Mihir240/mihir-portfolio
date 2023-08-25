import './App.css';
import './styles/styles.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <div className='background-image'>
        <Navbar/>
        <Home/>
      </div>
    </div>
  )
}

