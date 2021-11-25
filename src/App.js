import { BrowserRouter as Switch, Routes, Route } from 'react-router-dom';
import './Styling/App.css';
import Header from './Components/Layout/Header'
import {ResumeComponent, ResumeString} from './Components/Resume'
import NavBar from './Components/Layout/NavBar'

import Projects from './Components/Project/projectView'


import Footer from './Components/Layout/Footer'

function App() {
  const routes = [ResumeString, 'Projects']
  const components = [<ResumeComponent />, <Projects />]

  return (
    <div className="App">
      <Header />

      <Switch>
        <NavBar routes={routes} />
        <Routes>
          
          {routes.map((i, index) => {
            console.log(i)
            return (
              <Route path={`/${i}`} element={components[index]} />
            )
          })}
          {/* <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} /> */}
        </Routes>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
