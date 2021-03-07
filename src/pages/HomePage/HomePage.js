import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Post } from "../../components/Home";
import { getPosts } from "../../WebAPI";
import { MEDIA_QUERY_MD } from "../../constants/breakpoints";

const HomePageRoot = styled.div``;

const HomeWrapper = styled.div`
  margin: 150px auto;
  width: 50%;

  ${MEDIA_QUERY_MD} {
    margin-top: 180px;
    width: 90%;
  }
`;

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);

  return (
    <HomePageRoot>
      <HomeWrapper>
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </HomeWrapper>
    </HomePageRoot>
  );
}
