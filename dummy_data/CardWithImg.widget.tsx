import React, { ReactElement, useState } from "react";
import Toolbar from "../src/components/Toolbar/Toolbar";
import { JumbotronType } from "../src/components/Widgets/Jumbotron/Jombotron.type";
import WidgetWrapper from "../src/components/Widgets/WidgetWrapper/WidgetWrapper";

interface Props {
  widget_data: any;
}

export default function CardWithImgWidget({
  widget_data,
}: Props): ReactElement {
  const [showTools, setShowTools] = useState<boolean>(false);
  return (
    <WidgetWrapper
      index={widget_data.index}
      toolkit={
        <>
          <h2 className="text-white">Card</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            corrupti doloribus inventore nisi quae sapiente quisquam cum
            perspiciatis autem nesciunt vero error! Veritatis nihil aliquid
            recusandae commodi repellat nulla ex.
          </p>
        </>
      }
    >
      <div className="col-4" onClick={() => setShowTools(!showTools)}>
        <div className="card shadow-sm">
          <svg
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c"></rect>
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">
              Thumbnail
            </text>
          </svg>

          <div className="card-body">
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </button>
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
}
