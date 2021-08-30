import styled from "styled-components";

interface SideNavProps {
  show: boolean;
}

export const S_Builder = styled.div`
  background-color: ${(p) => p.theme.bg_color};
  height: 100vh;
  width: 100%;
  .fixed-top {
    top: -7vh;
    :hover {
      top: -1px;
    }
  }
  .right-panel {
    background-color: ${(p) => p.theme.fg_color};
    border-radius: 20px;
  }
  .builder-body {
    background-color: white;
  }
  nav {
    padding: 20px;
    background-color: ${(p) => p.theme.fg_color};
    border: 0.07px solid ${p => p.theme.accent_color};
    display: flex;
    justify-content: space-between;
    width: 60%;
    border-radius: 0px 0px 20px 20px;
  }
  h4 {
    color: ${(p) => p.theme.accent_color};
  }
`;

export const WidgetSideNav = styled.aside<SideNavProps>`
  position: fixed;
  /* padding: 20px; */
  height: 100vh;
  width: 40em;
  background-color: ${p => p.theme.accent_color};
  z-index: 70;
  top: 0;
  left: ${p => !p.show ? '-50em': '0'};
`;


