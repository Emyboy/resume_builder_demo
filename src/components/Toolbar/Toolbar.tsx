import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  children: ReactElement[] | ReactElement;
}

const ToolbarWrapper = styled.aside`
  position: fixed;
  right: 2%;
  top: 40px;
  width: 23%;
  height: 90vh;
  z-index: 50;
  div {
    padding: 5px;
  }
`;

export default function Toolbar({ children }: Props): ReactElement {
  return (
    <ToolbarWrapper id='aside'>
      <div className="right-panel m-1 h-100 p-2">{children}</div>
    </ToolbarWrapper>
  );
}
