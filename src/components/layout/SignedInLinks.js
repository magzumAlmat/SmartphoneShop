import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import M from 'materialize-css';
import SearchInput from './SearchInput';
// import SearchButton from './SearchButton';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavbarToggler} from 'reactstrap'
import '@fortawesome/fontawesome-free/css/all.min.css';


import {Container} from 'reactstrap'
import {Row} from 'reactstrap'

import {Col} from 'reactstrap'
import {Nav,NavbarBrand,Collapse,NavItem} from 'reactstrap'

var selectedTab;

class SignedInLinks extends Component{
    componentDidMount(){
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225, alignment: 'right', coverTrigger: false});
    }

  
    
    render(){
        return (
            <div>
       
        
        <Navbar className='container' style={{backgroundColor:"#343a40"}} >
        <NavbarBrand href="/">ALCO</NavbarBrand>
        <NavbarToggler />
        <Collapse className="justify-content-end  ">
        <Nav navbar>   
        <NavLink to="/showorders" className="mx-4" >Заказы</NavLink>
        <NavItem>
            <NavLink to="/products" className="mx-4">Продукты</NavLink>
        </NavItem>
        
        <NavItem>
            <NavLink to="/createproduct" className="mx-4">Добавить продукт</NavLink>
        </NavItem>
            <a onClick={this.props.signOut} href={() => false} className='mx-2'> Выйти</a>
            <div >
                
                    
        <NavItem>
        <NavLink to="/" className="btn btn-floating pink lighten-1 dropdown-trigger mx-4"
                        data-target='dropdown-profile'>{this.props.profile.initials}
                    </NavLink>
        </NavItem>
                
                    <ul id="dropdown-profile" className="dropdown-content">
                     <li><NavLink to='/profile'>Profile</NavLink></li>
                    </ul>
            </div>
            </Nav>
        </Collapse>
      </Navbar>



        </div>
            // <ul className="right">
            //     <li>
            //         <NavLink to="/products">Products</NavLink>
            //     </li>
            //     <li>
            //         <NavLink to="/showorders" >Ordes</NavLink>
            //     </li>
            //     <li>
            //         <NavLink to="/createproduct">New Prod</NavLink>
            //     </li>
            //     <li>
            //         <SearchInput />
            //     </li>
                
            //     <li>
            //         <NavLink to="/create">New Project</NavLink>
            //     </li>

            //     <li>
            //         <NavLink to="/">projects</NavLink>
            //     </li>

            //     <li>
            //         <a onClick={this.props.signOut} href={() => false}>Log Out</a>
            //     </li>
            //     <li>
            //         <NavLink to="/" 
            //         className="btn btn-floating pink lighten-1 dropdown-trigger"
            //         data-target='dropdown-profile'>{this.props.profile.initials}</NavLink>
            //         <ul id="dropdown-profile" className="dropdown-content">
            //             <li><NavLink to='/profile'>Profile</NavLink></li>
            //         </ul>
            //     </li>
            // </ul>
        );
    }
    
}

const mapDispatchToProps = dispatch => {
    return{
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);