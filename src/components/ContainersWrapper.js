import React, { Fragment } from "react";
import styled from "styled-components";
import Media from "react-media";

export default function ContainersWrapper({ children }) {
  return (
    <>
      <Media
        queries={{
          large: "(min-width: 761px)",
        }}
      >
        {({ large }) => (
          <Fragment>
            <Wrapper margin={large ? "0 10px 0 205px" : "0"}>
              {children}
            </Wrapper>
          </Fragment>
        )}
      </Media>
    </>
  );
}

const Wrapper = styled.div({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  margin: (props) => props.margin,
});
