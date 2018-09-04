import React from 'react';
import PropTypes from 'prop-types';

const PostDetail = ({ post }) => {
  if (!post) return <div>Loading...</div>;

  const { url, title, excerpt } = post;

  return (
    <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
      <div className="col-md-6 px-0">
        <h1 className="display-4 font-italic">{title}</h1>
        <p className="lead my-3">{excerpt}</p>
        <p className="lead mb-0"><a href="/" className="text-white font-weight-bold">Continue reading...</a></p>
      </div>
    </div>
  );
};

PostDetail.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostDetail;
