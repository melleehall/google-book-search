import React, { Component } from 'react';
import './FilterMenus.css';
import FilterBookType from '../FilterBookType/FilterBookType';
import FilterPrintType from '../FilterPrintType/FilterPrintType';

export default class FilterMenus extends Component {
    
    render() {                    
        return (
            <div className='filter-menus'>
                <form className='filters-form-container'>
                    <FilterPrintType 
                        searchTerm={this.props.searchTerm}
                        printType={this.props.printType}
                        filter={this.props.filter}
                        newBooklist={this.props.newBooklist}
                        changePrintTypeHandler={this.props.changePrintTypeHandler}
                        changeBookTypeHandler={this.props.changeBookTypeHandler}/>
                    <FilterBookType 
                        searchTerm={this.props.searchTerm}
                        printType={this.props.printType}
                        filter={this.props.filter}
                        newBooklist={this.props.newBooklist}
                        changePrintTypeHandler={this.props.changePrintTypeHandler}
                        changeBookTypeHandler={this.props.changeBookTypeHandler}/>
                </form>
            </div>
        )
    }
}