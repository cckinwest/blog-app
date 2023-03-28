import logo from './logo.svg';
import './App.css';
import {React, useState} from "react";
import BlogUI from "./component/blogUI";
import BlogPost from "./component/blogPost";

function App() {
  const [posts, setPosts] = useState([]);
  const [isPosted, setIsPosted] = useState(false)

  const blogPosts = posts.map((post, index) => <BlogPost key={index} id={index} post={post} setPosts={setPosts} setIsPosted={setIsPosted}/>)

  window.onload = function (event) {
    setPosts(JSON.parse(window.localStorage.getItem("originalPosts")))
  }

  if (isPosted) {
    window.localStorage.setItem("originalPosts", JSON.stringify(posts))
    setIsPosted(false)
  }

  return (
    <div>
      <div>
        <BlogUI setPosts={setPosts} setIsPosted={setIsPosted}/>
      </div>
      <div>
        { blogPosts }
      </div>
    </div>
  );
}

export default App;