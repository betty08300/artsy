import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // id: this.props.item.id,
            quantity: this.props.item.quantity,
            // price: this.props.item.price || 0
        }
    

    }

    totalPrice(){
        let total = (parseFloat(this.state.quantity) * parseFloat(this.props.item.price)).toFixed(2);
        return total; 
    }


    update(field){
        return(e) => {
            this.setState({[field]: e.target.value})
        }
    }

    render(){
        const {item} = this.props;
        return(
            <div>
                <div>
                    <Link to={`/products/${item.product_id}`}></Link>
                    <img src={item.images[0]} />
                    <h2>{item.title}</h2>
                </div>

                <button onClick={this.props.deleteProduct.bind(this, item.id)}>Remove</button>
                <select onChange={this.update('quantity')} name="quantity" value={this.state.quantity}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <div>
                    <h3>${this.totalPrice()}</h3>
                    <h6>(${(item.price).toFixed(2)} each)</h6>
                </div>

            </div>


        )
    }


}

export default ShoppingCartIndexItem; 