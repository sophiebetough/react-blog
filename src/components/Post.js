import styled from "styled-components";
import { MEDIA_QUERY_MD } from "../constants/breakpoints";

export const PostContainer = styled.div`
  border-radius: 5px;
  padding: 25px 25px;
  margin-bottom: 20px;
  background: white;
`;

export const PostDate = styled.h5`
  font-size: 16px;
  color: #bdbdbd;
  margin: 5px 0;
`;

export const PostInfoTitle = styled.h2`
  margin: 20px 0;
  padding: 10px 0;
  color: #3b3b3b;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 0.5px;
  text-decoration: none;
  white-space: normal;
  overflow-wrap: break-word;
  overflow: hidden;
  border-bottom: 1px solid #d9d9d9;

  ${MEDIA_QUERY_MD} {
    font-size: 30px;
  }
`;

export const PostInfoAuthor = styled.div`
  margin: 10px 0;
  padding: 2px 5px;
  color: #3b3b3b;
  font-size: 16px;
  text-decoration: none;
`;

export const PostInfoBody = styled.p`
  margin: 24px 0;
  color: #3b3b3b;
  font-size: 20px;
  letter-spacing: 0.3px;
  line-height: 1.3;
  word-wrap: break-word;
`;
