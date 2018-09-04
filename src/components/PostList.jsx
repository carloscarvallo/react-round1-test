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
  posts: PropTypes.array,
  onPostSelect: PropTypes.func.isRequired,
};

export default PostList;
