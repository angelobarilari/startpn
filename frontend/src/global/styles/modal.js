import { theme } from "./theme";

export const modalStyle = {
    content: {
        width: "100%",
        height: "40%",
        display: "flex",
        flexDirection: "column",
        bottom: 0,
        top: "auto",
        left: 0,
        right: 0,
        flexShrink: 0,
        background: theme.colors.white,
        borderRadius: "20px",
    },
};

export const modalHeaderStyle = {
    color: theme.colors.black,
    width: "100%",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
};
