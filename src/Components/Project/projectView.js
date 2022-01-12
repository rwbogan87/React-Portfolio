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
  const [goldOpen, setGoldOpen] = useState(false);
  const [blueOpen, setBlueOpen] = useState(false);
  const [redOpen, setRedOpen] = useState(false);

  const toggleGoldTip = () => {
    setGoldOpen(!goldOpen)
  }
  const toggleBlueTip = () => {
    setBlueOpen(!blueOpen)
  }
  const toggleRedTip = () => {
    setRedOpen(!redOpen)
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
            id="goldTip"
            className="faIcon"
          // onMouseEnter={() => setToolTipOpen(true)}
          // onMouseLeave={() => setToolTipOpen(false)}
          />
          <Tooltip placement="right" isOpen={goldOpen} target="goldTip" toggle={toggleGoldTip}>
            <p className="tipText">Fundamental badge focused on HTML, CSS, core JS and basic API manipulation.</p>
          </Tooltip>
        </div>
        <div className="badgeProjectShieldDiv">
        <img src={goldBadge} className="bigShield"></img>
        <img src={goldBadge} className="smallShield"></img>
        <img src={goldBadge} className="smallShield"></img>
        </div>
      </div>

      <div className="badgeDiv">
        <div className="badgeTitleDiv">
          <p>Blue Badge</p>
          <FontAwesomeIcon
            icon={faInfoCircle}
            id="blueTip"
            className="faIcon"
          // onMouseEnter={() => setToolTipOpen(true)}
          // onMouseLeave={() => setToolTipOpen(false)}
          />
          <Tooltip placement="right" isOpen={blueOpen} target="blueTip" toggle={toggleBlueTip}>
            <p className="tipText">React-based badge focused on full-stack deployment, use of postgreSQL, Sequelize, and full CRUD implementation.</p>
          </Tooltip>
        </div>
        <img src={blueBadge} className="bigShield"></img>
      </div>

      <div className="badgeDiv">
        <div className="badgeTitleDiv">
          <p>Red Badge</p>
          <FontAwesomeIcon
            icon={faInfoCircle}
            id="redTip"
            className="faIcon"
          // onMouseEnter={() => setToolTipOpen(true)}
          // onMouseLeave={() => setToolTipOpen(false)}
          />
          <Tooltip placement="right" isOpen={redOpen} target="redTip" toggle={toggleRedTip}>
            <p className="tipText">Team-centered badge focused on adding typescript.  Full CRUD with database associations and admin priveleges/viewport *deprecated due to use of Multer for image handling*</p>
          </Tooltip>
        </div>
        <img src={redBadge} className="bigShield"></img>
      </div>
    </div>
  );
}

export { ProjectComponent, ProjectString };
