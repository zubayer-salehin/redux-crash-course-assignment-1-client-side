import { getCourse } from "../../Actions/CourseAction";

const FetchCourseThunk = () => {
    return async (dispatch) => {
        const res = await fetch("https://tutorial-point-server-side.vercel.app/courses")
        const data = await res.json();
        if (data.status) {
            dispatch(getCourse(data.data));
        }
    }
};

export default FetchCourseThunk;