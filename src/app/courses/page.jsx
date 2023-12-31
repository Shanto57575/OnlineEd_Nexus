"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import Lottie from 'react-lottie';
// import myImage from '../../asstes/images/secure.png';
import classroomAnimate from "../../../public/classroom.json";
import Link from 'next/link';

const Courses = () => {
  const [course, setCourse] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [password, setPassword] = useState('');
  const [picture, setPicture] = useState('');
  const [courseData, setCourseData] = useState([]);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const formData = {
      courseName,
      password,
      picture
    };
    console.log(formData);

    // Send formData to backend API for storage in MongoDB
    const res = await fetch('/api/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
  }

  // const handleCourseNameChange = (event) => {
  //   setCourseName(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handlePictureChange = (event) => {
  //   setPicture(event.target.value);
  // };
  // onClick={createCourse}
  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await fetch('/api/courses');
        const data = await response.json();
        setCourseData(data.courses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }
    fetchCourses();
  }, []);

  // useEffect(() => {
  //   fetch('courses.json')
  //     .then(res => res.json())
  //     .then(data => setCourse(data))
  // }, [])


  console.log(typeof courseData);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: classroomAnimate,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="text-justify px-7 w-3/4 mx-auto mb-10 pt-32">
      <div className='flex justify-end'>
        <div className='mr-5'>
          {/* Open the modal using ID.showModal() method */}
          <button className="btn bg-[#0083db] text-white" onClick={() => window.my_modal_5.showModal()}>Create Class</button>
          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Course Name</span>
                  </label>
                  <input
                    type="text"
                    name="course name"
                    placeholder="Course Name"
                    className="input input-bordered"
                    onChange={(e) => setCourseName(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Course Picture</span>
                  </label>
                  <input
                    type="text"
                    name="picture"
                    placeholder="Course picture URL"
                    className="input input-bordered"
                    onChange={(e) => setPicture(e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-control mt-2">
                  <button
                    className="btn bg-blue-600 text-white hover:bg-blue-700"
                    type="submit"
                    onClick={handleSubmit}

                  >
                    Create Class
                  </button>
                  <button className="btn bg-red-600 text-white hover:bg-red-700">Close</button>
                </div>
              </div>
            </form>
          </dialog>
        </div>
        <div>
          {/* Open the modal using ID.showModal() method */}
          <button className="btn bg-[#0083db] text-white" onClick={() => window.my_modal_6.showModal()}>Join Class</button>
          <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
            <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Course ID</span>
                  </label>
                  <input
                    type="text"
                    name="course id"
                    placeholder="Course ID"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-2">
                  <button
                    className="btn bg-blue-600 text-white hover:bg-blue-700"
                    type="submit"
                  >
                    Join Class
                  </button>
                  <button className="btn bg-red-600 text-white hover:bg-red-700">Close</button>

                </div>
              </div>
            </form>
          </dialog>
        </div>
      </div>
      {/* When a student or teacher doesn't have any classes it will show below lottie file and text */}
      <div >
        {/* <div className='rounded md:w-3/4 mx-auto'>
          <Lottie options={defaultOptions} height={400} />
        </div>
        <h3 className='text-2xl font-semibold text-center py-5 text-[#0083db]'>You have no classes...</h3> */}
      </div>
      {/* When a teacher or student have classes it will show classes with information */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
          {
            courseData.map((item) => (
              <Link href={`/courses/${item?._id}`} item={item} key={item._id}>
                <div className="card shadow-xl my-10 p-2">
                  <figure className="avatar">
                    <div className="w-1/2 rounded-xl mx-auto">
                      <Image src={item.picture} alt="My Image" width={200} height={200} />
                    </div>
                  </figure>
                  <div className="card-body items-center">
                    <h2 className="card-title">{item.courseName}</h2>
                    <p className="text-sm text-gray-600">
                      Instructor: {item.courseName}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Courses