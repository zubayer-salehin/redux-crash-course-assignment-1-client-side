import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const CourseDetails = () => {

    const { id } = useParams();
    const { courses } = useSelector((state) => state);
    const allCourse = courses.courses;
    let [course, setCourse] = useState({});

    useEffect(() => {
        const single_course = allCourse.find(c => c._id === id)
        setCourse(single_course);
    }, [allCourse, id])


    return (
        <div className='flex justify-center mt-5 mb-16'>
            <div className="w-2/5 p-5 cardShadow rounded-lg">
                <div className="w-full h-60 flex justify-center items-center">
                    <img className="w-52 h-fit" src={course.image} alt="" />
                </div>
                <p>Course Name : <span className="capitalize font-bold">{course.course_name}</span></p>
                <p>Language : <span className="capitalize font-semibold">{course.language}</span></p>
                <p className="text-sm mt-1.5">{course.description}</p>
                <span className='underline font-semibold'>Feature : </span><br />
                <ul className='list-disc ml-5'>
                    {course?.feature?.map(f => <li className='text-sm font-medium'>{f}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default CourseDetails;