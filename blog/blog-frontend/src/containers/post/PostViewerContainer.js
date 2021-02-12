import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../components/post/PostViewer';

const PostViewerContainer = ({ match }) => {
  //처음 마운트될 때 포스트 읽기 API 요청.
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error, loading, testPost } = useSelector(
    ({ post, loading, write }) => ({
      post: post.post,
      error: post.error,

      testPost: write.post,
      loading: loading['post/READ_POST'],
    }),
  );

  console.log('PostViewerContainer', post, testPost);

  useEffect(() => {
    dispatch(readPost(postId));

    //언마운트 될 때 리덕스에서 포스트 데이터 없애기
    // return () => {
    //   dispatch(unloadPost());
    // };
  }, [dispatch, postId]);

  return <PostViewer post={testPost} error={error} loading={loading} />;
};

export default withRouter(PostViewerContainer);
