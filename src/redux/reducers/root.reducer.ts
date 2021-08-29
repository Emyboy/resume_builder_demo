import { combineReducers } from "redux";
import builderReducer from "./builder/builder.reducer";



const rootReducer = combineReducers({
    builder: builderReducer
})

export default rootReducer;