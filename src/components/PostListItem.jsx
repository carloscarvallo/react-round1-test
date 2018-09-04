import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostListItem = ({ post, PostSelect }) => {
  // const { id, categories, date, excerpt, thumbnail, title } = post;
  const finalDate = new Date(post.date).toDateString();
  // const shortExcerpt = excerpt.substring(0,20);
  // const shortTitle = title.substring(0, 50);

  // const category = categories[0] || { name: "" };
  // const categoryName = category.name;

  return (
    <div onClick={() => PostSelect(post)} className="col-md-6">
      <div className="card flex-md-row mb-4 shadow-sm h-md-250">
        <div className="card-body d-flex flex-column align-items-start">
          <strong className="d-inline-block mb-2 text-primary">{post.slug}</strong>
          <h4 className="mb-0">
            <Link className="text-dark" to={`/${post.title.rendered}`}>{post.title.rendered}</Link>
          </h4>
          <div className="mb-1 text-muted">{}</div>
          {/* <Link to={`/${}`}>Continue reading</Link> */}
        </div>
        {/* <img className="card-img-right flex-auto d-none d-lg-block" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" style={{ backgroundImage: `url(${})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} alt="Card image cap" /> */}
      </div>
    </div>
  );
};

PostListItem.propTypes = {
  post: PropTypes.object,
  PostSelect: PropTypes.func.isRequired,
};

export default PostListItem;