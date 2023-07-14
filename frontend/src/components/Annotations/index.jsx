import React, { useState } from "react";
import Container from "../Container";
import Input from "../Input";
import Line from "../Line";
import Span from "../Span";

import { formatDateRange } from "../../utils";

import { theme } from "../../global/styles/theme";
import { inputStyle } from "../../global/styles/input";
import { modalHeaderStyle } from "../../global/styles/modal";
import { RxAvatar } from "react-icons/rx";

import { useMediaQuery } from "react-responsive";

const Annotations = ({ schedule }) => {
    const [annotation, setNewAnnotation] = useState([]);

    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <Container
            className="annotationsHistoric"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            backgroundColor="blue"
            borderRadius="10px"
            background={theme.colors.white}
            border={`1px solid ${theme.colors.lightGray}`}
            style={
                isDesktop
                    ? {
                          height: "330px",
                          overflowY: "auto",
                      }
                    : {
                          height: "fit-content",
                      }
            }
        >
            <Container
                className="annotationsHistoricHeader"
                style={{
                    ...modalHeaderStyle,
                    height: "50px",
                    justifyContent: "flex-start",
                    paddingLeft: "20px",
                }}
            >
                <Span
                    width="100%"
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="normal"
                    color={theme.colors.black}
                    textAlign="left"
                >
                    Histórico de anotações
                </Span>
            </Container>

            <Line
                borderColor={theme.colors.lightGray3}
                height="fit-content"
                width="100%"
                marginTop="0px"
            />

            <Container padding="16px 20px 28px 20px" width="100%">
                <Input
                    style={{
                        ...inputStyle,
                        background: theme.colors.lightGray4,
                    }}
                    type="text"
                    placeholder="Faça sua anotação"
                    onChange={(event) => setNewAnnotation(event.target.value)}
                    value={annotation}
                />
            </Container>

            <Container
                display="flex"
                alignItems="flex-start"
                flexDirection="column"
                color="black"
                padding="0px 20px"
                width="100%"
                gap="20px"
                textAlign="left"
            >
                <Container
                    style={
                        isDesktop
                            ? {
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "space-between",
                              }
                            : {
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "10px",
                                  alignItems: "flex-start",
                              }
                    }
                >
                    <Span
                        fontSize="14px"
                        fontStyle="normal"
                        fontWeight="500"
                        lineHeight="normal"
                        display="flex"
                        alignItems="center"
                    >
                        <RxAvatar size={20} style={{ marginRight: "10px" }} />
                        {schedule.owner.name}
                    </Span>

                    <Container
                        style={
                            isDesktop
                                ? {
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "flex-end",
                                  }
                                : {
                                      display: "flex",
                                      flexDirection: "column",
                                      gap: "10px",
                                      alignItems: "flex-start",
                                  }
                        }
                    >
                        <Span
                            padding="5px 10px"
                            borderRadius="60px"
                            background={theme.colors.lightGray4}
                            fontSize="12px"
                            fontStyle="normal"
                            fontWeight="500"
                            lineHeight="normal"
                            children={schedule.scheduleName}
                        />
                        <Span
                            padding="5px 10px"
                            borderRadius="60px"
                            background={theme.colors.lightGray4}
                            fontSize="12px"
                            fontStyle="normal"
                            fontWeight="500"
                            lineHeight="normal"
                            children={formatDateRange(
                                schedule.startDate,
                                schedule.endDate
                            )}
                        />
                    </Container>
                </Container>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ac posuere magna. Sed eu lectus diam. Proin sit amet
                eleifend justo. Aenean tincidunt eleifend purus id sagittis.
                Curabitur id malesuada est. Mauris vehicula felis non lectus
                ultricies, vel congue nunc ultricies. Aliquam aliquam tincidunt
                sapien, id luctus tortor varius vel. Sed blandit, velit id
                fringilla posuere, lectus arcu vulputate ex, in tincidunt purus
                felis a enim. Cras non elit a mi vestibulum rhoncus. Ut sed nisl
                diam.
                <Line
                    borderColor={theme.colors.lightGray3}
                    height="fit-content"
                    width="100%"
                />
            </Container>
        </Container>
    );
};

export default Annotations;
