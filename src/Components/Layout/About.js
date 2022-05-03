import '../../Styling/Layout.css'
import Profile from '../../Assets/CurrentProfile.jpg'

const AboutString = 'About'

function AboutComponent() {
  return (
    <div className="AboutComponent">
        <h1></h1>
        <img src={Profile} id="profileImg"/>
        <br /><br />
        <p>
          Ryan is a leader, a driven career changer with a clear vision, and an eager professional looking to continue adding to his code-stack experience and growing as a developer and team player.
          <br/><br/>
          He is currently working locally while searching for the right career fit and staying up to date with his stronger skills including JavaScript using React, the occasional Node.js backend work, and trying new or different styling techniques.
          <br/><br/>
          An IUPUI graduate from the Kelley School of Business with a degree in Supply Chain Management, Ryan has since found his calling and passion in being a leader in the software and IT world. He finds satisfaction in solving complex problems and finding creative solutions, something this path has provided and much more.
          <br/><br/>
          For employment or contract interest, please feel free to send a message below or view the posted resume section for contact details. Thank you for stopping by!
          <br/><br/>
        </p>
    </div>
  );
}

export { AboutComponent, AboutString };
