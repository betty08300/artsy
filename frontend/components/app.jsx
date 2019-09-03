import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import Modal from './modal';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import ProductIndexContainer from './products/products_index_container';
import ProductShowContainer from './products/product_show_container';
import ProductEditContainer from './products/product_edit_container';
import CreateProductContainer from './products/product_create_container';
import ShopIndexContainer from './shop/shop_index_container';
import ShoppingCartIndexContainer from './shopping_cart_items/shopping_cart_item_container';
import SearchBarContainer from './search/search_bar_container';
import Footer from './footer';

const App = () => (
    <div>
        <Modal />
        <header>
            <div className="navbar-wrapper">
                <div className='container navbar'>
                    <div className="logo-search">
                        <Link to='/' className='artsy-logo'>
                            <h1>Artsy</h1>
                            <link href="https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
                        </Link>
                        <SearchBarContainer />
                    </div>
                    
                    <GreetingContainer />
                </div>
                
            </div>
        </header>

        <div className="container">
            <Switch>
                <Route exact path='/' component={ProductIndexContainer} />
                <Route exact path='/products/new' component={CreateProductContainer} />
                <Route exact path='/products/:productId' component={ProductShowContainer} />
                <Route exact path='/products/:productId/edit' component={ProductEditContainer} />
                <Route exact path='/shop' component={ShopIndexContainer} />
                <Route exact path='/cart' component={ShoppingCartIndexContainer}/>
                <Route exact path='/search' component={ProductIndexContainer} />

            </Switch>
            <footer>
                <Footer />
            </footer>
        </div>
        
    </div>
);

export default App;
