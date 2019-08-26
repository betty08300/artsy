import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { query: ''}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)

    }

    handleSubmit(e){
        e.preventDefault();
        e.stopPropagation();
        this.props.searchProducts(this.state.query).then(()=>{
            this.props.history.push('/search')
        })
    }

    update(field){
        return(e) => {
            this.setState({[field]: e.target.value});
        }
    }

    render(){
        return(
            <form className='search' onSubmit={this.handleSubmit}>
                
                <input type="text" onChange={this.update('query')} value={this.state.query}
                placeholder='Search for items or shops'/>
                <button className='btn' type="submit" value='Search'>Search</button>
            </form>
        )
    }


}

export default withRouter(SearchBar); 