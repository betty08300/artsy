import React from 'react';
import { withRouter } from 'react-router-dom';


class ProductForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.product; 
    }

    componentDidMount(){
        if (this.props.formType === 'update') {
            this.props.fetchProduct(this.props.match.params.productId);
        }
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

    handleFile(e) {
        this.setState({
            images: e.currentTarget.files
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('product[title]', this.state.title);
        formData.append('product[description]', this.state.description);
        formData.append('product[price]', this.state.price);
        formData.append('product[who]', this.state.who);
        formData.append('product[what]', this.state.what);
        formData.append('product[when]', this.state.when);
      
        for (let image in this.state.images) {
            formData.append('product[images]', image);
        }

        this.props.createProduct(formData).then(() => {
            this.props.history.push('/products')
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title
                        <input type="text" onChange={this.update('title')} value={this.state.title} required/>
                    </label>
                    <label>Description
                        <input type="text" onChange={this.update('description')} value={this.state.description} required/>
                    </label>
                    <label>Who Made It?
                        <select onChange={this.update('who')} value={this.state.who}>
                            <option value="I did">I did</option>
                            <option value="A member of my shop">A member of my shop</option>
                            <option value="Another company or person">Another company or person</option>
                        </select>
                    </label>

                    <label>What is it?
                        <select onChange={this.update('what')} value={this.state.what}>
                            <option value="A finished product">A finished product</option>
                            <option value="A supply or tool to make things">A supply or tool to make things</option>
                        </select>
                    </label>

                    <label>When was it made?
                        <select onChange={this.update('when')} value={this.state.when}>
                            <option value="Made to order">Made to order</option>
                            <option value="2010 - 2019">2010 - 2019</option>
                            <option value="2000 - 2009">2000 - 2009</option>
                            <option value="Before 2000">Before 2000</option>
                        </select>
                    </label>

                    <label>Price
                        <input type="number" onChange={this.update('price')} value={this.state.price} min='0.01' step='0.01' required/>
                    </label>

                    <label>Photos
                        <input type="file" onChange={this.handleFile.bind(this)} multiple />
                    </label>
                </form>
            </div>
        )
    }


}

export default withRouter(ProductForm); 