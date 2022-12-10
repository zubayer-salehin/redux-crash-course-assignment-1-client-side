import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { readHistory } from "../Redux/Actions/CourseAction";


const CourseCard = ({ course }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCourseDetails = (course) => {
    dispatch(readHistory(course))
    navigate(`courseDetail/${course._id}`)
  }

  return (
    <div className="p-5 cardShadow rounded-lg">
      <div className="w-full h-40 flex justify-center items-center">
        <img className="w-32 h-fit" src={course.image} alt="" />
      </div>
      <p>Course Name : <span className="capitalize font-bold">{course.course_name}</span></p>
      <p>Language : <span className="capitalize font-semibold">{course.language}</span></p>
      <p className="text-sm mt-1">{course.description.slice(0, 125)}...</p>
      <button onClick={() => handleCourseDetails(course)} className="w-full bg-purple-500 py-1 mt-3 rounded">Read More</button>
    </div>
  );
};

export default CourseCard;
