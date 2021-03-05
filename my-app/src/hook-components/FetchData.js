import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchData = () => {
  const [posts, setPosts] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    axios.get(url).then((response) => {
      //   console.log(typeof response.data);
      setPosts(response.data);
    });
  }, []);
  return (
    <>
      <div>
        {posts.slice(0, 10).map((post) => (
          <div key={post.id} className="posts">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FetchData;
