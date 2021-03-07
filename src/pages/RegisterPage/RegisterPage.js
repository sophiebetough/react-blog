import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { register, getUserInfo } from "../../WebAPI";
import { setAuthToken } from "../../utils";
import { AuthContext } from "../../contexts";
import {
  RegisterPageForm,
  RegisterTitle,
  ErrorMessage,
  ErrorMessageCard,
  RegisterWrapper,
  RegisterInputMessage,
  RegisterInputBlock,
  BtnLogin,
} from "../../components/Register";

export default function RegisterPage() {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    register({ nickname, username, password }).then((data) => {
      if (data.ok === 0) {
        return setErrorMessage(data.message);
      }
      const token = data.token;
      setAuthToken(token);
      // token 存進 localstorage 裡

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

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <RegisterPageForm onSubmit={handleSubmit}>
      <RegisterTitle>Register</RegisterTitle>
      {errorMessage ? (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      ) : (
        <ErrorMessageCard>Error block</ErrorMessageCard>
      )}
      <RegisterInputMessage>Username</RegisterInputMessage>
      <RegisterInputBlock
        name="account"
        type="text"
        value={username}
        onChange={handleUsernameChange}
      />
      <RegisterWrapper>
        <RegisterInputMessage>Nickname</RegisterInputMessage>
        <RegisterInputBlock
          name="nickname"
          type="text"
          value={nickname}
          onChange={handleNicknameChange}
        />
        <RegisterInputMessage>Password</RegisterInputMessage>
        <RegisterInputBlock
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <BtnLogin>Submit</BtnLogin>
      </RegisterWrapper>
    </RegisterPageForm>
  );
}
