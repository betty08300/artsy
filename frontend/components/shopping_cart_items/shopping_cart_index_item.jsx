import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartIndexItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.item.id,
            quantity: this.props.item.quantity,
            // price: this.props.item.price || 0
        }
        this.state.item = this.props.item;
    

    }

    totalPrice(){
        let total = (parseFloat(this.state.quantity) * parseFloat(this.props.item.price)).toFixed(2);
        return total; 
    }


    update(field){
        return(e) => {
            this.setState({[field]: e.target.value}, () => {
                this.props.updateShoppingCartItem(this.state);
            });
        }
    }

    render(){
        const {item} = this.state;
        return(
            <div className='item'>
                <div className='left-col'>
                    <div className='item-img-and-info'>
                        <Link to={`/products/${item.product_id}`} className='img-link'>
                            <img src={item.images[0]} />
                        </Link>

                        <div className='item-details'>
                            <Link to={`/products/${item.product_id}`}>
                                <h2>{item.title}</h2>
                            </Link>
                            <div className='remove-button' onClick={this.props.deleteProduct.bind(this, item.id)} >Remove
                            <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"></link>
                            </div>
                        </div>
                    </div>
                    <label className='gift'>
                        <input type='checkbox' className='gift-input-box' />
                        <span className='gift-order'>This order is a gift</span>
                        <div>
                            <h6>Prices will not be shown on packing slip</h6>
                        </div>
                    </label>

                </div>

                <div className='right-col'>
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
                    <div className='price'>
                        <h3>${this.totalPrice()}</h3>
                        <h6>(${(item.price).toFixed(2)} each)</h6>
                    </div>
                </div>
            </div>


        )
    }


}

export default ShoppingCartIndexItem; 