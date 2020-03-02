import React, { Component } from 'react';
import './FilterBookType.css';

export default class FilterBookType extends Component {
    handleChange(e) {

        this.props.changeBookTypeHandler(e.target.value);
        // generate the url to make the API call
        const endpoint = 'https://www.googleapis.com/books/v1/volumes/?key=';
        const key1 = 'AIzaSyC72GJGPn4Oxjuw1iq-';
        const key2 ='uUqSF-k01TjiigQ';
        const url = `${endpoint}${key1}${key2}&q=${this.props.searchTerm}&&printType=${this.props.printType}&filter=${this.props.filter}`
       
        console.log(url);
        fetch(url)
        .then(res => {
            if(!res.ok) {
            throw new Error('Something went wrong')
        }
            return res;
        })
        .then(response => response.json())
        .then(data => {
            const books = data['items']
            console.log(books)
            this.props.newBooklist(books);
        })
        .catch(err => {
            this.setState({
            error: err.message
            })
        })
    }
    
    render() {

        const filterOptions = <select
                                    id='book-type'
                                    name='book-type'
                                    className='dropdown'
                                    onChange={(e) => {
                                        this.handleChange(e);
                                    }}>
                                    {/* <option>Apply a filter...</option> */}
                                    <option value='partial'>partial</option>
                                    <option value='full'>full</option>
                                    <option value='free-ebooks'>free-ebooks</option>
                                    <option value='paid-ebooks'>paid-ebooks</option>
                                    <option value='ebooks'>ebooks</option>
                                </select>
                               
        return (
            <div>
                <label 
                    htmlFor='book-type'
                    className='label'>
                    Book Type:
                </label>
                {filterOptions}
            </div>
        )
    }
}