import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';

import React from 'react';




export default function Footer(props) {
  return(
    <footer>
    <Navbar style={navbar}>
              <Navbar.Brand href="#home" style={{ color: '#9B209B'  }}>@DTS-2020-FE UGM 02</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
         
    </Navbar>
   

   
    </footer>
  );
}
const navbar = {backgroundColor: '#F0E7F0'};
