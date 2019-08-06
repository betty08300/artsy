import React from 'react';

class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: this.props.images,
            selectedImgIdx: 0
        }
    }


    handleClick(idx) {
        this.setState({
            selectedImgIdx: idx
        });
    }

    render() {
        console.log('images: ' + this.props.images);
        let thumbnails = this.props.images.map((image, i) => {
            return (
                <div className='image-thumb' key={i} onClick={this.handleClick.bind(this, i)}>
                    <img src={image} />
                </div>
            )
        })

        return (
            <div className='gallery'>
                <div className='thumbnails-container'>
                    { thumbnails }
                </div>
                <div className='big-image'>
                    <img src={this.props.images[this.state.selectedImgIdx]} />
                </div>
            </div>
        )


    }
}

export default Gallery; 