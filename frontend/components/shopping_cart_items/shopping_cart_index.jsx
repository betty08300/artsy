import React from 'react';
import { withRouter } from 'react-router-dom';
import ShoppingCartIndexItem from './shopping_cart_index_item';

class ShoppingCartIndex extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllShoppingCartItems(this.props.user_id);
        document.body.style = 'background: #FAF9F5';
    }
    
    totalQty(){
        return this.props.items.length; 
    }

    totalAmount(){
        let sum = 0;
        for(let i = 0; i < this.props.items.length; i++){
            let item = this.props.items[i];
            sum += (parseFloat(item.quantity) * parseFloat(item.price))
        }
        return sum.toFixed(2)
    }

    render(){
        return(
            <div className='cart-index'>
                <h1>{this.totalQty()} items in your cart</h1>
                <div className='cart-container'>
                    <div className='left-col right-border'>
                        <ul>
                            {this.props.items.map((item) => (
                                <ShoppingCartIndexItem deleteProduct={this.props.deleteShoppingCartItem} item={item} key={item.id} />
                            )
                            )}
                        </ul>
                        
                    </div>
                    <div className='right-col'>
                        <div>
                            <h2>How you'll pay</h2>
                            <label>
                                <input type='radio' name='payment' value='visa' defaultChecked />
                                {/* <img src="" alt=""/> */}
                            </label>

                            <label>
                                <input type='radio' name='payment' value='paypal' />
                                {/* <img src="" alt=""/> */}
                            </label>
                        </div>

                        <div>
                            <h3>Item(s) total</h3> <span>${this.totalAmount()}</span>
                            <h3>Shipping</h3> <span>Free</span>
                        </div>

                        <button>Proceed to checkout</button>
                    </div>     
                </div>
                
            </div>
        )
    }

}

export default ShoppingCartIndex; 