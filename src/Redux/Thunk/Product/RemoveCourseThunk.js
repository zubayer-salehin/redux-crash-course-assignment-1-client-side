import { removeCourse } from "../../Actions/CourseAction";

const RemoveCourseThunk = (id) => {
    return async (dispatch) => {
        const res = await fetch(`https://tutorial-point-server-side.vercel.app/course/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
            },
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(removeCourse(id));
        }
    };
};

export default RemoveCourseThunk;