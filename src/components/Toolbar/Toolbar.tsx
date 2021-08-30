import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  children: ReactElement[] | ReactElement;
}

const ToolbarWrapper = styled.aside`
  position: fixed;
  right: 30px;
  top: 40px;
  width: 450px;
  height: 90vh;
  div {
    border: 1px solid ${(p) => p.theme.accent_color};
  }
`;

export default function Toolbar({ children }: Props): ReactElement {
  return (
    <ToolbarWrapper>
      <div className="right-panel m-1 h-100 p-2">{children}</div>
    </ToolbarWrapper>
  );
}
