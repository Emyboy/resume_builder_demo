import React, { MouseEventHandler, ReactElement } from "react";
import styled from "styled-components";

interface Props {
  outLined?: boolean;
  children?: ReactElement[] | string | ReactElement;
  className?: string;
  rounded?: boolean;
  onClick: MouseEventHandler;
}

export const S_Button = styled.button<Props>`
  background-color: ${(p) =>
    p.outLined ? p.theme.bg_color : p.theme.theme_color};
  border: ${(p) => (p.outLined ? `1px solid ${p.theme.theme_color}` : "none")};
  color: ${(p) =>
    p.outLined ? `${p.theme.theme_color}` : `${p.theme.accent_color}`};
  cursor: pointer;
  border-radius: ${(p) => (p.rounded ? "15px" : "6px")};
  padding: 10px 20px 10px 20px;
  font-weight: 600;
  :hover {
    color: ${(p) => p.outLined ? p.theme.theme_color: p.theme.accnet_color};
  }
`;

export default function Button(props: Props): ReactElement {
  return (
    <S_Button className={`btn ${props.className}`} {...props}>
      {props.children}
    </S_Button>
  );
}
