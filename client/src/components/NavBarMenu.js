import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/constants";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Container } from "react-bootstrap";

const NavBarMenu = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <NavLink to={SHOP_ROUTE}>LYCHEE LINGERIE</NavLink>
      {user.isAuth ? (
        <Nav className="ms-auto">
          <Button>Админ панель</Button>
          <Button className="ms-2">Выйти</Button>
        </Nav>
      ) : (
        <Nav className="ms-auto">
          <Button onClick={()=> user.setIsAuth(true)}>Авторизация</Button>
        </Nav>
      )}
      </Container>
      
    </Navbar>
  );
});

export default NavBarMenu;
