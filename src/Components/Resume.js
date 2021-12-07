import pdfResume from '../Assets/RyanBoganResume.pdf'
import { useState } from 'react';

import '../Styling/Resume.css'

const ResumeString = 'Resume'

function ResumeComponent() {
  const [modalState, setModalState] = useState('none')
  let modal = document.getElementById('pdfModal');

  const displayMe = () => {
    setModalState('block')

    if (modal) {
      console.log('modal')
    } else {

      console.log('no modal')
    }
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }

  return (
    <div className="Resume">
      <button id="_openButton" onClick={displayMe}>Preview PDF</button>
      <h1>{ResumeString}</h1>
      <div id="pdfModal" style={{
        height: '100vh',
        display: modalState,
        left: 0,
      }}>
        <span className="close">&times;</span>
        <iframe src={pdfResume} className="pdf">resume</iframe>
      </div>
    </div>
  );
}

export { ResumeComponent, ResumeString };
