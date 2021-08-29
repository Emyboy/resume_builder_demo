import React, { ReactElement } from "react";
import Button from "../Button/Button";
import { S_Builder, WidgetSideNav } from "./Builder.style";

interface Props {}

const EachPreview = () => {
  return (
    <div className="col-lg-4 col-sm-6 pb-2 pl-1 pr-1">
      <div
        className="card mt-2 bg-dark"
        style={{
          height: "200px",
          backgroundImage: "url(https://picsum.photos/200/300)",
        }}
      ></div>
    </div>
  );
};

export default function Builder({}: Props): ReactElement {
  return (
    <>
      <S_Builder>
        <div className="fixed-top row justify-content-center">
          <nav className="shadow">
            <h4>Menu</h4>
            <Button outLined>{"Preview"}</Button>
          </nav>
        </div>
        <div className="container-fluid pt-4" style={{ height: "98vh" }}>
          <div className="row h-100 justify-content-center">
            <div className="h-100 col-9 h-50">
              <div className="builder-body m-1 h-100">
                <div className="p-5 mb-4 bg-light rounded-3">
                  <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Custom jumbotron</h1>
                    <p className="col-md-8 fs-4">
                      Using a series of utilities, you can create this
                      jumbotron, just like the one in previous versions of
                      Bootstrap. Check out the examples below for how you can
                      remix and restyle it to your liking.
                    </p>
                    <button className="btn btn-primary btn-lg" type="button">
                      Example button
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-100 col-2 h-50">
              <div className="right-panel m-1 h-100"></div>
            </div>
          </div>
        </div>
        <WidgetSideNav>
          <div style={{ height: "70px" }}>
            <h3 className='text-white p-3'>Select Widgets</h3>
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
