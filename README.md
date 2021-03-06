# Artsy

artsy, an etsy clone, is a marketplace for handmade goods.

[Live](https://artsy-aa.herokuapp.com/#/)

## Features 

* Session: Secure backend to frontend User Authentication using BCrypt 

* Products: Shop manager allows users to add/ edit their product listing and upload product images.

* Shopping Cart: User can add products to their shopping cart. The item quantity and prices will be automatically update.

## Technologies 

* Ruby on Rails
* React
* Redux 
* JBuilder
* Postgresql
* AWS 
* Heroku 

### Product Create/Edit Form 
<a href="https://ibb.co/3m8g4Kj"><img src="https://i.ibb.co/0yWHm56/product-form.png" alt="product-form" border="0"></a><br /><a target='_blank' href='https://babynamesetc.com/michael-jackson-kids-names'></a><br />

### Shopping Cart 
<a href="https://ibb.co/8NXfcnp"><img src="https://i.ibb.co/17bP6Y5/cart.png" alt="cart" border="0"></a><br /><a target='_blank' href='https://babynamesetc.com/rhyming'></a><br />

### Key Feature: Image Uploads

```javascript
class ProductForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.product; 
        this.state.imgUrls = this.props.product.images;

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
      handleFile(e) {
        // update state for the form
        this.setState({
            images: e.currentTarget.files,
            fileUploaded: true
        });

        // update imgurls in state for thumbnails
        let files = Array.from(e.target.files);
        files.forEach(file => {
            let reader = new FileReader();
            reader.onload= (e) => {
                let imgUrl = e.target.result;
                this.setState({
                    imgUrls: [...this.state.imgUrls, imgUrl]
                });
            }
            reader.readAsDataURL(file);
        })
    }
    render(){
        let photos = this.state.imgUrls.map(imgUrl => {
            return <img src={imgUrl} />
        });

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
                                <div className='image-upload-container'>
                                    <div className='image-upload'>
                                        <div className='image-button'>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNuizqdv7ZS4DkHbt65u1QNOwZeo4PQ7kDI_UPgXvzzqgcsX6ug" />
                                            <p>Add a photo</p>
                                        </div>
                                        <input type="file" onChange={this.handleFile} multiple />
                                    </div>
                                    {photos}
                                </div>
                                
                            </div>
                        </div>
                    </div>    
                </form>
            </div>
        )
    }

}
```

## Future Impplementations

* Comments/Reviews: Users can leave reviews and start rating 
* Search bar: Users are be able to search products 


