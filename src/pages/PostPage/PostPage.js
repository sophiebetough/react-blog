import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { getPostInfo } from "../../WebAPI";
import { timeConverter } from "../../components/Home";
import { MEDIA_QUERY_MD } from "../../constants/breakpoints";
import {
  PostContainer,
  PostDate,
  PostInfoTitle,
  PostInfoAuthor,
  PostInfoBody,
} from "../../components/Post";

const HomePageRoot = styled.div``;

const HomeWrapper = styled.div`
  margin: 150px auto;
  width: 60%;

  ${MEDIA_QUERY_MD} {
    margin-top: 180px;
    width: 90%;
  }
`;

export default function PostPage() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getPostInfo(id).then((postInfo) => setPost(postInfo[0]));
  }, [id]);

  return (
    <HomePageRoot>
      <HomeWrapper>
        <PostContainer>
          <PostDate>{post && timeConverter(post.createdAt)}</PostDate>
          <PostInfoTitle>{post && post.title}</PostInfoTitle>
          <PostInfoAuthor>作者：{post && post.user.username}</PostInfoAuthor>
          <PostInfoBody>{post && post.body}</PostInfoBody>
        </PostContainer>
      </HomeWrapper>
    </HomePageRoot>
  );
}
