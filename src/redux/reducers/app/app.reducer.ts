import { AppActionTypes, AppReducerTypes } from "./app.reducer.types";

const initialState: AppReducerTypes = {
  toolsIndex: null,
};

export default (state = initialState, { type, payload }: AppActionTypes) => {
  switch (type) {
    case "SET_APP_STATE":
      console.log('index ---', payload)
      return { ...state, ...payload };
    case "SET_TOOLS_INDEX":
      return {
        ...state,
        toolsIndex: payload,
      };
    default:
      return state;
  }
};
