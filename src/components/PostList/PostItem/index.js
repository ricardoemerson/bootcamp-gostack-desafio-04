import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function PostItem({ post }) {
  const { author, comments } = post;

  return (
    <Container>
      <div className="post-header">
        <img src={ author.avatar } alt={ author.name } className="avatar" />

        <div className="user-details">
          <span className="user-name">{ author.name }</span>
          <span className="post-date">{ post.date }</span>
        </div>
      </div>

      <div className="post-content">
        { post.content }
      </div>

      { post.comments && <div className="separator"></div> }

      { post.comments.map(comment => (
        <div key={ comment.id } className="comment-container">
          <img src={ comment.author.avatar } alt={ comment.author.name } className="comment-avatar" />

          <p className="comment-content">{ comment.content }</p>
        </div>
      )) }
    </Container>
  );
}

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.shape({
      name: PropTypes.string,
      avatar:PropTypes.string,
    }),
    date: PropTypes.string,
    content: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.shape({
        name: PropTypes.string,
        avatar:PropTypes.string,
      }),
      date: PropTypes.string,
      content: PropTypes.string,
    })),
  }).isRequired,
}

export default PostItem;
