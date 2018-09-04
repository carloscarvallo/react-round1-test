import React from 'react';
import PropTypes from 'prop-types';
import PostListItem from './PostListItem';

const PostList = ({ posts, onPostSelect }) => {
  const postItems = posts.map(post => (
    <PostListItem
      onPostSelect={onPostSelect}
      key={post.id}
      post={post}
    />
  ));

  return (
    <div className="row mb-2">
      {postItems}
    </div>
  );
};

PostList.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string,
    title: PropTypes.object,
    content: PropTypes.object,
  }),
  posts: PropTypes.arrayOf(PropTypes.post),
  onPostSelect: PropTypes.func.isRequired,
};

PostList.defaultProps = {
  post: {
    date: 'Loading...',
    title: { rendered: 'Loading...' },
    content: { rendered: 'Loading...' },
  },
  posts: {},
};

export default PostList;
