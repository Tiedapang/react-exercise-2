import React, {Component} from 'react';
import imagePath from '../assets/product_image_placeholder.png';
import '../styles/products.css';
const URL = 'http://localhost:3000/products';
class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: [
                {category: '', name: '', price: ''},
                {category: '', name: '', price: ''},
                {category: '', name: '', price: ''},
                {category: '', name: '', price: ''},
                {category: '', name: '', price: ''},
                {category: '', name: '', price: ''},
            ]

        };
    }
    componentDidMount(){
        async function fetchData(url) {
            const result = await fetch(url).then(response => response.json());
            return result;
        }
        fetchData(URL).then(
            (result) =>{
                this.setState({
                    products: result,
                })
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    render() {
        return(
            <div className={'products'}>
                <p>iPhone</p>
                <div className={'iphoneItems'}>
                    <div >
                        <p className={'titleName'}>{this.state.products[0].name}</p>
                        <img src={imagePath}></img>
                        <p className={'priceTag'}>{this.state.products[0].price} </p>
                        <button onClick={this.props.buy}>add to cart</button>
                    </div>
                    <div >
                        <p className={'titleName'}>{this.state.products[1].name}</p>
                        <img src={imagePath}></img>
                        <p className={'priceTag'}>{this.state.products[1].price} </p>
                        <button onClick={this.props.buy}>add to cart</button>
                    </div>
                    <div >
                       <p className={'titleName'}>{this.state.products[2].name}</p>
                       <img src={imagePath}></img>
                       <p className={'priceTag'}>{this.state.products[2].price} </p>
                       <button onClick={this.props.buy}>add to cart</button>
                    </div>

                </div>
                <p>HUAWEI</p>
                <div className={'huaweiItems'}>
                    <div >
                      <p className={'titleName'}>{this.state.products[3].name}</p>
                      <img src={imagePath}></img>
                      <p className={'priceTag'}>{this.state.products[3].price} </p>
                      <button onClick={this.props.buy}>add to cart</button>
                    </div>
                    <div >
                        <p className={'titleName'}>{this.state.products[4].name}</p>
                        <img src={imagePath}></img>
                        <p className={'priceTag'}>{this.state.products[4].price} </p>
                        <button onClick={this.props.buy}>add to cart</button>
                    </div>
                    <div >
                       <p className={'titleName'}>{this.state.products[5].name}</p>
                       <img src={imagePath}></img>                                       
                       <p className={'priceTag'}>{this.state.products[5].price} </p>
                       <button onClick={this.props.buy}>add to cart</button>             
                    </div>
                </div>

            </div>
        )
    }

}
export default Products;