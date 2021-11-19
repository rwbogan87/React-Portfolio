import '../../Styling/Footer.css'

import PageCount from '../Pagecount';

function Footer() {
  return (
    <div className="Footer">
      <div className="container-right">
        <PageCount />
      </div>
    </div>
  );
}

export default Footer;
