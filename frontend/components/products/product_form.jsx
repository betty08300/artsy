import React from 'react';
import { withRouter } from 'react-router-dom';


class ProductForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.product; 
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        if (this.props.formType === 'update') {
            this.props.fetchProduct(this.props.match.params.productId);
        }
    }

    componentDidUpdate(prevProps){
        if (this.props.formType === 'update') {
            if (prevProps.product.id != this.props.match.params.productId) {
                this.props.fetchProduct(this.props.match.params.productId).then(() => {
                    this.setState(this.props.product)
                })
            }
        }
    }

    update(field){
        return(e) => {
            // debugger
            this.setState({[field]: e.target.value})
        };
    }

    handleFile(e) {
        this.setState({
            images: e.currentTarget.files,
            fileUploaded: true
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('product[user_id]', this.state.user_id);
        formData.append('product[title]', this.state.title);
        formData.append('product[description]', this.state.description);
        formData.append('product[price]', parseFloat(this.state.price));
        formData.append('product[who]', this.state.who);
        formData.append('product[what]', this.state.what);
        formData.append('product[when]', this.state.when);
      
        if (this.state.fileUploaded) {
            for (let i = 0; i < this.state.images.length; i++) {
                formData.append('product[images][]', this.state.images[i]);
            }
        }

        switch (this.props.formType) {
            case "create":
                this.props.createProduct(formData).then(() => {
                    this.props.history.push('/')
                });
                break;
            case "update":
                formData.append('product[id]', this.state.id);
                this.props.updateProduct(formData).then(() => {
                    this.props.history.push('/')
                });
                break;
        }
        
    }

    render(){
        return(
            <div>
                <form className='product-form' onSubmit={this.handleSubmit}>
                    <div className='photo-row'>
                        <h2>Photos</h2>
                        <h3>Add as many as you can so buyers can see every detail.</h3>
                        <label>Photos * </label>
                        <p>Use up to ten photos to show your item's most important qualities.</p>
                    
                            <div className='photo-item'>
                                <input type="file" onChange={this.handleFile} multiple/>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNuizqdv7ZS4DkHbt65u1QNOwZeo4PQ7kDI_UPgXvzzqgcsX6ug" />
                                    <p>Add a photo</p>         
                            </div>
                    </div>
                
                    <h2>Listing details</h2>
                    <div className='title-row'>
                        <label> Title * </label> 
                        <p>Include keywords that buyers would use to search for your item.</p>
                        
                            <input className='input-title' type="text" onChange={this.update('title')} value={this.state.title} required />
                    </div>
                  

                   <div className='about-listing'>
                        <label>About this listing *</label>
                        <select onChange={this.update('who')} value={this.state.who}>
                            <option value="Who made it?">Who made it?</option>
                            <optgroup label="Select a maker">
                                <option value="I did">I did</option>
                                <option value="A member of my shop">A member of my shop</option>
                                <option value="Another company or person">Another company or person</option>
                            </optgroup>

                        </select>

                        <select onChange={this.update('what')} value={this.state.what}>
                            <option value="What is it?">What is it?</option>
                            <optgroup label="Select a use">
                                <option value="A finished product">A finished product</option>
                                <option value="A supply or tool to make things">A supply or tool to make things</option>
                            </optgroup>
                        </select>

                        <select onChange={this.update('when')} value={this.state.when}>
                            <option value="When did you make it?">When did you make it?</option>
                            <optgroup label="Not made yet">
                                <option value="Made to order">Made to order</option>
                            </optgroup>
                            <optgroup label="Recently">
                                <option value="2010 - 2019">2010 - 2019</option>
                                <option value="2000 - 2009">2000 - 2009</option>
                            </optgroup>
                            <optgroup label="Vintage">
                                <option value="Before 2000">Before 2000</option>
                            </optgroup>
                        </select>
                   </div>

                    <div className='description-row'>
                        <label> Description * </label>
                            <textarea className='input-description' type="text" onChange={this.update('description')} value={this.state.description} required></textarea>
                    </div>
                    
                   <div className='price-row'>
                        <label>Price *</label>
                        <input className='price-input' type="number" onChange={this.update('price')} value={parseFloat(this.state.price).toFixed(2)} min='0' step='0.01' required />
                   </div>


                    <div className='button-row'>
                        <button>Save</button>
                    </div>
                </form>
            </div>
        )
    }


}

export default withRouter(ProductForm); 