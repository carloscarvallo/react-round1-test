import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostFeatured = ({ post }) => {
  if (!post) return <h2>Loading...</h2>;
  return (
    <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
      <div className="col-md-6 px-0">
        <h1 className="display-4 font-italic">{post.title.rendered}</h1>
        <p className="lead my-3">{post.title.rendered}</p>
        <p className="lead mb-0">
          <Link className="text-white font-weight-bold" to={`/${post.id}`}>Continue reading...</Link>
        </p>
      </div>
    </div>
  );
};

PostFeatured.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string,
    title: PropTypes.object,
    content: PropTypes.object,
  }),
};

PostFeatured.defaultProps = {
  post: {
    date: 'Loading...',
    title: { rendered: 'Loading...' },
    content: { rendered: 'Loading...' },
  },
};

export default PostFeatured;
