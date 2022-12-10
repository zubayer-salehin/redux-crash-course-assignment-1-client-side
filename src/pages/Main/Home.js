import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../../components/CourseCard";
import { toggleCourse, toggleUpload } from "../../Redux/Actions/CourseFilterAction";
import FetchCourseThunk from "../../Redux/Thunk/Product/FetchCourseThunk";



const Home = () => {

  let content;
  const activeClass = "text-white  bg-purple-500 border-white";
  const { courses, filter } = useSelector((state) => state);
  const allCourse = courses.courses;
  const { upload, language } = filter;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchCourseThunk());
  }, [dispatch])

  if (upload === "first_upload") {
    content = allCourse?.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
  } else {
    const last_upload = [...allCourse].reverse();
    content = last_upload.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
  }

  if (upload && language.length) {
    content = allCourse.filter(c => {
      if (upload !== "first_upload") {
        return [...allCourse].reverse();
      }
      return c;
    }).filter(c => {
      return language.includes(c.language);
    })?.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
  }


  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button onClick={() => dispatch(toggleUpload("first_upload"))} className={`border px-3 py-2 rounded-full font-semibold ${upload === "first_upload" ? activeClass : null}`}
        >
          First Upload
        </button>
        <button onClick={() => dispatch(toggleUpload("last_upload"))} className={`border px-3 py-2 rounded-full font-semibold ${upload === "last_upload" ? activeClass : null}`}>
          Last Upload
        </button>
        <button onClick={() => dispatch(toggleCourse("javascript"))} className={`border px-3 py-2 rounded-full font-semibold ${language.includes("javascript") ? activeClass : null}`}>
          Javascript
        </button>
        <button onClick={() => dispatch(toggleCourse("php"))} className={`border px-3 py-2 rounded-full font-semibold ${language.includes("php") ? activeClass : null}`}>
          PHP
        </button>
        <button onClick={() => dispatch(toggleCourse("python"))} className={`border px-3 py-2 rounded-full font-semibold ${language.includes("python") ? activeClass : null}`}>
          Python
        </button>
        <button onClick={() => dispatch(toggleCourse("java"))} className={`border px-3 py-2 rounded-full font-semibold ${language.includes("java") ? activeClass : null}`}>
          Java
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14'>
        {content}
      </div>
    </div>
  );
};

export default Home;
