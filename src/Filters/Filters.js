import React, { Component } from 'react';

import FilterForm from '../FilterForm/FilterForm';
import FilterMenus from '../FilterMenus/FilterMenus';

export default class Filters extends Component {
    render() {
        return (
            <div className='filters'>
                <FilterForm 
                    searchTerm={this.props.searchTerm}
                    handleUpdate={this.props.handleUpdate}
                    handleSubmit={this.props.handleUpdate}/>
                <FilterMenus 
                    changePrintTypeHandler={this.props.changePrintTypeHandler}
                    changeBookTypeHandler={this.props.changeBookTypeHandler}/>
            </div>
        )
    }
}