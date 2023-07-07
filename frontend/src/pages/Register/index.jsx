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

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmTerms, setConfirmTerms] = useState(false);

    const handleSubmit = (event) => {
        console.log(confirmTerms);
        event.preventDefault();
    };

    return (
        <Container width="100%" height="100%" borderRadius={"5px"}>
            <Header
                textAlign="left"
                height="10%"
                width="100%"
                color={theme.colors.babyBlue}
            />

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
                >
                    Cadastro
                </Paragraph>

                <Label
                    fontSize="14px"
                    lineHeight="18.21px"
                    letter="0.2px"
                    textAlign="left"
                    htmlFor="name"
                    color={theme.colors.black}
                    children={"Name"}
                />
                <Input
                    placeholder="Enter with your name"
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
                    placeholder="Confirm your password"
                    type="password"
                    width="100%"
                    height="10%"
                    borderRadius="10px"
                    paddingLeft="15px"
                    color={theme.colors.black}
                    backgroundColor={theme.colors.white}
                    border={`1px solid ${theme.colors.lightGray}`}
                    onChange={(event) => setConfirmPassword(event.target.value)}
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
                            Ao clicar neste botão, eu concordo com os termos de
                            uso e privacidade da nossa empresa.
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
                    children="Register"
                />
            </Form>
        </Container>
    );
};

export default Register;
