import React from 'react';
import PropTypes from 'prop-types';

const PostDetail = ({ post }) => {
  console.log(post);
  // if (!post) return <div>Loading...</div>;
  return <div>Hello</div>;

  // const { url, title, excerpt } = post;

  // return (
  //   // <div className="video-detail col-md-8">
  //   //   {/* <div className="embed-responsive embed-responsive-16by9">
  //   //     <iframe className="embed-responsive-item" title={title} src={url} />
  //   //   </div> */}
  //   //   <div className="details">
  //   //     <div>{title}</div>
  //   //     <div>{excerpt}</div>
  //   //   </div>
  //   // </div>
  // );
};

PostDetail.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostDetail;
