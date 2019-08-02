import React from 'react';
import { withRouter } from 'react-router-dom';


class ProductForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.state.product; 
    }

    componentDidMount(){
        this.props.fetchProduct(this.props.match.params.productId);
    }

    componentDidUpdate(prevProps){
        if (prevProps.product.id != this.props.match.params.productId){
            this.props.fetchProduct(this.props.match.params.productId).then(()=>{
                this.setState(this.props.product) 
            })
        }
    }

    update(field){
        return(e) => {
            this.setState({[field]: e.target.value})
        };
    }

    handleSubmit(e) {
        e.preventDefault();
      
    }

    render(){

    }


}

export default withRouter(ProductForm); 