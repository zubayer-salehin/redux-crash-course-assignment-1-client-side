import { updateCourse } from "../../Actions/CourseAction";


const UpdateCourseThunk = (id, upCourse) => {
    return async (dispatch) => {
        const res = await fetch(`https://redux-crash-course-assignment-1-production.up.railway.app/course/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(upCourse)
        })
        const data = await res.json();
        if (data.modifiedCount) {
            dispatch(updateCourse({ _id: id, ...upCourse }));
        }
    }
};

export default UpdateCourseThunk;