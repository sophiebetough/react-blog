## React：Blog
運用 React 結合 React-router 技術，並串接 Lidemy API，而進行部落格的系統開發。使用者可註冊、登入會員，並可新增、刪除、瀏覽全部文章。

| 測試用身份 | 帳號 | 密碼 |
|----------|------|-----|
| 會員 | user01 | Lidemy |

- [Demo](https://sophiebetough.github.io/react-blog/)
- [Lidemy API](https://github.com/Lidemy/lidemy-student-json-api-server)


### 核心功能
- 登入、註冊功能，非會員可透過測試用身份登入。
- 透過 JWT 實作驗證功能，
- 檢視所有文章功能，可透過首頁來瀏覽全部文章。
- 顯示單篇文章內容功能，可進一步呈現更多關於文章資訊（標題、作者、單篇文章全部內容）。
- 發布文章功能，登入成為會員之後，可以發布新文章。
- 刪除功能，會員可在 archive 頁面，管理自己發布的文章。
- 分頁功能，透過發文時間順序，由新到舊排列，5 篇為一頁。


### 使用技術
- 以 React、React-router，配合 Lidemy API 資料，建置部落格（Blog）。
- 支援 RWD，並搭配 styled-components 進行排版。
- React-router-dom 設計網站路由。
- 使用 function component 搭配 hooks 管理組件狀態。
- 導入 Prettier、ESLint 統一程式碼格式及檢查語法。


### 專案結構
- /src
    - /components
    - /constants
    - /pages
        - LoginPage.js
        - RegisterPage.js
        - HomePage.js
        - PostListPage.js
        - PostPage.js
        - NewPostPage.js
        - About.js
    - /photos
    - index.js
    - utils.js
    - contexts.js
    - WebAPI.js
