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
    filterSmartphone :[],
    newArray:[]
  
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
  
 


  getFilteredProducts( pickedCategory) {
  
    const filter = this.props.filter;
    console.log(this.state.pageOfItems)

  
                            
    console.log('------------------------------------------')
    console.log('вывод ',(this.state.pageOfItems))
    console.log('------------------------------------------')

    
    const filteredProducts = this.state.pageOfItems.map(obj => {
        
    const filtered = Object.values(obj.Category.value)
      
       

       
        let concatedArray=[]
        let buffer=''
        // console.log('Filtered до цикла  ', filtered)
       
        buffer = filtered.join('')
        concatedArray.push(buffer,obj)

        // console.log('buffer ',buffer)
        // console.log('obj',obj)
        console.log('type ',typeof this.state.pickedCategory)
        if (buffer===this.state.pickedCategory.toString()){
          this.state.newArray.push(concatedArray[1])
          console.log('GG '  ,this.state.newArray)}
        
        if (filtered.length === 0) return null;

      
    
      })
      return  <Product product={this.state.newArray}   />;
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
   
    // const smartPhone = input.filter(isSmartphone);
    const { buhalovka, filter } = this.props;
    // const even = this.state.pageOfItems.filter(isSmartphone(this.state.pageOfItems.Category));
    // console.log('Проверка на смартфон ',this.state.pageOfItems.Category)

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
                    <NavLink value="smartwatches">СМАРТ-ЧАСЫ</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="headphones">НАУШНИКИ</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="accessoires">АКСЕССУАРЫ</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="technique">ТЕХНИКА</NavLink>
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
           
           

           {/* {console.log('this.state.pickedCategory',this.state.pickedCategory)} */}
           
           {/* <If condition={this.state.pickedCategory ==='smartphone'}>
            <Then>
           
  

            </Then>
            <ElseIf condition={this.state.pickedCategory ==='champagne'}>
            <p>Рендерим ШАМПАНСКОЕ</p>
            </ElseIf>
            <Else>
              <p>НИЧЕ НЕ РЕНДЕРИМ </p>
            </Else>
          </If> */}
     
 
            { this.state.pickedCategory ==='smartphone' ?  
            // 'Cмартфон'
            this.getFilteredProducts()
          


            //  this.state.pageOfItems.filter(isSmartphone(this.state.pageOfItems))
            // .map((products)=>(
              
            //     <Product product={products}   />
               
              
            // ))


            
            //   .map((product, ind) =>
            //     <div key={ind}>
            //       {product.category}
            //       {Object.values(product.products).map(name => <li>{name}</li>)}
            //     </div>
            //   )
            
            
          
            

            :this.state.pickedCategory ==='champagne' ?
              
            this.getFilteredProducts()

              :this.state.pickedCategory ==='notebooks' ? this.getFilteredProducts()
              :this.state.pickedCategory ==='pads' ?  this.getFilteredProducts()
              :this.state.pickedCategory ==='smartwatches' ? this.getFilteredProducts()
              :this.state.pickedCategory ==='headphones' ?  this.getFilteredProducts()
              :this.state.pickedCategory ==='accessoires' ? this.getFilteredProducts()
              :this.state.pickedCategory ==='technique' ?  this.getFilteredProducts()
              
              
              
              
              
              
              
              
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
