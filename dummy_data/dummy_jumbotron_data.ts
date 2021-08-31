import Global from "../Global";

export default {
  _id: "2-5234-5-324-523534-4r",
  type: "jumbotron",
  css: "",
  markup: "",
  container_style: {
    backgroundColor: "#e8e8e8",
  },
  body_style: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  display_name: "Default Jumbotron",
  description: "This is used for display stuff at the top, like in into",
  heading: "Welcome to my blog",
  sub_heading:
    "this is the sub heading sha, don't know what you think about it",
  heading_style: null,
  sub_heading_style: null,
  has_avatar: true,
  avatar_url: null,
  avatar_style: {
    borderRadius: '50px'
  }
};

export const CartWithImageDummy = {
  _id: "2-5234-5-324-523534-4r",
  type: "card_with_img",
  img_url:
    Global.user_placeholer_img,
  css: "",
  markup: "",
  heading_style: null,
  sub_heading_style: null,
  has_avatar: false,
};
