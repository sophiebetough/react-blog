import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../Header";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import RegisterPage from "../../pages/RegisterPage";
import AboutPage from "../../pages/AboutPage";
import PostPage from "../../pages/PostPage";
import NewPostPage from "../../pages/NewPostPage";
import PostListPage from "../../pages/PostListPage";
import { getUserInfo } from "../../WebAPI";
import { AuthContext } from "../../contexts";
import { getAuthToken } from "../../utils";

function App() {
  // 確認是不是有這位 user，判斷有沒有登入，再由父層傳進子層
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (getAuthToken()) {
      getUserInfo().then((response) => {
        if (response.ok) {
          setUser(response.data);
        }
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/post-list/">
              <PostListPage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/article/:id">
              <PostPage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/post">
              <NewPostPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
