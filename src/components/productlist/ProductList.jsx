import React, { Component } from 'react'
import ErrorMessage from '../common/ErrorMessage';
import Loader from '../common/Loader';
import ProductItem from './ProductItem';

class ProductList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            error: null,
            isLoaded: false,
            products: [],
        }
    }

    componentDidMount() {
        fetch("http://localhost:4000/products")
          .then((res) => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                products: result,
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error,
              });
            }
          );
      }
    
    render() {
        const { error, isLoaded, products } = this.state;
        if (error) {
            return <ErrorMessage message={error.message} />;
          } else if (!isLoaded) {
            return <Loader divClass = "spinner-border" role = "status" spanClass = "sr-only"/>;
          }
          return (
            <section className = "row">
              {products.map((product) => (
                  <ProductItem key = {product.id} data = {product}/>
                ))}
            </section>
          );
    }
}

export default ProductList
