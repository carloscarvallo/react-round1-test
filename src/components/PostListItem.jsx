import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostListItem = ({ post, onPostSelect }) => {
  const finalDate = new Date(post.date).toDateString();

  return (
    <div role="presentation" onClick={() => onPostSelect(post)} className="col-md-6">
      <div className="card flex-md-row mb-4 shadow-sm h-md-250">
        <div className="card-body d-flex flex-column align-items-start">
          <strong className="d-inline-block mb-2 text-primary">{post.slug}</strong>
          <h4 className="mb-0">
            <Link className="text-dark" to={`/${post.id}`}>{post.title.rendered}</Link>
          </h4>
          <div className="mb-1 text-muted">{finalDate}</div>
          <Link to={`/${post.id}`}>Continue reading</Link>
        </div>
      </div>
    </div>
  );
};

PostListItem.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string,
    title: PropTypes.object,
    content: PropTypes.object,
  }),
  onPostSelect: PropTypes.func.isRequired,
};

PostListItem.defaultProps = {
  post: {
    date: 'Loading...',
    title: { rendered: 'Loading...' },
    content: { rendered: 'Loading...' },
  },
};

export default PostListItem;
