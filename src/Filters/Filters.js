import React, { Component } from 'react';

import FilterForm from '../FilterForm/FilterForm';
import FilterMenus from '../FilterMenus/FilterMenus';

export default class Filters extends Component {
    render() {
        return (
            <div className='filters'>
                <FilterForm 
                    searchTerm={this.props.searchTerm}
                    handleUpdate={term => this.props.handleUpdate(term)}
                    handleSubmit={term => this.props.handleSubmit(term)}/>
                <FilterMenus 
                    changePrintTypeHandler={this.props.changePrintTypeHandler}
                    changeBookTypeHandler={this.props.changeBookTypeHandler}/>
            </div>
        )
    }
}