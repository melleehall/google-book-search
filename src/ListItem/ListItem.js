import React, { Component } from 'react';
import './ListItem.css';

export default class ListItem extends Component {
    render () {

        const title = this.props['volumeInfo']['title'];
        const author = this.props['volumeInfo']['authors'][0];
        
        const saleInfo = this.props['saleInfo'];

        // need to come back to this to get accurate price showing
        const price = calculatePrice(saleInfo);
        
        console.log(this.props.saleInfo.listPrice);
        // const saleInfo = this.props['saleInfo']['listPrice']['amount'];

        function calculatePrice(saleInfo) {
            console.log(saleInfo);
            const price = (saleInfo.saleability === "NOT_FOR_SALE") ? 'not for sale' : '$' + saleInfo.listPrice.amount;
            return price;
        }

        // console.log(this.props['saleInfo']['listPrice']['amount']);

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
