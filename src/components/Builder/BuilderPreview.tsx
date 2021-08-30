import React, { ReactElement, useState, useEffect } from "react";
import Button from "../Button/Button";
import { WidgetSideNav } from "./Builder.style";
import WidgetRender from "./WidgetRender";
import { useDispatch, useSelector } from "react-redux";
import store, { StoreState } from "../../redux/store/store";

interface Props {}

export default function BuilderPreview({}: Props): ReactElement {
  const [showNav, setShowNav] = useState<boolean>(false);
  const builder = useSelector((state: StoreState) => state.builder);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("LIST --", store.getState().builder);
  }, []);
  const EachPreview = () => {
    return (
      <div
        className="card text-white m-1"
        style={{
          height: "200px",
          width: "270px",
          backgroundImage: "url(https://picsum.photos/300/300)",
        }}
      >
        <div className="card-img-overlay">
          <p className="card-text text-shadow">Last updated 3 mins ago</p>
        </div>
      </div>
    );
  };
  return (
    <div className="row h-100 justify-content-center">
      <div className="h-100 col-9 mt-3">
        <div
          className="builder-body m-1 shadow"
          style={{ overflow: "scroll", height: "92vh", overflowX: "hidden" }}
        >
          <div>
            {builder.widget_list.map((val, i) => {
              return (
                <WidgetRender
                  onClick={() => {
                    console.log("CLICKED");
                    dispatch({
                      type: "SET_APP_STATE",
                      payload: { toolsIndex: i },
                    });
                  }}
                  type={val.type}
                  widget_data={{ ...val, index: i }}
                  key={i}
                />
              );
            })}
          </div>

          <div className="text-center border-top mb-2">
            <Button className="mt-3" onClick={() => setShowNav(!showNav)}>
              Add Widget
            </Button>
          </div>
        </div>
        <div></div>
      </div>
      <div className="h-100 col-3 h-50">
        <div className="m-1 h-100"></div>
      </div>
      <WidgetSideNav show={showNav}>
        <div style={{ height: "70px" }}>
          <h3 className="text-white p-3">Select Widgets</h3>
        </div>
        <div className="h-100" style={{ overflowY: "scroll" }}>
          <div className="container">
            <div
              className="row pt2 pr-2 justify-content-center"
              style={{ paddingBottom: "15vh" }}
            >
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
    </div>
  );
}
