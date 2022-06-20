import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { showCart } from '../../store/actions/cartActions';
import {Button} from 'reactstrap'

export default class PassOrder extends Component {
   
    render() {
        const Greeting = this.props.prod;
        return (
            
            <div>
               
               
             {console.log('вывод с PASS ORDER-----',this.props.prod)}
          
             <Link to={{pathname:"/createorder",params:Greeting,showCart}} >
                <Button  variant="primary" size="lg">
                    Click Me!
                </Button>
             </Link>
           

           

            </div>
        )
    }
}

