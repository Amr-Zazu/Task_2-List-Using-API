import { useEffect, useState } from "react";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container">
      <table className="table table-striped mt-3 products-table border">
        <thead>
          <tr>
            <th style={{ borderRight: "solid 1px #dee2e6" }}>ID</th>
            <th style={{ borderRight: "solid 1px #dee2e6" }}>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <td style={{ borderRight: "solid 1px #dee2e6" }}>{post.id}</td>
                <td style={{ borderRight: "solid 1px #dee2e6" }}>
                  {post.title}
                </td>
                <td>{post.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default PostsList;
