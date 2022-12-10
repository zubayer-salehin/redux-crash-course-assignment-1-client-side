import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import UpdateCourseThunk from '../../Redux/Thunk/Product/UpdateCourseThunk';

const UpdateCourse = () => {

    const { id } = useParams();
    const allCourse = useSelector((state) => state.courses.courses);
    let [updateCourse, setUpdateCourse] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const single_course = allCourse.find(c => c._id === id)
        setUpdateCourse(single_course);
    }, [id, allCourse])


    const handleSubmit = (e) => {
        e.preventDefault();
        const course = {
            course_name: e.target.name.value,
            language: e.target.language.value,
            image: e.target.image.value,
            description: e.target.description.value,
            feature: [
                e.target.keyFeature1.value,
                e.target.keyFeature2.value,
                e.target.keyFeature3.value,
                e.target.keyFeature4.value,
            ]
        };
        toast.success("Course Information Update")
        dispatch(UpdateCourseThunk(id, course))
    }


    return (
        <div className='flex justify-center items-center h-full '>
            <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={(e) => handleSubmit(e)}
            >
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='name'>
                        Course Name
                    </label>
                    <input type='text' name="name" id='name' defaultValue={updateCourse.course_name} required />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='language'>
                        Course Language
                    </label>
                    <input type='text' name='language' id='language' defaultValue={updateCourse.language} required />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='image'>
                        Course Image
                    </label>
                    <input type='text' name='image' id='image' defaultValue={updateCourse.image} required />
                </div>
                <div className='flex flex-col w-full max-w-xs ml-[30px]'>
                    <label className='mb-2' htmlFor='description'>
                        Course Description
                    </label>
                    <input type='text' name='description' id='description' defaultValue={updateCourse.description} required />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='keyFeature1'>
                        Course Key Feature 1
                    </label>
                    <input
                        type='text'
                        name='keyFeature1'
                        id='keyFeature1'
                        defaultValue={updateCourse.feature && updateCourse?.feature[0]}
                        required />
                </div>
                <div className='flex flex-col w-full max-w-xs '>
                    <label className='mb-2' htmlFor='keyFeature2'>
                        Course Key Feature 2
                    </label>
                    <input
                        type='text'
                        name='keyFeature2'
                        id='keyFeature2'
                        defaultValue={updateCourse.feature && updateCourse?.feature[1]}
                        required />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='keyFeature3'>
                        Course Key Feature 3
                    </label>
                    <input
                        type='text'
                        name='keyFeature3'
                        id='keyFeature3'
                        defaultValue={updateCourse.feature && updateCourse?.feature[2]}
                        required />
                </div>
                <div className='flex flex-col w-full max-w-xs'>
                    <label className='mb-2' htmlFor='keyFeature4'>
                        Course Key Feature 4
                    </label>
                    <input
                        type='text'
                        name='keyFeature4'
                        id='keyFeature4'
                        defaultValue={updateCourse.feature && updateCourse?.feature[3]}
                        required />
                </div>
                <div className='flex justify-between items-center w-full'>
                    <input
                        className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'
                        value="Submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default UpdateCourse;