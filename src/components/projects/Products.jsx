import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import Product from './Product';
import Pagination from './Pagination';
import Spinner from '../layout/Spinner';
import { Container, Row, Col } from 'reactstrap';
import MainFilterSmartPhones from './MainFilterSmartPhones';
import { Nav, NavItem, NavLink,Button } from 'reactstrap';
// import Select from  './filter/Select'
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
import { Select } from '@material-ui/core';




class Products extends Component {
  state = {
    products: [],
    pageOfItems: [],
    pickedCategory:'champagne',
    output:[],
    fruit: "banana",
  
  };

handleChange = this.handleChange.bind(this);

handleChange(e) {
  console.log("Fruit Selected!!");
  this.setState({ fruit: e.target.value });
}

  componentWillReceiveProps(nextProps) {
    this.setState({ products: nextProps.products });


  }

  onChangePage = pageOfItems => this.setState({ pageOfItems: pageOfItems });



  
  selectCategory=(e,props,state)=>{
    console.log(e.target.value)
 
    this.setState({ pickedCategory: e.target.value})
   

   
    
  
 
  }
 

// checkOutput=()=>{
  
//   <If condition={this.state.pickedCategory ==='smartphone'}>
//   <Then>
//     <p>Рендерим Смартфоны</p>
//   </Then>
//   <ElseIf condition={this.state.pickedCategory ==='champagne'}>
//   <p>Рендерим ШАМПАНСКОЕ</p>
//   </ElseIf>
//   <Else>
//     <p>НИЧЕ НЕ РЕНДЕРИМ </p>
//   </Else>
// </If>


// }




  // Picker(props,selectCategory,picedCategory) {
  // console.log('hello from picker', this.picedCategory)
  //   if (this.picedCategory==='smartphone') {
  //     console.log('if statement', this.picedCategory)
  //     return <p>Рендерим смартфоны</p>;
  //   }
   
  //   else if(this.picedCategory==='champagne') {
  //     console.log('if statement', this.picedCategory)
  //     return <p>Рендерим Шампанское</p>;
  //   }
  //   else {
  //     return <p>НИЧЕ НЕ ВЫБРАНО</p>;
  //   }
   
  // }



  render(state) {
    this.setState(state)
    const { products } = this.state;
   
    const filterSmartphone = products.filter( cat => {
      return cat.Category === 'smartphones';
    })
    console.log('this state Products.js',this.state)

    if (products.length > 0) {
      return (
        <div className="">
             <Container>
                <p></p>
                <Nav onClick={this.selectCategory} >
                  <NavItem>
                    <Button value="smartphone" >СМАРТФОНЫ</Button>
                  </NavItem>
                  <NavItem>
                    <Button  value="pads">ПЛАНШЕТЫ</Button>
                  </NavItem>
                  <NavItem>
                    <NavLink value="notebooks">НОУТБУКИ</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">СМАРТ-ЧАСЫ</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">НАУШНИКИ</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">АКСЕССУАРЫ</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">ТЕХНИКА</NavLink>
                  </NavItem>
                
                </Nav>
                <hr />
              
             </Container>
             {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
          
          <Container>
          <Row>
          <Col xs="2">
            <MainFilterSmartPhones/>
       
            </Col>
          <Col xs="10">
            <Row>
           
           

           {console.log('this.state.pickedCategory',this.state.pickedCategory)}
           <If condition={this.state.pickedCategory ==='smartphone'}>
            <Then>
             
             { this.state.pageOfItems.filter(taskk => taskk.Category === this.state.pickedCategory)
                     .map(task => 
                       console.log('TASK -----   ', task),
                       
                       ) 
                   }
            </Then>
            <ElseIf condition={this.state.pickedCategory ==='champagne'}>
            <p>Рендерим ШАМПАНСКОЕ</p>
            </ElseIf>
            <Else>
              <p>НИЧЕ НЕ РЕНДЕРИМ </p>
            </Else>
          </If>
     




            { this.state.pickedCategory ==='smartphone' ?  'YES SMARTPHONE'

                // <p>
                //  { 
                //    this.state.pageOfItems
                //     .filter(task => task.Category === this.state.pickedCategory)
                //     .map(task => 
                //       console.log('TASK -----   ', task)) 
                //   }
                // </p>
           

              :this.state.pickedCategory ==='champagne' ?
              
              this.state.pageOfItems.filter(product => product.Category === 'champagne').map(filteredData=>(
                console.log('filtered Data',filteredData)
                // <Product product={filteredData} key={filteredData.id} value={'smartphone'} />
                ))

              :this.state.pickedCategory ==='notebooks' ? "Ноутбуки" 
              :this.state.pickedCategory ==='pads' ? "Планшеты" 
              : "Other"
            }
     

                
              
             
              

                <Pagination items={products} onChangePage={this.onChangePage} />
            
            </Row>
          </Col>
          </Row>
          </Container>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

Products.propTypes = {
  firestore: PropTypes.object.isRequired,
  products: PropTypes.array
};

const mapStateToProps = (state) => ({
  products: state.firestore.ordered.products
});

// console.log('this is map state to props',mapStateToProps)


export default compose(
  firestoreConnect(props => [
    {
      collection: 'products',
      orderBy: props.sort
    }
  ]),
  connect(mapStateToProps)
)(Products);
