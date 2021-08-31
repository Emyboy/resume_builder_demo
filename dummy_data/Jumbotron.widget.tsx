import React, { ReactElement, useState } from "react";
import InputField from "../src/components/Toolbar/EachTool/InputField/InputField";
import { JumbotronType } from "../src/components/Widgets/Jumbotron/Jombotron.type";
import WidgetWrapper from "../src/components/Widgets/WidgetWrapper/WidgetWrapper";
import { withToolkit } from "../src/components/withToolkit/withToolkit";
import { useDispatch } from "react-redux";
import { updateWidgetData } from "../src/redux/actions/builder/builder.action";

interface Props {
  widget_data: JumbotronType;
}

function JumbotronWidget(props: Props): ReactElement {
  const { widget_data } = props;
  const data = widget_data;
  const dispatch = useDispatch();
  const handleWidgetUpdate = (value: any, key: string) => {
    const editedData = {
      ...data,
      [key]: value,
    };
    dispatch(updateWidgetData(editedData));
  };
  return (
    <WidgetWrapper
      index={widget_data.index}
      toolkit={
        <div>
          <h2 className="text-muted">{widget_data.display_name}</h2>
          <p className="text-accent">{widget_data.description}</p>
          <InputField
            onChange={(e) => handleWidgetUpdate(e.target.value, "heading")}
            label="Heading Text"
            defaultValue={widget_data.heading}
          />
          <InputField
            onChange={(e) => handleWidgetUpdate(e.target.value, "sub_heading")}
            label="Sub Heading Text"
            defaultValue={widget_data.sub_heading}
          />
        </div>
      }
    >
      <div className="p-5 mb-4 rounded-3" style={widget_data.container_style}>
        <div className="container-fluid py-5" style={widget_data.body_style}>
          {widget_data.has_avatar ? (
            <div className="col-2 mt-4 mr-3">
              <img
                className="shadow"
                style={widget_data.avatar_style}
                src="https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
                width="150"
              />
            </div>
          ) : null}
          <div className='w-100'>
            <h1 className="display-5 fw-bold">{widget_data.heading}</h1>
            <p className="col-md-11 fs-4">{widget_data.sub_heading}</p>
            <button className="btn btn-primary btn-lg w-50" type="button">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </WidgetWrapper>
  );
}

export default withToolkit(JumbotronWidget);
