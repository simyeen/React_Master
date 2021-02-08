import React from 'react';
import Responsive from '../components/common/Responsive';
import Lotte from '../components/common/Lotte';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';
import AuthTemplate from '../components/auth/AuthTemplate';

const WritePage = () => {
  return (
    <AuthTemplate>
      <Responsive>
        <EditorContainer />
        <TagBoxContainer />
        <WriteActionButtonsContainer />
        <Lotte />
      </Responsive>
    </AuthTemplate>
  );
};

export default WritePage;
