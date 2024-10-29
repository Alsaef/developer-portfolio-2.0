// eslint-disable-next-line no-unused-vars
import React from 'react';

const Progress = () => {
    return (
      <div>
          <div className='mt-16'>
            <h2 className=' text-4xl font-bold text-center py-3'>My Skills</h2>
            <p className='text-xl text-orange-600 text-center py-2'>What I Know</p>
           <section className=' flex lg:items-start items-center justify-center lg:gap-6 mt-2 lg:flex-row flex-col gap-0 py-3'>
         <div>  {/* fontend main*/}
           <div className=' relative m-3 hover:shadow-lg hover:shadow-red-500 px-3 '>
            <h2 className='text-xl font-semibold'>HTML</h2>
            <div style={{position:"absolute", bottom:"25px",left:"195px"}}>
            <h2 className='text-xl font-semibold'>90%</h2>
            </div>
            <progress className="progress progress-error w-56" value="90" max="100"></progress>
            </div> 
           <div className=' relative m-3 hover:shadow-lg hover:shadow-red-500 px-3'>
            <h2 className='text-xl font-semibold'>CSS</h2>
            <div style={{position:"absolute", bottom:"25px",left:"195px"}}>
            <h2 className='text-xl font-semibold'>85%</h2>
            </div>
            <progress className="progress progress-error w-56" value="85" max="100"></progress>
            </div> 
           <div className=' relative m-3 hover:shadow-lg hover:shadow-red-500 px-3'>
            <h2 className='text-xl font-semibold'>BOOTSTRAP</h2>
            <div style={{position:"absolute", bottom:"25px",left:"195px"}}>
            <h2 className='text-xl font-semibold'>85%</h2>
            </div>
            <progress className="progress progress-error w-56" value="85" max="100"></progress>
            </div> 
           <div className=' relative m-3 hover:shadow-lg hover:shadow-red-500 px-3'>
            <h2 className='text-xl font-semibold'>TAILWIND</h2>
            <div style={{position:"absolute", bottom:"25px",left:"195px"}}>
            <h2 className='text-xl font-semibold'>85%</h2>
            </div>
            <progress className="progress progress-error w-56" value="85" max="100"></progress>
            </div> 
           <div className=' relative m-3 hover:shadow-lg hover:shadow-red-500 px-3'>
            <h2 className='text-xl font-semibold'>MUI</h2>
            <div style={{position:"absolute", bottom:"25px",left:"195px"}}>
            <h2 className='text-xl font-semibold'>75%</h2>
            </div>
            <progress className="progress progress-error w-56" value="75" max="100"></progress>
            </div> 
           <div className=' relative m-3 hover:shadow-lg hover:shadow-red-500 px-3'>
            <h2 className='text-xl font-semibold'>JAVASCRIPT</h2>
            <div style={{position:"absolute", bottom:"25px",left:"195px"}}>
            <h2 className='text-xl font-semibold'>85%</h2>
            </div>
            <progress className="progress progress-error w-56" value="85" max="100"></progress>
            </div> 
         </div>
{/* backend and fontend */}
         <div>
         <div className=' relative m-3 hover:shadow-lg hover:shadow-red-500 px-3'>
            <h2 className='text-xl font-semibold'>REACT JS</h2>
            <div style={{position:"absolute", bottom:"25px",left:"195px"}}>
            <h2 className='text-xl font-semibold'>80%</h2>
            </div>
            <progress className="progress progress-error w-56" value="80" max="100"></progress>
            </div> 
         <div className=' relative m-3 hover:shadow-lg hover:shadow-red-500 px-3'>
            <h2 className='text-xl font-semibold'>NEXT JS</h2>
            <div style={{position:"absolute", bottom:"25px",left:"195px"}}>
            <h2 className='text-xl font-semibold'>80%</h2>
            </div>
            <progress className="progress progress-error w-56" value="80" max="100"></progress>
            </div> 
         <div className=' relative m-3 hover:shadow-lg hover:shadow-red-500 px-3'>
            <h2 className='text-xl font-semibold'>REDUX</h2>
            <div style={{position:"absolute", bottom:"25px",left:"195px"}}>
            <h2 className='text-xl font-semibold'>70%</h2>
            </div>
            <progress className="progress progress-error w-56" value="70" max="100"></progress>
            </div> 
           <div className=' relative m-3 hover:shadow-lg hover:shadow-red-500 px-3'>
            <h2 className='text-xl font-semibold'>NODE JS</h2>
            <div style={{position:"absolute", bottom:"25px",left:"195px"}}>
            <h2 className='text-xl font-semibold'>65%</h2>
            </div>
            <progress className="progress progress-error w-56" value="65" max="100"></progress>
            </div> 
           <div className=' relative m-3 hover:shadow-lg hover:shadow-red-500 px-3'>
            <h2 className='text-xl font-semibold'>EXPRESS JS</h2>
            <div style={{position:"absolute", bottom:"25px",left:"195px"}}>
            <h2 className='text-xl font-semibold'>65%</h2>
            </div>
            <progress className="progress progress-error w-56" value="65" max="100"></progress>
            </div> 
           <div className=' relative m-3 hover:shadow-lg hover:shadow-red-500 px-3'>
            <h2 className='text-xl font-semibold'>MONGODB</h2>
            <div style={{position:"absolute", bottom:"25px",left:"195px"}}>
            <h2 className='text-xl font-semibold'>65%</h2>
            </div>
            <progress className="progress progress-error w-56" value="65" max="100"></progress>
            </div> 
         </div>
            </section> 
        </div>
      </div>
    );
};

export default Progress;