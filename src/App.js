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
          <Route path={`/${i}`} element={components[index]} key={index} />
        )
      })
    )
  }

  const datesArray = [
    'Mon Dec 04 2021 20:15:51 GMT-0500 (Eastern Standard Time)',
    'Mon Dec 05 2021 20:15:51 GMT-0500 (Eastern Standard Time)',
    'Mon Dec 06 2021 20:15:51 GMT-0500 (Eastern Standard Time)',
    'Mon Dec 09 2021 20:15:51 GMT-0500 (Eastern Standard Time)'
  ]

  //* converts to presentable format
  // let dateFormatter = (uglyDate) => {
  //     let date = new Date(`${uglyDate}`);
  //     let year = date.getFullYear();
  //     let month = date.getMonth() + 1;
  //     let dt = date.getDate();
  //     if (dt < 10) {
  //         dt = '0' + dt;
  //     }
  //     if (month < 10) {
  //         month = '0' + month;
  //     }
  //     let prettyDate = (month + '-' + dt + '-' + year)
  //     return prettyDate
  // }

  // console.log(dateFormatter(datesArray[0]))
  const getDatesBetweenDates = (startDate, endDate) => {
    let dates = []
    //to avoid modifying the original date
    const theDate = new Date(startDate)
    while (theDate < endDate) {
      dates = [...dates, new Date(theDate)]
      theDate.setDate(theDate.getDate() + 1)
    }
    dates = [...dates, endDate]
    console.log(dates)
    return dates
  }
  
  const today = new Date()
  const sevendaysago = new Date(today)
  sevendaysago.setDate(sevendaysago.getDate() - 7)
  if (today > sevendaysago) {
    console.log(true)
  }

  getDatesBetweenDates(today, sevendaysago)

  return (
    <>
      <div className="App-bg">
      </div>

      <div className="App">
        <Header />

        <Switch>
          <NavBar routes={routes} />
          <Routes>
            {Routing(routes)}
          </Routes>
        </Switch>

        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
