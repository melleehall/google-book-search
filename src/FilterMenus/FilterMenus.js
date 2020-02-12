import React, { Component } from 'react';
import './FilterMenus.css';

export default class FilterMenus extends Component {
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
                                    onChange={e => this.props.changePrintTypeHandler(e.target.value)}
                                    onChange={e => this.handleChange(e)}
                                    >
                                    <option value='all'>all</option>
                                    <option value='books'>books</option>
                                    <option value='magazines'>magazines</option>
                                </select>
        
        const filterOptions = <select
                                    id='print-type'
                                    name='print-type'
                                    className='dropdown'
                                    onChange={e => this.props.changeBookTypeHandler(e.target.value)}
                                    onChange={e => this.handleChange(e)}>
                                    {/* <option>Apply a filter...</option> */}
                                    <option value='partial'>partial</option>
                                    <option value='full'>full</option>
                                    <option value='free-ebooks'>free-ebooks</option>
                                    <option value='paid-ebooks'>paid-ebooks</option>
                                    <option value='ebooks'>ebooks</option>
                                </select>
                               

        return (
            <div className='filter-menus'>
                <form>
                    <label 
                        htmlFor='print-type'
                        className='label'>
                        Print Type:
                    </label>
                    {printTypeOptions}
                    <label 
                        htmlFor='book-type'
                        className='label'>
                        Book Type:
                    </label>
                            {filterOptions}
                </form>
            </div>
        )
    }
}