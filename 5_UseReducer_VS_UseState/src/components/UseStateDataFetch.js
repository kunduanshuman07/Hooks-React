import React, { useEffect, useState } from "react";
import axios from "axios";
const UseStateDataFetch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => {
        setLoading(false);
        setError("");
        setPost(res.data);
      })
      .catch((err) => {
        setLoading(true);
        setError("Something went Wrong.");
        setPost({});
        console.log(err.message);
      });
  },[]);
  return (
    <div>
      {loading ? "Loading" : post.title}
      {error ? error : null}
    </div>
  );
};

export default UseStateDataFetch;
