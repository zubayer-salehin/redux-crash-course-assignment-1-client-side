import { getCourse } from "../../Actions/CourseAction";

const FetchCourseThunk = () => {
    return async (dispatch) => {
        const res = await fetch("https://redux-crash-course-assignment-1-production.up.railway.app/courses")
        const data = await res.json();
        if (data.status) {
            dispatch(getCourse(data.data));
        }
    }
};

export default FetchCourseThunk;