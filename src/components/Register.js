import styled from "styled-components";
import { MEDIA_QUERY_MD } from "../constants/breakpoints";

export const RegisterPageForm = styled.form`
  max-width: 350px;
  margin: 130px auto;
  padding: 20px 50px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: #f7f5f5;
  font-size: 18px;

  ${MEDIA_QUERY_MD} {
    margin-top: 180px;
    margin-bottom: 100px;
  }
`;

export const RegisterTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: #3b3b3b;
  margin: 0;
  text-align: center;
`;

export const ErrorMessage = styled.div`
  margin-top: 18px;
  font-size: 18px;
  color: #f5002f;
  text-align: center;
`;

export const ErrorMessageCard = styled.div`
  margin-top: 18px;
  font-size: 18px;
  color: white;
  text-align: center;
  visibility: hidden;
`;

export const RegisterWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`;

export const RegisterInputMessage = styled.h6`
  margin: 10px 0;
  font-size: 14px;
`;

export const RegisterInputBlock = styled.input`
  margin-bottom: 20px;
  border: none;
  padding: 8px;
  width: 95%;

  &:focus {
    outline: none;
  }
`;

export const BtnLogin = styled.button`
  cursor: pointer;
  font-size: 18px;
  border: 1px solid #182f53;
  border-radius: 5px;
  color: #f7f5f5;
  background: #182f53;
  padding: 8px 20px;
  text-decoration: none;
  margin: 0 auto;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: translate(0, 0.2rem);
  }
`;
