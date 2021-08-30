import dummy_jumbotron_data, {
  CartWithImageDummy,
} from "../../../../dummy_data/dummy_jumbotron_data";
import { SET_BUILDER_STATE } from "../../actions/builder/builder.action.types";
import { BuilderAction, BuilderStateTypes } from "./builder.reducer.types";

const initialState: BuilderStateTypes = {
  meta_title: "",
  meta_description: "",
  meta_img_url: "",
  keywords: "",
  widget_list: [
    dummy_jumbotron_data,
    CartWithImageDummy,
    {...dummy_jumbotron_data, heading: "I'm the last Jumbotron I think, lol"},
    CartWithImageDummy,
  ],
};

export default (state = initialState, { type, payload }: BuilderAction) => {
  switch (type) {
    case SET_BUILDER_STATE:
      return { ...state, ...payload };

    default:
      return state;
  }
};
