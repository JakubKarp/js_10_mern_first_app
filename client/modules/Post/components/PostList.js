import React, { PropTypes } from 'react';
import cuid from 'cuid';

// Import Components
import PostListItem from './PostListItem/PostListItem';

function PostList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <PostListItem
            post={post}
            addPost={() => props.handleAddPost(post.cuid)}
            onDelete={() => props.handleDeletePost(post.cuid)}
            voteUp={() => props.handleVoteUp(post.cuid, post.vote)}
            vote={post.vote} 
          />
        ))
      }
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
};

export default PostList;
