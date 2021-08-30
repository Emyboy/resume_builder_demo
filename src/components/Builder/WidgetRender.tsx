import React, { ReactElement } from "react";
import styled from "styled-components";
import CardWithImgWidget from "../../../dummy_data/CardWithImg.widget";
import HeadingWidget from "../../../dummy_data/Heading.widget";
import JumbotronWidget from "../../../dummy_data/Jumbotron.widget";

interface Props {
  type: string;
  widget_data: any;
}

const WidgetWrapper = styled.div`
  :hover {
    border: 5px dotted pink;
    /* width: fit-content; */
  }
`;

export default function WidgetRender({ type, widget_data }: Props): ReactElement {
  const returnWidget = () => {
    switch (type) {
        case 'jumbotron':
          return <JumbotronWidget widget_data={widget_data} />
        case 'heading':
          return <HeadingWidget widget_data={widget_data} />
        case 'card_with_img':
          return <CardWithImgWidget widget_data={widget_data} />
        default:
            return <></>;
    }
  }

  return <WidgetWrapper>
    {returnWidget()}
  </WidgetWrapper>
}
