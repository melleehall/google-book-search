import React, { Component } from 'react';
import './ListItem.css';

export default class ListItem extends Component {
    render () {

        const title = this.props['volumeInfo']['title'];
        const author = this.props['volumeInfo']['authors'][0];
        
        const saleability = this.props['saleInfo']['saleability'];

        // need to come back to this to get accurate price showing
        const price = calculatePrice(saleability);
        const saleInfo = this.props['saleInfo'];
        
        function calculatePrice(saleability, saleInfo) {
            const price = (saleability === "NOT_FOR_SALE") ? 'not for sale' : '$5';
            return price;
        }

        const description = this.props['volumeInfo']['description'];

        const imgURL = this.props['volumeInfo']['imageLinks']['smallThumbnail'];

        return (
            <li className='list-item'>
                <h1>{title}</h1>
                <h2>{author}</h2>
                <span>Price: {price}</span>
                <p>{description}</p>
                <img 
                    src={imgURL}
                    alt='Front Cover of Book'/>
            </li>
        )
    }
}
