import pdfResume from '../Assets/RyanBoganResume.pdf'

import '../Styling/Resume.css'

const ResumeString = 'Resume'

function ResumeComponent() {
    return (
      <div className="Resume">
        <h1>{ResumeString}</h1>
        {/* <iframe src={pdfResume} className="pdf">resume</iframe> */}
      </div>
    );
  }
  
  export {ResumeComponent, ResumeString};
  