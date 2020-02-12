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
                    handleSubmit={term => this.props.handleSubmit(term)}
                    newBooklist={this.props.newBooklist}
                    printType={this.props.printType}
                    filter={this.props.filter}/>
                <FilterMenus 
                    searchTerm={this.props.searchTerm}
                    printType={this.props.printType}
                    filter={this.props.filter}
                    newBooklist={this.props.newBooklist}
                    changePrintTypeHandler={this.props.changePrintTypeHandler}
                    changeBookTypeHandler={this.props.changeBookTypeHandler}/>
            </div>
        )
    }
}