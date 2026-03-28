import './css/App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  const movieNumber=1;

  {/* With <> inside the return we can write more than one <div>. Generally we can insert more than one parent*/}
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>

  )
}


export default App
