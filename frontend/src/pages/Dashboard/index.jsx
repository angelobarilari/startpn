import React, { useState, useContext, useEffect } from "react";
import Container from "../../components/Container";
import Paragraph from "../../components/Paragraph";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card/Index";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Label from "../../components/Label";
import Form from "../../components/Form";
import Span from "../../components/Span";

import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { theme } from "../../global/styles/theme";
import { getSchedules } from "../../services/api";
import { SchedulesContext } from "../../context/schedules";

import companyIcon from "../../images/svg/companyIcon.svg";

const Dashboard = () => {
    const { schedules, setSchedules } = useContext(SchedulesContext);

    useEffect(() => {
        getSchedules()
            .then((res) => setSchedules(res.data.schedules))
            .catch((err) => console.log(err.response.data));
    }, [setSchedules]);

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
                    <Header
                        textAlign="left"
                        height="10%"
                        width="100%"
                        color={theme.colors.babyBlue}
                    />

                    <Container>
                        <Sidebar
                            height="90%"
                            width="20%"
                            backgroundColor="green"
                        >
                            <Container>
                                <Button
                                    width="90%"
                                    borderRadius="60px"
                                    fontWeight="600"
                                    fontSize="18px"
                                    backgroundColor={theme.colors.babyBlue}
                                    type="submit"
                                    children="Conversas 1:1"
                                />

                                <Button
                                    width="90%"
                                    borderRadius="60px"
                                    fontWeight="600"
                                    fontSize="18px"
                                    backgroundColor={theme.colors.babyBlue}
                                    type="submit"
                                    children="Exemplo"
                                />

                                <Button
                                    width="90%"
                                    borderRadius="60px"
                                    fontWeight="600"
                                    fontSize="18px"
                                    backgroundColor={theme.colors.babyBlue}
                                    type="submit"
                                    children="Exemplo"
                                />

                                <Button
                                    width="90%"
                                    borderRadius="60px"
                                    fontWeight="600"
                                    fontSize="18px"
                                    backgroundColor={theme.colors.babyBlue}
                                    type="submit"
                                    children="Exemplo"
                                />
                            </Container>
                        </Sidebar>

                        <Container backgroundColor="aqua" width="80%">
                            dasdas
                        </Container>
                    </Container>
                </Container>
            ) : (
                <Container
                    width="100%"
                    height="100%"
                    display="flex"
                    flexDirection="column"
                    overflowY="auto"
                >
                    <Header
                        display="flex"
                        alignItems="center"
                        justifyContent="space-around"
                        height="15%"
                        width="100%"
                        textAlign="left"
                        borderRadius="0px 0px 10px 10px"
                        borderBottom={`1px solid ${theme.colors.lightGray}`}
                        color={theme.colors.babyBlue}
                    >
                        ICON
                        <img
                            src={companyIcon}
                            className="logo"
                            alt="Company icon"
                        />
                        PHOTO
                    </Header>

                    <Container
                        display="flex"
                        flexDirection="column"
                        height="80%"
                        padding="0px 10px"
                        >

                        <Container
                            className="subHeaderContainer"
                            width="100%"
                            height="20%"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDirection="column"
                            borderRadius="25px"
                        >
                            <Container
                                width="100%"
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                                color="black"
                            >
                                <Paragraph
                                    width="100%"
                                    fontWeight="500"
                                    fontSize="24px"
                                    lineHeight="36px"
                                    letter="3%"
                                    textAlign="left"
                                    color={theme.colors.babyBlue}
                                    children={"Conversas 1:1"}
                                />
                                icone
                            </Container>

                            <Container
                                width="100%"
                                padding="3px"
                                gap="10px"
                                display="flex"
                                justifyContent="space-between"
                                borderRadius="100px"
                                border={`1px solid ${theme.colors.lightGray}`}
                            >
                                <Button
                                    width="50%"
                                    borderRadius="100px"
                                    children="1:1 agendadas"
                                    backgroundColor={theme.colors.babyBlue}
                                />

                                <Button
                                    width="50%"
                                    borderRadius="100px"
                                    children="1:1 realizadas"
                                    color={theme.colors.babyBlue}
                                    backgroundColor={theme.colors.white}
                                />
                            </Container>
                        </Container>

                        <Container
                            className="cardsContainer"
                            width="100%"
                            height="fit-content"
                            marginTop="5px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDirection="column"
                        >
                            {schedules.map((schedule) => (
                                <Card 
                                    key={schedule.id}
                                    width="100%"
                                    height="150px"
                                    gap="10px"
                                    display="flex"
                                    flexDirection="column"
                                    marginTop="15px"
                                    borderRadius="10px"
                                    color="black"
                                    border={`1px solid ${theme.colors.lightGray}`}
                                >
                                    <Container
                                        className="cardHeader"
                                        width="100%"
                                        height="50%"
                                        padding="0px 5px"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="space-between"
                                        backgroundColor="aqua"
                                    >

                                        <Input
                                            type="checkbox"
                                            width="20%"
                                            height="100%"
                                            borderRadius="10px"
                                            border={`5px solid ${theme.colors.babyBlue}`}
                                            onChange={(event) => console.log(event.target)}
                                            value={undefined}
                                        />

                                        <Container
                                            className="scheduleInfos"
                                            height="100%"
                                            display="flex"
                                            flexDirection="column"
                                            justifyContent="center"
                                        >
                                            <Span children={schedule.scheduleName} />

                                            <Span children={schedule.scheduleDate} />
                                        </Container>
                                        
                                        <div>
                                            ICONE DE TRES .
                                        </div>

                                    </Container>

                                    <Container
                                        className="cardBody"
                                    >
                                        <Container
                                            className="ownerContainer"
                                        >
                                            Organizador
                                            <Span>
                                                {schedule.owner.name}
                                            </Span>
                                        </Container>

                                        <Container
                                            className="guestContainer"
                                        >
                                            Convidado
                                            <Span>
                                                {schedule.guest.name}
                                            </Span>
                                        </Container>
                                    </Container>
                                </Card>
                            ))}
                        </Container>
                    </Container>

                    {/* <Container>
                        <Sidebar height="90%" width="20%" backgroundColor="green">
                            <Header
                                textAlign="left"
                                height="10%"
                                width="100%"
                                color={theme.colors.babyBlue}
                            />

                            <Container>
                                <Button
                                    width="90%"
                                    borderRadius="60px"
                                    fontWeight="600"
                                    fontSize="18px"
                                    backgroundColor={theme.colors.babyBlue}
                                    type="submit"
                                    children="Conversas 1:1"
                                />

                                <Button
                                    width="90%"
                                    borderRadius="60px"
                                    fontWeight="600"
                                    fontSize="18px"
                                    backgroundColor={theme.colors.babyBlue}
                                    type="submit"
                                    children="Exemplo"
                                />

                                <Button
                                    width="90%"
                                    borderRadius="60px"
                                    fontWeight="600"
                                    fontSize="18px"
                                    backgroundColor={theme.colors.babyBlue}
                                    type="submit"
                                    children="Exemplo"
                                />

                                <Button
                                    width="90%"
                                    borderRadius="60px"
                                    fontWeight="600"
                                    fontSize="18px"
                                    backgroundColor={theme.colors.babyBlue}
                                    type="submit"
                                    children="Exemplo"
                                />
                            </Container>
                        </Sidebar>

                        <Container
                            backgroundColor="aqua"
                            width="80%"
                        >
                                dasdas
                        </Container>
                    </Container> */}
                </Container>
            )}
        </>
    );
};

export default Dashboard;
