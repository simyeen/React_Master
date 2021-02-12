import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      포스트 디테일 페이지야
      <PostViewerContainer />
    </>
  );
};

export default PostPage;
