import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostList from "./components/postList";
import Post from "./components/singlePost";

function App() {
  return (
    <div className="App">
      <Router>
        <nav></nav>
        <Route path="/" exact>
          <PostList />
        </Route>
        <Route path="/posts/:id?" component={Post}></Route>
      </Router>
    </div>
  );
}

export default App;
