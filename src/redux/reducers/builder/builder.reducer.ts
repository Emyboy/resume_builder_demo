import { SET_BUILDER_STATE } from "../../actions/builder/builder.action.types";
import { BuilderAction, BuilderStateTypes } from "./builder.reducer.types";

const initialState: BuilderStateTypes = {
  meta_title: "",
  meta_description: "",
  meta_img_url: "",
};

export default (state = initialState, { type, payload }: BuilderAction) => {
  switch (type) {
    case SET_BUILDER_STATE:
      return { ...state, ...payload };

    default:
      return state;
  }
};
