import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { login, getUserInfo } from "../../WebAPI";
import { setAuthToken } from "../../utils";
import { AuthContext } from "../../contexts";
import {
  LoginPageForm,
  LoginTitle,
  ErrorMessage,
  ErrorMessageCard,
  LoginWrapper,
  LoginInputMessage,
  LoginInputBlock,
  BtnLogin,
} from "../../components/Login";

export default function LoginPage() {
  const { setUser } = useContext(AuthContext);
  // 若 value 為 undefined，等於沒傳 value
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(username, password).then((data) => {
      if (data.ok === 0) {
        return setErrorMessage(data.message);
      }
      // token 存進 localstorage 裡
      const token = data.token;
      setAuthToken(token);

      // 要再去串接 API/me，確認身份
      getUserInfo().then((response) => {
        if (response.ok !== 1) {
          // 錯誤的話，要把 token 清空
          setAuthToken(null);
          return setErrorMessage(response.toString());
        }
        setUser(response.data);
        history.push("/");
      });
    });
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleInputFocus = () => {
    setErrorMessage(null);
  };

  return (
    <LoginPageForm onSubmit={handleSubmit}>
      <LoginTitle>Sign in</LoginTitle>
      {errorMessage ? (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      ) : (
        <ErrorMessageCard>Error block</ErrorMessageCard>
      )}
      <LoginWrapper>
        <LoginInputMessage>Username</LoginInputMessage>
        <LoginInputBlock
          name="account"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          onFocus={handleInputFocus}
        />
        <LoginInputMessage>Password</LoginInputMessage>
        <LoginInputBlock
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onFocus={handleInputFocus}
        />
        <BtnLogin>Submit</BtnLogin>
      </LoginWrapper>
    </LoginPageForm>
  );
}
