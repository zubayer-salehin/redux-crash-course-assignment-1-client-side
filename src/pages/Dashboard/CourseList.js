import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FetchCourseThunk from "../../Redux/Thunk/Product/FetchCourseThunk";
import RemoveCourseThunk from "../../Redux/Thunk/Product/RemoveCourseThunk";


const CourseList = () => {

  const courses = useSelector((state) => state.courses.courses)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(FetchCourseThunk());
  });

  const handleDeleteCourse = (id) => {
    dispatch(RemoveCourseThunk(id))
    toast.success("Successfully Deleted Course");
  }

  return (
    <div class='flex flex-col justify-center items-center h-full w-full '>
      <div class='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
        <header class='px-5 py-4 border-b border-gray-100'>
          <div class='font-semibold text-purple-800'>Courses</div>
        </header>

        <div class='overflow-x-auto p-3'>
          <table class='table-auto w-full'>
            <thead class='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
              <tr>
                <th></th>
                <th class='p-2'>
                  <div class='font-semibold text-left'>Course Image</div>
                </th>
                <th class='p-2'>
                  <div class='font-semibold text-left'>Course Name</div>
                </th>
                <th class='p-2'>
                  <div class='font-semibold text-left'>Course Language</div>
                </th>
                <th class='p-2'>
                  <div class='font-semibold text-center'>Action</div>
                </th>
              </tr>
            </thead>

            <tbody class='text-sm divide-y divide-gray-100'>
              {courses?.map(({ course_name, language, image, _id }) => (
                <tr>
                  <td class='p-2'>
                    <input type='checkbox' class='w-5 h-5' value='id-1' />
                  </td>
                  <td class='p-2'>
                    <img className="w-6" src={image} alt="" />
                  </td>
                  <td class='p-2'>
                    <div class='text-left capitalize'>{course_name}</div>
                  </td>
                  <td class='p-2'>
                    <div class='text-left font-medium text-indigo-500'>
                      {language}
                    </div>
                  </td>
                  <td class='p-2'>
                    <div class='flex justify-center gap-1.5'>
                      <button onClick={() => navigate(`updateCourse/${_id}`)}>
                        <img className="w-4" src="edit-svg-icon-3.jpg" alt="" />
                      </button>
                      <button onClick={() => handleDeleteCourse(_id)}>
                        <svg
                          class='w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
