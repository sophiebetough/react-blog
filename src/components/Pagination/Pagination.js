import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { getLimitPosts } from "../../WebAPI";

const Root = styled.div``;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  margin-top: 20px;
`;

const PageButton = styled.button`
  cursor: pointer;
  border: 1px solid #555555;
  border-radius: 50%;
  padding: 8px 12px;
  font-size: 16px;
  outline: 0;
  margin-right: 8px;

  background: ${(props) =>
    props.className === "selected" ? "#333745" : "#F5F5F5"};

  color: ${(props) => (props.className === "selected" ? "#ffa286" : "#333333")};

  &:hover {
    background: #333745;
    color: #ffa286;
  }
`;

export default function Pagination({
  setPosts,
  limit,
  totalPages,
  currentPage,
  setCurrentPage,
}) {
  const handlePageClick = (page) => {
    getLimitPosts(page, limit).then((posts) => setPosts(posts));
    setCurrentPage(page);
  };
  return (
    <Root>
      <PaginationContainer>
        {totalPages.current &&
          totalPages.current.map((page) => (
            <PageButton
              key={page}
              onClick={() => handlePageClick(page)}
              className={currentPage === page ? "selected" : ""}
            >
              {page}
            </PageButton>
          ))}
      </PaginationContainer>
    </Root>
  );
}

Pagination.propTypes = {
  setPosts: PropTypes.func,
  limit: PropTypes.number,
  totalPages: PropTypes.object,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
};
