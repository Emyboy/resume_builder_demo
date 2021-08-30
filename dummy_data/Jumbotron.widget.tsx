import React, { ReactElement, useState } from "react";
import Toolbar from "../src/components/Toolbar/Toolbar";
import { JumbotronType } from "../src/components/Widgets/Jumbotron/Jombotron.type";

interface Props {
  widget_data: JumbotronType;
}

export default function JumbotronWidget({ widget_data }: Props): ReactElement {
  const [showTools, setShowTools] = useState<boolean>(false);
  return (
    <>
      <div
        className="p-5 mb-4 bg-light rounded-3"
        onClick={() => setShowTools(!showTools)}
      >
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">{widget_data.heading}</h1>
          <p className="col-md-8 fs-4">{widget_data.sub_heading}</p>
          <button className="btn btn-primary btn-lg" type="button">
            Example button
          </button>
        </div>
      </div>
      {showTools ? (
        <Toolbar>
          <h2 className="text-white">Jumbotron</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            corrupti doloribus inventore nisi quae sapiente quisquam cum
            perspiciatis autem nesciunt vero error! Veritatis nihil aliquid
            recusandae commodi repellat nulla ex.
          </p>
        </Toolbar>
      ) : null}
    </>
  );
}
