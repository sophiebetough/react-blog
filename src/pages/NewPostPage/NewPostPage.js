import React, { useState } from "react";
import { useHistory } from "react-router";
import { addNewPost } from "../../WebAPI";
import {
  NewPostForm,
  NewPostTopic,
  NewPostTitleInput,
  NewPostTextArea,
  NewPostBtnGroup,
  NewPostSubmit,
  ErrorMessage,
  ErrorMessageCard,
} from "../../components/NewPost";

export default function PostPage() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [errorMessage, setErrorMessage] = useState(null);
  const history = useHistory();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleInputFocus = () => {
    setErrorMessage(null);
  };

  const handleTexareaFocus = () => {
    setErrorMessage(null);
  };

  const handleNewPostSubmit = (e) => {
    e.preventDefault();
    addNewPost(title, body).then((data) => {
      if (data.ok === 0) {
        return setErrorMessage(data.message);
      }
      history.push("/");
    });
  };

  return (
    <NewPostForm onSubmit={handleNewPostSubmit}>
      {errorMessage ? (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      ) : (
        <ErrorMessageCard>Error Block</ErrorMessageCard>
      )}
      <NewPostTopic>文章主題</NewPostTopic>
      <NewPostTitleInput
        value={title}
        onChange={handleTitleChange}
        onFocus={handleInputFocus}
      />
      <NewPostTopic>文章內容</NewPostTopic>
      <NewPostTextArea
        value={body}
        onChange={handleBodyChange}
        onFocus={handleTexareaFocus}
      />
      <NewPostBtnGroup>
        <NewPostSubmit>Submit</NewPostSubmit>
      </NewPostBtnGroup>
    </NewPostForm>
  );
}
