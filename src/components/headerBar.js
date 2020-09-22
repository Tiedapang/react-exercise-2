import React, {Component} from 'react';
import '../styles/headerBar.css';
import imagePath from '../assets/shoppingCar.jpg';
class HeaderBar extends Component{
    render(){
        return (
            <div className={'headerBar'}>
                <h1>Store</h1>
                <p>{this.props.count}</p>
                <img src={imagePath}></img>
            </div>
        );
    }

}
export default HeaderBar;
