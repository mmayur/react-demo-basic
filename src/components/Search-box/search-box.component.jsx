import React from 'react';
import './Styles.css';

export const SearchBox = ({placeholder,handleChange}) => {
return(
    <div>
        <input className="search" type='text' placeholder={placeholder} onChange={handleChange}></input>
    </div>
    )
}