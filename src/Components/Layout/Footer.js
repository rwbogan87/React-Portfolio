import '../../Styling/Footer.css'
import { useState } from 'react';
import ContactForm from '../ContactForm'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useForm, ValidationError } from '@formspree/react';

function Footer() {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  }

  return (
    <div className="Footer">
      <Modal isOpen={modal} toggle={toggle} className="footerModal">
        <ModalHeader  className="ModalHeader" toggle={toggle}>Send Ryan an email using the form below. <br />Thank you for visiting!</ModalHeader>
        <ModalBody>
          <ContactForm />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <div className="container-right">
        {/* add clickable email link modal */}
          <a onClick={toggle}>
            Contact
          </a>
      </div>
    </div>
  );
}

export default Footer;
