import './App.css'
import Home from './pages/Home'

function App() {
  const movieNumber=1;

  {/* With <> inside the return we can write more than one <div>. Generally we can insert more than one parent*/}
  return (
    <> 
      <Home />
    </>
  )
}


export default App
