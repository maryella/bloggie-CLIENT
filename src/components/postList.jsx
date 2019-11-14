import React, { Component } from "react";
import { loadData } from "../util/loadData";
import { Link } from "react-router-dom";

export class PostList extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const post_data = await loadData(`http://localhost:3000/api`);
    this.setState({
      posts: post_data
    });
  }

  render() {
    const posts = this.state.posts;
    console.log(posts);

    return (
      <>
        <ul>
          {posts.map(post => {
            return (
              <li key={post.id}>
                <Link to={`/posts/${post.id}`}>
                  <h5>{post.title}</h5>
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default PostList;
