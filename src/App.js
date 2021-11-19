import { BrowserRouter as Switch, Routes, Route, Link } from 'react-router-dom';
import './Styling/App.css';
import Header from './Components/Layout/Header'
import Resume from './Components/Resume'
import NavBar from './Components/Layout/NavBar'

import Projects from './Components/Project/projectView'


import Footer from './Components/Layout/Footer'

function App() {
  const routes = ['Resume', 'Projects']

  return (
    <div className="App">
      <Header />

      <Switch>
        <NavBar routes={routes} />
        <Routes>
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
