import React, { ReactElement, useState } from "react";
import Button from "../Button/Button";
import { S_Builder, WidgetSideNav } from "./Builder.style";
import BuilderPreview from "./BuilderPreview";

interface Props {}

const EachPreview = () => {
  return (
    <div
      className="card bg-dark text-white m-1"
      style={{
        height: "200px",
        width: "300px",
        backgroundImage: "url(https://picsum.photos/300/300)",
      }}
    >
      <div className="card-img-overlay">
        <p className="card-text text-shadow">Last updated 3 mins ago</p>
      </div>
    </div>
    // <div className="col-lg-4 col-sm-6 pb-2 pl-1 pr-1">
    //   <div
    //     className="card mt-2 bg-dark"
    //     style={{
    //       height: "200px",
    //       backgroundImage: "url(https://picsum.photos/200/300)",
    //     }}
    //   ></div>
    // </div>
  );
};

export default function Builder({}: Props): ReactElement {
  const [showNav, setShowNav] = useState<boolean>(false);

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
          <div className="row h-100 justify-content-center">
            <div className="h-100 col-8 h-50">
              <div
                className="builder-body m-1 h-100"
                style={{ overflow: "scroll" }}
              >
                <BuilderPreview />

                <div className="text-center border-top mb-2">
                  <Button className="mt-3" onClick={() => setShowNav(!showNav)}>
                    Add Widget
                  </Button>
                </div>
              </div>
              <div></div>
            </div>
            <div className="h-100 col-3 h-50">
              <div className="right-panel m-1 h-100"></div>
            </div>
          </div>
        </div>
        <WidgetSideNav show={showNav}>
          <div style={{ height: "70px" }}>
            <h3 className="text-white p-3">Select Widgets</h3>
          </div>
          <div className="h-100" style={{ overflowY: "scroll" }}>
            <div className="container">
              <div className="row pt2 pr-2" style={{ paddingBottom: "15vh" }}>
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
                <EachPreview />
              </div>
            </div>
          </div>
        </WidgetSideNav>
      </S_Builder>
    </>
  );
}
