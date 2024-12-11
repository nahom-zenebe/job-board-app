import React from 'react'
import person1 from '../public/images/image4.webp'
import person2 from '../public/images/image2.webp'
import person3 from '../public/images/image3.webp'
function StartedPage() {
  return (
    <div className='h-screen container'>
    <div  className="flex justify-center mt-32 ">
        <div className="relative w-16">
        <img 
          className="absolute left-0 w-12 h-14 rounded-full border-2 border-blue-700 z-20" 
          src={person1} 
          alt="image of person 1"
        />
        <img 
          className="absolute left-10 w-12 h-14 rounded-full border-2 border-blue-700 z-10" 
          src={person2} 
          alt="image of person 2"
        />
        <img 
          className="absolute left-20 w-12 h-14 rounded-full border-2 border-blue-700 z-0" 
          src={person3} 
          alt="image of person 3"
        />
         </div>
         <div>
          <p className='text-2xl ml-20 mt-3 text-blue-700 font-semibold'>50 k user</p>
         </div>
         
    </div>
    <div className='mt-10 text-center'>
      <h1 className='text-4xl font-semibold'>Your Next Job Awaits</h1>
      <h1  className='text-4xl font-semibold mt-10'>Find the perfect job or hire <span className='text-blue-700'>the best talent with ease.</span></h1>
    </div>

    <div className="flex justify-center items-center p-8 mt-12 ">
 
      <div className="border-4 border-black p-10 rounded-lg shadow-xl space-y-8 bg-blue-950">
        
        
        <div className="flex flex-col items-center border-b-4 border-blue-700 pb-6">
          <h1 className="text-4xl font-bold text-blue-700">50k+</h1>
          <h2 className="text-xl text-gray-600">Satisfying</h2>
        </div>
        
 
        <div className="grid grid-cols-3 gap-8 ">
       
          <div className="flex flex-col items-center border-4 border-blue-700 p-6 rounded-lg shadow-lg bg-blue-50 transition-all hover:shadow-2xl animate-slide-in delay-200 hover:scale-105">
            <h1 className="text-3xl font-bold text-blue-700">100k+</h1>
            <p className="text-lg text-gray-600">Job postings</p>
          </div>
          
         
          <div className="flex flex-col items-center border-4 border-blue-700 p-6 rounded-lg shadow-lg bg-blue-50 transition-all hover:shadow-2xl animate-slide-in delay-200 hover:scale-105">
            <h1 className="text-3xl font-bold text-blue-700">10k+</h1>
            <p className="text-lg text-gray-600">Recruiters</p>
          </div>
          
      
          <div className="flex flex-col items-center border-4 border-blue-700 p-6 rounded-lg shadow-lg bg-blue-50 transition-all hover:shadow-2xl animate-slide-in delay-200 hover:scale-105">
            <h1 className="text-3xl font-bold text-blue-700">25k+</h1>
            <p className="text-lg text-gray-600">Companies</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default StartedPage