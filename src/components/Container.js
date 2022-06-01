import React from "react";

const container = {
    width: "90%",
    margin: "auto",
    marginTop: 50,
};

function Container({ children }) {
    return <div style={container}>{children}</div>;
}

export default Container;
