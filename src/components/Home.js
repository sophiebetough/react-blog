import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostContainer = styled.div`
  border: 0.5px solid #d9d9d9;
  border-radius: 5px;
  padding: 25px 25px;
  margin-bottom: 20px;
  background: white;
`;

const PostDate = styled.h5`
  font-size: 16px;
  color: #bdbdbd;
  margin: 5px 0;
`;

const PostTitle = styled(Link)`
  color: #3b3b3b;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-decoration: none;
  white-space: normal;
  overflow-wrap: break-word;
  overflow: hidden;
`;

const PostContent = styled.p`
  margin: 24px 0;
  color: #3b3b3b;
  font-size: 20px;
  letter-spacing: 0.3px;
  line-height: 1.3;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3; //行數
  -webkit-box-orient: vertical;
`;

const BtnReadMore = styled(Link)`
  font-size: 15px;
  color: #ffa286;
  text-decoration: none;

  &:hover {
    border-bottom: 2px solid #050402;
  }
`;

export function timeConverter(timestamp) {
  let date = new Date(timestamp);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
  );
}

export function Post({ post }) {
  const date = timeConverter(post.createdAt);
  return (
    <PostContainer>
      <PostDate>{date}</PostDate>
      <PostTitle to={`/article/${post.id}`}>{post.title}</PostTitle>
      <PostContent>{post.body}</PostContent>
      <BtnReadMore to={`/article/${post.id}`}>Read more</BtnReadMore>
    </PostContainer>
  );
}

Post.propsTypes = {
  post: PropTypes.object,
};
