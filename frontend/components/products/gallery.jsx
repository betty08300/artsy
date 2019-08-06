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
        // debugger
        const thumbnails = this.state.images.map((image, i) => {
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
                    <img src={this.state.images[this.state.selectedImgIdx]} />
                </div>
            </div>
        )


    }
}

export default Gallery; 