import { combineReducers } from "redux";
import FilterReducer from "./FilterReducer";
import CourseReducer from "./CourseReducer";


const rootReducer = combineReducers({
    courses: CourseReducer,
    filter: FilterReducer
})


export default rootReducer;