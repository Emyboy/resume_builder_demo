import React, { ReactElement, useState } from "react";
import Toolbar from "../../Toolbar/Toolbar";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../../redux/store/store";

interface Props {
  children: ReactElement[] | ReactElement;
  toolkit: ReactElement[] | ReactElement;
  index: number;
}

export default function WidgetWrapper({
  children,
  toolkit,
  index
}: Props): ReactElement {
  const [showToolkit, setShowToolket] = useState(false);
  const app = useSelector((state: StoreState) => state.app);
  return (
    <div>
      {children}
      {app.toolsIndex === index ? <Toolbar>{toolkit}</Toolbar> : null}
    </div>
  );
}
