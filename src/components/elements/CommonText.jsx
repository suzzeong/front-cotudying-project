import React from "react";
import styled from "styled-components";

const CommonText = (props) => {
  return <StText {...props}>{props.children}</StText>;
};

export default CommonText;

const StText = styled.div`
  font-size: ${({ fs }) => fs};
  font-weight: ${({ fw }) => fw};
  color: ${({ color }) => color};
`;
