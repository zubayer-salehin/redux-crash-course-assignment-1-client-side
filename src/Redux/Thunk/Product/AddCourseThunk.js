import { addCourse } from "../../Actions/CourseAction";


const AddCourseThunk = (newCourse) => {
    return async (dispatch) => {
        const res = await fetch("https://redux-crash-course-assignment-1-production.up.railway.app/course", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCourse)
        })
        const data = await res.json();
        if (data.acknowledged) {
            dispatch(addCourse({ _id: data.insertedId, ...newCourse }));
        }
    }
};

export default AddCourseThunk;