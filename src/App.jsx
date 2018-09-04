import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostFeatured from './components/PostFeatured';

const apiUrl = 'https://thewirecutter.com/wp-json/wp/v2/posts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      selectedPost: null,
    };
  }

  componentWillMount() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(posts => {
        console.log(posts);
        return this.setState({ posts, selectedPost: posts[0] });
      });
  }

  render() {
    const { posts, selectedPost } = this.state;
    return (
      <Router>
        <div className="container">
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <header className="blog-header py-3">
                  <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-12 text-center">
                      <a className="blog-header-logo text-dark" href="/">Blog</a>
                    </div>
                  </div>
                </header>
                <PostFeatured article={posts[0]} />
                <PostList
                  onPostSelect={selectedPost => this.setState({ selectedPost })}
                  posts={posts}
                />
              </React.Fragment>
            )}
          />
          <Route path="/:id" component={() => <PostDetail article={selectedPost} />} />
        </div>
      </Router>
    );
  }
}

export default App;
