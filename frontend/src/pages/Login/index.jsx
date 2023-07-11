import React, { useState } from "react";
import Container from "../../components/Container";
import Paragraph from "../../components/Paragraph";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Form from "../../components/Form";
import Span from "../../components/Span";

import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { theme } from "../../global/styles/theme";
import { login } from "../../services/api";
import { inputStyle } from "../../global/styles/input";
import { labelStyle } from "../../global/styles/label";

import steveJobs from "../../images/svg/steveJobs.svg";
import companyIcon from "../../images/svg/companyIcon.svg";

const Login = () => {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password)
            return console.error("All fields are required");

        const data = {
            email,
            password,
        };

        login(data);
    };

    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <>
            {isDesktop ? (
                <Container
                    width="100%"
                    height="100%"
                    display="flex"
                    justifyContent="flex-start"
                >
                    <img src={steveJobs} alt="Steve Jobs photo" />

                    <Container
                        width="100%"
                        margin="50px 100px"
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                    >
                        <Header
                            textAlign="left"
                            height="20%"
                            width="100%"
                            color={theme.colors.babyBlue}
                        >
                            <img
                                src={companyIcon}
                                className="logo"
                                alt="Company icon"
                            />
                        </Header>

                        <Paragraph
                            width="100%"
                            fontWeight="500"
                            fontSize="24px"
                            lineHeight="36px"
                            letter="3%"
                            textAlign="left"
                            color={theme.colors.babyBlue}
                            children={"Dados de acesso"}
                        />

                        <Form
                            height="90%"
                            width="80%"
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-evenly"
                            alignItems="center"
                            onSubmit={handleSubmit}
                        >
                            <Container
                                height="50%"
                                width="100%"
                                display="flex"
                                flexDirection="column"
                                gap="10px"
                            >
                                <Label
                                    style={labelStyle}
                                    htmlFor="email"
                                    children={"Email"}
                                />
                                <Input
                                    style={inputStyle}
                                    placeholder="Insira seu email"
                                    type="email"
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    value={email}
                                />

                                <Label
                                    style={labelStyle}
                                    htmlFor="password"
                                    children={"Senha"}
                                />
                                <Input
                                    style={inputStyle}
                                    placeholder="Insira sua senha"
                                    type="password"
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                    value={password}
                                />
                            </Container>

                            <Span
                                width="100%"
                                display="flex"
                                flexDirection="row"
                                justifyContent="space-between"
                                alignItems="center"
                                marginLeft="10px"
                                fontWeight="500"
                                lineHeight="20px"
                                paddingRight="10px"
                            >
                                <Button
                                    width="50%"
                                    minWidth="100px"
                                    borderRadius="60px"
                                    fontWeight="600"
                                    fontSize="18px"
                                    backgroundColor={theme.colors.babyBlue}
                                    type="submit"
                                    children="Login"
                                />

                                <Link to="/recover">Esqueceu a senha?</Link>
                            </Span>
                        </Form>
                    </Container>
                </Container>
            ) : (
                <Container width="100%" height="100%" padding="20px">
                    <Header
                        marginTop="50px"
                        textAlign="left"
                        height="20%"
                        width="100%"
                        color={theme.colors.babyBlue}
                    >
                        <img
                            src={companyIcon}
                            className="logo"
                            alt="Company icon"
                        />
                    </Header>

                    <Form
                        height="60%"
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
                            children={"Dados de acesso"}
                        />

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
                            placeholder="Insira seu email"
                            type="email"
                            width="100%"
                            height="15%"
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
                            children={"Senha"}
                        />
                        <Input
                            placeholder="Insira sua senha"
                            type="password"
                            width="100%"
                            height="15%"
                            borderRadius="10px"
                            paddingLeft="15px"
                            paddingRight="15px"
                            color={theme.colors.black}
                            backgroundColor={theme.colors.white}
                            border={`1px solid ${theme.colors.lightGray}`}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            value={password}
                        />

                        <Span
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            paddingBottom="10px"
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
            )}
        </>
    );
};

export default Login;
