import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import CartIcon from '../cart/CartIcon'
import Cart from '../cart/Cart';
import { useHistory } from "react-router-dom";
import {Navbar} from 'reactstrap'
import {Form} from 'reactstrap'

import {Button} from 'reactstrap'
import {FormControl} from 'reactstrap'
import {Nav} from 'reactstrap'
// import Cart from '../cart/Cart'
import {InputGroup} from 'reactstrap'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {Container} from 'reactstrap'
import {Row} from 'reactstrap'

const MainNavbar = (props) => {
    // console.log('this is cardItem from navbar',props);
    const { auth, profile } = props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    let styles={
        divStyle:{backgroundColor:'#343a40', paddingBottom:'0.1%'}
        };
    return (
        <div  >
       
        <div  style={styles.divStyle}> 
            {links}
        </div>
  
            </div>
         
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        cart:state.cart
    }
}

export default connect(mapStateToProps)(MainNavbar);