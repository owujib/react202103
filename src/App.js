import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Login from './components/Login';
import Post from './components/Post';
import PostDetails from './components/PostDetails';
import Navigation from './components/Navigation';

class App extends Component {
  state = {
    posts: null,
    isLoading: true,
    err: null,
  };
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/')
      .then((response) => {
        this.setState({
          posts: response.data,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <div>
        {/* Nav section */}
        <Navigation />
        {/* end of Nav section */}

        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />

        {/* <Route path="/posts" component={Post} /> */}
        <Route
          exact
          path="/posts"
          render={(routerProps) => (
            <Post
              {...routerProps}
              posts={this.state.posts}
              isLoading={this.state.isLoading}
            />
          )}
        />

        <Route path="/posts/:id" component={PostDetails} />
      </div>
    );
  }
}

export default App;
