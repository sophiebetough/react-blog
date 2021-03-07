import styled from "styled-components";
import { Link } from "react-router-dom";
import { MEDIA_QUERY_MD } from "../constants/breakpoints";

export const PostListContainer = styled.div`
  box-sizing: border-box;
  width: 50%;
  margin: 130px auto;
  padding: 20px 50px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: #f7f5f5;

  ${MEDIA_QUERY_MD} {
    margin-top: 180px;
    margin-bottom: 100px;
    width: 90%;
  }
`;

export const PostListTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  line-height: 3.5rem;
  color: #3b3b3b;
  border-bottom: 5px solid rgba(59, 59, 59, 0.2);
`;

export const PostContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 5px;
  border-bottom: 1px solid #d9d9d9;

  ${MEDIA_QUERY_MD} {
    padding: 20px 5px;
    margin-right: 10px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PostTitle = styled(Link)`
  width: 65%;
  color: #3b3b3b;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-decoration: none;
  white-space: normal;
  overflow-wrap: break-word;
  overflow: hidden;

  ${MEDIA_QUERY_MD} {
    font-size: 20px;
    width: 100%;
  }
`;

export const PostMessage = styled.div`
  display: flex;
  align-items: center;

  ${MEDIA_QUERY_MD} {
    margin-top: 8px;
  }
`;

export const PostDeleteButton = styled.button`
  cursor: pointer;
  font-size: 14px;
  border: 1px solid transparent;
  border-radius: 5px;
  color: #f7f5f5;
  background: #db4c3f;
  padding: 6px 8px;
  margin-right: 8px;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.01);
  }
`;

export const PostDate = styled.h5`
  font-size: 16px;
  color: #bdbdbd;
  margin: 5px 0;
`;
