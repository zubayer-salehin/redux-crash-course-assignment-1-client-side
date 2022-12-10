import React from 'react';
import { useSelector } from 'react-redux';
import CourseCard from '../../components/CourseCard';


const ReadingHistory = () => {

  const readHistory = useSelector((state) => state.courses.readHistory)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-14 mx-auto my-10'>
      {readHistory.map(course => <CourseCard course={course}></CourseCard>)}
    </div>
  );
};

export default ReadingHistory;