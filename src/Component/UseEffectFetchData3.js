import React, { useState, useEffect } from "react";
import axios from "axios";

const UseEffectDataFetch3 = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [buttonId, setButtonId] = useState(id);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/Posts/${buttonId}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => console.log(err.message));
  }, [buttonId]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={() => setButtonId(id)}>
        Fetch Post
      </button>
      <p>{post.body}</p>
    </div>
  );
};

export default UseEffectDataFetch3;
