import React from 'react'
import './FootballFilter.css'

const FootballFilter = props => (
    <div className="filter-container">
        <label htmlFor="soccer-filter">Search For Your Team: </label>
        <input type="text" value={props.value} onChange={props.onChange} 
        name="football-filter" />
    </div>
)

export default FootballFilter 