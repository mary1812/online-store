import React from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/constants";

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  console.log(location)
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control placeholder="Введите email" className="mt-4" />
          <Form.Control placeholder="Введите пароль" className="mt-3" />
            {isLogin? <div className="mt-3">
              Нет аккаунта?{" "}
              <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйтесь!</NavLink>
            </div>: <div className="mt-3">
              Есть аккаунт?{" "}
              <NavLink to={LOGIN_ROUTE}> Войдите!</NavLink>
            </div>}
            <Button className="mt-3 align-self-end" variant={"outline-success"}>
              {isLogin? 'Войти' : 'Регистрация'   }
            </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
