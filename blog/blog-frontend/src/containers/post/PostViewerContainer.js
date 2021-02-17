import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostViewer2 from '../../components/post/PostViewer2';
import { readPost, unloadPost } from '../../modules/post';

const PostViewerContainer = ({ match }) => {
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
  }));

  useEffect(() => {
    //처음 마운트될 때 포스트 읽기 API 요청.
    dispatch(readPost(postId));

    //언마운트 될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  return (
    <>
      <PostViewer2 post={post} error={error} loading={loading}></PostViewer2>
    </>
  );
};

export default withRouter(PostViewerContainer);
