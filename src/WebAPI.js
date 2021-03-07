import { getAuthToken } from "./utils";

const BASE_URL = "https://student-json-api.lidemy.me";

// 讀取所有文章
export const getPosts = () => {
  return fetch(`${BASE_URL}/posts?_sort=createdAt&_order=desc`).then((res) =>
    res.json()
  );
};

// 讀取單篇文章
export const getPostInfo = (id) => {
  return fetch(`${BASE_URL}/posts?id=${id}&_expand=user`).then((res) =>
    res.json()
  );
};

// 註冊
export const login = (username, password) => {
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());
};

// 登入
export const register = ({ nickname, username, password }) => {
  return fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      nickname,
      username,
      password,
    }),
  }).then((res) => res.json());
};

// 身份驗證
export const getUserInfo = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me`, {
    headers: {
      // token 來自 localStorage
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};

// 發布文章
export const addNewPost = (title, body) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
    }),
  }).then((res) => res.json());
};

// 讀取文章(分頁)
export const getLimitPosts = (page, limit) => {
  return fetch(
    `${BASE_URL}/posts?_page=${page}&_limit=${limit}&_sort=createdAt&_order=desc`
  ).then((res) => res.json());
};

// 刪除文章，身份驗證要注意
export const deletePost = (id) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/posts/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
