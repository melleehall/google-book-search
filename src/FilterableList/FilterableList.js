import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';

export default class FilterableList extends Component {
    render () {

        // map over the books that pass the current filter 
        // selections and generating ListItem for each that 
        // passes the filters then return them in an <ul>
        

        const books = this
            .props
            .books
            .map((book, i) => <ListItem { ...book } key={i}/>)
        
        // const books = <ListItem />

        return (
            <div className='filterable_list'>
                {books};
            </div>
        )
    }
}

FilterableList.defaultProps = {
    books: []
};
