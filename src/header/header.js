import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import React from 'react';
import {Button} from 'react-bootstrap';
import {Carousel} from 'react-bootstrap';


export default function Header(props) {
  return(
    <header>
    <Navbar style={navbar}>
      <Navbar.Brand href="#home" style={{ color: '#9B209B' }}>DTS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
        <Nav.Link href="" style={{ color: '#9B209B' }}>Home</Nav.Link>
      <Nav.Link href="#link" style={{ color: '#9B209B' }}>Menu</Nav.Link>
      </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="dark">Search</Button>
    </Form>
     </Navbar.Collapse>
    </Navbar>
    <Carousel>
      <Carousel.Item>
      <img width="800" height="400"
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/04/01/20/06/chocolate-702939_1280.jpg"
      alt="First slide" fluid/>
    <Carousel.Caption>
      <h1><strong>WELCOME</strong></h1>
      <p><strong>Dessert Time Skuy</strong></p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img width="800" height="400"
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2017/03/27/12/26/macaroons-2178371_1280.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3><strong>Selamat Mencoba</strong></h3>
      <p><strong>Resep Dessert Kami</strong> </p>
    </Carousel.Caption>
  </Carousel.Item>
    </Carousel>
    </header>
  );
}
const navbar = {backgroundColor: '#F0E7F0'};
