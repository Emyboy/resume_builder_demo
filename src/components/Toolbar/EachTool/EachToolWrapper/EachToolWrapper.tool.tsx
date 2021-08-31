import React, { ReactElement, useState, useEffect } from "react";

interface Props {
  children: ReactElement[] | ReactElement;
  onDisable: (val: boolean) => void;
  disabled: boolean;
}

export default function EachToolWrapperTool({
  children,
  onDisable,
  disabled,
}: Props): ReactElement {
  return (
    <div className="form-group m-0 p-0">
      <hr className="text-muted" />
      <div className="d-flex">
        <div
          className={`${
            disabled ? "border-danger border" : "bg-danger "
          } p-1 mt-2 rounded`}
          style={{ width: "12px", height: "12px", cursor: "pointer" }}
          onClick={() => onDisable(!disabled)}
        ></div>
        <label className="text-muted ml-2">Use Avatar</label>
      </div>
      {children}
    </div>
  );
}
