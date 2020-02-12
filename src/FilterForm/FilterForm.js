import React, { Component } from 'react';
import './FilterForm.css';

export default class FilterForm extends Component {
    render () {
        return (
            <form className='filter-form'>
                <label
                    className='label'>
                    Search: 
                </label>
                <input
                    placeholder='Jack Keroac'
                    value={this.props.searchTerm}
                    onChange={e => this.props.handleUpdate(e.target.value)}
                    />
                <button 
                    type='submit'
                    onSubmit={e => this.props.handleSubmit(e.target.value)}>
                    Search
                </button>
            </form>
        )
    }
}