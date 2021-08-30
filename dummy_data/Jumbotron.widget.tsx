import React, { ReactElement, useState } from "react";
import { JumbotronType } from "../src/components/Widgets/Jumbotron/Jombotron.type";
import WidgetWrapper from "../src/components/Widgets/WidgetWrapper/WidgetWrapper";
import { withToolkit } from "../src/components/withToolkit/withToolkit";

interface Props {
  widget_data: JumbotronType;
}

function JumbotronWidget(props: Props): ReactElement {
  const { widget_data } = props;
  const [showTools, setShowTools] = useState<boolean>(false);
  return (
    <WidgetWrapper
      index={widget_data.index}
      toolkit={
        <p className="text-white">
          <h2 className="text-white">Jumbotron</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          corrupti doloribus inventore nisi quae sapiente quisquam cum
          perspiciatis autem nesciunt vero error! Veritatis nihil aliquid
          recusandae commodi repellat nulla ex.
        </p>
      }
    >
        <div
          className="p-5 mb-4 bg-light rounded-3"
        >
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">{widget_data.heading}</h1>
            <p className="col-md-8 fs-4">{widget_data.sub_heading}</p>
            <button className="btn btn-primary btn-lg" type="button">
              Example button
            </button>
          </div>
        </div>
    </WidgetWrapper>
  );
}

// export default JumbotronWidget
export default withToolkit(JumbotronWidget);
