import React, { useState, useEffect, useContext, useRef } from "react";
import PropTypes from "prop-types";
import { getLimitPosts, deletePost, getPosts } from "../../WebAPI";
import { timeConverter } from "../../components/Home";
import Pagination from "../../components/Pagination";
import { AuthContext } from "../../contexts";
import { getPages } from "../../utils";
import {
  PostListContainer,
  PostListTitle,
  PostContainer,
  PostTitle,
  PostMessage,
  PostDeleteButton,
  PostDate,
} from "../../components/PostList";

function PostList({ post, handleDeletePost }) {
  const { user } = useContext(AuthContext);

  return (
    <PostContainer>
      <PostTitle to={`/article/${post.id}`}>{post.title}</PostTitle>
      <PostMessage>
        {user && user.id === post.userId && (
          <PostDeleteButton
            onClick={() => {
              handleDeletePost(post.id);
            }}
          >
            刪除
          </PostDeleteButton>
        )}
        <PostDate>{post && timeConverter(post.createdAt)}</PostDate>
      </PostMessage>
    </PostContainer>
  );
}

PostList.propTypes = {
  post: PropTypes.object,
  handleDeletePost: PropTypes.func,
};

export default function PostListPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = useRef();
  const limit = 5;

  useEffect(() => {
    getPosts().then((posts) => {
      // 讀取留言總頁數
      totalPages.current = getPages(Math.ceil(posts.length / limit));
      // 讀取第一頁文章
      getLimitPosts(1, limit).then((posts) => setPosts(posts));
    });
  }, [setCurrentPage]);

  const handleDeletePost = (id) => {
    deletePost(id).then(() => {
      getLimitPosts(1, limit)
        .then((posts) => {
          setPosts(posts);
          setCurrentPage(1);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <PostListContainer>
      <PostListTitle>文章列表</PostListTitle>
      {posts.map((post) => (
        <PostList
          post={post}
          key={post.id}
          handleDeletePost={handleDeletePost}
        />
      ))}
      <Pagination
        totalPages={totalPages}
        limit={limit}
        setPosts={setPosts}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </PostListContainer>
  );
}
