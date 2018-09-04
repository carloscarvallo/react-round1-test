import React from 'react';
import PropTypes from 'prop-types';

const PostDetail = ({ post }) => {
  const finalDate = new Date(post.date).toDateString();
  return (
    <main role="main" className="container">
      <div className="row">
        <div className="col-md-8 blog-main">
          <div className="blog-post">
            <h2 className="blog-post-title">{post.title.rendered}</h2>
            <p className="blog-post-meta">{finalDate}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
        </div>
      </div>
    </main>
  );
};

PostDetail.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string,
    title: PropTypes.object,
    content: PropTypes.object,
  }),
};

PostDetail.defaultProps = {
  post: {
    date: 'Loading...',
    title: { rendered: 'Loading...' },
    content: { rendered: 'Loading...' },
  },
};

export default PostDetail;
