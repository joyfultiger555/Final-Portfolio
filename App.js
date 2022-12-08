import './App.css';

import NavBar from './NavBar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages'
import Project1 from './Pages/Project1'
function App() {
  return (
    <><Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project1" element={<Project1/>}/>
      </Routes>
    </Router></>
        
  );
}

export default App;
