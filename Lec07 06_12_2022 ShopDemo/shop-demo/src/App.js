import logo from './logo.svg';
import './App.css';
import FCProductList from './FunctionalComps/FCProductList';
import FCCartList from './FunctionalComps/FCCartList';
import { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
    super(props);
//go 2 db 
    this.state = {
      productList: [
        {
          id: 1,
          title: "Cap",
          desc: "bla bla bla",
          price: 100,
          image: "https://cdn.shopify.com/s/files/1/0521/3352/7718/products/41DZiVJNTlL_540x.jpg?v=1633104038"
        },
        {
          id: 2,
          title: "T-SHIRT",
          desc: "bla bla bla2",
          price: 150,
          image: "https://is4.revolveassets.com/images/p4/n/z/ROLS-MS107_V1.jpg"
        },
      ],
      cartList: []
    };
  }


  componentDidMount = () => {  
    console.log('did mount');
  }

  componentWillUnmount = () => {
    console.log('unmount');
  }

  getProduct2Buy = (id2Buy) => {
    console.log(id2Buy);

    let newProducts = this.state.productList.filter(prod => prod.id !== id2Buy);
    // let product2Buy = this.state.productList.filter(prod => prod.id === id2Buy);
    // console.log(product2Buy[0].title);
    let product2Buy = this.state.productList.find(prod => prod.id === id2Buy);
    let newCartList = [...this.state.cartList, product2Buy];
    this.setState({
      productList: newProducts,
      cartList: newCartList
    });
  }

  removeFromCart = (id2RemoveFromCart) => {
    console.log(id2RemoveFromCart);

    let newCartList = this.state.cartList.filter(prod => prod.id !== id2RemoveFromCart);

    let product2Remove = this.state.cartList.find(prod => prod.id === id2RemoveFromCart);
    let newProductList = [...this.state.productList, product2Remove];

    this.setState({
      productList: newProductList,
      cartList: newCartList
    });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <FCCartList stam="8" cartList={this.state.cartList} removeFromCart={this.removeFromCart} />
          <FCProductList productList={this.state.productList} sendProduct2Buy={this.getProduct2Buy} />
        </header>
      </div>
    );
  }
}

export default App;
