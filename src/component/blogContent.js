import {React, useState} from 'react';
import ReactDOM from 'react-dom/client';

function BlogContent(props) {

    const customStyle = {
        display: "flex",
        flexDirection: "row",
        alignItems: "baseline",
        margin: "10px",
        padding: "0",
        textAlign: "left"
    };

    function handleChange(event) {
        props.setContent(event.target.value)
    };

    return (
        <div style={customStyle}>
            <label htmlFor="content" style={{width: "80px"}}>Content: </label>
            <textarea id="content" name="content" rows="4" cols="50" value={props.content} onChange={handleChange} />
        </div>
    )
}

export default BlogContent;