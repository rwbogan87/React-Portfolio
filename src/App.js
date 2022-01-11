import { BrowserRouter as Switch, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styling/App.css';

import Header from './Components/Layout/Header'
import NavBar from './Components/Layout/NavBar'
import Footer from './Components/Layout/Footer'

import { AboutComponent, AboutString } from './Components/Layout/About'
import { ResumeComponent, ResumeString } from './Components/Resume'
import { ProjectComponent, ProjectString } from './Components/Project/projectView'


function App() {

  const components = [
    <AboutComponent />,
    <ResumeComponent />,
    <ProjectComponent />
  ]
  const routes = [
    AboutString,
    ResumeString,
    ProjectString
  ]

  function Routing(i) {
    return (
      routes.map((i, index) => {
        return (
          <Route path={`/${i}`} element={components[index]} key={index} />
        )
      })
    )
  }


  return (
    <>
      <div className="App-bg">
        <Header />


        {/* <Footer /> */}
      <div className="App">

        <Switch>
          <NavBar routes={routes} />
          <Routes>
            {Routing(routes)}
          </Routes>
        </Switch>
      </div>
      <Footer />
      </div>

    </>
  );
}

export default App;
