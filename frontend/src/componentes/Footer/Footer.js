
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import {Anchor,
  Image
  } from 'react-bootstrap';
  import './style.css'
  



function FooterIcons() {
  return (

    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#0a4275' }}>
    <MDBContainer className='p-4 pb-0'>
      <section className=''>
        <p className='d-flex justify-content-center align-items-center'>
          <span className='me-3'>Registre-se de graça</span>
          <MDBBtn type='button' outline color="light" rounded>
            Sign up!
          </MDBBtn>
          
          
        </p>
      </section>
    </MDBContainer>
    <div className="social-icons">
    <Anchor href='Instagra'><Image className='WhatsLogo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png'/></Anchor>
      <Anchor href='Facebool'><Image className='WhatsLogo' src='https://www.facebook.com/images/fb_icon_325x325.png'/></Anchor>
      <Anchor href='Likendin'><Image className='WhatsLogo' src='https://cdn-icons-png.flaticon.com/512/174/174857.png'/></Anchor>
      </div>

  </MDBFooter>

);
};

export default FooterIcons;