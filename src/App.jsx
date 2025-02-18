
import './App.css';
import { useState } from 'react';
import ReferForm from '../Components/ReferForm'
import { GraduationCap } from 'lucide-react';
import { IndianRupee } from 'lucide-react';

function App(){

  const [showModal,setShowModal]=useState(false);
  const closeModalBtn=()=>{
    setShowModal(false);
  }


  return(
  <>
    {showModal && <ReferForm closeModalBtn={closeModalBtn} />}
    {/* navigation bar */}
    <nav>
        {/* Top-band */}
        <div className='h-[50px] w-[100%] bg-blue-100 flex justify-center items-center'>
            <div className=''>Navigate your ideal career path with tailored expert advice <a href="#" className='text-blue-700'>Contact Expert</a></div>
        </div>

        {/* navigation bar */}
        <div className='flex justify-center pt-[9.6px] pr-[280px] pb-[9.6px] pl-[280px] w-[100%px]'>
            {/* box inside navigation bar */}
            <div className='w-[1100px] h-[60px]  flex justify-between items-center '>
                {/* Logo and course */}
                <div className='logo-course  w-[560px] h-[40px]  flex gap-[30px]'>
                    <div className='logo'><img src="../public/Link.png" alt="" /></div>
                    <div className='course w-[116px] h-[40px]'><button className='w-[116px] h-[40px] rounded-[6px] pt-[8px] pr-[18px] pb-[8px] pl-[18] gap-[4px] bg-[#1A73E8] text-white'><span className='w-[60px] h-[24px] font-[inter] font-medium text-[14.75px] '>Courses</span> </button></div>
                </div>

                {/* ReferEarn Resources About us Login try free */}
                <div className='referEarn-resources-about flex justify-end w-[800px] h-[40px] gap-[32px]'>

                    <div className='refer&Earn w-[87px] h-[24px] text-[12px] font-[inter] font-medium leading-[42px] '> <button className='cursor-pointer' onClick={()=>setShowModal(true)}> Refer & Earn </button> </div>
                    <div className='resources w-[74px] h-[24px] text-[12px] font-[inter] font-medium leading-[42px]  '><button className='cursor-pointer' >Resources </button></div>
                    <div className='aboutus w-[67px] h-[24px] text-[12px] font-[inter] font-medium leading-[42px]  '> <button className='cursor-pointer' >About us</button> </div>
                    <div className='login'> <button className='bg-gray w-[77px] h-[40px] bg-[#94A3B833] rounded-[6px] pt-[8px] pr-[18px] pb-[8px] pl-[18px] text-[12px] cursor-pointer' >Login</button></div>
                    <div className='try-for-free'> <button className='w-[115px] h-[40px]  bg-[#1A73E8] rounded-[6px] text-white pt-[8px] pr-[18px] pb-[8px] pl-[18px] text-[12px] cursor-pointer '>Try For Free</button></div>
                </div>
            </div>
        </div>
    </nav>

    {/* main Body */}
    <main className='flex flex-col justify-center items-center space-y-[40px]'>
        {/* refer benefits FAQ Support */}
        <div className='refer-benefits-FAQs-Support flex justify-around items-center  w-[500px] h-[50px] rounded-[38px] mt-[30px] bg-[#1a73e82b]'>
          <span className=''><a href="#" className='text-[#1A73E8] '> <button  className='cursor-pointer' onClick={()=>setShowModal(true)}>Refer</button></a></span>
          <span><a href="#"className='text-[#4B4B4B]'>Benefits</a></span>
          <span><a href="#"className='text-[#4B4B4B]'>FAQs</a></span>
          <span><a href="#"className='text-[#4B4B4B]'>Support</a></span>
        </div>
      
        {/* Refer-Button and Image */}
        <div className='refer&Image'>
            <div className='image flex justify-center shadow-xl'>
              {/* <button onClick={()=>setShowModal(true)} className='absolute z-2 top-170 left-28 w-[200px] h-[50px] text-white rounded-[8px] bg-[#1A73E8] cursor-pointer '> Refer Now</button>   */}
              <img src="../public/Refer & Earn Page.png" className='w-[1050px] h-[570px] ' alt="" />
            </div>
        </div>

        {/* 3 Circle */}
        <div className='bg-[#EEF5FF] flex justify-center flex-col items-center mt-[25px] gap-[30px]'>
          {/* heading */}
          <div className='flex justify-center w-[200px] mt-[30px]'>
          <h2 className='font-bold text-2xl font-[Roboto] w-[180px]'>How Do I <span className='text-[#1A73E8]'>Refer?</span></h2>
          </div>
          {/* 3 Circle */}
          <div className=''>
          <img src="../public/threeCircle.png" alt="" />
          </div>
          {/* Refer Button */}
          <div className='mb-[20px]'>
          <button onClick={()=>setShowModal(true)} className='w-[200px] h-[50px] text-white rounded-[8px] bg-[#1A73E8] cursor-pointer'> Refer Now</button>  
          </div>
        </div>
         
        

        {/* Data table */}
           

          <div className='flex flex-col items-center gap-10 mt-20'>
            <div>
              <h1 className='font-bold text-2xl font-[Roboto]'>What Are The <span className='text-blue-600'>Referral Benefits</span></h1>
            </div>

            <div className='flex justify-center items-center w-[100%] h-[500px]'>
              {/* Left table */}
              <div className=' w-[25%] h-[480px]' >
                <img src="../public/table.jpg" className='w-[272px] h-[460px]' alt="" />
              </div>
            
              {/* Right table */}
              <div className='h-[450px] flex flex-col bg-[url(./public/table_background.png)] bg-center shadow-lg shadow-gray-400'> 

                  {/* Heading */}
                  <div className=' flex justify-between bg-[#1a73e875] p-2 pl-13 rounded-lg'>
                    <h3 className='font-bold text-[#1350A0] w-[360px]  '>Programs</h3>
                      <div className='flex justify-around w-[350px]'>
                        <h3 className='font-bold text-[#1350A0] '>Referrer Bonus</h3>
                        <h3 className='font-bold text-[#1350A0]  '>Referee Bonus</h3>
                      </div>
                  </div>
                  {/*Content  */}
                  <div className='flex flex-col gap-2  mx-5 pb-4 bg-[url(./public/table_background.png)] bg-center '>
                      {/* 1sr */}
                      <div className='flex justify-between'>
                          <h3 className=' flex gap-2  w-[360px] '><GraduationCap className='text-blue-800' /> Professional Certificate Program in <br />Product Management</h3>
                            <div className='flex justify-around  w-[350px]'>
                              <div className='flex '><IndianRupee className='h-3.5 mt-1.5' /><h3>7000</h3></div>
                              <div className='flex '><IndianRupee className='h-3.5 mt-1.5' /><h3>9000</h3></div>
                        
                            </div>
                      </div>

                      {/* 2nd */}
                      <div className='flex justify-between'>
                          <h3 className='flex gap-2 w-[360px]'> <GraduationCap className='text-blue-800'/>PG Certificate Program in Strategic <br /> Product Management</h3>
                          <div className='flex justify-around  w-[350px]'>
                            <div className='flex '><IndianRupee className='h-4 mt-1' /><h3>9000</h3></div>
                            <div className='flex '><IndianRupee className='h-4 mt-1' /><h3>11000</h3></div>
                        
                          </div>
                      </div>

                      {/* 3rd */}
                      <div className='flex justify-between'>
                          <h3 className=' flex gap-2   w-[360px]'> <GraduationCap className='text-blue-800'/>Executive Program in Data Driven <br /> Product Management</h3>
                          <div className='flex justify-around  w-[350px]'>
                              <div className='flex '><IndianRupee className='h-3.5 mt-1.5' /><h3>10000</h3></div>
                              <div className='flex '><IndianRupee className='h-3.5 mt-1.5' /><h3>10000</h3></div>
                        
                          </div>
                      </div>

                      {/* 4th */}
                      <div className='flex justify-between'>
                          <h3 className=' flex gap-2  w-[360px]'><GraduationCap className='text-blue-800' />Executive Program in Product Management<br /> and Digital Transformation</h3>
                            <div className='flex justify-around  w-[350px]'>
                              <div className='flex '><IndianRupee className='h-3.5 mt-1.5' /><h3>10000</h3></div>
                              <div className='flex '><IndianRupee className='h-3.5 mt-1.5' /><h3>10000</h3></div>
                            </div>
                      </div>

                      {/* 5th */}
                      <div className='flex justify-between'>
                          <h3 className=' flex gap-2  w-[360px]'><GraduationCap className='text-blue-800' />Executive Program in Product<br /> Management</h3>
                            <div className='flex justify-around  w-[350px]'>
                              <div className='flex '><IndianRupee className='h-3.5 mt-1.5' /><h3>10000</h3></div>
                              <div className='flex '><IndianRupee className='h-3.5 mt-1.5' /><h3>10000</h3></div>
                        
                            </div>
                      </div>

                      {/* 6th */}
                      <div className='flex justify-between'>
                          <h3 className=' flex gap-2  w-[360px]'><GraduationCap className='text-blue-800' />Advanced Certificate in Product<br /> Management</h3>
                            <div className='flex justify-around  w-[350px]'>
                              <div className='flex '><IndianRupee className='h-3.5 mt-1.5' /><h3>10000</h3></div>
                              <div className='flex '><IndianRupee className='h-3.5 mt-1.5' /><h3>10000</h3></div>

                            </div>
                      </div>

                      {/* 7th */}
                      <div className='flex  justify-between'>
                          <h3 className=' flex gap-2  w-[360px]'><GraduationCap className='text-blue-800'/>Executive Certificate in Product Management <br /> and Project Management</h3>
                            <div className='flex justify-around   w-[350px]'>
                              <div className='flex '><IndianRupee className='h-3.5 mt-1.5' /><h3>10000</h3></div>
                              <div className='flex '><IndianRupee className='h-3.5 mt-1.5' /><h3>10000</h3></div>

                            </div>
                      </div>
                  </div>
                  {/* Show more button */}
                  <div className='flex justify-end w-[78%] self-end mt-8'>
                      <button  className='text-gray-400 w-[100px] cursor-pointer rounded-[10px] border border-gray-400'>Show more</button>
                  </div>
              </div>

             

            </div>

          </div>

        
       
        

        {/* Refer Now Button */}
        <div className='mb-[20px] mt-[15px]'>
          <button onClick={()=>setShowModal(true)} className='w-[200px] h-[50px] text-white rounded-[8px] bg-[#1A73E8] cursor-pointer'> Refer Now</button>
        </div>

        <div className='flex justify-center mt-[100px]'>
          <img src="../public/FAQs.jpg" className='w-[80%]' alt="" />
        </div>

        <div className='mt-[100px] flex justify-center'>
          <img className='w-[80%]' src="../public/getinTouch.png" alt="" />
        </div>
    </main>
 
    {/* Footer */}
    <footer className='flex mt-[100px]'>
      <div>
          <img src="../public/Footer.png" alt="" />
      </div>
    </footer>
  </>
  )
}

export default App
