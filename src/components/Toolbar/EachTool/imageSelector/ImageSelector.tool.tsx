import React, { ReactElement, useState, useEffect } from "react";
import EachToolWrapperTool from "../EachToolWrapper/EachToolWrapper.tool";

interface Props {}

export default function ImageSelectorTool({}: Props): ReactElement {
  const [isDisabled, setDisabled] = useState<boolean>(true);
  useEffect(() => {
    setDisabled(isDisabled);
  }, [isDisabled]);
  return (
    <EachToolWrapperTool onDisable={(val) => setDisabled(val)} disabled={isDisabled}>
      <div className="form-group">
        <input type="file" disabled={isDisabled} />
      </div>
    </EachToolWrapperTool>
  );
}
