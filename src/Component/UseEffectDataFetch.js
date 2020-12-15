import React, { useState, useEffect } from "react";
import axios from "axios";

const UseEffectDataFetch = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/Posts/10")
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      <ul>Look Log for all fetched data!!</ul>
      {posts.title}
    </div>
  );
};

export default UseEffectDataFetch;
