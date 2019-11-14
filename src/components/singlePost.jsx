import React, { Component } from "react";
import { loadData } from "../util/loadData";

export class Post extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    this.getPost(this.props.match.params.id);
  }

  getPost = async id => {
    const data = await loadData(`http://localhost:3000/api/${id}`);
    const issue = data;

    this.setState({
      data: issue
    });
  };

  render() {
    const { data } = this.state;
    console.log("user: ");
    return (
      <>
        <div>
          <h4>{data.title}</h4>
          <p>{data.content}</p>
        </div>
      </>
    );
  }
}

export default Post;
