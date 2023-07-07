import React, { useState } from "react";
import Container from "../../components/Container";
import Paragraph from "../../components/Paragraph";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Form from "../../components/Form";
import Span from "../../components/Span";

import { theme } from "../../global/styles/theme";

import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    const handleSubmit = (event) => {
        console.log(confirmTerms);
        event.preventDefault();
    };

    return (
        <Container width="100%" height="100%" borderRadius={"5px"}>
            <Header
                marginTop="50px"
                textAlign="left"
                height="20%"
                width="100%"
                color={theme.colors.babyBlue}
            />

            <Form
                height="50%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                onSubmit={handleSubmit}
            >
                <Paragraph
                    fontWeight="500"
                    fontSize="24px"
                    lineHeight="36px"
                    letter="3%"
                    textAlign="center"
                    color={theme.colors.babyBlue}
                >
                    Dados de acesso
                </Paragraph>

                <Label
                    fontSize="14px"
                    lineHeight="18.21px"
                    letter="0.2px"
                    textAlign="left"
                    htmlFor="email"
                    color={theme.colors.black}
                    children={"Email"}
                />
                <Input
                    placeholder="Enter with your email"
                    type="email"
                    width="100%"
                    height="10%"
                    borderRadius="10px"
                    paddingLeft="15px"
                    color={theme.colors.black}
                    backgroundColor={theme.colors.white}
                    border={`1px solid ${theme.colors.lightGray}`}
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                />

                <Label
                    fontSize="14px"
                    lineHeight="18.21px"
                    letter="0.2px"
                    textAlign="left"
                    htmlFor="password"
                    color={theme.colors.black}
                    children={"Password"}
                />
                <Input
                    placeholder="Enter with password"
                    type="password"
                    width="100%"
                    height="10%"
                    borderRadius="10px"
                    paddingLeft="15px"
                    paddingRight="15px"
                    color={theme.colors.black}
                    backgroundColor={theme.colors.white}
                    border={`1px solid ${theme.colors.lightGray}`}
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                />

                <Span
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    marginLeft="10px"
                    fontSize="13px"
                    fontWeight="500"
                    lineHeight="20px"
                    textAlign="right"
                >
                    <Link to="/recover">Esqueceu a senha?</Link>
                </Span>
                <Button
                    width="100%"
                    borderRadius="60px"
                    fontWeight="600"
                    fontSize="18px"
                    backgroundColor={theme.colors.babyBlue}
                    type="submit"
                    children="Login"
                />
            </Form>
        </Container>
    );
};

export default Login;
