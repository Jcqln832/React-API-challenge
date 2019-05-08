import React, { Component } from 'react';
import './search.css';

export default class Search extends Component {
    
    formatQueryParams(params) {
        const queryItems = Object.keys(params)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        return queryItems.join('&');
    }

      handleSubmit(e) {
        e.preventDefault();
        const params = {
            q: this.props.query,
            key: 'AIzaSyDxj9snLxISvojeKuxpl8f8HME85_1HzZU'
        }

        if(this.props.printType.length > 0) {
            params.printType = this.props.printType
        }

        if(this.props.filter.length > 0) {
            params.filter = this.props.filter
        }

        const qParams = this.formatQueryParams(params);

        console.log(qParams);
        const url = `https://www.googleapis.com/books/v1/volumes?${qParams}`;
    
        fetch(url)
          .then(res => {
            if(!res.ok) {
              throw new Error('Something went wrong, please try again later');
            }
            return res.json();
          })
          .then(data => {
            console.log(data);
            this.props.callbacks.renderList(data)
          })
          .catch(err => {
           this.props.callbacks.handleError(err)
          })
      }  
render() {
    const error = this.props.error && <div className="error">{this.props.error.message}</div>;
    return(
    <div>
         { error }
        <form className="searchForm_books" onSubmit={e => this.handleSubmit(e)}>
            <div className="searchBar">
                <label htmlFor="search">Search: </label>
                <input 
                    type="text"  
                    name="search" 
                    id="search" 
                    placeholder="type query..." 
                    value={this.props.query} 
                    onChange={e => this.props.callbacks.queryChanged(e.target.value)}
                />
                <button type="submit">Submit</button>
            </div>
            
            <div className="formSelects">
                <label htmlFor="printType">Print Type:</label>
                <select id="printType" name="printType" onChange={e => this.props.callbacks.typeChanged(e.target.value)}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
                
                <label htmlFor="bookType">Book Type:</label>
                <select id="bookType" name="bookType" onChange={e => this.props.callbacks.filterChanged(e.target.value)}>
                    <option value="null">No Filter</option>
                    <option value="books">Partial Text</option>
                    <option value="magazines">Full Text</option>
                    <option value="books">Free E-books</option>
                    <option value="magazines">Paid E-Books</option>
                    <option value="magazines">All E-Books</option>
                </select>
                
            </div>
        </form>
    </div>
    )
}

}