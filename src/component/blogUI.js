import {React, useState} from 'react';
import ReactDOM from 'react-dom/client';
import TitleField from "./titleField"
import BlogContent from "./blogContent"

function BlogUI(props) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleClick(event) {
        const newPost = {title: title, content: content};

        event.preventDefault();
        props.setPosts((prevPosts) => [...prevPosts, newPost]);
        props.setIsPosted(true);

        setTitle("");
        setContent("");
    }

    return (
        <form style={{backgroundColor: "lightblue", width: "500px", padding: "10px"}}>
            <dir style={{textAlign: "left", padding: "0"}}>
                <TitleField title={title} setTitle={setTitle} />
                <BlogContent content={content} setContent={setContent} />
            </dir>
            <dir style={{textAlign: "right"}}>
                <button type="submit" onClick={handleClick}>Post</button>
            </dir>
        </form>
    )
}

export default BlogUI;