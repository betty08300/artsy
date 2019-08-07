import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.item.id,
            quantity: this.props.item.quantity,
            price: this.props.item.price 
        }
    }

    totalPrice(){
        let total = (parseFloat(this.state.quantity) * parseFloat(this.state.price)).toFixed(2);
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

                <button onClick={() => this.props.deleteShoppingCartItem(item.id)}>Remove</button>
                <input id="quantity" type="number" onChange={this.update('quantity')} min="1" max="50" value={this.state.quantity} />
                <div>
                    <h3>${this.totalPrice()}</h3>
                    <h6>(${item.price} each)</h6>
                </div>

            </div>


        )
    }


}

export default ShoppingCartIndexItem; 