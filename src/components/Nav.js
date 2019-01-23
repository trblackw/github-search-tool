import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <NavContainer>
      <NavUl>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/battle">Battle</Link>
        </li>
        <li>
          <Link to="/popular">Popular</Link>
        </li>
      </NavUl>
    </NavContainer>
  );
};

export default Nav;

const NavContainer = styled("div")`
  color: whitesmoke;
  margin: 0;
  width: 100%;
  position: sticky;
  padding: 1.5em;
  background-color: #282c34;
  border-bottom: 1.5px solid black;
`;

const NavUl = styled("ul")`
  display: flex;
  justify-content: flex-end;
  padding: 1em;
  li {
    margin-right: 1em;
  }
`;
