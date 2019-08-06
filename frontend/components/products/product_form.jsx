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
        document.body.style = 'background: #FAF9F5';
    }

    componentWillUnmount() {
        document.body.style = 'background: #FFFFFF';
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
                    <h1>Add a new listing</h1>
                    <div className='form-section'>
                        <div className='row'>
                            <div className='left-col'>
                                <h2>Photos</h2>
                                <p>Add as many as you can so buyers can see every detail.</p>
                                <label>Photos * </label>
                                <p>Use up to ten photos to show your item's most important qualities.</p>
                            </div>
                            <div className='right-col'>
                                <div className='image-upload'>
                                    <div className='image-button'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNuizqdv7ZS4DkHbt65u1QNOwZeo4PQ7kDI_UPgXvzzqgcsX6ug" />
                                        <p>Add a photo</p>
                                    </div>
                                    <input type="file" onChange={this.handleFile} multiple />
                                </div>
                                
                                
                            </div>
                        </div>
                    </div>
                    
                    <div class='form-section'>
                        <h2>Listing details</h2>
                        <div className='row'>
                            <div className='left-col'>
                                <label> Title * </label>
                                <p>Include keywords that buyers would use to search for your item.</p>
                            </div>
                            <div className='right-col'>
                                <input className='input-title' type="text" onChange={this.update('title')} value={this.state.title} required />
                            </div>
                        </div>


                        <div className='row'>
                            <div className='left-col'>
                                <label>About this listing *</label>
                            </div>
                            <div className='right-col about'>
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
                        </div>

                        <div className='row'>
                            <div className='left-col'>
                                <label> Description * </label>
                                <p>Start with a brief overview that describes your item’s finest features. Shoppers will only see the first few lines of your description at first, so make it count!</p>
                                <p>Not sure what else to say? Shoppers also like hearing about your process, and the story behind this item.</p>
                            </div>
                            <div className='right-col'>
                                <textarea className='input-description' type="text" onChange={this.update('description')} value={this.state.description} required></textarea>
                            </div>


                        </div>

                        <div className='row'>
                            <div className='left-col'>
                                <label>Price *</label>
                                <p>Factor in the costs of materials and labor, plus any related business expenses. Consider the total price buyers will pay too—including shipping.</p>
                            </div>
                            <div className='right-col'>
                                <input className='price-input' type="number" onChange={this.update('price')} value={parseFloat(this.state.price).toFixed(2)} min='0' step='0.01' required />
                            </div>
                        </div>


                        <div className='row button'>
                            <button className='btn btn-primary'>Save</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        )
    }


}

export default withRouter(ProductForm); 