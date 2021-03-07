import styled from "styled-components";
import { MEDIA_QUERY_MD } from "../constants/breakpoints";

export const NewPostForm = styled.form`
  width: 45%;
  margin: 130px auto;
  padding: 20px 50px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: #f7f5f5;

  ${MEDIA_QUERY_MD} {
    width: 70%;
    margin-top: 180px;
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 18px;
  font-size: 18px;
  color: #f5002f;
  text-align: center;
`;

export const ErrorMessageCard = styled.div`
  margin-top: 18px;
  font-size: 18px;
  color: white;
  text-align: center;
  visibility: hidden;
`;

export const NewPostTopic = styled.div`
  margin: 10px 0;
  font-size: 22px;
  font-weight: 300;
`;

export const NewPostTitleInput = styled.input`
  font-size: 20px;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 10px;
  width: 95%;
  letter-spacing: 1.5px;
`;

export const NewPostTextArea = styled.textarea`
  width: 95%;
  height: 200px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 18px;
  letter-spacing: 1.5px;
`;

export const NewPostBtnGroup = styled.div`
  text-align: center;
`;

export const NewPostSubmit = styled.button`
  cursor: pointer;
  font-size: 18px;
  border: 1px solid #182f53;
  border-radius: 5px;
  color: #f7f5f5;
  background: #182f53;
  padding: 8px 20px;
  text-decoration: none;
  margin: 10px auto;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: translate(0, 0.2rem);
  }
`;
