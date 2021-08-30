import React, { ReactElement } from "react";
import { JumbotronType } from "../src/components/Widgets/Jumbotron/Jombotron.type";

interface Props {
    widget_data: JumbotronType;
}

export default function JumbotronWidget({widget_data}: Props): ReactElement {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{widget_data.heading}</h1>
        <p className="col-md-8 fs-4">
          {widget_data.sub_heading}
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Example button
        </button>
      </div>
    </div>
  );
}