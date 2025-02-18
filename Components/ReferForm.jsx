<<<<<<< HEAD
import {useRef} from 'react'
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function ReferForm({closeModalBtn}) {

  const modalRef=useRef();

  const modalScreen=(e)=>{
    if(modalRef.current===e.target){
        closeModalBtn();
    }
  }
  const {register,handleSubmit,formState:{errors}}=useForm();

  const submitForm=async(data)=>{
    console.log(data);
    const response= await axios.post("http://localhost:3000/referral-form",data);
    console.log("response is: ",response.data);
    closeModalBtn();
  }



  return (
    <div ref={modalRef} onClick={modalScreen} className='fixed inset-0  bg-black/30 backdrop-blur-md flex justify-center  items-center'>

      {/* Form Body */}
      <div className='flex flex-col items-center mt-10 mb-8'>
        <button onClick={()=>closeModalBtn()} className='place-self-end cursor-pointer text-white'>< X /></button>
        <div className='form-body rounded-2xl bg-[#1A73E8]  flex flex-col items-center gap-2'>

              {/* Heading--Referral Form */}
              <h1 className='text-3xl font-bold text-white mt-2'>Referral Form</h1>

              <div className=''>
                  {/* Form */}
                  <form  onSubmit={handleSubmit(submitForm)}>

                    <div className='  bg-gray-300 rounded-2xl flex font-[inter] justify-between flex-wrap w-150'>

                      {/* Left Section */}
                      <div className="left  p-4">

                        {/* Referrer Details */}
                        <h2 className=' font-bold text-xl  mb-3'>Referrer Details</h2>

                        {/* Full Name */}
                        <label>
                          <div className='font-bold text-sm'>Full Name:</div>
                          <input className='border-1 border-black mb-2' type="text" {...register("senderFullName",{required:{value:true,message:"Required Field"}})} />
                        </label>
                        
                        <div className='text-[12px] text-red-600'> {errors.senderFullName && errors.senderFullName.message}</div>



                        {/* Email Name */}
                        <label>
                          <div className='font-bold text-sm '>Email:</div>
                          <input className='border-1 border-black mb-2' type="text" {...register("senderEmail",{required:{value:true,message:"Required Field"}})}/>
                        </label>
                        <div className='text-[12px] text-red-600'> {errors.senderEmail && errors.senderEmail.message}</div>


                        {/* contact no. */}
                        <label>
                          <div className='font-bold text-sm '>Contact no.</div>
                          <input className='border-1 border-black mb-2' type="text" {...register("senderContact")} />
                        </label>
                        

                      </div>

                      {/* ------------------------------------------------------------------ */}

                      {/* Right-Section */}
                      <div className="right  p-4">

                        {/* Referrer Details */}
                        <h2 className='font-bold text-xl mb-3'>Referee Details</h2>

                        {/* Full Name */}
                        <label>
                          <div className='font-bold text-sm '>Full Name:</div>
                          <input className='border-1 border-black mb-2' type="text" {...register("recieverFullName",{required:{value:true,message:"Required Field"}})} />
                        </label>
                        
                        <div className='text-[12px] text-red-600'> {errors.recieverFullName && errors.recieverFullName.message}</div>

                        {/* Email Name */}
                        <label>
                          <div className='font-bold text-sm'>Email:</div>
                          <input className='border-1 border-black mb-2' type="text" {...register("recieverEmail",{required:{value:true,message:"Required Field"}})}/>
                        </label>
                        
                        <div className='text-[12px] text-red-600'>{errors.recieverEmail && errors.recieverEmail.message} </div>


                        {/* Contact No. */}
                        <label>
                          <div className='font-bold text-sm '>Contact no.</div>
                          <input className='border-1 border-black ' type="text" {...register("recieverContact")}/>
                        </label>
                        {errors.recieverContact && errors.recieverContact.message}
                      </div>  
                      
                      {/* ------------------------------------------------------------------ */}
                      {/* Bottom-Section */}
                      <div className="right  flex justify-center flex-col  m-4 w-full">

                        {/* Course Details */}
                        <h2 className='text-center font-bold text-xl mb-3'>Course Details</h2>

                        {/* Course Name */}
                        <label>
                          <div className='font-bold text-sm'>Course Name:</div>
                          <input className='border-1  border-black w-full mb-2' type="text" {...register("courseName",{required:{value:true,message:"required field"}})} />
                        </label>
                        
                        <div className='text-[12px] text-red-600'>{errors.courseName && errors.courseName.message}</div>


                        {/* Course URL */}
                        <label>
                          <div className='font-bold text-sm'>Course URL:</div>
                          <input className='border-1 border-black w-full mb-2' type="url" {...register("courseUrl",{required:{value:true,message:"required field"}})} />
                        </label>
                        
                        <div className='text-[12px] text-red-600'>{errors.courseUrl && errors.courseUrl.message}</div>


                      {/* Submit Button */}
                        <input className=' border-1 border-black-200 rounded-xl hover:bg-[#1A73E8] hover:text-white font-bold text-lg mt-2 py-1' type="submit" value="Send" />
                      </div>



                    </div>    

              


                  </form>

                </div>





        </div>

      </div>

        
    </div>
  )
}

export default ReferForm
=======
import {useRef} from 'react'
import { X } from 'lucide-react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function ReferForm({closeModalBtn}) {

  const modalRef=useRef();

  const modalScreen=(e)=>{
    if(modalRef.current===e.target){
        closeModalBtn();
    }
  }
  const {register,handleSubmit,formState:{errors}}=useForm();

  const submitForm=async(data)=>{
    console.log(data);
    const response= await axios.post("http://localhost:3000/referral-form",data);
    console.log("response is: ",response.data);
    closeModalBtn();
  }



  return (
    <div ref={modalRef} onClick={modalScreen} className='fixed inset-0  bg-black/30 backdrop-blur-md flex justify-center  items-center'>

      {/* Form Body */}
      <div className='flex flex-col items-center mt-10 mb-8'>
        <button onClick={()=>closeModalBtn()} className='place-self-end cursor-pointer text-white'>< X /></button>
        <div className='form-body rounded-2xl bg-[#1A73E8]  flex flex-col items-center gap-2'>

              {/* Heading--Referral Form */}
              <h1 className='text-3xl font-bold text-white mt-2'>Referral Form</h1>

              <div className=''>
                  {/* Form */}
                  <form  onSubmit={handleSubmit(submitForm)}>

                    <div className='  bg-gray-300 rounded-2xl flex font-[inter] justify-between flex-wrap w-150'>

                      {/* Left Section */}
                      <div className="left  p-4">

                        {/* Referrer Details */}
                        <h2 className=' font-bold text-xl  mb-3'>Referrer Details</h2>

                        {/* Full Name */}
                        <label>
                          <div className='font-bold text-sm'>Full Name:</div>
                          <input className='border-1 border-black mb-2' type="text" {...register("senderFullName",{required:{value:true,message:"Required Field"}})} />
                        </label>
                        
                        <div className='text-[12px] text-red-600'> {errors.senderFullName && errors.senderFullName.message}</div>



                        {/* Email Name */}
                        <label>
                          <div className='font-bold text-sm '>Email:</div>
                          <input className='border-1 border-black mb-2' type="text" {...register("senderEmail",{required:{value:true,message:"Required Field"}})}/>
                        </label>
                        <div className='text-[12px] text-red-600'> {errors.senderEmail && errors.senderEmail.message}</div>


                        {/* contact no. */}
                        <label>
                          <div className='font-bold text-sm '>Contact no.</div>
                          <input className='border-1 border-black mb-2' type="text" {...register("senderContact")} />
                        </label>
                        

                      </div>

                      {/* ------------------------------------------------------------------ */}

                      {/* Right-Section */}
                      <div className="right  p-4">

                        {/* Referrer Details */}
                        <h2 className='font-bold text-xl mb-3'>Referee Details</h2>

                        {/* Full Name */}
                        <label>
                          <div className='font-bold text-sm '>Full Name:</div>
                          <input className='border-1 border-black mb-2' type="text" {...register("recieverFullName",{required:{value:true,message:"Required Field"}})} />
                        </label>
                        
                        <div className='text-[12px] text-red-600'> {errors.recieverFullName && errors.recieverFullName.message}</div>

                        {/* Email Name */}
                        <label>
                          <div className='font-bold text-sm'>Email:</div>
                          <input className='border-1 border-black mb-2' type="text" {...register("recieverEmail",{required:{value:true,message:"Required Field"}})}/>
                        </label>
                        
                        <div className='text-[12px] text-red-600'>{errors.recieverEmail && errors.recieverEmail.message} </div>


                        {/* Contact No. */}
                        <label>
                          <div className='font-bold text-sm '>Contact no.</div>
                          <input className='border-1 border-black ' type="text" {...register("recieverContact")}/>
                        </label>
                        {errors.recieverContact && errors.recieverContact.message}
                      </div>  
                      
                      {/* ------------------------------------------------------------------ */}
                      {/* Bottom-Section */}
                      <div className="right  flex justify-center flex-col  m-4 w-full">

                        {/* Course Details */}
                        <h2 className='text-center font-bold text-xl mb-3'>Course Details</h2>

                        {/* Course Name */}
                        <label>
                          <div className='font-bold text-sm'>Course Name:</div>
                          <input className='border-1  border-black w-full mb-2' type="text" {...register("courseName",{required:{value:true,message:"required field"}})} />
                        </label>
                        
                        <div className='text-[12px] text-red-600'>{errors.courseName && errors.courseName.message}</div>


                        {/* Course URL */}
                        <label>
                          <div className='font-bold text-sm'>Course URL:</div>
                          <input className='border-1 border-black w-full mb-2' type="url" {...register("courseUrl",{required:{value:true,message:"required field"}})} />
                        </label>
                        
                        <div className='text-[12px] text-red-600'>{errors.courseUrl && errors.courseUrl.message}</div>


                      {/* Submit Button */}
                        <input className=' border-1 border-black-200 rounded-xl hover:bg-[#1A73E8] hover:text-white font-bold text-lg mt-2 py-1' type="submit" value="Send" />
                      </div>



                    </div>    

              


                  </form>

                </div>





        </div>

      </div>

        
    </div>
  )
}

export default ReferForm
>>>>>>> 93b1de4 (Initial commit for frontend)
