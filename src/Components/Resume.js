import { useState, useEffect } from 'react';

import pdfResume from '../Assets/RyanBoganResume.pdf';
import { Button } from 'reactstrap';
import '../Styling/Resume.css'

const ResumeString = 'Resume'

function ResumeComponent() {
  const [modalState, setModalState] = useState(false)
  let modal = document.getElementById('pdfModal');
  
  const displayMe = () => {
    console.log('displayMe() ran')
    setModalState(!modalState)
  }
  
  useEffect(()=> {
    console.log('useEffect ran')
    const modalHandler = () => {
      if (modalState === true && modal !== null) {
        modal.style.display = 'block'
      } else if (modal !== null) {
        modal.style.display = 'none'
      } else {
        return null
      }
    }
    modalHandler()
  },[modalState])

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }

  return (
    <>
      <Button color="primary" id="_openButton" onClick={displayMe}>Preview PDF</Button>
    <div className="Resume centered">
      <div id="pdfModal" style={{
        display: 'none',
      }}>
        <iframe title='RyanBogan Resume' src={pdfResume} className="pdf">resume</iframe>
        <br/>
        <Button outline color="warning" id="_closeButton" onClick={displayMe}>Close</Button>
      </div>
    </div>
    </>

  );
}

export { ResumeComponent, ResumeString };
