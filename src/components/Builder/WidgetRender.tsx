import React, { ReactElement } from "react";
import styled from "styled-components";
import CardWithImgWidget from "../../../dummy_data/CardWithImg.widget";
import HeadingWidget from "../../../dummy_data/Heading.widget";
import JumbotronWidget from "../../../dummy_data/Jumbotron.widget";

interface Props {
  type: string;
  widget_data: any;
  onClick: () => void;
}

const WidgetWrapper = styled.div`
  :hover {
    border: 5px dotted pink;
  }
`;

export default function WidgetRender({
  type,
  widget_data,
  onClick
}: Props): ReactElement {
  const props = {
    ...widget_data,
    onClick
  }
  const returnWidget = () => {
    switch (type) {
      case "jumbotron":
        return <JumbotronWidget widget_data={props} />;
      case "heading":
        return <HeadingWidget widget_data={props} />;
      case "card_with_img":
        return <CardWithImgWidget widget_data={props} />;
      default:
        return <></>;
    }
  };

  return (
    <WidgetWrapper onClick={props.onClick} >
      {returnWidget()}
    </WidgetWrapper>
  );
}
