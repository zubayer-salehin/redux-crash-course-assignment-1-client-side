import { TOGGLE_COURSE, TOGGLE_UPLOAD } from "../ActionTypes/CourseActionType"

export const toggleUpload = (upload) => {
    return {
        type: TOGGLE_UPLOAD,
        payload: upload
    }
}

export const toggleCourse = (course) => {
    return {
        type: TOGGLE_COURSE,
        payload: course
    }
}