import React from 'react'
const SearchFilter = (props) => {
    return (
        <div>
            Filtered numbers shown with: <input onChange={props.onChange} />
        </div>
    )
}

export default SearchFilter