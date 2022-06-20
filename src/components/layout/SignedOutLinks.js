import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchInput from './SearchInput';
import {Navbar} from 'reactstrap'
import {Form} from 'reactstrap'
import {Button} from 'reactstrap'
import {FormControl} from 'reactstrap'
import {Nav} from 'reactstrap'

// import Cart from '../cart/Cart'

import {InputGroup} from 'reactstrap'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartIcon from '../cart/CartIcon'
import {Container} from 'reactstrap'
import {Row} from 'reactstrap'
import {Col} from 'reactstrap'
import {
  Collapse,

  NavbarToggler,
  NavbarBrand,

  NavItem,

  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const SignedOutLinks = () => {
    return (<div>
        {/* <Container>
        <Row>
            <Col xs={2} md={2}>
            <Navbar>
            <Navbar className='container'>
            <Navbar.Brand href="#home">ALCO</Navbar.Brand>
            </Navbar>
            </Navbar>
            </Col>
            <Col xs={10} md={6}>
             <SearchInput/>
            </Col>
            <Col xs={6} md={4}>
              <Container>
                <Row>
                    <Col xs>  <CartIcon/></Col>
                    <Col xs={{ order: 12 }}> <NavLink to="/signup">РЕГИСТРАЦИЯ</NavLink></Col>
                    <Col xs={{ order: 1 }}> <NavLink to="/signin">ВХОД</NavLink></Col>
                </Row>
                </Container>   
            </Col>
          </Row>
        </Container> */}
{/* 
        <Navbar className='container'  style={{backgroundColor:"#343a40"}}>
        <Navbar.Brand href="/">ALCO</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end  ">
           
            <NavLink to="/signup" className="mx-4">РЕГИСТРАЦИЯ</NavLink>
            <NavLink to="/signin" className="mx-4" >ВХОД</NavLink>
            <div><CartIcon /></div>
        </Navbar.Collapse>
        </Navbar> */}
        

        <Navbar  className='container'  style={{backgroundColor:"#343a40"}}>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
        
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/signup">РЕГИСТРАЦИЯ</NavLink>
                <NavLink to="/signin" className="mx-4" >ВХОД</NavLink>
              </NavItem>
          
            </Nav>
          </Collapse>
        </Navbar>


        </div>

    );
}

export default SignedOutLinks ;