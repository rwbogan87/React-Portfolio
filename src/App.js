import './Styling/App.css';

import Header from './Components/Header'
import NavBar from './Components/NavBar'

import Projects from './Components/Project/projectView'

import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <Projects />

      <Footer />
    </div>
  );
}

export default App;
