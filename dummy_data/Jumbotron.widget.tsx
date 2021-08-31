import React, { ReactElement, useState, useEffect } from "react";
import InputField from "../src/components/Toolbar/EachTool/InputField/InputField.tool";
import { JumbotronType } from "../src/components/Widgets/Jumbotron/Jombotron.type";
import WidgetWrapper from "../src/components/Widgets/WidgetWrapper/WidgetWrapper";
import { withToolkit } from "../src/components/withToolkit/withToolkit";
import { useDispatch } from "react-redux";
import { updateWidgetData } from "../src/redux/actions/builder/builder.action";
import ImageSelectorTool from "../src/components/Toolbar/EachTool/imageSelector/ImageSelector.tool";
import EachToolWrapperTool from "../src/components/Toolbar/EachTool/EachToolWrapper/EachToolWrapper.tool";
import Global from "../Global";
import { Slider, Switch } from "antd";

interface Props {
  widget_data: JumbotronType;
}

function JumbotronWidget(props: Props): ReactElement {
  const [addAvatar, setAddAvatar] = useState<boolean>(false);
  const [avatarFile, setAvatarFile] = useState(null);
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

  const updateAvatarStyles = (key: string, value: string) => {
    const editedData = {
      ...data,
      avatar_style: {
        ...data.avatar_style,
        [key]: value,
      },
    };
    dispatch(updateWidgetData(editedData));
  };

  useEffect(() => {
    const avatarUpdate = {
      ...data,
      has_avatar: addAvatar,
    };
    dispatch(updateWidgetData(avatarUpdate));
  }, [addAvatar]);

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
          <EachToolWrapperTool
            setDisabled={() => setAddAvatar(!addAvatar)}
            disabled={!addAvatar}
          >
            <>
              <ImageSelectorTool
                setImageFile={(file) => setAvatarFile(file[0])}
                disabled={!addAvatar}
              />
              <label>Image Roundness</label>
              <Slider
                defaultValue={30}
                disabled={!addAvatar}
                min={0}
                max={50}
                onChange={(e) => updateAvatarStyles('borderRadius', `${e}%`)}
              />
            </>
          </EachToolWrapperTool>
        </div>
      }
    >
      <div className="p-5 mb-4" style={widget_data.container_style}>
        <div className="container-fluid py-5" style={widget_data.body_style}>
          {widget_data.has_avatar ? (
            <div className="col-lg-3 col-sm-12 mt-4">
              <img
                className="shadow"
                style={widget_data.avatar_style}
                src={
                  avatarFile
                    ? URL.createObjectURL(avatarFile)
                    : Global.user_placeholer_img
                }
                width="180"
              />
            </div>
          ) : null}
          <div className="col-lg-9 col-sm-12">
            <h1 className="display-5 fw-bold">{widget_data.heading}</h1>
            <p className="fs-4">{widget_data.sub_heading}</p>
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
