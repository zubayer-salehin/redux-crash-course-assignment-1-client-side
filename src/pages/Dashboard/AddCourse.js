import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import AddCourseThunk from "../../Redux/Thunk/Product/AddCourseThunk";


const AddCourse = () => {

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    const course = {
      course_name: data.name,
      language: data.language,
      image: data.image,
      description: data.description,
      feature: [
        data.keyFeature1,
        data.keyFeature2,
        data.keyFeature3,
        data.keyFeature4,
      ]
    };

    dispatch(AddCourseThunk(course));

  };

  return (
    <div className='flex justify-center items-center h-full '>
      <form
        className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
        onSubmit={handleSubmit(submit)}
      >
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='name'>
            Course Name
          </label>
          <input type='text' id='name' {...register("name")} required />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='language'>
            Course Language
          </label>
          <input type='text' name='language' id='language' {...register("language")} required />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='image'>
            Course Image
          </label>
          <input type='text' name='image' id='image' {...register("image")} required />
        </div>
        <div className='flex flex-col w-full max-w-xs ml-[30px]'>
          <label className='mb-2' htmlFor='description'>
            Course Description
          </label>
          <input type='text' name='description' id='description' {...register("description")} required />
        </div>
        <div className='flex flex-col w-full max-w-xs'>
          <label className='mb-2' htmlFor='keyFeature1'>
            Course Key Feature 1
          </label>
          <input
            type='text'
            name='keyFeature1'
            id='keyFeature1'
            {...register("keyFeature1")}
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
            {...register("keyFeature2")}
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
            {...register("keyFeature3")}
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
            {...register("keyFeature4")}
            required />
        </div>
        <div className='flex justify-between items-center w-full'>
          <button
            className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourse;
