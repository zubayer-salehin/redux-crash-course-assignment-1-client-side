import { ADD_COURSE, GET_COURSE, READ_HISTORY, REMOVE_COURSE, UPDATE_COURSE } from "../ActionTypes/CourseActionType"

export const getCourse = (data) => {
    return {
        type: GET_COURSE,
        payload: data
    }
}

export const addCourse = (data) => {
    return {
        type: ADD_COURSE,
        payload: data
    }
}

export const updateCourse = (data) => {
    return {
        type: UPDATE_COURSE,
        payload: data
    }
}

export const removeCourse = (id) => {
    return {
        type: REMOVE_COURSE,
        payload: id,
    };
};

export const readHistory = (data) => {
    return {
        type: READ_HISTORY,
        payload: data
    }
}