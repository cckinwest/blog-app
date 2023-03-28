import {React, useState} from 'react';
import ReactDOM from 'react-dom/client';

function TitleField(props) {
    
    const customStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        margin: "10px",
        padding: "0",
        textAlign: "left"
    };

    function handleChange(event) {
        props.setTitle(event.target.value)
    };

    return (
        <dir style={customStyle}>
            <label htmlFor="title" style={{width: "80px"}}>Title: </label>
            <input id="title" name="title" type="text" value={props.title} onChange={handleChange} />
        </dir>
    )
}

export default TitleField;