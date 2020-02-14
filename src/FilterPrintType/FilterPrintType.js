import React, { Component } from 'react';
import './FilterPrintType.css';

export default class FilterPrintType extends Component {
    
    handleChange(e) {

        this.props.changePrintTypeHandler(e.target.value);

        
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
        const printTypeOptions = <select
                                    id='print-type'
                                    name='print-type'
                                    className='dropdown'
                                    onChange={e => this.handleChange(e)}
                                    >
                                    <option value='all'>all</option>
                                    <option value='books'>books</option>
                                    <option value='magazines'>magazines</option>
                                </select>
                               

        return (
            <div>
                <label 
                    htmlFor='print-type'
                    className='label'>
                    Print Type:
                </label>
                 {printTypeOptions}
            </div>
        )
    }
}