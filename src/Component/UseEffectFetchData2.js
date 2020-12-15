import React, { useState, useEffect } from "react";
import axios from "axios";

const UseEffectDataFetch = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/Posts/${id}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [id]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <p>{post.body}</p>
    </div>
  );
};

export default UseEffectDataFetch;
