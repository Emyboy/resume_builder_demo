import React, { ReactElement, useState } from "react";
import Button from "../Button/Button";
import { S_Builder, WidgetSideNav } from "./Builder.style";
import BuilderPreview from "./BuilderPreview";

interface Props {}


export default function Builder({}: Props): ReactElement {

  return (
    <>
      <S_Builder>
        <div className="fixed-top row justify-content-center">
          <nav className="shadow">
            <h4>Menu</h4>
            <Button outLined rounded onClick={() => {}}>
              {"Preview"}
            </Button>
          </nav>
        </div>
        <div className="container-fluid pt-4" style={{ height: "98vh" }}>
          <BuilderPreview />
        </div>
        
      </S_Builder>
    </>
  );
}
