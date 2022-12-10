import { TOGGLE_COURSE, TOGGLE_UPLOAD } from "../ActionTypes/CourseActionType";

const initialState = {
    upload: "first_upload",
    language: []
}


const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_UPLOAD: {
            return {
                ...state,
                upload: action.payload
            }
        }
        case TOGGLE_COURSE: {
            if (state.language.includes(action.payload)) {
                return {
                    ...state,
                    language: state.language.filter(c => c !== action.payload)
                }
            } else {
                return {
                    ...state,
                    language: [...state.language, action.payload]
                }
            }
        }
        default:
            return state;
    }
}

export default filterReducer;