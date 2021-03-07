import styled from "styled-components";
import MyImage from "../photos/avatar.jpg";
import { MEDIA_QUERY_MD } from "../constants/breakpoints";

export const AboutMeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30vh auto;
  padding: 15px;
  width: 50%;

  ${MEDIA_QUERY_MD} {
    margin: 20vh auto;
    width: 90%;
    flex-direction: column;
    align-items: center;
  }
`;

export const AboutMeTitle = styled.h1`
  color: #3b3b3b;
  margin: 0;
  font-weight: bold;

  ${MEDIA_QUERY_MD} {
    text-align: center;
    margin-bottom: 15px;
  }
`;

export const AboutMeContent = styled.p`
  color: #525252;
  font-size: 16px;
  overflow-wrap: break-word;

  ${MEDIA_QUERY_MD} {
    text-align: left;
  }
`;

export const AboutMeImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  margin: 28px;
`;

export const AboutMeImage = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background: url(${MyImage}) center / cover;
`;
