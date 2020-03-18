import React from 'react'

const Search = (props) => {

    return (
        <form>
            <label>Search For Bot</label>
            <input type='text' onChange={props.handleSearchChange} value={props.search}/>
        </form>
    )
    
}

export default Search