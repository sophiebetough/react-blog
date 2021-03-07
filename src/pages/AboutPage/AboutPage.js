import {
  AboutMeContainer,
  AboutMeTitle,
  AboutMeImage,
  AboutMeImageWrapper,
  AboutMeContent,
} from "../../components/About";

export default function AboutPage() {
  return (
    <AboutMeContainer>
      <AboutMeImageWrapper>
        <AboutMeImage />
      </AboutMeImageWrapper>
      <AboutMeContent>
        <AboutMeTitle>關於機智工程師生活</AboutMeTitle>
        六個月全職投入網頁前端學習的準開發者。
        <br />
        擁有跨出舒適圈的勇敢基因，以及嘗試新事物的好奇與熱忱。
        <br />
        相信人生及程式開發的過程中，
        <br />
        大部分的問題都能透過「拓展看待事物的範圍跟視野」來解決。
      </AboutMeContent>
    </AboutMeContainer>
  );
}
