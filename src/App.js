import { BrowserRouter as Switch, Routes, Route } from 'react-router-dom';
import './Styling/App.css';

import Header from './Components/Layout/Header'
import NavBar from './Components/Layout/NavBar'
import Footer from './Components/Layout/Footer'

import { ResumeComponent, ResumeString } from './Components/Resume'
import { ProjectComponent, ProjectString } from './Components/Project/projectView'


function App() {

  const components = [
    <ResumeComponent />,
    <ProjectComponent />
  ]
  const routes = [
    ResumeString,
    ProjectString
  ]

  function Routing(i) {
    return (
      routes.map((i, index) => {
        return (
          <Route path={`/${i}`} element={components[index]} key={index}/>
        )
      })
    )
  }

  return (
    <div className="App">
      <Header />

      <Switch>
        <NavBar routes={routes} />
        <Routes>
          {Routing(routes)}
        </Routes>
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
