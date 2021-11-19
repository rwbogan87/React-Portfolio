import pdfResume from '../Assets/RyanBoganResume.pdf'

import '../Styling/Resume.css'

function Resume() {
    return (
      <div className="Resume">
        <iframe src={pdfResume} className="pdf"></iframe>
      </div>
    );
  }
  
  export default Resume;
  