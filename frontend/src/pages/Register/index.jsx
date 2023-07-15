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
import { createUser } from "../../services/api";
import { inputStyle } from "../../global/styles/input";
import { labelStyle } from "../../global/styles/label";

import { BsCheckCircleFill } from "react-icons/bs";
import { BiCircle } from "react-icons/bi";

import steveJobs from "../../images/svg/steveJobs.svg";
import companyIcon from "../../images/svg/companyIcon.svg";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmTerms, setConfirmTerms] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !email || !password || !confirmPassword)
            return console.error("All fields are required");

        if (password !== confirmPassword)
            return console.error("Password and confirm password do not match");

        if (!confirmTerms)
            return console.error(
                "You need to confirm terms of use and privacity"
            );

        const data = {
            name,
            email,
            password,
        };

        createUser(data);
    };

    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <>
            {isDesktop ? (
                <Container
                    width="100%"
                    height="100vh"
                    display="flex"
                    justifyContent="flex-start"
                >
                    <img src={steveJobs} alt="Steve Jobs photo" />

                    <Container
                        className="test"
                        margin="50px 100px"
                        display="flex"
                        flexDirection="column"
                        justifyContent="flex-start"
                        alignItems="flex-start"
                        flexShrink="0"
                    >
                        <Header
                            textAlign="left"
                            height="10%"
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
                            height="80%"
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-between"
                            alignItems="center"
                            flexShrink="0"
                            onSubmit={handleSubmit}
                        >
                            <Paragraph
                                width="100%"
                                fontWeight="500"
                                fontSize="24px"
                                lineHeight="36px"
                                letter="3%"
                                textAlign="left"
                                color={theme.colors.babyBlue}
                                children="Cadastro"
                            />
                            <Container
                                height="50%"
                                width="100%"
                                display="grid"
                                gridTemplateColumns="repeat(2, 1fr)"
                                gap="10px"
                            >
                                <Container
                                    height="100%"
                                    className="column1"
                                    display="flex"
                                    flexDirection="column"
                                    gap="10px"
                                >
                                    <Label
                                        style={labelStyle}
                                        htmlFor="name"
                                        children={"Nome"}
                                    />
                                    <Input
                                        style={inputStyle}
                                        placeholder="Insira seu nome"
                                        type="text"
                                        onChange={(event) =>
                                            setName(event.target.value)
                                        }
                                        value={name}
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
                                        border={`1px solid ${theme.colors.lightGray}`}
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                        value={password}
                                    />
                                </Container>

                                <Container
                                    height="100%"
                                    className="column2"
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
                                        border={`1px solid ${theme.colors.lightGray}`}
                                        onChange={(event) =>
                                            setEmail(event.target.value)
                                        }
                                        value={email}
                                    />

                                    <Label
                                        style={labelStyle}
                                        htmlFor="confirmPassword"
                                        children={"Confirme sua senha"}
                                    />
                                    <Input
                                        style={inputStyle}
                                        placeholder="Confirme sua senha"
                                        type="password"
                                        onChange={(event) =>
                                            setConfirmPassword(
                                                event.target.value
                                            )
                                        }
                                        value={confirmPassword}
                                    />
                                </Container>
                            </Container>

                            <Container
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                justifyContent="flex-start"
                                width="100%"
                                height="20%"
                                marginTop="10px"
                            >
                                {/* <Input
                                    type="checkbox"
                                    width="20%"
                                    height="50%"
                                    borderRadius="10px"
                                    border={`5px solid ${theme.colors.babyBlue}`}
                                    onChange={(event) =>
                                        setConfirmTerms(event.target.checked)
                                    }
                                    value={confirmTerms}
                                /> */}

                                {confirmTerms ? (
                                    <BsCheckCircleFill
                                        size={50}
                                        style={{
                                            color: theme.colors.babyBlue,
                                            backgroundColor: theme.colors.white,
                                            borderRadius: "100%",
                                        }}
                                        onClick={() => setConfirmTerms(false)}
                                    />
                                ) : (
                                    <BiCircle
                                        size={50}
                                        style={{
                                            color: theme.colors.babyBlue,
                                            borderRadius: "100%",
                                        }}
                                        onClick={() => setConfirmTerms(true)}
                                    />
                                )}

                                <Span
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="center"
                                    height="100%"
                                    marginLeft="10px"
                                    fontSize="13px"
                                    fontWeight="500"
                                    lineHeight="20px"
                                    textAlign="left"
                                >
                                    <Paragraph color={theme.colors.black}>
                                        Ao clicar neste botão, eu concordo com
                                        os termos de uso e privacidade da nossa
                                        empresa.
                                    </Paragraph>
                                    <Link to="/">
                                        Termos de uso e privacidade
                                    </Link>
                                </Span>
                            </Container>

                            <Button
                                width="50%"
                                borderRadius="60px"
                                fontWeight="600"
                                fontSize="18px"
                                backgroundColor={theme.colors.babyBlue}
                                type="submit"
                                children="Cadastrar"
                            />
                            <Span
                                width="100%"
                                display="flex"
                                flexDirection="row"
                                justifyContent="space-evenly"
                                alignItems="center"
                                marginLeft="10px"
                                fontSize="15px"
                                fontWeight="500"
                                lineHeight="22.5px"
                                textAlign="center"
                                color={theme.colors.babyBlue}
                            >
                                <Paragraph
                                    width="35%"
                                    display="flex"
                                    justifyContent="space-between"
                                    color={theme.colors.darkGray}
                                >
                                    Já tem uma conta?
                                    <Link to="/login">Login</Link>
                                </Paragraph>
                            </Span>
                        </Form>
                    </Container>
                </Container>
            ) : (
                <Container minWidth="100%" height="100%" padding="20px">
                    <Header
                        textAlign="left"
                        height="10%"
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
                        minHeight="90%"
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
                            textAlign="left"
                            color={theme.colors.babyBlue}
                            children="Cadastro"
                        />

                        <Label
                            style={labelStyle}
                            htmlFor="name"
                            children={"Nome"}
                        />
                        <Input
                            style={inputStyle}
                            placeholder="Insira seu nome"
                            type="text"
                            onChange={(event) => setName(event.target.value)}
                            value={name}
                        />

                        <Label
                            style={labelStyle}
                            htmlFor="email"
                            children={"Email"}
                        />
                        <Input
                            style={inputStyle}
                            placeholder="Insira seu email"
                            type="email"
                            onChange={(event) => setEmail(event.target.value)}
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
                            border={`1px solid ${theme.colors.lightGray}`}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            value={password}
                        />

                        <Label
                            style={labelStyle}
                            htmlFor="confirmPassword"
                            children={"Confirme sua senha"}
                        />
                        <Input
                            style={inputStyle}
                            placeholder="Confirme sua senha"
                            type="password"
                            onChange={(event) =>
                                setConfirmPassword(event.target.value)
                            }
                            value={confirmPassword}
                        />

                        <Container
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="flex-start"
                            width="100%"
                            height="20%"
                            marginTop="10px"
                        >
                            <Input
                                type="checkbox"
                                width="20%"
                                height="50%"
                                borderRadius="10px"
                                border={`5px solid ${theme.colors.babyBlue}`}
                                onChange={(event) =>
                                    setConfirmTerms(event.target.checked)
                                }
                                value={confirmTerms}
                            />

                            <Span
                                display="flex"
                                flexDirection="column"
                                justifyContent="center"
                                height="100%"
                                marginLeft="10px"
                                fontSize="13px"
                                fontWeight="500"
                                lineHeight="20px"
                                textAlign="left"
                            >
                                <Paragraph color={theme.colors.black}>
                                    Ao clicar neste botão, eu concordo com os
                                    termos de uso e privacidade da nossa
                                    empresa.
                                </Paragraph>
                                <Link to="/">Termos de uso e privacidade</Link>
                            </Span>
                        </Container>

                        <Button
                            width="100%"
                            borderRadius="60px"
                            fontWeight="600"
                            fontSize="18px"
                            backgroundColor={theme.colors.babyBlue}
                            type="submit"
                            children="Cadastro"
                        />
                    </Form>
                </Container>
            )}
        </>
    );
};

export default Register;
