import { useState } from 'react'
import Project from './project';
import '../../Styling/ProjectView.css'
import goldBadge from '../../Assets/badge-yellow.png';
import blueBadge from '../../Assets/badge-blue.png';
import redBadge from '../../Assets/badge-red.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from 'reactstrap';

const ProjectString = 'Projects'

function ProjectComponent() {
  const [toolTipOpen, setToolTipOpen] = useState(false);

  const toggleToolTip = () => {
    setToolTipOpen(!toolTipOpen)
  }

  return (
    <div className="ProjectComponent">
      {/* <h2 style={{
              color: 'rgba(200, 202, 204, 0.8)'
        }}>My Projects (click each to expand)</h2> */}
      <div className="badgeDiv">
        <div className="badgeTitleDiv">
          <p>Gold Badge</p>
          <FontAwesomeIcon
            icon={faInfoCircle}
            id="toolTip"
            // onMouseEnter={() => setToolTipOpen(true)}
            // onMouseLeave={() => setToolTipOpen(false)}
          />
          <Tooltip placement="right" isOpen={toolTipOpen} target="toolTip" toggle={toggleToolTip}>
            Nicely done
          </Tooltip>
        </div>
        <img src={goldBadge}></img>
        
      </div>
      <div className="badgeDiv">
        <img src={blueBadge}></img>
      </div>
      <div className="badgeDiv">
        <img src={redBadge}></img>
      </div>
    </div>
  );
}

export { ProjectComponent, ProjectString };
