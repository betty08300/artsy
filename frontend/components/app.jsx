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
// import CartIndexContainer from 
// import SearchContainer from './search/search_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Modal />
        <header>
            <div className="navbar-wrapper">
                <div className='container navbar'>
                    <div>
                        <Link to='/' className='artsy-logo'>
                            <h1>Artsy</h1>
                            <link href="https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap" rel="stylesheet"></link>
                        </Link>
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
                {/* <Route exact path='/cart' component={CartIndexContainer}/> */}

            </Switch>
        </div>
        
    </div>
);

export default App;
