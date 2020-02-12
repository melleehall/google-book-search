import React, { Component } from 'react';
import './FilterForm.css';

export default class FilterForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
        
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

    render () {
        return (
            <form className='filter-form' onSubmit={e => this.handleSubmit(e)}>
                <label
                    className='label'>
                    Search: 
                </label>
                <input
                    placeholder='Jack Keroac'
                    value={this.props.searchTerm}
                    onChange={e => this.props.handleUpdate(e.target.value)}
                    />
                <button type='submit'>
                    Search
                </button>
            </form>
        )
    }
}