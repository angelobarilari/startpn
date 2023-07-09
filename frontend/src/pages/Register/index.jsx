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

                        <Form
                            height="90%"
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-between"
                            alignItems="center"
                            onSubmit={handleSubmit}
                        >
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
                                        height="fit-content"
                                        fontSize="14px"
                                        lineHeight="18.21px"
                                        letter="0.2px"
                                        textAlign="left"
                                        htmlFor="name"
                                        color={theme.colors.black}
                                        children={"Nome"}
                                    />
                                    <Input
                                        placeholder="Insira seu nome"
                                        type="text"
                                        width="100%"
                                        height="30%"
                                        borderRadius="10px"
                                        paddingLeft="15px"
                                        color={theme.colors.black}
                                        backgroundColor={theme.colors.white}
                                        border={`1px solid ${theme.colors.lightGray}`}
                                        onChange={(event) =>
                                            setName(event.target.value)
                                        }
                                        value={name}
                                    />

                                    <Label
                                        height="fit-content"
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
                                        height="30%"
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
                                </Container>

                                <Container
                                    height="100%"
                                    className="column2"
                                    display="flex"
                                    flexDirection="column"
                                    gap="10px"
                                >
                                    <Label
                                        height="fit-content"
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
                                        height="30%"
                                        borderRadius="10px"
                                        paddingLeft="15px"
                                        color={theme.colors.black}
                                        backgroundColor={theme.colors.white}
                                        border={`1px solid ${theme.colors.lightGray}`}
                                        onChange={(event) =>
                                            setEmail(event.target.value)
                                        }
                                        value={email}
                                    />

                                    <Label
                                        height="fit-content"
                                        fontSize="14px"
                                        lineHeight="18.21px"
                                        letter="0.2px"
                                        textAlign="left"
                                        htmlFor="confirmPassword"
                                        color={theme.colors.black}
                                        children={"Confirme sua senha"}
                                    />
                                    <Input
                                        placeholder="Confirme sua senha"
                                        type="password"
                                        width="100%"
                                        height="30%"
                                        borderRadius="10px"
                                        paddingLeft="15px"
                                        color={theme.colors.black}
                                        backgroundColor={theme.colors.white}
                                        border={`1px solid ${theme.colors.lightGray}`}
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
                <Container width="100%" height="100%" padding="20px">
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
                        height="90%"
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
                            fontSize="14px"
                            lineHeight="18.21px"
                            letter="0.2px"
                            textAlign="left"
                            htmlFor="name"
                            color={theme.colors.black}
                            children={"Nome"}
                        />
                        <Input
                            placeholder="Insira seu nome"
                            type="text"
                            width="100%"
                            height="10%"
                            borderRadius="10px"
                            paddingLeft="15px"
                            color={theme.colors.black}
                            backgroundColor={theme.colors.white}
                            border={`1px solid ${theme.colors.lightGray}`}
                            onChange={(event) => setName(event.target.value)}
                            value={name}
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
                            children={"Senha"}
                        />
                        <Input
                            placeholder="Insira sua senha"
                            type="password"
                            width="100%"
                            height="10%"
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

                        <Label
                            fontSize="14px"
                            lineHeight="18.21px"
                            letter="0.2px"
                            textAlign="left"
                            htmlFor="confirmPassword"
                            color={theme.colors.black}
                            children={"Confirme sua senha"}
                        />
                        <Input
                            placeholder="Confirme sua senha"
                            type="password"
                            width="100%"
                            height="10%"
                            borderRadius="10px"
                            paddingLeft="15px"
                            color={theme.colors.black}
                            backgroundColor={theme.colors.white}
                            border={`1px solid ${theme.colors.lightGray}`}
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
