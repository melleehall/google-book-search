import React, { Component } from 'react';
import './FilterMenus.css';

export default class FilterMenus extends Component {
    render() {

        const printTypeOptions = <select
                                    id='print-type'
                                    name='print-type'
                                    className='dropdown'
                                    onChange={e => this.props.changePrintTypeHandler(e.target.value)}
                                    >
                                    <option value='all'>all</option>
                                    <option value='books'>books</option>
                                    <option value='magazines'>magazines</option>
                                </select>
        
        const filterOptions = <select
                                    id='print-type'
                                    name='print-type'
                                    className='dropdown'
                                    onChange={e => this.props.changeBookTypeHandler(e.target.value)}>
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