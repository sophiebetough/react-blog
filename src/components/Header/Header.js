import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../contexts";
import { setAuthToken } from "../../utils";
import { MEDIA_QUERY_MD } from "../../constants/breakpoints";
import { Link, useLocation, useHistory } from "react-router-dom";

const Navbar = styled.nav`
  height: 60px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 2px solid #d9d9d9;
  background: white;

  ${MEDIA_QUERY_MD} {
    height: 120px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BlogName = styled(Link)`
  margin: 0 24px;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0.6px;
  color: #3b3b3b;
  text-decoration: none;

  ${MEDIA_QUERY_MD} {
    font-size: 22px;
    margin: 0 4px;
  }
`;

const NavbarItem = styled(Link)`
  cursor: pointer;
  font-size: 18px;
  color: #bdbdbd;
  padding: 8px;
  text-decoration: none;

  &:hover {
    color: #3b3b3b;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 14px;
    padding: 8px 4px;
  }

  ${(props) => props.$active && "color: #3b3b3b"}
`;

const BtnGroup = styled.div`
  padding: 0 8px;

  ${MEDIA_QUERY_MD} {
    margin-top: 28px;
  }
`;

const BtnLink = styled(Link)`
  cursor: pointer;
  font-size: 18px;
  border: 1px solid #000000;
  border-radius: 5px;
  color: #333333;
  padding: 8px 20px;
  margin-right: 8px;
  text-decoration: none;

  &:hover {
    color: #ffa286;
    background: #333745;
  }

  ${MEDIA_QUERY_MD} {
    font-size: 16px;
  }
`;

const BtnLinkForUser = styled(BtnLink)`
  cursor: pointer;
  font-size: 18px;
  border: 1px solid #000000;
  border-radius: 5px;
  color: #ffffff;
  padding: 8px 20px;
  margin-right: 8px;
  text-decoration: none;
  background: #333745;
`;

export default function Header() {
  const location = useLocation();
  const history = useHistory();
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setAuthToken("");
    setUser(null);
    if (location.pathname !== "/") {
      history.push("/");
    }
  };

  return (
    <Navbar>
      <NavbarWrapper>
        <BlogName to="/">機智工程師生活</BlogName>
        <NavbarItem to="/" $active={location.pathname === "/"}>
          Home
        </NavbarItem>
        <NavbarItem
          to="/post-list/"
          $active={location.pathname === "/post-list/"}
        >
          Archive
        </NavbarItem>
        <NavbarItem to="/about" $active={location.pathname === "/about"}>
          About
        </NavbarItem>
      </NavbarWrapper>
      <BtnGroup>
        {!user && (
          <BtnLink to="/login" $active={location.pathname === "/login"}>
            Log in
          </BtnLink>
        )}
        {!user && (
          <BtnLink to="/register" $active={location.pathname === "/register"}>
            Register
          </BtnLink>
        )}
        {user && (
          <BtnLinkForUser to="/post" $active={location.pathname === "/post"}>
            New post
          </BtnLinkForUser>
        )}
        {user && (
          <BtnLinkForUser onClick={handleLogout}>Sign out</BtnLinkForUser>
        )}
      </BtnGroup>
    </Navbar>
  );
}
