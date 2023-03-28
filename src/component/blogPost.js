import {React, useState} from 'react';
import ReactDOM from 'react-dom/client';

function BlogPost(props) {

    const title = props.post.title;
    const content = props.post.content;

    const [isClicked, setIsClicked] = useState(false)
    const [blog, setBlog] = useState({title: title, content: content})

    function handleClick() {
        if (!isClicked) {
            setIsClicked(true)
        } else {
            setIsClicked(false)

            const newBlog = blog
            props.setPosts((prevPosts) => {
                const before = prevPosts.filter((post, index) => index < props.id);
                const after = prevPosts.filter((post, index) => index > props.id);
                return [...before, newBlog, ...after]
            })

            props.setIsPosted(true)
        }
    }

    function handleChange(event) {
        const { name, value } = event.target

        setBlog(prevBlog => {return {...prevBlog, [name]: value};})
    }

    function handleDelete() {
        props.setPosts((prevPosts) => {
                return prevPosts.filter((post, index) => index !== props.id)
            })
        
        props.setIsPosted(true)
    }

    if (!isClicked) {
        return (
            <dir style={{backgroundColor: "lightpink", borderRadius: "10px", width: "400px", margin: "50px", padding: "0"}}>
                <dir style={{padding: "10px", margin: "0"}}>
                    <h2 style={{margin: "0"}}>{title}</h2>
                </dir>
                <dir style={{padding: "10px", margin: "0"}}>
                    <p style={{margin: "0"}}>{content}</p>
                </dir>
                <dir style={{textAlign: "right", padding: "0", margin: "0"}}>
                    <button style={{margin: "10px"}} onClick={handleDelete}>Delete</button>
                    <button style={{margin: "10px"}} onClick={handleClick}>Edit</button>
                </dir>
            </dir>
        )    
    } else {
        return (
            <dir style={{backgroundColor: "lightpink", borderRadius: "10px", width: "400px", margin: "50px", padding: "0"}}>
                <dir style={{padding: "10px", margin: "0"}}>
                    <input type="text" name="title" value={blog.title} onChange={handleChange} />
                </dir>
                <dir style={{padding: "10px", margin: "0"}}>
                    <textarea rows="4" cols="50" name="content" value={blog.content} onChange={handleChange} />
                </dir>
                <dir style={{textAlign: "right", padding: "0", margin: "0"}}>
                    <button style={{margin: "10px"}} onClick={handleDelete}>Delete</button>
                    <button style={{margin: "10px"}} onClick={handleClick}>Save</button>
                </dir>
            </dir>
        )
    }

}

export default BlogPost;