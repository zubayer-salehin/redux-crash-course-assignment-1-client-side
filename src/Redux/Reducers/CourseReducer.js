import { ADD_COURSE, GET_COURSE, READ_HISTORY, REMOVE_COURSE, UPDATE_COURSE } from "../ActionTypes/CourseActionType";


const initialState = {
    courses: [],
    readHistory: []
}

const CourseReducer = (state = initialState, action) => {
    const existReadHistory = state.readHistory.filter(rh => rh._id === action.payload._id)
    switch (action.type) {
        case GET_COURSE: {
            return {
                ...state,
                courses: action.payload
            }
        }
        case READ_HISTORY: {
            if (Object.keys(existReadHistory).length) {
                const newReadHistory = state.readHistory.filter(rh => rh._id !== action.payload._id)
                return {
                    ...state,
                    readHistory: [action.payload, ...newReadHistory]
                }
            } else {
                return {
                    ...state,
                    readHistory: [action.payload, ...state.readHistory]
                }
            }
        }
        case ADD_COURSE:
            return {
                ...state,
                courses: [...state.courses, action.payload],
            }
        case UPDATE_COURSE:
            return {
                ...state,
                courses: state.courses.map(el => el._id === action.payload._id ? action.payload : el),
            }
        case REMOVE_COURSE:
            return {
                ...state,
                courses: state.courses.filter(
                    (course) => course._id !== action.payload
                ),
            };
        default:
            return state;
    }
}

export default CourseReducer;