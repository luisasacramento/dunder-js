// import react from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyles from './style/GlobalStyles'
import Home from './pages/Home'
import Episodios from './pages/Episodios'
import Novidades from './pages/Novidades'
import Personagens from './pages/Personagens'


function App() {
  return (
    <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/episodios" element={<Episodios />}/>
          <Route path="/novidades" element={<Novidades />}/>
          <Route path="/personagens" element={<Personagens />}/>
        </Routes>
      </Router>
  );
}

export default App;

